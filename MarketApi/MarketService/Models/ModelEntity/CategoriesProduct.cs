using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Models.ModelEntity
{
    public class CategoriesProduct
    {
        public long? Id { get; set; }
        public string CategoryCode { get; set; }
        public string CategoryName { get; set; }

        public List<Product> Products { get; set; } = new List<Product>();
    }
}
