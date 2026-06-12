using Animadota.UseCases.EditOng;

namespace Animadota.Services.Ongs;

public interface IOngService
{
    Task<string> Create(Ong ong);
    Task<Ong?> GetOngByName(String name);
    Task<Ong?> EditOng(String name, EditOngPayload payload);
    Task DeleteOng(String name);
}