using System.Threading.Tasks;
using Abp.Application.Services;
using AspNetCrud.Authorization.Accounts.Dto;

namespace AspNetCrud.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
