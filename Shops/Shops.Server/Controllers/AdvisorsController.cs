using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Shops.Server.Models;

namespace Shops.Server.Controllers
{
    [Route("api/advisors")]
    [ApiController]
    public class AdvisorsController : ControllerBase
    {
        List<AdvisorModel> Advisors = new List<AdvisorModel>();
        private readonly IMapper _mapper;

        public AdvisorsController(IMapper mapper)
        {
            _mapper = mapper;
        }

        [HttpGet("")]
        public IActionResult  Get(string sLookUpString)
        {
            return Ok(Advisors);
        }

        [HttpPost("")]
        public IActionResult Add(AdvisorModel model)
        {
             
            return Ok(null);
        }
    }
}