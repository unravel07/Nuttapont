using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LoanInterestLib;
using LoanInterstAPI.Model;
using Microsoft.AspNetCore.Mvc;

namespace LoanInterstAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class LoanController : ControllerBase
    {

        public static List<AmountLoan> amounts = new List<AmountLoan>();
        public static List<Loan> loans = new List<Loan>();

        // POST api/values
        [HttpPost]
        public void CalculateLoan([FromBody] Loan loan)
        {
            var calculate = new LoanInterest();

            var keepBalance = calculate.CalLoan(loan.amount, loan.interestRate, loan.numOfYears);
            foreach (var item in keepBalance)
            {
                loans.Add(new Loan()
                {
                    interestRate = item.interestRate,
                    amount = item.amount,
                    numOfYears = item.numOfYears,
                    TotalPaid = item.TotalPaid
                });
            }


        }

        // GET api/values
        [HttpGet]
        public IEnumerable<Loan> Get()
        {
            return loans;
        }
    }
}
