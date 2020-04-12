using Microsoft.EntityFrameworkCore.Migrations;

namespace SP20.P05.Web.Migrations
{
    public partial class addingbucketqtytotickettable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "LargeBucketQty",
                table: "FarmFieldTickets",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "MediumBucketQty",
                table: "FarmFieldTickets",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SmallBucketQty",
                table: "FarmFieldTickets",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LargeBucketQty",
                table: "FarmFieldTickets");

            migrationBuilder.DropColumn(
                name: "MediumBucketQty",
                table: "FarmFieldTickets");

            migrationBuilder.DropColumn(
                name: "SmallBucketQty",
                table: "FarmFieldTickets");
        }
    }
}
