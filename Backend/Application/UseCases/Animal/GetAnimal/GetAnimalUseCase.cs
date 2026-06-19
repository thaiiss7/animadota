using Animadota.Results;
using Animadota.Services.Pets;

namespace Animadota.UseCases.GetAnimal;

public class GetAnimalUseCase
(
    IPetService petService
)
{
    public async Task<Result<GetAnimalResponse>> Do(GetAnimalPayload payload)
    {
        var pet = await petService.GetPetById(payload.AnimalId);

        if (pet is null)
            return Result<GetAnimalResponse>.Fail("Pet not found");

        var ong = await petService.GetOngByPet(pet);

        if (ong is null)
            return Result<GetAnimalResponse>.Fail("Ong not found");

        var response = new GetAnimalResponse
        (
            pet.Nome,
            pet.Tipo,
            pet.Raca,
            pet.Idade,
            pet.Bio,
            ong.Nome,
            ong.Endereco,
            from p in pet.Fotos
            select new PhotoData
            (
                p.Url
            )
        );

        return Result<GetAnimalResponse>.Success(response);
    }
}