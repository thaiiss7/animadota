using System;
using System.Collections;

public class Usuario : BaseModel
{
    //================PROPERTIES================
    public required string Nome {get;set;}
    public required string Descricao {get;set;}
    public required string Username {get;set;}
    public required string Senha {get;set;}
    public required string Cidade {get;set;}
    public required string Endereco {get;set;}
    public required int Idade {get;set;}
    public required string Bio {get;set;}
    public required string Residencia {get;set;}
    public required string Telefone {get;set;}
    
    public List<TipoPetEnum> Preferencias {get;set;} = new List<TipoPetEnum>();
    //================RELATIONS================
    public ICollection<UsuarioFoto> Fotos {get;set;} = [];
    public ICollection<Combinacao> Combinacoes {get;set;} = [];
}