using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using AspNetCrud.Configuration;

namespace AspNetCrud.Web.Host.Startup
{
    [DependsOn(
       typeof(AspNetCrudWebCoreModule))]
    public class AspNetCrudWebHostModule: AbpModule
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public AspNetCrudWebHostModule(IWebHostEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(AspNetCrudWebHostModule).GetAssembly());
        }
    }
}
