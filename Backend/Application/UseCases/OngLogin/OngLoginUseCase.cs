using Animadota.Common.Results;
using Animadota.Services.JWT;
using Animadota.Services.Ongs;

public class OngLoginUseCase(
    IOngService ongService,
    IJWTService jwtService,
    IPasswordService passwordService
)
{
    public async Task<Result<OngLoginResponse>> Do(OngLoginPayload payload)
    {
        var ong = await ongService.GetOngByName(payload.Username);

        if (ong is null)
            return Result<OngLoginResponse>.Fail("User not found");

        var passwordMatch = passwordService
            .Compare(payload.Password, ong.Senha);

        if(!passwordMatch)
            return Result<OngLoginResponse>.Fail("Invalid username or password");

        var jwt = jwtService.GenerateToken(new(
            ong.Id, ong.Nome
        ));

        return Result<OngLoginResponse>.Success(new(jwt));
    }
}