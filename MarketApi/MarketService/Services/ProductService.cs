using System;
using Services.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Services
{
    public class ProductService : SerivceBase
    {
        public ProductService(MarketContext context) : base(context)
        { }

        public async Task<Product[]> GetProductsAsync() 
        {
            return await db.Products.ToArrayAsync();
        }
    }
}
