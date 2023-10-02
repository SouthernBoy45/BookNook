using Microsoft.AspNetCore.Mvc;

namespace FullStackAuth_WebAPI.Controllers
{
    public class BookDetailsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
