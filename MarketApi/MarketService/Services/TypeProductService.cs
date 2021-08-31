using System;
using System.Linq;
using Services.Models.ModelEntity;
using Services.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Services
{
    public class TypeProductService : SerivceBase
    {
        public TypeProductService(MarketContext context) : base(context)
        { }

        public async Task<TypeProduct[]> GetAllTypeProducts() 
        {
            return await db.TypeProducts.ToArrayAsync();
        }

        public async Task<TypeProduct[]> GetAllTypeProductsChildrenInclude() 
        {
            return await db.TypeProducts
                .Include(type => type.Children)
                .ToArrayAsync();
        }

        public async Task<TypeProduct[]> GetAllTypeProductsParentsInclude() 
        {
            return await db.TypeProducts
                .Include(type => type.Parents)
                .ToArrayAsync();
        }

        public async Task<TypeProduct[]> GetAllTypeProductsFullInclude() 
        {
            return await db.TypeProducts
                .Include(type => type.Children)
                .Include(type => type.Parents)
                .ToArrayAsync();
        }

        public async Task<TreeItem<TypeProduct>[]> GetTreeAllTypeProducts() 
        {
            var typesProducts = await GetAllTypeProductsChildrenInclude();

            /*return typesProducts
                .Select(type => 
                    new TreeItem<TypeProduct>(type.Children.Select(hierarhy => hierarhy.Child))
                )*/
        }
    }
}
