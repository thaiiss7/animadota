namespace Animadota.Services.Pets;

public interface IPetService
{
    Task<Guid> Create(Animal pet);
    Task<Animal?> GetPetById(Guid id);
    Task<Ong> GetOngByPet(Animal pet);
    Task<Guid?> Delete(Guid id);
}