namespace Animadota.Services.Users;

public interface IUserService
{
    Task<string> Create(Usuario user);
    Task<Usuario?> GetUserByUsername(Guid id);
    Task<string> EditUserData(Usuario user);
    Task<Guid?> DeleteUserByUsername(string username);
}