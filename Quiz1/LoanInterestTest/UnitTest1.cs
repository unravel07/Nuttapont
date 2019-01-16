using System;
using LoanInterestLib;
using Xunit;

namespace LoanInterestTest
{
    public class UnitTest1
    {
        [Theory]
        [InlineData(10000,12,3,14049.28)]
        [InlineData(10000,12,1,11200)]
        [InlineData(100,10,1,110)]

        public void Test(double balance, double interestRate, int years, double expected)
        {
            {
                var sut = new LoanInterest();
                var result = sut.CalLoan(balance, interestRate, years);
               // Assert.Equal(expected, result);
            }
        }
    }
}
