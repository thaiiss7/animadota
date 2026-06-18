
public class Animal : BaseModel
{
    //================PROPERTIES================
    public required string Nome {get;set;}
    public required TipoPetEnum Tipo {get;set;}
    public required string Raca {get;set;}
    public required string Bio {get;set;}
    public required int Idade {get;set;}
    public required string Bio { get; set; }

    //================MY-RELATIONS================
    public Ong Ong {get;set;}
    public required Guid OngId {get;set;}

    //================RELATIONS================
    public ICollection<AnimalFoto> Fotos {get;set;} = [];
    public ICollection<Combinacao> Combinacoes {get;set;} = [];
}