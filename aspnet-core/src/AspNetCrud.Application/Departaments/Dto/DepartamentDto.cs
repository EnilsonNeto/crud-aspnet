using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using AspNetCrud.Employees;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AspNetCrud.Departaments.Dto
{
    [AutoMap(typeof(Departament))]
    public class DepartamentDto: FullAuditedEntityDto<Guid>
    {
        [Required]
        [StringLength(Departament.MaxTypeLength)]
        public string Type { get; set; }

        [StringLength(Departament.MaxDescriptionLength)]
        public string Description { get; set; }

        public List<Employee> Employees { get; set; }
    }
}
