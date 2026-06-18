using Animadota.Results;
using Animadota.Services.Pets;

namespace Animadota.UseCases.CreateAnimal;

public class CreateAnimalUseCase
(
    IPetService petService
)
{
    public async Task<Result<CreateAnimalResponse>> Do(CreateAnimalPayload payload)
    {
        var pet = new Animal
        {
            Nome = payload.Nome,
            Tipo = payload.Tipo,
            Raca = payload.Raca,
            OngId = payload.OngId,
            Bio = payload.Bio,
            Idade = payload.Idade
        };

        await petService.Create(pet);

        return Result<CreateAnimalResponse>.Success(new(pet.Id));
    }
}