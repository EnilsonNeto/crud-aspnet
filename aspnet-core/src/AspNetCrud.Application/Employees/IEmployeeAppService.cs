using Abp.Application.Services;
using Abp.Application.Services.Dto;
using AspNetCrud.Employees.Dto;
using AspNetCrud.Trucks.Dto;
using System;
using System.Threading.Tasks;

namespace AspNetCrud.Employees
{
    public interface IEmployeeAppService: IAsyncCrudAppService<EmployeeDto, Guid, PagedResultRequestDto, CreateEmployeeDto, EmployeeDto>
    {
        EmployeeUserDto AddUser(CreateEmployeeUserDto employeeUser);
        EmployeeUserDto GetUser(Guid employeeId);
        Task<ListResultDto<EmployeeDto>> GetListByDepartamentId(Guid departamentId);
    }

}
