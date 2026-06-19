using System.ComponentModel.DataAnnotations;
using Animadota.Common.Results;
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


        var photo = await photoPetService.Create(payload.Url, payload.AnimalId);
        return Result<CreateAnimalFotoResponse>.Success(new(photo.Id));
    }
}