namespace Animadota.Application.Interfaces;

public interface ICombinacaoService
{
    Task<Combinacao?> CreateCombinacao(SendLikePayload payload);
    Task Aceitar(AcceptMatchPayload payload);
    Task Recusar(RejectMatchPayload payload);
    Task<Combinacao?> GetCombinacaoById(Guid id);
}