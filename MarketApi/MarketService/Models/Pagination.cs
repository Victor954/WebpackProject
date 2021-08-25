using System;

namespace Services.Models
{
    public class Pagination<T> where T : class
    {
        public long Count { get; set; }
        public long PageCount { get; set; }
        public int Page { get; set; }
        public T[] Data { get; set; }
    }
}
