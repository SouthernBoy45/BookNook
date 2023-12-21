using FullStackAuth_WebAPI.Data;
using FullStackAuth_WebAPI.DataTransferObjects;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

        [HttpPost, Authorize]

        public IActionResult Post([FromBody] Models.Review data)
        {
            try
            {
                string userId = User.FindFirstValue("id");

                if (string.IsNullOrEmpty(userId))
                {
                    return Unauthorized();
                }
                data.UserId = userId;
                data.User = _context.Users.Find(userId);
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
        [HttpGet("{userId}")]
        public IActionResult Get(string userId)
        {
            try
            {
                var reviews = _context.Reviews.Where(r => r.UserId == userId)
                    .Include(r => r.User).Select(r => new ReviewWithUserDTO
                    {
                        Id = r.Id,
                        BookId = r.BookId,
                        Text = r.Text,
                        Rating = r.Rating,
                        User = new UserForDisplayDto
                        {
                            UserName = r.User.UserName
                        }
                    }).ToList();

                if (reviews.Count == 0)
                {
                    return NotFound("No reviews found for the user.");
                }

                return StatusCode(200, reviews);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
