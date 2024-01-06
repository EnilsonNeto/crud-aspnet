using Abp.Application.Services.Dto;
using System;
using System.ComponentModel.DataAnnotations;
using Abp.AutoMapper;
using System.Collections.Generic;

namespace AspNetCrud.Employees.Dto
{
    using Trucks.Dto;
    using Departaments;

    [AutoMap(typeof(Employee))]

    public class EmployeeDto: FullAuditedEntityDto<Guid>
    {
        public string ImagesUrl { get; set; }

        public bool isActive { get; set; }

        [Required]
        [StringLength(Employee.MaxNameLength)]
        public string Name { get; set; }

        [Required]
        [StringLength(Employee.MaxSurnameLength)]
        public string Surname { get; set; }

        [Required]
        [StringLength(Employee.MaxAgeLength)]
        public string Age { get; set; }

        [Required]
        public DateTime DateOfBirth { get; set; }

        [Required]
        [StringLength(Employee.MaxSSNLength)]
        public string SSN { get; set; }

        [Required]
        [StringLength(Employee.MaxRGLength)]
        public string RG { get; set; }

        [Required]
        [StringLength(Employee.MaxCEPLength)]
        public string CEP { get; set; }

        [Required]
        [StringLength(Employee.MaxStreetLength)]
        public string Street { get; set; }

        [Required]
        [StringLength(Employee.MaxNeighborhoodLength)]
        public string Neighborhood { get; set; }

        [Required]
        [StringLength(Employee.MaxNumberOfHouseLength)]
        public string NumberOfHouse { get; set; }

        [Required]
        [StringLength(Employee.MaxComplementLength)]
        public string Complement { get; set; }

        public List<TruckDto> Trucks { get; set; }

        public Guid DepartamentId { get; set; }
        public virtual Departament Departament { get; set; }
    }
}
