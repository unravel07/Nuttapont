namespace ShoppingAPI.model
{
    public class Cart
    {
        public Product Product { get; set; }
        public int Amount { get; set; }
        public double TotalPrice { get; set; }
        //public double SumPrice { get; set; }
        public double TotalDiscount { get; set; }
        //public double TotalPriceFinal { get; set; }
    }
}