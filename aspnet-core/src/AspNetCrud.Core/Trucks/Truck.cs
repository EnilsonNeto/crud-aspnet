using Abp.Domain.Entities.Auditing;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AspNetCrud.Trucks
{
    using Employees;

    [Table("AppTrucks")]
    public class Truck : FullAuditedEntity<Guid>
    {
        public const int MaxVehicleLicensePlateLength = 12;

        [Required]
        [StringLength(MaxVehicleLicensePlateLength)]
        public string VehicleLicensePlate { get; set; }

        public bool InTransit { get; set; }

        public Guid? EmployeeId { get; set; }

        public virtual Employee Employee { get; set; }

        public string ImagesUrl { get; set; }
    }
}
