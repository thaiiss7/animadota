using Animadota.UseCases.EditOng;

namespace Animadota.Services.Ongs;

public interface IOngService
{
    Task<Ong?> GetOngByName(String name);
    Task<Ong?> EditOng(String name, EditOngPayload payload);
    Task DeleteOng(String name);
}