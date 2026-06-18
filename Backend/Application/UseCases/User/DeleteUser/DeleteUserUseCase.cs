using Animadota.Results;
using Animadota.Services.Users;

public class DeleteUserUseCase(
    IUserService userService
)
{
    public async Task<Result<DeleteUserResponse>> Do(DeleteUserPayload payload)
    {
        var user = await userService.DeleteUserByUsername(payload.Username);
        if (user == null)
            return Result<DeleteUserResponse>.Fail("User not found");

        return Result<DeleteUserResponse>.Success(new());
    }
}

