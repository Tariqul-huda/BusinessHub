using businessHub.Data;
using businessHub.Models;
using Microsoft.EntityFrameworkCore;

namespace businessHub.Services
{
    public class SalesService
    {
        private readonly AppDbContext _context;

        public SalesService(AppDbContext context)
        {
            _context = context;
        }

        public void CreateSale(Sale sale)
        {
            sale.SaleDate = DateTime.UtcNow;
            decimal total = 0;

            foreach (var item in sale.Items)
            {
                var product = _context.Products.Find(item.ProductId);
                product.StockQuantity -= item.Quantity;

                item.Price = product.Price;
                total += item.Price * item.Quantity;
            }

            sale.TotalAmount = total;
            _context.Sales.Add(sale);
            _context.SaveChanges();
        }

        public IEnumerable<Sale> GetSales()
            => _context.Sales.Include(s => s.Items).ToList();
    }

}
