using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using AspNetCrud.Configuration.Dto;

namespace AspNetCrud.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : AspNetCrudAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
