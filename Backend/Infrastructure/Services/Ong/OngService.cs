using Animadota.Infrastructure.Context;
using Animadota.Services.Ongs;
using Animadota.UseCases.EditOng;
using Microsoft.EntityFrameworkCore;

public class OngService(AnimadotaContext context) : IOngService
{
    public Task<Ong?> GetOngByName(string name)
    {
        return context.Ongs.FirstOrDefaultAsync(ong => ong.Nome == name);
    }

    public async Task<Ong?> EditOng(string name, EditOngPayload payload)
    {
        var ong = await GetOngByName(name);
        if (ong == null)
            return null;
        
        ong.Nome = payload.Name;
        context.Ongs.Update(ong);
        await context.SaveChangesAsync();
        return ong;
    }

    public async Task DeleteOng(string name)
    {
        var ong = await GetOngByName(name);
        if (ong == null)
            return;
        
        context.Ongs.Remove(ong);
        await context.SaveChangesAsync();
    }




}