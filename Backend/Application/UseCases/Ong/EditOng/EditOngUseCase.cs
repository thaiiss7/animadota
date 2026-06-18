namespace Animadota.UseCases.EditOng;
using Animadota.Services.Ongs;
using Animadota.Results;

public class EditOngUseCase (
    IOngService ongService
)
{
    public async Task<Result<EditOngResponse>> Do(EditOngPayload payload)
    {
        var ong = await ongService.EditOng(payload.Name, payload);
        if (ong == null)
            return Result<EditOngResponse>.Fail("Ong não encontrada");
        return Result<EditOngResponse>.Success(new EditOngResponse(ong));
    }
}