using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Oxizen.API.Data;
using Oxizen.API.Models;

namespace Oxizen.API.Controllers
{
    [ApiController]
    [Route("api/order")]
    public class OrderController : ControllerBase
    {
        private readonly OxizenDbContext _context;

        public OrderController(OxizenDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult PlaceOrder()
        {
            var cart = _context.CartItems.ToList();

            if (!cart.Any()) return BadRequest("Cart empty");

            var products = _context.Products.ToList();

            decimal total = 0;

            var order = new Order { CreatedAt = DateTime.Now };
            _context.Orders.Add(order);
            _context.SaveChanges();

            foreach (var c in cart)
            {
                var p = products.First(x => x.Id == c.ProductId);
                total += p.Price * c.Quantity;

                _context.OrderItems.Add(new OrderItem
                {
                    OrderId = order.Id,
                    ProductName = p.Name,
                    Price = p.Price,
                    Quantity = c.Quantity
                });
            }

            order.TotalAmount = total;
            _context.CartItems.RemoveRange(cart);
            _context.SaveChanges();

            return Ok(new { orderId = order.Id, total });
        }
    }
}

