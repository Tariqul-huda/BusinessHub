using businessHub.Data;
using businessHub.Models;
using Microsoft.EntityFrameworkCore;

namespace businessHub.Services
{
    public class UserService
    {
        private readonly AppDbContext _context;

        public UserService(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<User> GetAll()=> _context.Users.Include(r => r.Role).ToList();

        public User GetById(int id) => _context.Users.Include(r => r.Role).FirstOrDefault(x => x.Id == id);

        public void Create(User user)
        {
            user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
            _context.Users.Add(user);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var user = _context.Users.Find(id);
            if (user == null) return;

            _context.Users.Remove(user);
            _context.SaveChanges();
        }
    }


}
