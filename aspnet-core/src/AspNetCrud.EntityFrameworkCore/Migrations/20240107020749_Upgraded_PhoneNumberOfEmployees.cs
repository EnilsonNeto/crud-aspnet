using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AspNetCrud.Migrations
{
    public partial class Upgraded_PhoneNumberOfEmployees : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PhoneNumber",
                table: "AppEmployees",
                type: "nvarchar(24)",
                maxLength: 24,
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PhoneNumber",
                table: "AppEmployees");
        }
    }
}
