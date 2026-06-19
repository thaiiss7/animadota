using Animadota.Common.Results;
using Animadota.Services.Pets;

public class DeleteAnimalUseCase(
    IPetService animalService
)
{
    public async Task<Result<DeleteAnimalResponse>> Do(DeleteAnimalPayload payload)
    {
        var animal = await animalService.GetPetById(payload.Id);
        if (animal == null)
           return Result<DeleteAnimalResponse>.Fail("Animal not found");
        await animalService.Delete(animal.Id);
        return Result<DeleteAnimalResponse>.Success(new());
    }
}