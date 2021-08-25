using System;
using Services.Models;
using Services.Models.ModelArgs;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Linq;

namespace Services
{
    public class ProductService : SerivceBase
    {
        public ProductService(MarketContext context) : base(context)
        { }

        public async Task<Pagination<Product>> GetProductsAsync(FilterProductArg filter , int page , int countAtPage = 20) 
        {
            var filteredProducts = GetFilteredData(filter);

            var count = filteredProducts.Count();
            var pageCount = (int)Math.Floor((double)count / countAtPage);
            var skip = (page - 1) * countAtPage;

            return new Pagination<Product>()
            {
                Page = page,
                PageCount = pageCount,
                Count = count,
                Data = filteredProducts.Skip(skip).Take(countAtPage).ToArray()
            };
        }

        private IQueryable<Product> GetFilteredData(FilterProductArg filter) 
        {
            var products = Enumerable.Range(1, 200).Select(number => new Product{
                Id = number,
                Title = $"Title{number}",
                Discription = $"Discription{number}",
                Price = number * 100,
                Photo = 0
            });

            return //db.Products
                products.Where(product => product.Title.Contains(filter.Title ?? string.Empty)).AsQueryable();
        }
    }
}
