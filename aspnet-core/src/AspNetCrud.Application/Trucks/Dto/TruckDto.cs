using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.ComponentModel.DataAnnotations;

namespace AspNetCrud.Trucks.Dto
{
    using Employees;

    [AutoMap(typeof(Truck))]
    public class TruckDto: FullAuditedEntityDto<Guid>
    {
        [Required]
        [StringLength(Truck.MaxVehicleLicensePlateLength)]
        public string VehicleLicensePlate { get; set; }

        public bool InTransit { get; set; }

        public Guid? EmployeeId { get; set; }

        public virtual Employee Employee { get; set; }

        public string ImagesUrl { get; set; }
    }
}
