namespace Animadota.Services.Pets;

public interface IPetService
{
    Task<Animal> Create(Animal pet);
    Task<Animal?> GetPetById(Guid id);   
}