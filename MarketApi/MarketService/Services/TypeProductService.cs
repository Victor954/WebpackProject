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
                Code = "Man",
                Children = new TreeItem<TypeProduct>[]
                {
                    new TreeItem<TypeProduct>()
                    {
                        Name = "�����",
                        Code = "Boots",
                        Children = new TreeItem<TypeProduct>[]
                        {
                            new TreeItem<TypeProduct>
                            {
                                Name = "���������",
                                Code = "Sneakers",
                            },
                            new TreeItem<TypeProduct>
                            {
                                Name = "�����",
                                Code = "Shoes"
                            }

                        }
                    },
                    new TreeItem<TypeProduct>()
                    {
                        Name = "������� ������",
                        Code = "Bottom�lothes"
                    },
                    new TreeItem<TypeProduct>()
                    {
                        Name = "������ ������",
                        Code = "Top�lothes",
                        Children = new TreeItem<TypeProduct>[]
                        {
                            new TreeItem<TypeProduct>
                            {
                                Name = "�����",
                                Code = "Pants"
                            },
                            new TreeItem<TypeProduct>
                            {
                                Name = "������",
                                Code = "Jeans"
                            },
                            new TreeItem<TypeProduct>
                            {
                                Name = "�����",
                                Code = "Shorts"
                            },
                        }
                    },
                    new TreeItem<TypeProduct>()
                    {
                        Name = "����������",
                        Code = "Accessories"
                    }
                }
            };

            var woman = new TreeItem<TypeProduct>()
            {
                Name = "��������",
                Code = "Woman",
                Children = new TreeItem<TypeProduct>[]
                {
                    new TreeItem<TypeProduct>()
                    {
                        Name = "�����",
                        Code = "Boots",
                        Children = new TreeItem<TypeProduct>[]
                        {
                            new TreeItem<TypeProduct>
                            {
                                Name = "���������",
                                Code = "Sneakers",
                            },
                            new TreeItem<TypeProduct>
                            {
                                Name = "�����",
                                Code = "Shoes"
                            }

                        }
                    },
                    new TreeItem<TypeProduct>()
                    {
                        Name = "������� ������",
                        Code = "Bottom�lothes"
                    },
                    new TreeItem<TypeProduct>()
                    {
                        Name = "������ ������",
                        Code = "Top�lothes",
                        Children = new TreeItem<TypeProduct>[]
                        {
                            new TreeItem<TypeProduct>
                            {
                                Name = "�����",
                                Code = "Pants"
                            },
                            new TreeItem<TypeProduct>
                            {
                                Name = "������",
                                Code = "Jeans"
                            },
                            new TreeItem<TypeProduct>
                            {
                                Name = "�����",
                                Code = "Shorts"
                            },
                            new TreeItem<TypeProduct>
                            {
                                Name = "����",
                                Code = "Skirts",
                            }
                        }
                    },
                    new TreeItem<TypeProduct>()
                    {
                        Name = "����������",
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
