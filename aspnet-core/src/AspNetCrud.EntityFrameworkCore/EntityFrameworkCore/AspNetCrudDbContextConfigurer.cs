using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace AspNetCrud.EntityFrameworkCore
{
    public static class AspNetCrudDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<AspNetCrudDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<AspNetCrudDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
