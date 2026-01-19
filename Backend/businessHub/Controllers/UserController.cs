using businessHub.Models;
using businessHub.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/users")]
[Authorize(Roles = "Admin")]
public class UserController : ControllerBase
{
    private readonly UserService _userService;

    public UserController(UserService userService)
    {
        _userService = userService;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        var users = _userService.GetAll();
        return Ok(users);
    }
    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        var user = _userService.GetById(id);
        if (user == null)
            return NotFound("User not found");

        return Ok(user);
    }
    [HttpPost]
    public IActionResult Create(User user)
    {
        if (string.IsNullOrWhiteSpace(user.Password))
            return BadRequest("Password is required");

        _userService.Create(user);
        return Ok("User created successfully");
    }
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _userService.Delete(id);
        return Ok("User deleted successfully");
    }
}
