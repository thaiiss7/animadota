using System.Security.Claims;
using Animadota.UseCases.CreateUser;
using Animadota.UseCases.GetUser;
using Microsoft.AspNetCore.Mvc;
using static System.Net.WebRequestMethods;

namespace Animadota.Endpoints;

public static class UserEndpoints
{
    public static void ConfigureProfileEndpoints(this WebApplication app)
    {
        app.MapGet("profile/{username}", async (
            string username,
            [FromServices]GetUserUserCase useCase) =>
        {
            var payload = new GetUserPayload(username);
            var result = await useCase.Do(payload);

            return (result.IsSuccess, result.Reason) switch
            {
                (false, "User not found") => Results.NotFound(),
                (false, _) => Results.BadRequest(),
                (true, _) => Results.Ok(result.Data)
            };
        });

        app.MapPost("profile", async (
            [FromBody] CreateUserPayload payload,
            [FromServices] CreateUserUseCase useCase) =>
        {
            var result = await useCase.Do(payload);

            if (result.IsSuccess)
                return Results.Created();
            
            return Results.BadRequest(result.Reason);
        });

        app.MapDelete("profile/{username}", async (
            string username,
            HttpContext context,
            [FromServices] DeleteUserUseCase useCase) =>
        {
            var payload = new DeleteUserPayload(username);
            var result = await useCase.Do(payload);

            return (result.IsSuccess, result.Reason) switch
            {
                (false, "User not found") => Results.NotFound(),
                (false, _) => Results.BadRequest(),
                (true, _) => Results.Ok()
            };
        }).RequireAuthorization();

        app.MapPost("like/", async (
            [FromBody] SendLikePayload payload,
            [FromServices] SendLikeUseCase useCase,
            HttpContext http ) =>
        {
           var claim = http.User.FindFirst(ClaimTypes.NameIdentifier); 
           var userId = Guid.Parse(claim.Value);

           var result = await useCase.Do(payload with { UserId = userId });

           return (result.IsSuccess, result.Reason) switch
           {
               (false, "Pet not found") => Results.NotFound(),
               (false, _) => Results.BadRequest(),
               (true, _) => Results.Ok()
           };
        }).RequireAuthorization();
    }
}