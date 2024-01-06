using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using AspNetCrud.Departaments.Dto;
using AspNetCrud.Employees;
using AutoMapper;
using System;

namespace AspNetCrud.Departaments
{
    public class DepartamentAppService : AsyncCrudAppService<Departament, DepartamentDto, Guid, PagedResultRequestDto, CreateDepartamentDto, DepartamentDto>, IDepartamentAppService
    {
        private readonly IMapper _mapper;
        private readonly IRepository<Departament, Guid> _departamentRepository;

        public DepartamentAppService(IRepository<Departament, Guid> departamentRepository,
                                        IMapper mapper) : base(departamentRepository)
        {
            _departamentRepository = departamentRepository;
            _mapper = mapper;
        }
    }
}
