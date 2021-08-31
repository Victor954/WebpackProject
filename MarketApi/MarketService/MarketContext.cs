using System;
using Microsoft.EntityFrameworkCore;
using Services.Models.ModelEntity;

namespace Services
{
    public class MarketContext : DbContext
    {
        public MarketContext(DbContextOptions<MarketContext> options) : base(options) 
        { }

        public DbSet<Product> Products { get; set; }
        public DbSet<CategoriesProduct> CategoriesProducts { get; set; }

        public DbSet<ParametersProduct> ParametersProducts { get; set; }
        public DbSet<TypeProduct> TypeProducts { get; set; }
        public DbSet<HierarchyTypesProduct> HierarchyTypesProducts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            #region Иерархия Типов продукта

            modelBuilder.Entity<HierarchyTypesProduct>().ToTable("HierarchyTypesProduct", "TypeProduct");

            modelBuilder.Entity<HierarchyTypesProduct>().HasKey(entity => new { entity.ParentId, entity.ChildId });
            modelBuilder.Entity<HierarchyTypesProduct>().
                HasOne(ce => ce.Parent).
                WithMany(c => c.Children).
                HasForeignKey(ce => ce.ParentId);
            modelBuilder.Entity<HierarchyTypesProduct>().
                HasOne(ce => ce.Child).
                WithMany(c => c.Parents).
                HasForeignKey(ce => ce.ChildId);

            #endregion
        }
    }
}
