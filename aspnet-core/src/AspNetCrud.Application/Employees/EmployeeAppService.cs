using Abp.Application.Services.Dto;
using Abp.Application.Services;
using Abp.Domain.Repositories;
using AutoMapper;
using System;
using AspNetCrud.Employees.Dto;
using Abp.Authorization;
using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic;

namespace AspNetCrud.Employees
{
    public class EmployeeAppService : AsyncCrudAppService<Employee, EmployeeDto, Guid, PagedResultRequestDto, CreateEmployeeDto, EmployeeDto>, IEmployeeAppService
    {
        private readonly IMapper _mapper;
        private IRepository<EmployeeUser, Guid> _employeeUserRepository;
        private readonly IRepository<Employee, Guid> _employeeRepository;

        public EmployeeAppService(IRepository<Employee, Guid> employeeRepository,
                                        IRepository<EmployeeUser, Guid> employeeUserRepository,
                                        IMapper mapper) : base(employeeRepository)
        {
            _employeeRepository = employeeRepository;
            _employeeUserRepository = employeeUserRepository;
            _mapper = mapper;
        }

        [AbpAllowAnonymous]
        public override async Task<EmployeeDto> CreateAsync(CreateEmployeeDto input)
        {
            var employee = await Repository.InsertAsync(_mapper.Map<Employee>(input));

            return _mapper.Map<EmployeeDto>(employee);
        }
        [AbpAllowAnonymous]
        public EmployeeUserDto AddUser(CreateEmployeeUserDto employeeUser)
        {
            var model = _mapper.Map<EmployeeUser>(employeeUser);

            var result = _employeeUserRepository.Insert(model);

            return _mapper.Map<EmployeeUserDto>(result);
        }
        [AbpAuthorize]
        public EmployeeUserDto GetUser(Guid employeeId)
        {
            var result = _employeeUserRepository.GetAllIncluding(prop => prop.Employee, prop => prop.User)
                                                .FirstOrDefault(prop => prop.EmployeeId == employeeId);

            return _mapper.Map<EmployeeUserDto>(result);
        }

        public async Task<ListResultDto<EmployeeDto>> GetListByDepartamentId(Guid departamentId)
        {
            var result = await _employeeRepository.GetAllListAsync(prop => prop.DepartamentId.Equals(departamentId));

            return new ListResultDto<EmployeeDto>(_mapper.Map<List<EmployeeDto>>(result));
        }
    }
}
