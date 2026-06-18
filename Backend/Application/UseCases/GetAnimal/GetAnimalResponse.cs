namespace Animadota.UseCases.GetAnimal;

public record GetAnimalResponse
(
    string Nome,
    TipoPetEnum Tipo,
    string Raca,
    int Idade,
    string Bio,
    string NomeOng,
    string EnderecoOng
);