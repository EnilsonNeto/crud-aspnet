using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Abp.Application.Services;
using Abp.IdentityFramework;
using Abp.Runtime.Session;
using AspNetCrud.Authorization.Users;
using AspNetCrud.MultiTenancy;

namespace AspNetCrud
{
    /// <summary>
    /// Derive your application services from this class.
    /// </summary>
    public abstract class AspNetCrudAppServiceBase : ApplicationService
    {
        public TenantManager TenantManager { get; set; }

        public UserManager UserManager { get; set; }

        protected AspNetCrudAppServiceBase()
        {
            LocalizationSourceName = AspNetCrudConsts.LocalizationSourceName;
        }

        protected virtual async Task<User> GetCurrentUserAsync()
        {
            var user = await UserManager.FindByIdAsync(AbpSession.GetUserId().ToString());
            if (user == null)
            {
                throw new Exception("There is no current user!");
            }

            return user;
        }

        protected virtual Task<Tenant> GetCurrentTenantAsync(int tenantId = 1)
        {
            return TenantManager.GetByIdAsync(tenantId);
        }

        protected virtual void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
