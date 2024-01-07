using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AspNetCrud.Migrations
{
    public partial class Upgraded_EmailOfEmployees : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "AppEmployees",
                type: "nvarchar(456)",
                maxLength: 456,
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "AppEmployees");
        }
    }
}
