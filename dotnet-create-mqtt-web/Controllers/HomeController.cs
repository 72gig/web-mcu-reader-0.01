using Microsoft.AspNetCore.Mvc;

namespace ControllersExample.Controllers
{
    public class HomeController : Controller
    {
        [Route("/api/return_index")]
        public string Index()
        {
            return "{\"name\": \"DataTest\", \"check\": \"OK\"}";
        }
        public string About()
        {
            return "about";
        }
        public string Contact()
        {
            return "contact";
        }
        public string Error()
        {
            return "error";
        }
    }
}

