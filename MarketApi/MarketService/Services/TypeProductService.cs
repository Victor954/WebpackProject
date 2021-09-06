using System;
using System.Linq;
using Services.Models.ModelEntity;
using Services.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Services
{
    public class TypeProductService : SerivceBase
    {
        public TypeProductService(MarketContext context) : base(context)
        { }

        public async Task<TypeProduct[]> GetAllTypeProductsAsync() 
        {
            return await db.TypeProducts.ToArrayAsync();
        }

        public async Task<TypeProduct[]> GetAllTypeProductsChildrenIncludeAsync() 
        {
            return await db.TypeProducts
                .Include(type => type.Children)
                .ToArrayAsync();
        }

        public async Task<TypeProduct[]> GetAllTypeProductsParentsIncludeAsync() 
        {
            return await db.TypeProducts
                .Include(type => type.Parents)
                .ToArrayAsync();
        }

        public async Task<TypeProduct[]> GetAllTypeProductsFullIncludeAsync() 
        {
            return await db.TypeProducts
                .Include(type => type.Children)
                .Include(type => type.Parents)
                .ToArrayAsync();
        }

        public async Task<TreeItem<TypeProduct>[]> GetTreeAllTypeProductsAsync() 
        {
            var man = new TreeItem<TypeProduct>()
            {
                Name = "��������",
                Code = "Man"
            };

            var woman = new TreeItem<TypeProduct>()
            {
                Name = "��������",
                Code = "Woman"
            };

            var manChilds = new TreeItem<TypeProduct>[]
            {
                new TreeItem<TypeProduct>()
                {
                    Name = "�����",
                    Code = "Boots",
                    Parent = man
                },
                new TreeItem<TypeProduct>()
                {
                    Name = "������� ������",
                    Code = "Bottom�lothes",
                    Parent = man,
                },
                new TreeItem<TypeProduct>()
                {
                    Name = "������ ������",
                    Code = "Top�lothes",
                    Parent = man
                },
                new TreeItem<TypeProduct>()
                {
                    Name = "����������",
                    Code = "Accessories",
                    Parent = man
                }
            };

            var womanChilds = new TreeItem<TypeProduct>[]
            {
                new TreeItem<TypeProduct>()
                {
                    Name = "�����",
                    Code = "Boots",
                    Parent = woman
                },
                new TreeItem<TypeProduct>()
                {
                    Name = "������� ������",
                    Code = "Bottom�lothes",
                    Parent = woman
                },
                new TreeItem<TypeProduct>()
                {
                    Name = "������ ������",
                    Code = "Top�lothes",
                    Parent = woman
                },
                new TreeItem<TypeProduct>()
                {
                    Name = "����������",
                    Code = "Accessories",
                    Parent = woman,
                }
            };



            return new TreeItem<TypeProduct>[]
            {
            new TreeItem<TypeProduct>
            {
                Name = "���������",
                Code = "Sneakers",
                Parent = manChilds[0]
            },
            new TreeItem<TypeProduct>
            {
                Name = "�����",
                Code = "Shoes",
                Parent = manChilds[0]
            },

            new TreeItem<TypeProduct>
            {
                Name = "�����",
                Code = "Pants",
                Parent = manChilds[2]
            },
            new TreeItem<TypeProduct>
            {
                Name = "������",
                Code = "Jeans",
                Parent = manChilds[2]
            },
            new TreeItem<TypeProduct>
            {
                Name = "�����",
                Code = "Shorts",
                Parent = manChilds[2]
            },
            new TreeItem<TypeProduct>
            {
                Name = "���������",
                Code = "Sneakers",
                Parent = womanChilds[0]
            },
            new TreeItem<TypeProduct>
            {
                Name = "�����",
                Code = "Shoes",
                Parent = womanChilds[0]
            },

            new TreeItem<TypeProduct>
            {
                Name = "�����",
                Code = "Pants",
                Parent = womanChilds[2]
            },
            new TreeItem<TypeProduct>
            {
                Name = "������",
                Code = "Jeans",
                Parent = womanChilds[2]
            },
            new TreeItem<TypeProduct>
            {
                Name = "�����",
                Code = "Shorts",
                Parent = womanChilds[2]
            },
            new TreeItem<TypeProduct>
            {
                Name = "����",
                Code = "Skirts",
                Parent = womanChilds[2]
            },
        };
        }
    }
}
