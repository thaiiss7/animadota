using Microsoft.AspNetCore.Mvc;
namespace Animadota.Endpoints;

public static class AuthEndpoints
{
    public static void ConfigureAuthEndpoints(this WebApplication app)
    {
        app.MapPost("auth/user", async (
            [FromBody]LoginPayload payload,
            [FromServices]LoginUseCase useCase) =>
        {
            var result = await useCase.Do(payload);
            if (!result.IsSuccess)
                return Results.BadRequest();
            
            return Results.Ok(result.Data);
        });

        app.MapPost("auth/ong", async (
            [FromBody]OngLoginPayload payload,
            [FromServices]OngLoginUseCase useCase) =>
        {
            var result = await useCase.Do(payload);
            if (!result.IsSuccess)
                return Results.BadRequest();
            
            return Results.Ok(result.Data);
        });
    }
}