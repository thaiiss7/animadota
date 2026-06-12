using System.ComponentModel.DataAnnotations;
using System.Security.Cryptography.X509Certificates;

namespace Animadota.UseCases.CreateUser;

// lembrar de cadastrar fotos
public record CreateUserPayload
{
    [Required]
    public string Nome { get; init; }

    [Required]
    [MinLength(5)]
    [MaxLength(20)]
    public string Username { get; init; }

    [Required]
    [MinLength(5)]
    public string Senha { get; init; }

    [Required]
    [Compare("Senha")]
    public string RepetirSenha { get; init; }

    [Required]
    public string Cidade { get; init; }
    
    [Required]
    public string Endereco { get; init; }
    
    [Required]
    public int Idade { get; init; }
    
    [Required]
    public string Bio { get; init; }
    
    [Required]
    public string Residencia { get; init; }
    
    [Required]
    public string Telefone { get; init; }
    public string UrlFoto { get; init; }
}