using Animadota.Common.Results;
using Animadota.Services.JWT;
using Animadota.Services.Users;

public class LoginUseCase (
    IUserService userService,
    IJWTService jwtService,
    IPasswordService passwordService
)
{
    public async Task<Result<LoginResponse>> Do(LoginPayload payload)
    {
        var user = await userService.GetUserByUsername(payload.Username);

        if (user is null)
            return Result<LoginResponse>.Fail("User not found");

        var passwordMatch = passwordService
            .Compare(payload.Password, user.Senha);

        if(!passwordMatch)
            return Result<LoginResponse>.Fail("Invalid username or password");

        var jwt = jwtService.GenerateToken(new(
            user.Id, user.Username
        ));

        return Result<LoginResponse>.Success(new(jwt));
    }
}