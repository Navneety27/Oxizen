using Microsoft.EntityFrameworkCore;
using Oxizen.API.Models;


namespace Oxizen.API.Data
{
    public class OxizenDbContext : DbContext
    {
        public OxizenDbContext(DbContextOptions <OxizenDbContext> options) : base (options) { }

        public DbSet<Product> Products { get; set; }
        public DbSet<CartItem> CartItems { get; set; }
    }
   
}
