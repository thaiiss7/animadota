using Animadota.UseCases.CreateAnimal;
using Animadota.UseCases.GetAnimal;
using Microsoft.AspNetCore.Mvc;

namespace Animadota.Endpoints;

public static class PetEndpoints
{
    public static void ConfigurePetEndpoints(this WebApplication app)
    {
        // buscar bichito
        app.MapGet("pet/{petId}", async (
            Guid petId,
            [FromServices]GetAnimalUseCase useCase) =>
            {
                var payload = new GetAnimalPayload(petId);
                var result = await useCase.Do(payload);

                return (result.IsSuccess, result.Reason) switch
                {
                    (false, "Pet not found") => Results.NotFound(),
                    (false, _) => Results.BadRequest(),
                    (true, _) => Results.Ok(result.Data)
                };

            });

        // publicar um bichito
        app.MapPost("pet", async (
            HttpContext http,
            [FromBody] CreateAnimalPayload payload,
            [FromServices] CreateAnimalUseCase useCase) =>
            {
                // var claim = http.User.FindFirst(ClaimTypes.NameIdentifier);
                // var userId = Guid.Parse(claim.Value);    

                var result = await useCase.Do(new CreateAnimalPayload
                {
                    Nome = payload.Nome,
                    Tipo = payload.Tipo,
                    Raca = payload.Raca,
                    OngId = payload.OngId,
                    UrlFoto = payload.UrlFoto,
                    Bio = payload.Bio,
                    Idade = payload.Idade
                });
            
                if (result.IsSuccess)
                    return Results.Created();
            
                return Results.BadRequest(result.Reason);
            });

            // deletar pet
        app.MapDelete("pet/{id}", async (
            Guid petId, 
            HttpContext http,
            [FromServices]DeleteAnimalUseCase useCase) =>
            {
                var payload = new DeleteAnimalPayload(petId);
                var result = await useCase.Do(payload);

                return (result.IsSuccess, result.Reason) switch
                {
                    (false, "Pet not found") => Results.NotFound(),
                    (false, _) => Results.BadRequest(),
                    (true, _) => Results.Ok()
                };
            });
    }
}