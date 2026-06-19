using Animadota.UseCases.CreateOng;
using Animadota.UseCases.EditOng;
using Animadota.UseCases.GetOng;
using Microsoft.AspNetCore.Mvc;

public static class OngEndpoints
{
    public static void ConfigureOngEndpoints(this WebApplication app)
    {
        app.MapGet("ong/{id}", async (
            Guid id,
            [FromServices] GetOngUseCase useCase) =>
        {
            var result = await useCase.Do(new GetOngPayload(id));
            return (result.IsSuccess, result.Reason) switch
            {
                (false, "Ong not found") => Results.NotFound(),
                (false, _) => Results.BadRequest(),
                (true, _) => Results.Ok(result.Data)
            };
        });

        app.MapPost("ong", async (
            [FromBody] CreateOngPayload payload,
            [FromServices] CreateOngUseCase service) =>
        {
            var result = await service.Do(payload);
            if (result.IsSuccess)
                return Results.Created();
            return Results.BadRequest(result.Reason);
        });

        app.MapDelete("ong/{id}", async (
            Guid id,
            [FromServices] DeleteOngUseCase service) =>
        {
            var result = await service.Do(new DeleteOngPayload(id));
            return (result.IsSuccess, result.Reason) switch
            {
                (false, "Ong not found") => Results.NotFound(),
                (false, _) => Results.BadRequest(),
                (true, _) => Results.Ok()
            };
        }
        ).RequireAuthorization();

        app.MapPut("ong/{id}", async (
            Guid OngId,
            [FromBody] EditOngPayload payload,
            [FromServices] EditOngUseCase service,
            HttpContext http) =>
        {
            var username = http.User.FindFirst("username")?.Value;
            var id = http.User.FindFirst("id")?.Value;
            
            if (id == null || username != payload.Nome)
                return Results.Unauthorized();

            var result = await service.Do(OngId, payload);
            return (result.IsSuccess, result.Reason) switch
            {
                (false, "Ong not found") => Results.NotFound(),
                (false, _) => Results.BadRequest(),
                (true, _) => Results.Ok(result.Data)
            };
        }
        ).RequireAuthorization();

        app.MapPatch("match/accept", async (
            [FromServices] AcceptMatchUseCase useCase,
            [FromBody] AcceptMatchPayload payload,
            HttpContext http) =>
        {
            // var id = http.User.FindFirst("id")?.Value;
            // var match = await 
            var result = await useCase.Do(payload);
            if (result.IsSuccess)
                return Results.Ok(result.Data);
            return Results.BadRequest(result.Reason);
        }
        ).RequireAuthorization();

        app.MapPatch("match/deny", async (
            [FromServices] RejectMatchUseCase useCase,
            [FromBody] RejectMatchPayload payload) =>
        {
            var result = await useCase.Do(payload);
            if (result.IsSuccess)
                return Results.Ok(result.Data);
            return Results.BadRequest(result.Reason);
        }
        ).RequireAuthorization();
    }
}