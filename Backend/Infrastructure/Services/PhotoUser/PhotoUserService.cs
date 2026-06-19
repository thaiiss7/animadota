using Animadota.Infrastructure.Context;
namespace Animadota.Services.PhotoUser;

public class PhotoUserService(AnimadotaContext ctx) : IPhotoUserService
{
    public async Task<UsuarioFoto?> Create(string url, Guid userId)
    {
        var user = await ctx.Usuarios.FindAsync(userId);
        if(user == null)
            return null;
        var photo = new UsuarioFoto
        {
            Url = url,
            UsuarioId = userId,
            Usuario = user
        };
        ctx.UsuarioFotos.Add(photo);
        await ctx.SaveChangesAsync();
        return photo;
    }

    public async Task<Guid?> Delete(Guid id)
    {
        var photo = await GetPhotoById(id);
        if(photo == null)
            return null;
        ctx.UsuarioFotos.Remove(photo);
        await ctx.SaveChangesAsync();
        return photo.Id;
    }

    public async Task<UsuarioFoto?> EditPhoto(Guid id, string newUrl)
    {
        var photo = await GetPhotoById(id);
        if(photo == null)
            return null;
        photo.Url = newUrl;
        ctx.UsuarioFotos.Update(photo);
        await ctx.SaveChangesAsync();
        return photo;
    }

    public async Task<UsuarioFoto?> GetPhotoById(Guid id)
    {
        var photo = await ctx.UsuarioFotos.FindAsync(id);
        if(photo == null)
            return null;
        return photo;
    }
}