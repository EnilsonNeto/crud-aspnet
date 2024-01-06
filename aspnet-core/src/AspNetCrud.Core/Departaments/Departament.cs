using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;


namespace AspNetCrud.Departaments
{
    using Employees;

    [Table("AppDepartament")]
    public class Departament: FullAuditedEntity<Guid>
    {
        public const int MaxTypeLength = 264;
        public const int MaxDescriptionLength = 264;

        [Required]
        [StringLength(MaxTypeLength)]
        public string Type { get; set; }

        [StringLength(MaxDescriptionLength)]
        public string Description  { get; set; }

        public virtual ICollection<Employee> Employees { get; set; }
    }
}
