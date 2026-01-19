using businessHub.Data;
using businessHub.Models;

namespace businessHub.Services
{
    public class InventoryService
    {
        private readonly AppDbContext _context;

        public InventoryService(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Product> GetProducts()
            => _context.Products.ToList();

        public Product GetById(int id)
            => _context.Products.Find(id);

        public void AddProduct(Product product)
        {
            _context.Products.Add(product);
            _context.SaveChanges();
        }

        public void UpdateProduct(int id, Product data)
        {
            var product = _context.Products.Find(id);
            if (product == null) return;

            product.Name = data.Name;
            product.Price = data.Price;
            product.StockQuantity = data.StockQuantity;

            _context.SaveChanges();
        }

        public void DeleteProduct(int id)
        {
            var product = _context.Products.Find(id);
            if (product == null) return;

            _context.Products.Remove(product);
            _context.SaveChanges();
        }
    }

}
