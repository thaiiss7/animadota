using Animadota.Infrastructure.Context;
using Animadota.Services.Users;

public class UserService(AnimadotaContext ctx) : IUserService
{
    public async Task<string> Create(Usuario user)
    {
        ctx.Usuarios.Add(user);
        await ctx.SaveChangesAsync();
        return user.Username;
    }
}