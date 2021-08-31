using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Models.ModelEntity
{
    public class TypeProduct
    {
        public long? Id { get; set; }
        public string TypeName { get; set; }
        public string TypeCode { get; set; }

        public List<HierarchyTypesProduct> Children { get; set; } = new List<HierarchyTypesProduct>();
        public List<HierarchyTypesProduct> Parents { get; set; } = new List<HierarchyTypesProduct>();
        public List<Product> Products { get; set; } = new List<Product>();
    }
}
