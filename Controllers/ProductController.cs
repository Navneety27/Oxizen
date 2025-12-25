using Microsoft.AspNetCore.Mvc;
using Oxizen.API.Data;


namespace Oxizen.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly OxizenDbContext _context;

        public ProductController(OxizenDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetProducts()
        {
            return Ok(_context.Products.ToList());
        }

        [HttpGet("category/{name}")]
        public IActionResult ByCategory(string name)
        {
            return Ok(_context.Products.Where(p=> p.Category == name).ToList());
        }
    }
}
        

