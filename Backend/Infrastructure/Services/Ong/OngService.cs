using Animadota.Infrastructure.Context;
using Animadota.Services.Ongs;
using Animadota.UseCases.EditOng;
using Microsoft.EntityFrameworkCore;

public class OngService(AnimadotaContext context) : IOngService
{
    public async Task<Guid> Create(Ong ong)
    {
        context.Ongs.Add(ong);
        await context.SaveChangesAsync();
        return ong.Id;
    }

    public Task<Ong?> GetOngById(Guid id)
    {
        return context.Ongs.FirstOrDefaultAsync(ong => ong.Id == id);
    }

    public async Task<string?> EditOng(Guid id, EditOngPayload payload)
    {
        var ong = await GetOngById(id);
        if (ong == null)
            return null;
        
        if (payload.Nome != null)
            ong.Nome = payload.Nome;
        if (payload.Endereco != null)
            ong.Endereco = payload.Endereco;
        if (payload.Telefone != null)
            ong.Telefone = payload.Telefone;
        
        context.Ongs.Update(ong);
        await context.SaveChangesAsync();
        return ong.Nome;
    }

    public async Task<Guid?> DeleteOng(Guid id)
    {
        var ong = await GetOngById(id);
        if (ong == null)
            return null;
        
        context.Ongs.Remove(ong);
        await context.SaveChangesAsync();
        return ong.Id;
    }


}