namespace Animadota.UseCases.DeleteAnimalFoto;

public record DeleteAnimalFotoPayload
(
    Guid FotoId,
    Guid PetId
);