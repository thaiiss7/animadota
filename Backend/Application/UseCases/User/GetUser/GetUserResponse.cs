namespace Animadota.UseCases.GetUser;

public record GetUserResponse
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