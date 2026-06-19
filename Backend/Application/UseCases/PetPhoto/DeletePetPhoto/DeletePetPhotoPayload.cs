namespace Animadota.UseCases.DeletePetPhoto;

public record DeletePetPhotoPayload
(
    Guid FotoId,
    Guid PetId
);