using FullStackAuth_WebAPI.Data;
using FullStackAuth_WebAPI.DataTransferObjects;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FullStackAuth_WebAPI.Controllers
{
    public class BookDetailsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public BookDetailsController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet("{bookId}")]
        public IActionResult Get(int bookId)
        {
            try
            {
                var reviews = _context.Reviews.Select(r => new BookDetailsDTO
                {
                    Id = r.Id,
                    BookId = r.BookId,
                    Text = r.Text,
                    Rating = r.Rating,
                    Review = new ReviewWithUserDTO
                    {
                        Id = r.User.Id,
                        BookId = r.BookId,
                        Text = r.Text,
                        Rating = r.Rating
                    }
                }).ToList();

                return StatusCode(200, reviews);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
