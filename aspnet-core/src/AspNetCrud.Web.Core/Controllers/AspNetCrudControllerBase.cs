using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace AspNetCrud.Controllers
{
    public abstract class AspNetCrudControllerBase: AbpController
    {
        protected AspNetCrudControllerBase()
        {
            LocalizationSourceName = AspNetCrudConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
