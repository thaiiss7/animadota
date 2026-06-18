using Animadota.UseCases.EditOng;

namespace Animadota.Services.Ongs;

public interface IOngService
{
    Task<Guid> Create(Ong ong);
    Task<Ong?> GetOngById(Guid id);
    Task<string?> EditOng(Guid id, EditOngPayload payload);
    Task<Guid?> DeleteOng(Guid id);
}