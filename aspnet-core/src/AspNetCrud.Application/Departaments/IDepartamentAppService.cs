using Abp.Application.Services.Dto;
using Abp.Application.Services;
using AspNetCrud.Trucks.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AspNetCrud.Departaments.Dto;

namespace AspNetCrud.Departaments
{
    public interface IDepartamentAppService : IAsyncCrudAppService<DepartamentDto, Guid, PagedResultRequestDto, CreateDepartamentDto, DepartamentDto>
    {
    }
}
