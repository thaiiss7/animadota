namespace Animadota.Services.Pets;

public interface IPetService
{
    Task<Guid> Create(Animal pet);
    Task<Animal?> GetPetById(Guid id);   
    Task<Guid?> Delete(Guid id);
}