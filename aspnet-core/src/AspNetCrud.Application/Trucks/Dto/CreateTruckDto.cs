using Abp.AutoMapper;
using System;
using System.ComponentModel.DataAnnotations;

namespace AspNetCrud.Trucks.Dto
{
    [AutoMap(typeof(Truck))]
    public class CreateTruckDto
    {
        [Required]
        [StringLength(Truck.MaxVehicleLicensePlateLength)]
        public string VehicleLicensePlate { get; set; }

        public bool InTransit { get; set; }

        public Guid? EmployeeId { get; set; }

        public string ImagesUrl { get; set; }
    }
}
