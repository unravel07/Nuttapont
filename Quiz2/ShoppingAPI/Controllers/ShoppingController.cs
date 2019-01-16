using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ShoppingAPI.model;

namespace ShoppingAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ShoppingController : Controller
    {
        public static List<Product> products = new List<Product>();
        public static List<Cart> carts = new List<Cart>();
        //public static List<Price> prices = new List<Price>();

        // POST api/values
        [HttpPost]
        public void AddOrder([FromBody]Cart cart)
        {
            var cal = new CalculatePrice();
            cart.TotalPrice = cal.CalculateEachProduct(cart.Product.Price, cart.Amount);
            //cart.SumPrice = cal.CalculatePriceTotal(carts);
            cart.TotalDiscount = cal.CalculateDiscount(cart);
            //cart.TotalPriceFinal = cal.CalculateFinalPrice(carts);

            carts.Add(cart);
        }
        [HttpPost]
        public void AddItem([FromBody]Product data)
        {
            products.Add(data);
        }

        [HttpGet]
        public double CalculatePriceTotal()
        {
            var cal = new CalculatePrice();
            return cal.CalculatePriceTotal(carts);
        }
        [HttpGet]
        public double CalculateFinalPrice()
        {
            var cal = new CalculatePrice();
            return cal.CalculateFinalPrice(carts);
        }

        [HttpGet]
        public IEnumerable<Cart> GetCarts()
        {
            return carts;
        }
        [HttpGet]
        public IEnumerable<Product> GetProducts()
        {
            return products;
        }
          [HttpDelete]
        public void ClearCart()
        {
            products.RemoveAll(it => true);
            carts.RemoveAll(it => true);
        }
        
    }
}
