namespace Animadota.UseCases.CreatePetPhoto;

public record CreatePetPhotoPayload
{
    public string Url { get; init; }
    public Guid AnimalId { get; set; }
}