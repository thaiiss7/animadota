namespace Animadota.UseCases.CreateAnimal;

public record CreateAnimalPayload
{
    public string Nome { get; init; }
    public TipoPetEnum Tipo { get; init; }
    public string Raca { get; init; }
    public Guid OngId { get; init; }
    public string UrlFoto { get; init; }
    public string Bio { get; init; }
    public int Idade { get; init; }
}