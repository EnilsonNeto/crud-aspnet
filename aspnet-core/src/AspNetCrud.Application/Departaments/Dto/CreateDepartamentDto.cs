using Abp.AutoMapper;
using System.ComponentModel.DataAnnotations;

namespace AspNetCrud.Departaments.Dto
{
    [AutoMap(typeof(Departament))]
    public class CreateDepartamentDto
    {
        [Required]
        [StringLength(Departament.MaxTypeLength)]
        public string Type { get; set; }

        [StringLength(Departament.MaxDescriptionLength)]
        public string Description { get; set; }

    }
}
