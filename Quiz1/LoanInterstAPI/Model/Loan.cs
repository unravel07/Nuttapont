namespace LoanInterstAPI.Model
{
    public class Loan
    {
        public double amount { get; set; }
        public double interestRate { get; set; }
        public int numOfYears { get; set; }
        public double TotalPaid { get; set; }
    }
}