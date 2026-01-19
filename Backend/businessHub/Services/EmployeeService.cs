using businessHub.Data;
using businessHub.Models;

namespace businessHub.Services
{
    public class EmployeeService
    {
        private readonly AppDbContext _context;

        public EmployeeService(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Employee> GetAll()
            => _context.Employees.ToList();

        public void Add(Employee employee)
        {
            employee.JoiningDate = DateTime.UtcNow;
            _context.Employees.Add(employee);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var employee = _context.Employees.Find(id);
            if (employee == null) return;

            _context.Employees.Remove(employee);
            _context.SaveChanges();
        }
    }

}
