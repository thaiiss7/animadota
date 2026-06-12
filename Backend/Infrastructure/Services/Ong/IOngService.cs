using Animadota.UseCases.EditOng;

namespace Animadota.Services.Ongs;

public interface IOngService
{
    Task<Ong?> GetOngByName(String name);
}