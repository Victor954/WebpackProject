using System;
using Services.Models.ModelArgs;

namespace MarketApi.Models
{
    public class GetDataArg
    {
        public FilterProductArg filter { get; set; }
        public int page { get; set; }
    }
}
