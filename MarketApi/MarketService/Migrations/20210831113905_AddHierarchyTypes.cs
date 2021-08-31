using Microsoft.EntityFrameworkCore.Migrations;

namespace Services.Migrations
{
    public partial class AddHierarchyTypes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "TypeProduct");

            migrationBuilder.CreateTable(
                name: "HierarchyTypesProduct",
                schema: "TypeProduct",
                columns: table => new
                {
                    ChildId = table.Column<long>(type: "bigint", nullable: false),
                    ParentId = table.Column<long>(type: "bigint", nullable: false),
                    Id = table.Column<long>(type: "bigint", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HierarchyTypesProduct", x => new { x.ParentId, x.ChildId });
                    table.ForeignKey(
                        name: "FK_HierarchyTypesProduct_TypeProducts_ChildId",
                        column: x => x.ChildId,
                        principalTable: "TypeProducts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_HierarchyTypesProduct_TypeProducts_ParentId",
                        column: x => x.ParentId,
                        principalTable: "TypeProducts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_HierarchyTypesProduct_ChildId",
                schema: "TypeProduct",
                table: "HierarchyTypesProduct",
                column: "ChildId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "HierarchyTypesProduct",
                schema: "TypeProduct");
        }
    }
}
