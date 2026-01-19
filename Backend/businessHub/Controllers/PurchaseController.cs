using businessHub.Data;
using businessHub.Models;
using Microsoft.AspNetCore.Mvc;

namespace businessHub.Controllers
{
    [ApiController]
    [Route("api/purchases")]
    public class PurchaseController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PurchaseController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("create")]
        public IActionResult CreatePurchase(Purchase purchase)
        {
            _context.Purchases.Add(purchase);
            _context.SaveChanges();
            return Ok("Purchase Added");
        }
    }

}
