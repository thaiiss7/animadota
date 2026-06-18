namespace Animadota.Services.Pets;
using Animadota.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;

public class PetService(AnimadotaContext ctx) : IPetService
{
    public async Task<Guid> Create(Animal pet)
    {
        ctx.Animais.Add(pet);
        await ctx.SaveChangesAsync();
        return pet.Id;
    }

<<<<<<< HEAD
    public async Task<Guid?> Delete(Guid id)
    {
        var animal = await GetPetById(id);
        if (animal == null)
            return null;
        ctx.Animais.Remove(animal);
        await ctx.SaveChangesAsync();
        return animal.Id;
=======
    public async Task<Ong?> GetOngByPet(Animal pet)
    {
        var ong = await ctx.Ongs
        .FirstOrDefaultAsync(o => o.Id == pet.OngId);
        return ong;
>>>>>>> a250188b3d8d4f7fae07a220945717c32cd2d792
    }

    public async Task<Animal?> GetPetById(Guid id)
    {
        var animal = await ctx.Animais.FindAsync(id);
        if(animal == null)
            return null;
        return animal;
    }
}