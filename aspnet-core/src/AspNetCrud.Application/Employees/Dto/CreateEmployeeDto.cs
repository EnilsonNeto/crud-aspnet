using Abp.AutoMapper;
using System;
using System.ComponentModel.DataAnnotations;

namespace AspNetCrud.Employees.Dto
{
    [AutoMap(typeof(Employee))]
    public class CreateEmployeeDto
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

        public Guid? TruckId { get; set; }

        public Guid DepartamentId { get; set; }
    }
}
