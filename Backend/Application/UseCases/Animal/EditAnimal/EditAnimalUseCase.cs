using System.Diagnostics;
using Animadota.Common.Results;
using Animadota.Services.Ongs;
using Animadota.Services.Pets;

namespace Animadota.UseCases.EditAnimal;

public class EditAnimalUseCase
(
    IPetService petService,
    IOngService ongService
)
{
    public async Task<Result<EditAnimalResponse>> Do(Guid petId,EditAnimalPayload payload)
    {
        var pet = await petService.GetPetById(petId);

        if(pet is null)
            return Result<EditAnimalResponse>.Fail("Pet not found");

        if(pet.Nome != payload.Nome)
            pet.Nome = payload.Nome;

        var tipo  = payload.Tipo switch
            {
                "Cachorro" => TipoPetEnum.Cachorro,
                "Gato" => TipoPetEnum.Gato,
                "Pato" => TipoPetEnum.Pato,
                "Raposa" => TipoPetEnum.Raposa,
                _ => throw new ArgumentException("Invalid")
            };

        if(pet.Tipo != tipo)
            pet.Tipo = tipo;

        if(pet.Raca != payload.Raca)
            pet.Raca = payload.Raca;

        if(pet.Bio != payload.Bio)
            pet.Bio = payload.Bio;

        if(pet.Idade != payload.Idade)
            pet.Idade = payload.Idade;

        if(pet.OngId != payload.OngId)
        {
            pet.OngId = payload.OngId;
            var newOng = await ongService.GetOngById(payload.OngId);
            if (newOng is null)
                return Result<EditAnimalResponse>.Fail("Ong not found");
            pet.Ong = newOng;
        }

        var response = await petService.EditPet(pet);
        return Result<EditAnimalResponse>.Success(new(response));
    }
}