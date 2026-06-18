using Animadota.Infrastructure.Context;
using Animadota.Services.Users;
using Microsoft.EntityFrameworkCore;

public class UserService(AnimadotaContext ctx) : IUserService
{
    public async Task<string> Create(Usuario user)
    {
        ctx.Usuarios.Add(user);
        await ctx.SaveChangesAsync();
        return user.Username;
    }

    public async Task<Usuario?> GetUserByUsername(Guid id)
    {
        return await ctx.Usuarios.FirstOrDefaultAsync(u => u.Id == id);
    }

}