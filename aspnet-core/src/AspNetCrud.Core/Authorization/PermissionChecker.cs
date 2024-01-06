using Abp.Authorization;
using AspNetCrud.Authorization.Roles;
using AspNetCrud.Authorization.Users;

namespace AspNetCrud.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
