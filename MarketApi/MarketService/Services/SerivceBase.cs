using System;
using Services.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Services
{
    public abstract class SerivceBase 
    { 
        protected readonly MarketContext db;

        public SerivceBase(MarketContext context) 
        {
            this.db = context;
        }
    }
}
