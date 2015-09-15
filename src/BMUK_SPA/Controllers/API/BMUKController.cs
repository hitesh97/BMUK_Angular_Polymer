using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BMUK_SPA.Model;
using BMUK_SPA.Model.Mapping;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace BMUK_SPA.Controllers.API
{
    public class MembersListResponse
    {
        public int count { get; set; }
        public List<Member> data { get; set; }
    }

    public class BMUKController : Controller
    {
        private readonly BMUKContext _context;

        public BMUKController(BMUKContext context)
        {
            _context = context;
        }

        [Route("BMUK/API/GetMembers")]
        [HttpGet]
        public ActionResult GetMembers()
        {
            var membersList = _context.Members.ToList();
            var response = new MembersListResponse() {data = membersList, count = membersList.Count};
            return Json(response);
        }

        [Route("BMUK/API/GetHeadMembers")]
        [HttpGet]
        public ActionResult GetHeadMembers()
        {
            var membersList = _context.Members.Where(x=>x.ParentId == -1).ToList();
            var response = new MembersListResponse() { data = membersList, count = membersList.Count };
            return Json(response);
        }
    }
}
