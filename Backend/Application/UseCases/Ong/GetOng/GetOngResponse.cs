namespace Animadota.UseCases.GetOng;

public record GetOngResponse
(
    string Nome,
    string Endereco,
    string Telefone,
    IEnumerable<AnimalDTO> Animals
);

public record AnimalDTO
(
    string Nome,
    string? Url,
    string Raca
);