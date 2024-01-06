using Abp.Application.Services;
using AspNetCrud.MultiTenancy.Dto;

namespace AspNetCrud.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

