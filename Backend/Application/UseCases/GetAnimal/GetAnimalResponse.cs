namespace Animadota.UseCases.GetAnimal;

public record GetAnimalResponse
(
    string Nome,
    TipoPetEnum Tipo,
    string Raca,
    int Idade,
    string Bio,
    GetOngData Ong
);

public record GetOngData
(
    string Nome,
    string Endereco
);