namespace Animadota.Services.Pets;
using Animadota.Infrastructure.Context;
public class PetService(AnimadotaContext ctx) : IPetService
{
    public Task<Animal> Create(Animal pet)
    {
        throw new NotImplementedException();
    }

    public async Task<Animal?> GetPetById(Guid id)
    {
        var animal = await ctx.Animais.FindAsync(id);
        if(animal == null)
            return null;
        return animal;
    }



}