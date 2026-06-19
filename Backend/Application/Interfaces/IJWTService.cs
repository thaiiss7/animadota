namespace Animadota.Services.JWT;
public interface IJWTService
{
    string GenerateToken(ProfileAuth data);
}