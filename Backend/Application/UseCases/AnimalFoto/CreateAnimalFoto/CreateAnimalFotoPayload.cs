namespace Animadota.UseCases.CreateAnimalFoto;

public record CreateAnimalFotoPayload
{
    public string Url { get; init; }
    public Guid AnimalId { get; set; }
}