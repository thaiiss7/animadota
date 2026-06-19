using Animadota.Application.Interfaces;
using Animadota.Common.Results;

public class SendLikeUseCase(
    ICombinacaoService combinacaoService
)
{
    public async Task<Result<SendLikeResponse>> Do(SendLikePayload payload)
    {
        var combinacao = await combinacaoService.CreateCombinacao(payload);
        if (combinacao == null)
            return Result<SendLikeResponse>.Fail("Erro ao criar combinação");
        
        return Result<SendLikeResponse>.Success(new(combinacao.Id));
    }
}