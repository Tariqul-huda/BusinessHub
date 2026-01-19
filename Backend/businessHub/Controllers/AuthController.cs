
using Microsoft.AspNetCore.Mvc;
using businessHub.Models;
using Microsoft.EntityFrameworkCore;
namespace businessHub.Controllers
{

    [ApiController]
    [Route("api/auth")]
    public class AuthController : Controller
    {
           private readonly AppDbContext _context;
           public AuthController(AppDbContext context)
        {
            _context = context;
        }
        [HttpPost("Register")]
        public IActionResult register(User user)
        {
            user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
            _context.Users.Add(user);
            _context.SaveChanges();
            return Ok("User has benn registered");

        }
        [HttpGet("login")]
        public IActionResult login(string email, string password)
        {
            var user = _context.Users.Include(x => x.Role).FirstOrDefault(u => u.Email == email);
            if (user == null || !BCrypt.Net.BCrypt.Verify(password, user.Password))
                return Unauthorized();
            return Ok(new { user.Id, user.Name, Role = user.Role.Name });
        }


    }
}
