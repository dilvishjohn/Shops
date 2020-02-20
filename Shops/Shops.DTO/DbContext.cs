using Microsoft.EntityFrameworkCore;
using Shop.DTO.Models;

namespace Shop.DTO
{
    public class ShopContext : DbContext
    {

        public ShopContext() : base()
        {
        }

        public DbSet<Shop> Shops { get; set; }
        public DbSet<Advisor> Advisor { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.
        }
    }
}