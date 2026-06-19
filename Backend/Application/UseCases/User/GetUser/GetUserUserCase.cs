using System.Reflection.Metadata;
using Animadota.Results;
using Animadota.Services.Users;

namespace Animadota.UseCases.GetUser;

public class GetUserUserCase
(
    IUserService userService
)
{
    public async Task<Result<GetUserResponse>> Do(GetUserPayload payload)
    {
        var user = await userService.GetUserByUsername(payload.Username);

        if(user is null)
            return Result<GetUserResponse>.Fail("User not found");

        var response = new GetUserResponse
        (
            user.Nome,
            user.Username,
            user.Cidade,
            user.Endereco,
            user.Idade,
            user.Bio,
            user.Residencia,
            user.Telefone,
            from photo in user.Fotos
            select new PhotoDTO(
                photo.Url
            )
        );

        return Result<GetUserResponse>.Success(response);
    }
}