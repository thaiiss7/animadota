using Animadota.Results;
using Animadota.Services.Ongs;

namespace Animadota.UseCases.CreateOng;

public class CreateOngUseCase
(
    IOngService ongService
)
{
    public async Task<Result<CreateOngResponse>> Do(CreateOngPayload payload)
    {
        var ong = new Ong
        {
            Nome = payload.Nome
        };

        return Result<CreateOngResponse>.Success(new(ong.Nome));
    }
}