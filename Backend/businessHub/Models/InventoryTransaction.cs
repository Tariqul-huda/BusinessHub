namespace businessHub.Models
{
    public class InventoryTransaction
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }

        public string Type { get; set; } // IN / OUT
        public int Quantity { get; set; }
        public DateTime Date { get; set; }
    }

}
