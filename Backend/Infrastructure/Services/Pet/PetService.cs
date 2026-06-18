namespace Animadota.Services.Pets;
using Animadota.Infrastructure.Context;
public class PetService(AnimadotaContext ctx) : IPetService
{
    public async Task<Guid> Create(Animal pet)
    {
        ctx.Animais.Add(pet);
        await ctx.SaveChangesAsync();
        return pet.Id;
    }

    public async Task<Animal?> GetPetById(Guid id)
    {
        var animal = await ctx.Animais.FindAsync(id);
        if(animal == null)
            return null;
        return animal;
    }
}