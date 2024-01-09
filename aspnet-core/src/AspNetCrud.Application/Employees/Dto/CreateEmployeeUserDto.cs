using Abp.AutoMapper;
using System;

namespace AspNetCrud.Employees.Dto
{
    [AutoMap(typeof(EmployeeUser))]
    public class CreateEmployeeUserDto
    {
        public Guid EmployeeId { get; set; }
        public long UserId { get; set; }
    }
}
