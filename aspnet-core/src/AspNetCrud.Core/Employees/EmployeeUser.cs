using Abp.Domain.Entities.Auditing;
using AspNetCrud.Authorization.Users;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace AspNetCrud.Employees
{
    [Table("AppEmployeeUser")]
    public class EmployeeUser: FullAuditedEntity<Guid>
    {
        public Guid EmployeeId { get; set; }
        public virtual Employee Employee { get; set; }
        public long UserId { get; set; }
        public virtual User User { get; set; }
    }
}
