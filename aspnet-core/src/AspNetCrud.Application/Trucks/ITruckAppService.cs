using Abp.Application.Services.Dto;
using Abp.Application.Services;
using System;
using AspNetCrud.Trucks.Dto;
using System.Threading.Tasks;

namespace AspNetCrud.Trucks
{
    public interface ITruckAppService : IAsyncCrudAppService<TruckDto, Guid, PagedResultRequestDto, CreateTruckDto, TruckDto>
    {
        Task<ListResultDto<TruckDto>> GetListByEmployeeId(Guid employeeId);
    }
}
