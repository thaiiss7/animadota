using Animadota.Results;
using Animadota.Services.Users;

public class DeleteUserUseCase(
    IUserService userService,
    IPhotoUserService userPhotoService
)
{
    public async Task<Result<DeleteUserResponse>> Do(DeleteUserPayload payload)
    {
        var user = await userService.GetUserByUsername(payload.Username);
        if (user == null)
            return Result<DeleteUserResponse>.Fail("User not found");

        foreach (var photo in user.Fotos)
            await userPhotoService.Delete(photo.Id);

        await userService.DeleteUserByUsername(payload.Username);
        return Result<DeleteUserResponse>.Success(new());
    }
}

