namespace Animadota.UseCases.EditOng;

public record EditOngPayload(
    Guid Id,
    string? Nome,
    string? Endereco,
    string? Telefone,
    string Password
);