using businessHub.Data;
using businessHub.Models;
using Microsoft.AspNetCore.Mvc;

namespace businessHub.Controllers
{
    [ApiController]
    [Route("api/payroll")]
    public class PayrollController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PayrollController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("generate")]
        public IActionResult GeneratePayroll(Payroll payroll)
        {
            payroll.NetSalary = payroll.BasicSalary + payroll.Bonus - payroll.Deductions;
            _context.Payrolls.Add(payroll);
            _context.SaveChanges();
            return Ok("Payroll Generated");
        }
    }

}
