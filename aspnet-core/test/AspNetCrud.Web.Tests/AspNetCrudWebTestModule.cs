using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using AspNetCrud.EntityFrameworkCore;
using AspNetCrud.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace AspNetCrud.Web.Tests
{
    [DependsOn(
        typeof(AspNetCrudWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class AspNetCrudWebTestModule : AbpModule
    {
        public AspNetCrudWebTestModule(AspNetCrudEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(AspNetCrudWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(AspNetCrudWebMvcModule).Assembly);
        }
    }
}