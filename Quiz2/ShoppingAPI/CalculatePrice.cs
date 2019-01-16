using System.Collections.Generic;
using ShoppingAPI.model;

namespace ShoppingAPI
{
    public class CalculatePrice
    {
        public double CalculateEachProduct(double price, int amount)
        {
            return price * amount;
        }
        public double CalculatePriceTotal(List<Cart> carts)
        {
            var sum = 0.00;
            foreach (var item in carts)
            {
                sum += item.TotalPrice;
            }
            return sum;
        }
        public double CalculateDiscount(Cart carts)
        {

            var discount = carts.Amount / 4;
            return discount * carts.Product.Price;
        }
        public double CalculateFinalPrice(List<Cart> carts)
        {
            var result = 0.00;
            foreach (var item in carts)
            {
                result += (item.Amount * item.Product.Price) - item.TotalDiscount;
            }
            return result;
        }
    }
}
// var sum = 0.00;
// foreach (var item in carts)
// {
//     var cal = item.Amount / 4;
//     var discount = item.Product.Price * cal;
//     sum = +discount;
// }