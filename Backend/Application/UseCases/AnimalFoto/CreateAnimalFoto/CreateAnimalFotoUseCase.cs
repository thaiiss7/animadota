using System.ComponentModel.DataAnnotations;
using Animadota.Results;
using Animadota.Services.AnimalFotos;
using Animadota.Services.Pets;

namespace Animadota.UseCases.CreateAnimalFoto;

public class CreateAnimalFotoUseCase
(
    IPhotoPetService photoPetService,
    IPetService petService
)
{
    public async Task<Result<CreateAnimalFotoResponse>> Do(CreateAnimalFotoPayload payload)
    {
        var pet = await petService.GetPetById(payload.AnimalId);

        if(pet is null)
            return Result<CreateAnimalFotoResponse>.Fail("Pet not found");

        var foto = new AnimalFoto
        {
            Url = payload.Url,
            Animal = pet,
            AnimalId = payload.AnimalId
        };

        await photoPetService.Create(foto, pet);
        return Result<CreateAnimalFotoResponse>.Success(new(foto.Id));
    }
}