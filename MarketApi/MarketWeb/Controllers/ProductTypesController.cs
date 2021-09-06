using Microsoft.AspNetCore.Mvc;
using Services;
using Services.Models;
using Services.Models.ModelEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MarketApi.Controllers
{
    public class ProductTypesController : ControllerBase
    {
        readonly TypeProductService typeProductService;
        public ProductTypesController(TypeProductService typeProductService)
        {
            this.typeProductService = typeProductService;
        }

        [HttpGet]
        public async Task<TreeItem<TypeProduct>[]> GetTypesTree()
        {
            return await typeProductService.GetTreeAllTypeProductsAsync();
        }
    }
}
