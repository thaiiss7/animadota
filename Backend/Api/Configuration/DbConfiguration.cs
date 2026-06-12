using Animadota.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;

public static class DbConfiguration
{
    public static void ConfigureDb(this IServiceCollection service)
    {
        service.AddDbContext<AnimadotaContext>(options =>
        {
            var host = Environment.GetEnvironmentVariable("DB_HOST");
            var port = Environment.GetEnvironmentVariable("DB_PORT");
            var dtbs = Environment.GetEnvironmentVariable("DB_DB");
            var user = Environment.GetEnvironmentVariable("DB_USER");
            var pass = Environment.GetEnvironmentVariable("DB_PASS");
            
            // var conn = $"Server={host};Port={port};Database={dtbs};Uid={user};Pwd={pass};";
            var mybd = Environment.GetEnvironmentVariable("SQL_CONNECTION");
            options.UseSqlServer(mybd);
        });
    }
}