using System.Threading.Tasks;
using Abp.Application.Services;
using AspNetCrud.Sessions.Dto;

namespace AspNetCrud.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
