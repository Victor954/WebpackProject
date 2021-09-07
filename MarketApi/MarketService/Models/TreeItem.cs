using System;

namespace Services.Models
{
    public class TreeItem<T> where T : class
    {
        public TreeItem<T>[] Children { get; set; } = new TreeItem<T>[] { };

        public string Name { get; set; }
        public string Code { get; set; }
    }
}
