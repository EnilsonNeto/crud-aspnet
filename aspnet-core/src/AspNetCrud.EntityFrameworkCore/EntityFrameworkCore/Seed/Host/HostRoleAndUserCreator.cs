using System.Linq;
using Microsoft.EntityFrameworkCore;
using Abp.Authorization;
using Abp.Authorization.Roles;
using Abp.Authorization.Users;
using Abp.MultiTenancy;
using AspNetCrud.Authorization;
using AspNetCrud.Authorization.Roles;
using AspNetCrud.Authorization.Users;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;

namespace AspNetCrud.EntityFrameworkCore.Seed.Host
{
    public class HostRoleAndUserCreator
    {
        private readonly AspNetCrudDbContext _context;

        public HostRoleAndUserCreator(AspNetCrudDbContext context)
        {
            _context = context;
        }

        public void Create()
        {
            CreateHostRoleAndUsers();
        }

        private void CreateHostRoleAndUsers()
        {
            // Admin role for host

            var adminRoleForHost = _context.Roles.IgnoreQueryFilters().FirstOrDefault(r => r.TenantId == null && r.Name == StaticRoleNames.Host.Admin);
            if (adminRoleForHost == null)
            {
                adminRoleForHost = _context.Roles.Add(new Role(null, StaticRoleNames.Host.Admin, StaticRoleNames.Host.Admin) { IsStatic = true, IsDefault = true }).Entity;
                _context.SaveChanges();
            }
            var humanResourcesRoleForHost = _context.Roles.IgnoreQueryFilters().FirstOrDefault(r => r.TenantId == null && r.Name == StaticRoleNames.Host.HumanResources);
            if (humanResourcesRoleForHost == null)
            {
                humanResourcesRoleForHost = _context.Roles.Add(new Role(null, StaticRoleNames.Host.HumanResources, StaticRoleNames.Host.HumanResourcesPresentationName) { IsStatic = true, IsDefault = true }).Entity;
                _context.SaveChanges();
            }
            var humanResourcesRoleForDefaultTenant = _context.Roles.IgnoreQueryFilters().FirstOrDefault(r => r.TenantId == AspNetCrudConsts.DefaultTenancyId && r.Name == StaticRoleNames.Host.HumanResources);
            if (humanResourcesRoleForDefaultTenant == null)
            {
                humanResourcesRoleForDefaultTenant = _context.Roles.Add(new Role(AspNetCrudConsts.DefaultTenancyId, StaticRoleNames.Host.HumanResources, StaticRoleNames.Host.HumanResourcesPresentationName) { IsStatic = true, IsDefault = true }).Entity;
                _context.SaveChanges();
            }
            var driverForRoleForHost = _context.Roles.IgnoreQueryFilters().FirstOrDefault(r => r.TenantId == null && r.Name == StaticRoleNames.Host.Driver);
            if (driverForRoleForHost == null)
            {
                driverForRoleForHost = _context.Roles.Add(new Role(null, StaticRoleNames.Host.Driver, StaticRoleNames.Host.DriverPresentationName) { IsStatic = true, IsDefault = true }).Entity;
                _context.SaveChanges();
            }
            var driverRoleForDefaultTenant = _context.Roles.IgnoreQueryFilters().FirstOrDefault(r => r.TenantId == AspNetCrudConsts.DefaultTenancyId && r.Name == StaticRoleNames.Host.Driver);
            if (driverRoleForDefaultTenant == null)
            {
                driverRoleForDefaultTenant = _context.Roles.Add(new Role(AspNetCrudConsts.DefaultTenancyId, StaticRoleNames.Host.Driver, StaticRoleNames.Host.DriverPresentationName) { IsStatic = true, IsDefault = true }).Entity;
                _context.SaveChanges();
            }

            // Grant all permissions to admin role for host
            var grantedPermissions = _context.Permissions.IgnoreQueryFilters()
                .OfType<RolePermissionSetting>()
                .Where(
                    p => p.TenantId == null && p.RoleId == adminRoleForHost.Id
                    && (
                        p.Name == PermissionNames.Pages_Roles ||
                        p.Name == PermissionNames.Pages_Users ||
                        p.Name == PermissionNames.Pages_Tenants ||
                        p.Name == PermissionNames.Pages_Employees ||
                        p.Name == PermissionNames.Pages_Departaments ||
                        p.Name == PermissionNames.Pages_Trucks 

                ))
                .Select(p => p.Name)
                .Distinct()
                .ToList();

            var permissions = PermissionFinder
                .GetAllPermissions(new AspNetCrudAuthorizationProvider())
                .Where(p => p.MultiTenancySides.HasFlag(MultiTenancySides.Host) &&
                            !grantedPermissions.Contains(p.Name)
                             && (
                        p.Name == PermissionNames.Pages_Roles ||
                        p.Name == PermissionNames.Pages_Users ||
                        p.Name == PermissionNames.Pages_Tenants ||
                        p.Name == PermissionNames.Pages_Employees ||
                        p.Name == PermissionNames.Pages_Departaments ||
                        p.Name == PermissionNames.Pages_Trucks))

                  .ToList();

            if (permissions.Any())
            {
                _context.Permissions.AddRange(
                    permissions.Select(permission => new RolePermissionSetting
                    {
                        TenantId = null,
                        Name = permission.Name,
                        IsGranted = true,
                        RoleId = adminRoleForHost.Id
                    })
                );
                _context.SaveChanges();
            }

            // Grant all permissions to resouces Humans role for host

            var grantedPermissionsRh = _context.Permissions.IgnoreQueryFilters()
            .OfType<RolePermissionSetting>()
            .Where(
               p => p.TenantId == null && p.RoleId == humanResourcesRoleForHost.Id
            && (
            p.Name == PermissionNames.Pages_Employees ||
            p.Name == PermissionNames.Pages_Trucks))
            .Select(p => p.Name)
            .Distinct()
            .ToList();

            var permissionsResourcesHumans = PermissionFinder
                .GetAllPermissions(new AspNetCrudAuthorizationProvider())
                .Where(p => p.MultiTenancySides.HasFlag(MultiTenancySides.Host) &&
                            !grantedPermissions.Contains(p.Name)
                             && (
                        p.Name == PermissionNames.Pages_Employees ||
                        p.Name == PermissionNames.Pages_Trucks))

                  .ToList();

            if (permissionsResourcesHumans.Any())
            {
                _context.Permissions.AddRange(
                    permissionsResourcesHumans.Select(permission => new RolePermissionSetting
                    {
                        TenantId = null,
                        Name = permission.Name,
                        IsGranted = true,
                        RoleId = adminRoleForHost.Id
                    })
                );
                _context.SaveChanges();
            }

            // Grant all permissions to Driver role for host

            var grantedPermissionsDriver = _context.Permissions.IgnoreQueryFilters()
            .OfType<RolePermissionSetting>()
            .Where(
            p => p.TenantId == null && p.RoleId == driverForRoleForHost.Id
            && (
            p.Name == PermissionNames.Pages_Trucks

            ))
            .Select(p => p.Name)
            .Distinct()
            .ToList();

            var permissionsDriver = PermissionFinder
                .GetAllPermissions(new AspNetCrudAuthorizationProvider())
                .Where(p => p.MultiTenancySides.HasFlag(MultiTenancySides.Host) &&
                            !grantedPermissions.Contains(p.Name)
                             && (
                        p.Name == PermissionNames.Pages_Trucks))

                  .ToList();

            if (permissionsDriver.Any())
            {
                _context.Permissions.AddRange(
                    permissionsDriver.Select(permission => new RolePermissionSetting
                    {
                        TenantId = null,
                        Name = permission.Name,
                        IsGranted = true,
                        RoleId = adminRoleForHost.Id
                    })
                );
                _context.SaveChanges();
            }

            // Admin user for host

            var adminUserForHost = _context.Users.IgnoreQueryFilters().FirstOrDefault(u => u.TenantId == null && u.UserName == AbpUserBase.AdminUserName);
            if (adminUserForHost == null)
            {
                var user = new User
                {
                    TenantId = null,
                    UserName = AbpUserBase.AdminUserName,
                    Name = "admin",
                    Surname = "admin",
                    EmailAddress = "admin@aspnetboilerplate.com",
                    IsEmailConfirmed = true,
                    IsActive = true
                };

                user.Password = new PasswordHasher<User>(new OptionsWrapper<PasswordHasherOptions>(new PasswordHasherOptions())).HashPassword(user, "123qwe");
                user.SetNormalizedNames();

                adminUserForHost = _context.Users.Add(user).Entity;
                _context.SaveChanges();

                // Assign Admin role to admin user
                _context.UserRoles.Add(new UserRole(null, adminUserForHost.Id, adminRoleForHost.Id));
                _context.SaveChanges();

                _context.SaveChanges();
            }
        }
    }
}
