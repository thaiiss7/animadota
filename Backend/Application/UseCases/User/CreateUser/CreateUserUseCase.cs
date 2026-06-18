using Animadota.Results;
using Animadota.Services.Users;
using Microsoft.VisualBasic;

namespace Animadota.UseCases.CreateUser;

public class CreateUserUseCase
(
    IUserService userService
)
{
    public async Task<Result<CreateUserResponse>> Do(CreateUserPayload payload)
    {
        var user = new Usuario
        {
            Nome = payload.Nome,
            Username = payload.Username,
            Senha = payload.Senha,
            Cidade = payload.Cidade,
            Endereco = payload.Endereco,
            Idade = payload.Idade,
            Bio = payload.Bio,
            Residencia = payload.Residencia,
            Telefone = payload.Telefone
        };

        await userService.Create(user);

        return Result<CreateUserResponse>.Success(new(user.Username));
    }
}