using System;
using Services.Models;
using Microsoft.EntityFrameworkCore;

namespace Services
{
    public class MarketContext : DbContext
    {
        public MarketContext(DbContextOptions<MarketContext> options) : base(options) 
        { }

        public DbSet<Product> Products { get; set; }
    }
}
