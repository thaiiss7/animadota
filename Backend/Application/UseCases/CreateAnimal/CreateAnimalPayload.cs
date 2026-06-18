namespace Animadota.UseCases.CreateAnimal;

public record CreateAnimalPayload
{
    public string Nome { get; init; }
    public TipoPetEnum Tipo { get; init; }
    public string Raca { get; init; }
    public int OngId { get; init; }
    public string UrlFoto { get; init; }
}