using Animadota.Common.Results;
using Animadota.Services.Ongs;

public class DeleteOngUseCase(
    IOngService ongService
)
{
    public async Task<Result<DeleteOngResponse>> Do(DeleteOngPayload payload)
    {
        var ong = await ongService.DeleteOng(payload.Id);
        if (ong == null)
            return Result<DeleteOngResponse>.Fail("Ong not found");
    
        return Result<DeleteOngResponse>.Success(new());
    }
}