using businessHub.Data;
using businessHub.Models;
using Microsoft.EntityFrameworkCore;

namespace businessHub.Services
{
    public class PurchaseService
    {
        private readonly AppDbContext _context;

        public PurchaseService(AppDbContext context)
        {
            _context = context;
        }

        public void CreatePurchase(Purchase purchase)
        {
            purchase.PurchaseDate = DateTime.UtcNow;

            foreach (var item in purchase.Items)
            {
                var product = _context.Products.Find(item.ProductId);
                product.StockQuantity += item.Quantity;
            }

            _context.Purchases.Add(purchase);
            _context.SaveChanges();
        }

        public IEnumerable<Purchase> GetAll()
            => _context.Purchases.Include(p => p.Items).ToList();

        public void Delete(int id)
        {
            var purchase = _context.Purchases.Find(id);
            if (purchase == null) return;

            _context.Purchases.Remove(purchase);
            _context.SaveChanges();
        }
    }

}
