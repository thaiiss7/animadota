using System.Net.Http.Json;
using Microsoft.Extensions.DependencyInjection;

namespace Animadota.Infrastructure.Context;

public class SeedService
{
    private string username = "user";
    private string name = "usuario";
    private string nomeOng = "ong";
    public async Task SeedData()
    {
        var usuario = ctx.Usuarios.Where(u => u.Username == username).FirstOrDefault();
        if(usuario == null)
        {
            usuario = new Usuario{
                Nome=name, 
                Username=username, 
                Senha="12345",
                Idade=10,
                Bio="Bio do usuário",
                Cidade="Curitiba",
                Endereco="Rua das flores, 123",
                Residencia="Casa grande, quintal e dois filhos",
                Telefone="(41) 99999-9999",};
            ctx.Usuarios.Add(usuario);
            await ctx.SaveChangesAsync();
        }
        var ong = ctx.Ongs.Where(o => o.Nome == nomeOng).FirstOrDefault();
        if(ong == null)
        {
            ong = new Ong{Nome=nomeOng};
            ctx.Ongs.Add(ong);
            await ctx.SaveChangesAsync();
        }

        int q = 5;
        if(ctx.Animais.Count() < q)
        {
            var toGen = await Generate(q);
            
            foreach(var a in toGen)
            {
                var animal = new Animal
                {
                    Nome= a.Nome,
                    Ong=ong,
                    OngId=ong.Id,
                    Raca=a.Raca,
                    Tipo=a.Tipo,
                };
                var foto = a.Imagem;

                ctx.Animais.Add(animal);
                await ctx.SaveChangesAsync();

                ctx.AnimalFotos.Add(new AnimalFoto{Url=foto, Animal=animal, AnimalId=animal.Id});
            }
            await ctx.SaveChangesAsync();
        }
    }

    public void AddHttpClient(IServiceCollection services){}







    private readonly HttpClient httpClient;
    private readonly AnimadotaContext ctx;
    public SeedService(HttpClient httpClient, AnimadotaContext ctx)
    {
        this.httpClient = httpClient;
        this.ctx = ctx;

        racas[TipoPetEnum.Raposa] = GetRandomFoxImage;
    }

    private Dictionary<TipoPetEnum, Func<Task<string>>> racas =
        new Dictionary<TipoPetEnum, Func<Task<string>>>
    {
        {
            TipoPetEnum.Pato,
            () => Task.FromResult("https://random-d.uk/api/randomimg")
        },
        {
            TipoPetEnum.Gato,
            () => Task.FromResult("https://cataas.com/cat")
        },
        {
            TipoPetEnum.Cachorro,
            () => Task.FromResult("https://placedog.net/800/600?random")
        }
    };


    public async Task<List<GenAnimal>> Generate(int q)
    {
        List<GenAnimal> list = [];
        for(int i=0; i<q; i++)
        {
            var r = Random.Shared.Next(0, racas.Keys.Count);
            var tipo = racas.Keys.ElementAt(r);
            GenAnimal animal = new GenAnimal
            (
                await GetRandomName(),
                "Vira lata",
                tipo,
                await racas[tipo].Invoke()
            );
            list.Add(animal);
        }
        return list;
    }





    private async Task<string> GetRandomFoxImage()
    {
        var response = await httpClient
            .GetFromJsonAsync<FoxResponse>(
                "https://randomfox.ca/floof/"
            );

        return response?.Image!;
    }
    public async Task<string> GetRandomName()
    {
        var response = await httpClient
            .GetFromJsonAsync<RandomUserResponse>(
                "https://randomuser.me/api/?nat=br"
            );

        var user = response?.Results.FirstOrDefault();

        return $"{user?.Name.First} {user?.Name.Last}";
    }
}


public class FoxResponse
{
    public string Image { get; set; } = string.Empty;
    public string Link { get; set; } = string.Empty;
}

public record RandomUserResponse(
    List<UserResult> Results
);

public record UserResult(
    Name Name
);

public record Name(
    string First,
    string Last
);

public record GenAnimal
(
    string Nome,
    string Raca,
    TipoPetEnum Tipo,
    string Imagem
);