using Animadota.UseCases.EditOng;

namespace Animadota.Services.Ongs;

public interface IOngService
{
    Task<Guid> Create(Ong ong);
    Task<Ong?> GetOngByName(String name);
    Task<Ong?> EditOng(String name, EditOngPayload payload);
    Task DeleteOng(String name);
    Task DeclineMatch(Guid matchId);
}