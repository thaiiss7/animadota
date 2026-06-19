using Animadota.Application.Interfaces;
using Animadota.Common.Results;

public class AcceptMatchUseCase(
    ICombinacaoService combinacaoService
)
{
    public async Task<Result<AcceptMatchResponse>> Do(AcceptMatchPayload payload)
    {
        await combinacaoService.Aceitar(payload);
        return Result<AcceptMatchResponse>.Success(new(payload.MatchId)); 
    }
}