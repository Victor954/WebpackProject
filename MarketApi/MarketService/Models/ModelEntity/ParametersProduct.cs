using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Models.ModelEntity
{
    public class ParametersProduct
    {
        public long? Id { get; set; }
        public string CodeParameter { get; set; }
        public string ValueParameter { get; set; }

        public long ProductId { get; set; }
        public Product Product { get; set; }
    }
}
