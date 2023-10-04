using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Policy;

namespace FullStackAuth_WebAPI.Models
{
    public class Review
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public string BookId { get; set; }

        [Required]
        public string Text { get; set; }

        [Required]
        public double Rating { get; set; }

        [ForeignKey ("User")]
        public string UserId { get; set; }
        public virtual User User { get; set; }
    }
}
