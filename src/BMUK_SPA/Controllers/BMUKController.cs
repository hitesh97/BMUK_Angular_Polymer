using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace BMUK_SPA.Controllers
{
    [Route("[controller]")]
    public class BMUKController : Controller
    {
        // GET: api/values
        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }
    }
}
