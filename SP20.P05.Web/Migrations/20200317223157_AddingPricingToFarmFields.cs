using Microsoft.EntityFrameworkCore.Migrations;

namespace SP20.P05.Web.Migrations
{
    public partial class AddingPricingToFarmFields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "PriceLargeBucket",
                table: "FarmFields",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "PriceMediumBucket",
                table: "FarmFields",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "PriceSmallBucket",
                table: "FarmFields",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PriceLargeBucket",
                table: "FarmFields");

            migrationBuilder.DropColumn(
                name: "PriceMediumBucket",
                table: "FarmFields");

            migrationBuilder.DropColumn(
                name: "PriceSmallBucket",
                table: "FarmFields");
        }
    }
}
