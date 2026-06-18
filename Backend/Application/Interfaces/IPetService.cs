namespace Animadota.Services.Pets;

public interface IPetService
{
    Task<int> Create(Animal pet);
}