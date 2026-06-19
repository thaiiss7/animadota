using Animadota.Common.Results;
using Animadota.Services.AnimalFotos;
using Animadota.Services.Pets;

namespace Animadota.UseCases.DeletePetPhoto;

public class DeletePetPhotoUseCase
(
    IPhotoPetService photoPetService,
    IPetService petService
)
{
    public async Task<Result<DeletePetPhotoResponse>> Do(DeletePetPhotoPayload payload)
    {
        var pet = await petService.GetPetById(payload.PetId);

        if(pet is null)
            return Result<DeletePetPhotoResponse>.Fail("Pet not found");

        var foto = await photoPetService.GetById(payload.FotoId);

        if(foto is null)
            return Result<DeletePetPhotoResponse>.Fail("Photo not found");

        await photoPetService.Delete(foto, pet);
        return Result<DeletePetPhotoResponse>.Success(null);
    }
}