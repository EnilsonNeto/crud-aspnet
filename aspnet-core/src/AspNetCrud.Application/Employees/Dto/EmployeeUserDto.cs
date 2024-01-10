using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using AspNetCrud.Authorization.Users;
using System;

namespace AspNetCrud.Employees.Dto
{
    [AutoMap(typeof(EmployeeUser))]
    public class EmployeeUserDto: FullAuditedEntityDto<Guid>
    {
        public Guid EmployeeId { get; set; }
        public virtual Employee Employee { get; set; }
        public long UserId { get; set; }
        public virtual User User { get; set; }
    }
}
