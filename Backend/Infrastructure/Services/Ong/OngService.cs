using Animadota.Infrastructure.Context;
using Animadota.Services.Ongs;
using Microsoft.EntityFrameworkCore;

public class OngService(AnimadotaContext context) : IOngService
{
    public Task<Ong?> GetOngByName(string name)
    {
        return context.Ongs.FirstOrDefaultAsync(ong => ong.Nome == name);
    }

}