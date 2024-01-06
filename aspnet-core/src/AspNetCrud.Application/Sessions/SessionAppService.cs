using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Abp.Auditing;
using Abp.Domain.Repositories;
using AspNetCrud.Sessions.Dto;

namespace AspNetCrud.Sessions
{
    using Authorization.Roles;
    using Authorization.Users;
    using Employees;
    using System.Linq;

    public class SessionAppService : AspNetCrudAppServiceBase, ISessionAppService
    {
        private readonly IRepository<EmployeeUser, Guid> _employeeUserRepository;
        private readonly RoleManager _roleManager;
        private readonly IRepository<User, long> _userRepository;

        public SessionAppService(RoleManager roleManager,
                         IRepository<User, long> userRepository,
                         IRepository<EmployeeUser, Guid> employeeUserRepository)
        {
            _roleManager = roleManager;
            _userRepository = userRepository;
            _employeeUserRepository = employeeUserRepository;
        }

        [DisableAuditing]
        public async Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations()
        {
            var output = new GetCurrentLoginInformationsOutput
            {
                Application = new ApplicationInfoDto
                {
                    Version = AppVersionHelper.Version,
                    ReleaseDate = AppVersionHelper.ReleaseDate,
                    Features = new Dictionary<string, bool>()
                }
            };
            output.Tenant = ObjectMapper.Map<TenantLoginInfoDto>(await GetCurrentTenantAsync(AbpSession.TenantId.HasValue ? AbpSession.TenantId.Value : 1));

            if (AbpSession.TenantId.HasValue)
            {
                output.Tenant = ObjectMapper.Map<TenantLoginInfoDto>(await GetCurrentTenantAsync());
            }

            if (AbpSession.UserId.HasValue)
            {
                output.User = MapToEntityDto(_userRepository.GetAllIncluding(prop => prop.Roles).FirstOrDefault(prop => prop.Id == AbpSession.UserId.Value));

                var employeeUser = _employeeUserRepository.FirstOrDefault(prop => prop.UserId == AbpSession.UserId.Value);
                if (employeeUser != null && employeeUser.UserId > 0)
                    output.EmployeeId = employeeUser.EmployeeId;

            }

            return output;
        }

        private UserLoginInfoDto MapToEntityDto(User user)
        {
            var roles = user.Roles.Select(r => r.RoleId);
            var userDto = ObjectMapper.Map<UserLoginInfoDto>(user);
            if (roles.Count() > 0)
            {
                var roleNames = _roleManager.Roles.Where(r => roles.Any(id => id == r.Id)).Select(prop => prop.Name.ToUpper()).ToArray();
                userDto.RoleNames = roleNames;
            }
            return userDto;
        }
    }
}
