using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using AspNetCrud.Authorization.Roles;
using AspNetCrud.Authorization.Users;
using AspNetCrud.MultiTenancy;

namespace AspNetCrud.EntityFrameworkCore
{
    public class AspNetCrudDbContext : AbpZeroDbContext<Tenant, Role, User, AspNetCrudDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public AspNetCrudDbContext(DbContextOptions<AspNetCrudDbContext> options)
            : base(options)
        {
        }
    }
}
