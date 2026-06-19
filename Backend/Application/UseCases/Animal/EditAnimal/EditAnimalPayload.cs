namespace Animadota.UseCases.EditAnimal;

public record EditAnimalPayload
(
    string Nome,
    string Tipo,
    string Raca,
    string Bio,
    int Idade,
    Guid OngId
);