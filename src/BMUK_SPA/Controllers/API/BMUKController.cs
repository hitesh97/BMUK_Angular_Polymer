using System;
using System.Linq;
using System.Threading.Tasks;
using BMUK_SPA.Model.Mapping;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace BMUK_SPA.Controllers.API
{
    public class BMUKController : Controller
    {
        private readonly BMUKContext _context;

        public BMUKController(BMUKContext context)
        {
            _context = context;
        }
        
        [Route("BMUK/API/GetHeadMembers")]
        [HttpGet]
        public ActionResult GetHeadMembers()
        {
            var membersList = _context.Members.Where(x=>x.ParentId == -1).ToList();
            var response = new MembersListResponse { Data = membersList, Count = membersList.Count };
            return Json(response);
        }

        [Route("BMUK/API/GetTitles")]
        [HttpGet]
        public ActionResult GetTitles()
        {
            var titlesList = _context.Titles.ToList();
            var response = new TitlesListResponse { Data = titlesList, Count = titlesList.Count };
            return Json(response);
        }
    }
}
