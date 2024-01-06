using System.ComponentModel.DataAnnotations;

namespace AspNetCrud.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}