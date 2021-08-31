using System;

namespace Services.Models
{
    public class TreeItem<T> where T : class
    {
        public int Count { get => Chilren.Length; }
        public T[] Chilren { get; set; }

        public TreeItem(T[] children) 
        {
            Chilren = children;
        }
    }
}
