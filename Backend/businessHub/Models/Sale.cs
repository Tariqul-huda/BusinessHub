namespace businessHub.Models
{
    public class Sale
    {
        public int Id { get; set; }
        public DateTime SaleDate { get; set; }
        public decimal TotalAmount { get; set; }

        public List<SaleItem> Items { get; set; }
    }

}
