using FullStackAuth_WebAPI.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;
using System.Security.Claims;

namespace FullStackAuth_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public ReviewsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("{Review}"), Authorize]

        public IActionResult Post(int id, [FromBody] Models.Review data)
        {
            try
            {
                string userId = User.FindFirstValue("id");

                if (string.IsNullOrEmpty(userId))
                {
                    return Unauthorized();
                }

                _context.Reviews.Add(data);

                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                _context.SaveChanges();

                return StatusCode(201, data);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
