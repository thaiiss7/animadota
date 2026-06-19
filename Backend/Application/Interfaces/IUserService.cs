namespace Animadota.Services.Users;

public interface IUserService
{
    Task<Usuario> Create(Usuario user);
    Task<Usuario?> GetUserByUsername(string username);
    Task<string> EditUserData(Usuario user);
    Task<Guid?> DeleteUserByUsername(string username);
}