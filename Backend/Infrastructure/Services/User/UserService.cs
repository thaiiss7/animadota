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

    public async Task<Guid?> DeleteUserByUsername(string username)
    {
        var user = await GetUserByUsername(username);
        if (user == null)
            return null;
        ctx.Usuarios.Remove(user);
        await ctx.SaveChangesAsync();
        return user.Id;
    }

    public async Task<Usuario?> GetUserByUsername(Guid id)
    {
        return await ctx.Usuarios.FirstOrDefaultAsync(u => u.Id == id);
    }

    public Task<Usuario?> GetUserByUsername(string username)
    {
        throw new NotImplementedException();
    }
}