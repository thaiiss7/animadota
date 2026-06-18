using Animadota.Application.Interfaces;
using Animadota.Results;

public class RejectMatchUseCase(
    ICombinacaoService combinacaoService
)
{
    public async Task<Result<RejectMatchResponse>> Do(RejectMatchPayload payload)
    {
        await combinacaoService.Recusar(payload);
        return Result<RejectMatchResponse>.Success(new(payload.MatchId));
    }
}