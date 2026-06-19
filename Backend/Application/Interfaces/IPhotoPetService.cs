namespace Animadota.Services.AnimalFotos;

public interface IPhotoPetService
{
    Task<AnimalFoto> Create(string url, Guid petId);
    Task Delete(AnimalFoto foto, Animal pet);
    Task<AnimalFoto> GetById(Guid fotoId);
}