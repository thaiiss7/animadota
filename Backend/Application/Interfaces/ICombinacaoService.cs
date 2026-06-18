namespace Animadota.Application.Interfaces;

public interface ICombinacaoService
{
    Task<Guid> CreateCombinacao(SendLikePayload payload);
    Task<Combinacao?> Aceitar(AcceptMatchPayload payload);
    Task<Combinacao?> Recusar(RejectMatchPayload payload);
}