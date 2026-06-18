using Animadota.Application.Interfaces;
using Animadota.Infrastructure.Context;
using Animadota.Services.Users;
using Animadota.Services.Pets;

public class CombinacaoService(
    AnimadotaContext ctx,
    IUserService userService,
    IPetService animalService) : ICombinacaoService
{
    public async Task<Combinacao?> GetCombinacaoById(Guid id)
    {
        return await ctx.Combinacoes.FindAsync(id);
    }
    public async Task Aceitar(AcceptMatchPayload payload)
    {
        var combinacao = await GetCombinacaoById(payload.MatchId);
        combinacao.Aceito = true;
        ctx.Combinacoes.Update(combinacao);
        await ctx.SaveChangesAsync();
    }
    public async Task Recusar(RejectMatchPayload payload)
    {
        var combinacao = await GetCombinacaoById(payload.MatchId);
        combinacao.Aceito = false;
        ctx.Combinacoes.Update(combinacao);
        await ctx.SaveChangesAsync();
    }

    public async Task<Combinacao?> CreateCombinacao(SendLikePayload payload)
    {
        var animal = await animalService.GetPetById(payload.AnimalId);
        var user = await userService.GetUserByUsername(payload.Username);
        if (animal == null || user == null)
            return null;

        var combinacao = new Combinacao
        {
            UsuarioId = user.Id,
            AnimalId = animal.Id,
            Usuario = user,
            Animal = animal,
            Aceito = false,
            Gostou = payload.Gostou
        };

        ctx.Combinacoes.Add(combinacao);
        await ctx.SaveChangesAsync();
        
        return combinacao;
    }

}