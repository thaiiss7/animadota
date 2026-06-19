using Animadota.Common.Results;
using Animadota.Services.AnimalFotos;
using Animadota.Services.Pets;

namespace Animadota.UseCases.CreateAnimal;

public class CreateAnimalUseCase
(
    IPetService petService,
    IPhotoPetService photoPetService
)
{
    public async Task<Result<CreateAnimalResponse>> Do(CreateAnimalPayload payload)
    {


        var pet = new Animal
        {
            Nome = payload.Nome,
            Tipo = payload.Tipo switch
            {
                "Cachorro" => TipoPetEnum.Cachorro,
                "Gato" => TipoPetEnum.Gato,
                "Pato" => TipoPetEnum.Pato,
                "Raposa" => TipoPetEnum.Raposa,
                _ => throw new ArgumentException("Invalid")
            },
            Raca = payload.Raca,
            OngId = payload.OngId,
            Bio = payload.Bio,
            Idade = payload.Idade
        };

        var petId = await petService.Create(pet);

        var photo = await photoPetService.Create(payload.UrlFoto, petId);
        if (photo is null)
            return Result<CreateAnimalResponse>.Fail("Failed to create photo");

        var createdPet = await petService.GetPetById(petId);
        createdPet.Fotos.Add(photo);
        return Result<CreateAnimalResponse>.Success(new(pet.Id));
    }
}