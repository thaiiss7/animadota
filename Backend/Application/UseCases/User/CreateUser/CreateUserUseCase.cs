using Animadota.Common.Results;
using Animadota.Services.Users;

namespace Animadota.UseCases.CreateUser;

public class CreateUserUseCase
(
    IUserService userService,
    IPhotoUserService userPhotoService
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

        var createdUser = await userService.Create(user);

        var photo = await userPhotoService.Create(payload.UrlFoto, createdUser.Id);
        if (photo == null)
            return Result<CreateUserResponse>.Fail("Failed to create user photo");

        createdUser.Fotos.Add(photo);
        return Result<CreateUserResponse>.Success(new(user.Username));
    }
}