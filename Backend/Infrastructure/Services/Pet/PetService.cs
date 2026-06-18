using Animadota.Infrastructure.Context;
using Animadota.Services.Pets;

public class PetService(AnimadotaContext ctx) : IPetService
{
    public async Task<int> Create(Animal pet)
    {
        ctx.Animais.Add(pet);
        await ctx.SaveChangesAsync();
        return pet.Id;
    }
}