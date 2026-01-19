using businessHub.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace businessHub.Controllers
{
    [ApiController]
    [Route("api/sales")]
    public class SalesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SalesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("create")]
        public IActionResult CreateSale(Sale sale)
        {
            _context.Sales.Add(sale);
            _context.SaveChanges();
            return Ok("Sale Recorded");
        }

        [HttpGet]
        public IActionResult GetSales()
        {
            return Ok(_context.Sales.Include(s => s.Items).ToList());
        }
    }

}
