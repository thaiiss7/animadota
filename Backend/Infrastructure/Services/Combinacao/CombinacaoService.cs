using Animadota.Application.Interfaces;
using Animadota.Infrastructure.Context;
using Animadota.Services.Users;

public class CombinacaoService(AnimadotaContext context) : ICombinacaoService (
    IUserService userService,
    IPetService animalService
)
{
    public Task<Combinacao?> CreateCombinacao(SendLikePayload payload)
    {
        var user = 
        var combinacao = new Combinacao
        {
            UsuarioId = payload.UsuarioId,
            AnimalId = payload.AnimalId,
            Aceito = payload.Aceito,
            Gostou = payload.Gostou
        };
    }

}