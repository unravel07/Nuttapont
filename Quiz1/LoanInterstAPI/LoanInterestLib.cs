using System;
using System.Collections.Generic;
using LoanInterstAPI.Model;

namespace LoanInterestLib
{
    public class LoanInterest
    {
        public IEnumerable<Loan> CalLoan(double balance, double increaseRate, int years)
        {
            var paidTotal = new List<Loan>();
            var interest = CalInterestRate(balance, increaseRate);
            var keepBalance = OutStanding(balance, interest);

            paidTotal.Add(new Loan()
            {
                interestRate = increaseRate,
                amount = balance,
                numOfYears = years,
                TotalPaid = keepBalance
            });
            for (int i = 1; i < years; i++)
            {
                interest = CalInterestRate(keepBalance, increaseRate);
                keepBalance = OutStanding(keepBalance, interest);

                paidTotal.Add(new Loan()
                {
                    interestRate = increaseRate,
                    amount = keepBalance - interest,
                    numOfYears = years,
                    TotalPaid = keepBalance
                });
            }
            return paidTotal;
        }

        public double CalInterestRate(double balance, double increaseRate)
        {
            var cal = balance * (increaseRate / 100);
            return cal;
        }
        public double OutStanding(double balance, double interest)
        {
            return balance + interest;
        }
    }
}
