using System.Threading.Tasks;
using AspNetCrud.Configuration.Dto;

namespace AspNetCrud.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
