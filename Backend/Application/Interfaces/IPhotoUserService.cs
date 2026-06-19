public interface IPhotoUserService
{
    Task<UsuarioFoto?> Create(string url, Guid userId);
    Task<Guid?> Delete(Guid id);
    Task<UsuarioFoto?> EditPhoto(Guid id, string newUrl);
    Task<UsuarioFoto?> GetPhotoById(Guid id);
}