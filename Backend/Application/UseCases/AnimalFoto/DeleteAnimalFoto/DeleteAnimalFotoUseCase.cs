using Animadota.Results;
using Animadota.Services.AnimalFotos;
using Animadota.Services.Pets;

namespace Animadota.UseCases.DeleteAnimalFoto;

public class DeleteAnimalFotoUseCase
(
    IPhotoPetService photoPetService,
    IPetService petService
)
{
    public async Task<Result<DeleteAnimalFotoResponse>> Do(DeleteAnimalFotoPayload payload)
    {
        var pet = await petService.GetPetById(payload.PetId);

        if(pet is null)
            return Result<DeleteAnimalFotoResponse>.Fail("Pet not found");

        var foto = await photoPetService.GetById(payload.FotoId);

        if(foto is null)
            return Result<DeleteAnimalFotoResponse>.Fail("Photo not found");

        await photoPetService.Delete(foto, pet);
        return Result<DeleteAnimalFotoResponse>.Success(null);
    }
}