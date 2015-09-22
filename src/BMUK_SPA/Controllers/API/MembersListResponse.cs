using System.Collections.Generic;
using BMUK_SPA.Model;

namespace BMUK_SPA.Controllers.API
{
    public class MembersListResponse
    {
        public int Count { get; set; }
        public List<Member> Data { get; set; }
    }
}