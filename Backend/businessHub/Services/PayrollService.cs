using businessHub.Data;
using businessHub.Models;
using Microsoft.EntityFrameworkCore;

namespace businessHub.Services
{
    public class PayrollService
    {
        private readonly AppDbContext _context;

        public PayrollService(AppDbContext context)
        {
            _context = context;
        }

        public void Generate(int employeeId, decimal bonus, decimal deductions)
        {
            var emp = _context.Employees.Find(employeeId);

            var payroll = new Payroll
            {
                EmployeeId = employeeId,
                BasicSalary = emp.Salary,
                Bonus = bonus,
                Deductions = deductions,
                NetSalary = emp.Salary + bonus - deductions,
                PaymentDate = DateTime.UtcNow
            };

            _context.Payrolls.Add(payroll);
            _context.SaveChanges();
        }

        public IEnumerable<Payroll> GetAll()
            => _context.Payrolls.Include(p => p.Employee).ToList();

        public void Delete(int id)
        {
            var payroll = _context.Payrolls.Find(id);
            if (payroll == null) return;

            _context.Payrolls.Remove(payroll);
            _context.SaveChanges();
        }
    }

}
