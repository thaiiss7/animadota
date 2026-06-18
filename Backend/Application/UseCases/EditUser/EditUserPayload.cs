namespace Animadota.UseCases.EditUser;

public record EditUserPayload
(
    string Nome,
    string Username,
    string Cidade,
    string Endereco,
    int Idade,
    string Bio,
    string Residencia,
    string Telefone
);