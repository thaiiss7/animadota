namespace Animadota.Services.Users;

public interface IUserService
{
    Task<string> Create(Usuario user);
    Task<Usuario?> GetUserByUsername(Guid id);
}