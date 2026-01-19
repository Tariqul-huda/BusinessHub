using businessHub.Data;

namespace businessHub.Services
{
    public class ReportService
    {
        private readonly AppDbContext _context;

        public ReportService(AppDbContext context)
        {
            _context = context;
        }

        public object GetKPI()
        {
            return new
            {
                TotalSales = _context.Sales.Sum(x => x.TotalAmount),
                TotalEmployees = _context.Employees.Count(),
                LowStock = _context.Products.Count(p => p.StockQuantity < 10),
                MonthlyPayroll = _context.Payrolls.Sum(p => p.NetSalary)
            };
        }
    }

}
