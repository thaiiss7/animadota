namespace Animadota.UseCases.EditAnimal;

public record EditAnimalPayload
(
    Guid PetId,
    string Nome,
    string Tipo,
    string Raca,
    string Bio,
    int Idade,
    Guid OngId
);