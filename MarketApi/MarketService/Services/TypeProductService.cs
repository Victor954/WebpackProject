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
                Name = "Мужчинам",
                Code = "Man",
                Children = new TreeItem<TypeProduct>[]
                {
                    new TreeItem<TypeProduct>()
                    {
                        Name = "Обувь",
                        Code = "Boots",
                        Children = new TreeItem<TypeProduct>[]
                        {
                            new TreeItem<TypeProduct>
                            {
                                Name = "Кроссовки",
                                Code = "Sneakers",
                            },
                            new TreeItem<TypeProduct>
                            {
                                Name = "Туфли",
                                Code = "Shoes"
                            }

                        }
                    },
                    new TreeItem<TypeProduct>()
                    {
                        Name = "Верхняя одежда",
                        Code = "BottomСlothes"
                    },
                    new TreeItem<TypeProduct>()
                    {
                        Name = "Нижняя одежда",
                        Code = "TopСlothes",
                        Children = new TreeItem<TypeProduct>[]
                        {
                            new TreeItem<TypeProduct>
                            {
                                Name = "Брюки",
                                Code = "Pants"
                            },
                            new TreeItem<TypeProduct>
                            {
                                Name = "Джинсы",
                                Code = "Jeans"
                            },
                            new TreeItem<TypeProduct>
                            {
                                Name = "Шорты",
                                Code = "Shorts"
                            },
                        }
                    },
                    new TreeItem<TypeProduct>()
                    {
                        Name = "Аксессуары",
                        Code = "Accessories"
                    }
                }
            };

            var woman = new TreeItem<TypeProduct>()
            {
                Name = "Женщинам",
                Code = "Woman",
                Children = new TreeItem<TypeProduct>[]
                {
                    new TreeItem<TypeProduct>()
                    {
                        Name = "Обувь",
                        Code = "Boots",
                        Children = new TreeItem<TypeProduct>[]
                        {
                            new TreeItem<TypeProduct>
                            {
                                Name = "Кроссовки",
                                Code = "Sneakers",
                            },
                            new TreeItem<TypeProduct>
                            {
                                Name = "Туфли",
                                Code = "Shoes"
                            }

                        }
                    },
                    new TreeItem<TypeProduct>()
                    {
                        Name = "Верхняя одежда",
                        Code = "BottomСlothes"
                    },
                    new TreeItem<TypeProduct>()
                    {
                        Name = "Нижняя одежда",
                        Code = "TopСlothes",
                        Children = new TreeItem<TypeProduct>[]
                        {
                            new TreeItem<TypeProduct>
                            {
                                Name = "Брюки",
                                Code = "Pants"
                            },
                            new TreeItem<TypeProduct>
                            {
                                Name = "Джинсы",
                                Code = "Jeans"
                            },
                            new TreeItem<TypeProduct>
                            {
                                Name = "Шорты",
                                Code = "Shorts"
                            },
                            new TreeItem<TypeProduct>
                            {
                                Name = "Юбки",
                                Code = "Skirts",
                            }
                        }
                    },
                    new TreeItem<TypeProduct>()
                    {
                        Name = "Аксессуары",
                        Code = "Accessories"
                    }
                }
            };

            return new TreeItem<TypeProduct>[]
            {
                man,
                woman
            };
        }
    }
}
