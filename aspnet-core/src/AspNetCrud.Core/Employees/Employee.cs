using Abp.Domain.Entities.Auditing;
using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace AspNetCrud.Employees
{
    using Departaments;
    using Trucks;

    [Table("AppEmployees")]
    public class Employee : FullAuditedEntity<Guid>
    {
        public const int MaxNameLength = 456;
        public const int MaxSurnameLength = 456;
        public const int MaxAgeLength = 3;
        public const int MaxSSNLength = 24;
        public const int MaxRGLength = 24;
        public const int MaxCEPLength = 36;
        public const int MaxStreetLength = 1080;
        public const int MaxNeighborhoodLength = 1080;
        public const int MaxNumberOfHouseLength = 10;
        public const int MaxComplementLength = 1080;

        public string ImagesUrl { get; set; }

        public bool isActive { get; set; }

        [Required]
        [StringLength(MaxNameLength)]
        public string Name { get; set; }

        [Required]
        [StringLength(MaxSurnameLength)]
        public string Surname { get; set; }

        [Required]
        [StringLength(MaxAgeLength)]
        public string Age { get; set; }

        [Required]
        public DateTime DateOfBirth { get; set; }

        [Required]
        [StringLength(MaxSSNLength)]
        public string SSN { get; set; }

        [Required]
        [StringLength(MaxRGLength)]
        public string RG { get; set; }

        [Required]
        [StringLength(MaxCEPLength)]
        public string CEP { get; set; }

        [Required]
        [StringLength(MaxStreetLength)]
        public string Street { get; set; }

        [Required]
        [StringLength(MaxNeighborhoodLength)]
        public string Neighborhood { get; set; }

        [Required]
        [StringLength(MaxNumberOfHouseLength)]
        public string NumberOfHouse { get; set; }

        [Required]
        [StringLength(MaxComplementLength)]
        public string Complement { get; set; }

        public Guid DepartamentId { get; set; }
        public virtual Departament Departament { get; set; }

        public virtual ICollection<Truck> Trucks { get; set; }

    }
}
