
using Microsoft.AspNetCore.Mvc;
using businessHub.Models;
using Microsoft.EntityFrameworkCore;
using businessHub.Services;
using businessHub.Data;
//using BCrypt.Net;

namespace businessHub.Controllers
{

    [ApiController]
    [Route("api/auth")]
    public class AuthController : Controller
    {
           private readonly AppDbContext _context;
            private readonly JwtService _jwtService;
           public AuthController(AppDbContext context, JwtService jwtService)
        {
            _context = context;
            _jwtService = jwtService;
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
            var token = _jwtService.GenerateToken(user);

            return Ok(new
            {
                token,
                user.Name,
                role = user.Role.Name
            });
        }


    }
}
