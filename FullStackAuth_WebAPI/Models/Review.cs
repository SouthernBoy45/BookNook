using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Policy;

namespace FullStackAuth_WebAPI.Models
{
    public class Review
    {
        [Key]

        public string Id { get; set; }
        [Required]
        public string BookId { get; set; }
        [Required]
        public string Text { get; set; }
        [Required]
        public double Rating { get; set; }
        [ForeignKey ("User")]
        public string UserId { get; set; }
        public User User { get; set; }
    }
}
