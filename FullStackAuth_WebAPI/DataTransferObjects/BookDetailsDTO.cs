namespace FullStackAuth_WebAPI.DataTransferObjects
{
    public class BookDetailsDTO
    {
        public string BookId { get; set; }
        public string Text { get; set; }
        public double Rating { get; set; }
        public ReviewWithUserDTO Review { get; set; }
    }
}
