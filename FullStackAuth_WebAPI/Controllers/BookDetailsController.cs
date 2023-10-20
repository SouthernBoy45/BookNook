using FullStackAuth_WebAPI.Data;
using FullStackAuth_WebAPI.DataTransferObjects;
using FullStackAuth_WebAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace FullStackAuth_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookDetailsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public BookDetailsController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet("{bookId}")]
        public IActionResult Get(string bookId)
        {
            try
            {
                var reviews = _context.Reviews.Where(r => r.BookId == bookId)
                    .Include(r => r.User).Select(r => new ReviewWithUserDTO
                    {
                        BookId = r.BookId,
                        Text = r.Text,
                        Rating = r.Rating,
                        User = new UserForDisplayDto
                        {
                            UserName = r.User.UserName
                        }
                    }).ToList();

                double averageRating = reviews.Average(r => r.Rating);
                var bookDetails = new BookDetailsDTO
                {
                    Reviews = reviews,
                    AverageRating = averageRating
                };

                return StatusCode(200, bookDetails);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
