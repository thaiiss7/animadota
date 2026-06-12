namespace Animadota.Application.Interfaces;

public interface ICombinacaoService
{
    Task<Combinacao?> CreateCombinacao(SendLikePayload payload);
    Task<Combinacao?> Aceitar();
    Task<Combinacao?> Recusar();
}