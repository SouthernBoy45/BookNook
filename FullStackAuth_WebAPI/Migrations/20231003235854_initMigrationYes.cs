using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace FullStackAuth_WebAPI.Migrations
{
    /// <inheritdoc />
    public partial class initMigrationYes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "46622b14-8e61-44ed-9231-9a395d7bb03d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "dfa4381b-65ee-44ab-8fa8-d54c4a663fc4");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "033c162e-d659-4bd4-ba70-c85efd4a9eb8", null, "Admin", "ADMIN" },
                    { "42dd4515-e8a3-4e1f-a10d-984da4a579ba", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "033c162e-d659-4bd4-ba70-c85efd4a9eb8");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "42dd4515-e8a3-4e1f-a10d-984da4a579ba");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "46622b14-8e61-44ed-9231-9a395d7bb03d", null, "Admin", "ADMIN" },
                    { "dfa4381b-65ee-44ab-8fa8-d54c4a663fc4", null, "User", "USER" }
                });
        }
    }
}
