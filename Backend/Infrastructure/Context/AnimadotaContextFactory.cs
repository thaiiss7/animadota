using Animadota.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Animadota.Infrastructure.Context;

public class AnimadotaContextFactory : IDesignTimeDbContextFactory<AnimadotaContext>
{
    public AnimadotaContext CreateDbContext(string[] args)
    {

        var optionsBuilder = new DbContextOptionsBuilder<AnimadotaContext>();
        
        var host = Environment.GetEnvironmentVariable("DB_HOST");
        var port = Environment.GetEnvironmentVariable("DB_PORT");
        var dtbs = Environment.GetEnvironmentVariable("DB_DB");
        var user = Environment.GetEnvironmentVariable("DB_USER");
        var pass = Environment.GetEnvironmentVariable("DB_PASS");
        
        var conn = $"Server={host};Port={port};Database={dtbs};Uid={user};Pwd={pass};";

        optionsBuilder.UseSqlServer(conn);

        return new AnimadotaContext(optionsBuilder.Options);
    }
}