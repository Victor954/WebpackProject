using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace Services.Migrations
{
    public partial class ExtensionProduct : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Photo",
                table: "Products",
                newName: "PhotoOld");

            migrationBuilder.CreateTable(
                name: "CategoriesProducts",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CategoryCode = table.Column<string>(type: "text", nullable: true),
                    CategoryName = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoriesProducts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ParametersProducts",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CodeParameter = table.Column<string>(type: "text", nullable: true),
                    ValueParameter = table.Column<string>(type: "text", nullable: true),
                    ProductId = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ParametersProducts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ParametersProducts_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CategoriesProductProduct",
                columns: table => new
                {
                    CategoriesProductsId = table.Column<long>(type: "bigint", nullable: false),
                    ProductsId = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoriesProductProduct", x => new { x.CategoriesProductsId, x.ProductsId });
                    table.ForeignKey(
                        name: "FK_CategoriesProductProduct_CategoriesProducts_CategoriesProdu~",
                        column: x => x.CategoriesProductsId,
                        principalTable: "CategoriesProducts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CategoriesProductProduct_Products_ProductsId",
                        column: x => x.ProductsId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CategoriesProductProduct_ProductsId",
                table: "CategoriesProductProduct",
                column: "ProductsId");

            migrationBuilder.CreateIndex(
                name: "IX_ParametersProducts_ProductId",
                table: "ParametersProducts",
                column: "ProductId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CategoriesProductProduct");

            migrationBuilder.DropTable(
                name: "ParametersProducts");

            migrationBuilder.DropTable(
                name: "CategoriesProducts");

            migrationBuilder.RenameColumn(
                name: "PhotoOld",
                table: "Products",
                newName: "Photo");
        }
    }
}
