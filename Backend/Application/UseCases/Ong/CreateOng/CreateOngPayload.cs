namespace Animadota.UseCases.CreateOng;

public record CreateOngPayload
{
    public string Nome { get; init;}
    public Guid Id { get; init;}
    public string Endereco { get; init;}
    public string Telefone { get; init;}
}