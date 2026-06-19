using Animadota.Results;
using Animadota.Services.Ongs;

namespace Animadota.UseCases.GetOng;

public class GetOngUseCase
(
    IOngService ongService
)
{
    public async Task<Result<GetOngResponse>> Do(GetOngPayload payload)
    {
        var ong = await ongService.GetOngById(payload.OngId);

        if (ong is null)
            return Result<GetOngResponse>.Fail("Ong not found");

        var response = new GetOngResponse
        (
            ong.Nome,
            ong.Endereco,
            ong.Telefone,
            from a in ong.Animais
            select new AnimalDTO
            (
                a.Nome,
                a.Fotos.FirstOrDefault().Url,
                a.Raca
            )
        );

        return Result<GetOngResponse>.Success(response);
    }
}