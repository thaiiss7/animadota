using Animadota.Common.Results;
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
            Nome = payload.Nome,
            Id = payload.Id,
            Endereco = payload.Endereco,
            Telefone = payload.Telefone
        };
        
        await ongService.Create(ong);
        return Result<CreateOngResponse>.Success(new(ong.Nome));
    }
}