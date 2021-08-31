using System;
using System.Collections.Generic;

namespace Services.Models.ModelEntity
{
    public class Product
    {
        public long? Id { get; set; }
        public string Title { get; set; }
        public byte[] Photo { get; set; }
        public string Discription { get; set; }
        public double Price { get; set; }

        public List<TypeProduct> TypeProducts { get; set; } = new List<TypeProduct>();
        public List<ParametersProduct> ParameterProducts { get; set; } = new List<ParametersProduct>();
        public List<CategoriesProduct> CategoriesProducts { get; set; } = new List<CategoriesProduct>();
    }
}
