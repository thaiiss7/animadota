public class UsuarioFoto : BaseModel
{
    //================PROPERTIES================
    public required string Url {get;set;}


    //================MY-RELATIONS================
    public required Usuario Usuario {get;set;}
    public required Guid UsuarioId {get;set;}
}