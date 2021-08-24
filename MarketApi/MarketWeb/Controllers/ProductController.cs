using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Services.Models;
using Services;

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
        public async Task<Product[]> GetProducts() 
        {
            return await productService.GetProductsAsync();
        }
    }
}
