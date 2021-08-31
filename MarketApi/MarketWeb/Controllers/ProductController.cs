using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Services.Models;
using Services.Models.ModelArgs;
using Services;
using Services.Models.ModelEntity;

namespace MarketApi.Controllers
{
    [Produces("application/json")]
    public class ProductController : ControllerBase
    {
        readonly ProductService productService;
        public ProductController(ProductService productService)
        {
            this.productService = productService;
        }
        
        [HttpGet]
        public async Task<Pagination<Product>> GetProducts(FilterProductArg filter , int page) 
        {
            return await productService.GetProductsAsync(filter ,page);
        }
    }
}
