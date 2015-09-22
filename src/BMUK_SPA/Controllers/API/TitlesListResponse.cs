using System.Collections.Generic;
using BMUK_SPA.Model;

namespace BMUK_SPA.Controllers.API
{
    public class TitlesListResponse
    {
        public int Count { get; set; }
        public List<Title> Data { get; set; }
    }
}