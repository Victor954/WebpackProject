using System;

namespace Services.Models
{
    public class Product
    {
        public long? Id { get; set; }
        public string Title { get; set; }
        public byte Photo { get; set; }
        public string Discription { get; set; }
        public double Price { get; set; }
    }
}
