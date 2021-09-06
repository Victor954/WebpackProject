using System;

namespace Services.Models
{
    public class TreeItem<T> where T : class
    {
        public TreeItem<T> Parent { get; set; }

        public string Name { get; set; }
        public string Code { get; set; }

        public TreeItem()
        { }

        public TreeItem(TreeItem<T> parent) 
        {
            Parent = parent;
        }

    }
}
