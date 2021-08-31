using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Models.ModelEntity
{
    public class HierarchyTypesProduct
    {
        public long? Id { get; set; }

        public long ChildId { get; set; }
        public TypeProduct Child { get; set; }

        public long ParentId { get; set; }
        public TypeProduct Parent { get; set; }
    }
}
