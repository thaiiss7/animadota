using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Animadota.Infrastructure.Context;

public static class MigrationConfiguration
{
    public static async Task Migrate(this WebApplication app)
    {
        using (var scope = app.Services.CreateScope())
        {
            var db = scope.ServiceProvider.GetRequiredService<AnimadotaContext>();
            db.Database.Migrate();

            var seeder = scope.ServiceProvider
                .GetRequiredService<SeedService>();

            await seeder.SeedData();
        }
    }
}