using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Oxizen.API.Data;
using Oxizen.API.Models;

namespace Oxizen.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly OxizenDbContext _context;

        public CartController(OxizenDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult AddToCart(CartItem item)
        {
            var existing = _context.CartItems
                .FirstOrDefault(x => x.ProductId == item.ProductId);

            if (existing != null)
                existing.Quantity += 1;
            else
                _context.CartItems.Add(new CartItem { ProductId = item.ProductId, Quantity = 1 });
                _context.SaveChanges();
            return Ok("Added to Cart");
        }

        [HttpGet]
        public IActionResult GetCart()
        {
          var data = from c in _context.CartItems
                   join p in _context.Products on c.ProductId equals p.Id
                   select new
                   {
                       p.Name,
                       p.Price,
                       c.Quantity,
                       Total = p.Price * c.Quantity
                   };
            return Ok(data);
        }

        [HttpDelete("{id}")]
        public IActionResult Remove(int id)
        { 
            var item = _context.CartItems.Find(id);
            _context.CartItems.Remove(item);
            _context.SaveChanges();
            return Ok();
        
        }
    }
}
