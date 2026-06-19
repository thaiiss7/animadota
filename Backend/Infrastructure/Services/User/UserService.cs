using Animadota.Infrastructure.Context;
using Animadota.Services.Users;
using Microsoft.EntityFrameworkCore;

public class UserService(AnimadotaContext ctx) : IUserService
{
    public async Task<Usuario> Create(Usuario user)
    {
        ctx.Usuarios.Add(user);
        await ctx.SaveChangesAsync();
        return user;
    }
    public async Task<Guid?> DeleteUserByUsername(string username)
    {
        var user = await GetUserByUsername(username);
        if (user == null)
            return null;
        ctx.Usuarios.Remove(user);
        await ctx.SaveChangesAsync();
        return user.Id;
    }

    public async Task<string> EditUserData(Usuario user)
    {
        await ctx.SaveChangesAsync();
        return user.Username;
    }

    public async Task<Usuario?> GetUserByUsername(string username)
    {
        return await ctx.Usuarios.FirstOrDefaultAsync(u => u.Username == username);
    }

}