using System.Threading.Tasks;
using AspNetCrud.Models.TokenAuth;
using AspNetCrud.Web.Controllers;
using Shouldly;
using Xunit;

namespace AspNetCrud.Web.Tests.Controllers
{
    public class HomeController_Tests: AspNetCrudWebTestBase
    {
        [Fact]
        public async Task Index_Test()
        {
            await AuthenticateAsync(null, new AuthenticateModel
            {
                UserNameOrEmailAddress = "admin",
                Password = "123qwe"
            });

            //Act
            var response = await GetResponseAsStringAsync(
                GetUrl<HomeController>(nameof(HomeController.Index))
            );

            //Assert
            response.ShouldNotBeNullOrEmpty();
        }
    }
}