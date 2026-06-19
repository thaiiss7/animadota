using Animadota.Results;
using Animadota.Services.AnimalFotos;
using Animadota.Services.Pets;

namespace Animadota.UseCases.CreatePetPhoto;

public class CreateAnimalFotoUseCase
(
    IPhotoPetService photoPetService,
    IPetService petService
)
{
    public async Task<Result<CreatePetPhotoResponse>> Do(CreatePetPhotoPayload payload)
    {
        var pet = await petService.GetPetById(payload.AnimalId);

        if(pet is null)
            return Result<CreatePetPhotoResponse>.Fail("Pet not found");


        var photo = await photoPetService.Create(payload.Url, payload.AnimalId);
        return Result<CreatePetPhotoResponse>.Success(new(photo.Id));
    }
}