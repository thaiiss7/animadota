namespace Animadota.Services.Users;

public interface IUserService
{
    Task<string> Create(Usuario user);
}