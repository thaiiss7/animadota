using Animadota.Results;
using Animadota.Services.Users;

namespace Animadota.UseCases.EditUser;

public class EditUserUseCase
(
    IUserService userService,
    IPhotoUserService userPhotoService
)
{
    public async Task<Result<EditUserResponse>> Do(EditUserPayload payload)
    {
        var user = await userService.GetUserByUsername(payload.Username);

        if (user is null)
            return Result<EditUserResponse>.Fail("User not found");

        if (payload.Nome != user.Nome)
            user.Nome = payload.Nome;

        if (payload.Username != user.Username)
            user.Username = payload.Username;

        if (payload.Cidade != user.Cidade)
            user.Cidade = payload.Cidade;

        if (payload.Idade != user.Idade)
            user.Idade = payload.Idade;

        if (payload.Bio != user.Bio)
            user.Bio = payload.Bio;

        if (payload.Residencia != user.Residencia)
            user.Residencia = payload.Residencia;

        if (payload.Telefone != user.Telefone)
            user.Telefone = payload.Telefone;

        if (payload.UrlFoto != null)
        {
            var photo = await userPhotoService.Create(payload.UrlFoto, user.Id);
            if (photo == null)
                return Result<EditUserResponse>.Fail("Failed to update user photo");
            user.Fotos.Add(photo);
        }

        var newUserData = user;
        var response = await userService.EditUserData(newUserData);

        return Result<EditUserResponse>.Success(new(response));
    }
}