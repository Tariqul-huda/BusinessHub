using Microsoft.AspNetCore.Mvc;

namespace businessHub.Controllers
{
    [ApiController]
    [Route("api/reports")]
    public class ReportController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ReportController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("sales-summary")]
        public IActionResult SalesSummary()
        {
            var totalSales = _context.Sales.Sum(s => s.TotalAmount);
            return Ok(new { TotalSales = totalSales });
        }

        [HttpGet("inventory-status")]
        public IActionResult InventoryStatus()
        {
            return Ok(_context.Products.Select(p => new {
                p.Name,
                p.StockQuantity
            }));
        }
    }

}
