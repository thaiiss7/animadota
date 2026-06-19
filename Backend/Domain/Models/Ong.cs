
public class Ong : BaseModel
{
    //================PROPERTIES================
    public required string Nome {get;set;}
    public required string Endereco {get;set;}
    public required string Telefone {get;set;}
    public required string Senha {get;set;}

    //================RELATIONS================
    public ICollection<Animal> Animais {get;set;} = [];
}