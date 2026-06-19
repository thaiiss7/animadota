using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Animadota.Services.JWT;
using Microsoft.IdentityModel.Tokens;

public class JwtTokenService(SecurityKey key) : IJWTService
{
    public string GenerateToken(ProfileAuth data)
    {
        var jwt = new JwtSecurityToken(
            claims: new Claim[]
            {
                new Claim("id", data.Id.ToString()),
                new Claim("username", data.Username)
            },
            expires: DateTime.UtcNow.AddHours(2),
            signingCredentials: new SigningCredentials(
                key,
                SecurityAlgorithms.HmacSha256Signature
            )
        );
        var handler = new JwtSecurityTokenHandler();
        return handler.WriteToken(jwt);
    }
}