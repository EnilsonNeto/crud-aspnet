using Abp.Application.Services.Dto;
using Abp.Application.Services;
using Abp.Domain.Repositories;
using AutoMapper;
using System;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace AspNetCrud.Trucks
{
    using Dto;

    public class TruckAppService : AsyncCrudAppService<Truck, TruckDto, Guid, PagedResultRequestDto, CreateTruckDto, TruckDto>, ITruckAppService
    {
        private readonly IMapper _mapper;
        private readonly IRepository<Truck, Guid> _truckRepository;

        public TruckAppService(IRepository<Truck, Guid> truckRepository,
                                        IMapper mapper) : base(truckRepository)
        {
            _truckRepository = truckRepository;
            _mapper = mapper;
        }

        public async Task<ListResultDto<TruckDto>> GetListByEmployeeId(Guid employeeId)
        {
            var result = await _truckRepository.GetAllListAsync(prop => prop.EmployeeId.Equals(employeeId));

            return new ListResultDto<TruckDto>(_mapper.Map<List<TruckDto>>(result));
        }
    }
}
