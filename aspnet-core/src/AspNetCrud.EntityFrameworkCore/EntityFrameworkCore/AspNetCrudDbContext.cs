using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using AspNetCrud.Authorization.Roles;
using AspNetCrud.Authorization.Users;
using AspNetCrud.MultiTenancy;

namespace AspNetCrud.EntityFrameworkCore
{
    using AspNetCrud.Departaments;
    using AspNetCrud.Trucks;
    using Employees;
    public class AspNetCrudDbContext : AbpZeroDbContext<Tenant, Role, User, AspNetCrudDbContext>
    {
        public DbSet<Employee> Employeets { get; set; }
        public DbSet<EmployeeUser> EmployeeUsers { get; set; }
        public DbSet<Truck> Trucks { get; set; }
        public DbSet<Departament> Departaments { get; set; }

        public AspNetCrudDbContext(DbContextOptions<AspNetCrudDbContext> options)
            : base(options)
        {
        }
    }
}
