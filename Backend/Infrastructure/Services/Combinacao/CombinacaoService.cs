using Animadota.Application.Interfaces;
using Animadota.Infrastructure.Context;
using Animadota.Services.Users;
using Animadota.Services.Pets;

public class CombinacaoService(
    AnimadotaContext ctx,
    IUserService userService,
    IPetService animalService) : ICombinacaoService
{
    public Task<Combinacao?> Aceitar()
    {
        throw new NotImplementedException();
    }

    public async Task<Combinacao?> CreateCombinacao(SendLikePayload payload)
    {
        var animal = await animalService.GetPetById(payload.AnimalId);
        var user = await userService.GetUserByUsername(payload.UsuarioId);
        if (animal == null || user == null)
            return null;

        var combinacao = new Combinacao
        {
            UsuarioId = payload.UsuarioId,
            AnimalId = payload.AnimalId,
            Usuario = payload.Usuario,
            Animal = payload.Animal,
            Aceito = payload.Aceito,
            Gostou = payload.Gostou
        };

        ctx.Combinacoes.Add(combinacao);
        await ctx.SaveChangesAsync();
        
        return combinacao;
    }

    public Task<Combinacao?> Recusar()
    {
        throw new NotImplementedException();
    }
}