namespace Animadota.Services.AnimalFotos;

public interface IPhotoPetService
{
    Task<Guid> Create(AnimalFoto foto, Animal pet);
    Task Delete(AnimalFoto foto, Animal pet);
    Task<AnimalFoto> GetById(Guid fotoId);
}