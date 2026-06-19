using Animadota.Infrastructure.Context;
using Animadota.Services.AnimalFotos;
using Microsoft.EntityFrameworkCore;

public class PhotoPetService(AnimadotaContext ctx) : IPhotoPetService
{
    public async Task<AnimalFoto> Create(string url, Guid petId)
    {
        var pet = await ctx.Animais.FindAsync(petId);
        if(pet is null)
            return null;
        var foto = new AnimalFoto
        {
            Url = url,
            AnimalId = petId,
            Animal = pet
        };
        ctx.AnimalFotos.Add(foto);
        await ctx.SaveChangesAsync();
        return foto;
    }

    public async Task Delete(AnimalFoto foto, Animal pet)
    {
        ctx.AnimalFotos.Remove(foto);
        pet.Fotos.Remove(foto);
        await ctx.SaveChangesAsync();
    }

    public async Task<AnimalFoto> GetById(Guid fotoId)
    {
        var foto = await ctx.AnimalFotos.FirstOrDefaultAsync(f => f.Id == fotoId);
        return foto;
    }
}