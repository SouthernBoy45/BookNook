﻿namespace FullStackAuth_WebAPI.DataTransferObjects
{
    public class BookDetailsDTO
    { 
        public List<ReviewWithUserDTO> Reviews { get; set; }
        public double AverageRating { get; set; }
    }
}
