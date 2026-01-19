using Microsoft.AspNetCore.Mvc;

namespace businessHub.DTO
{
    public class RegisterDto
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int RoleId { get; set; }
    }

}
