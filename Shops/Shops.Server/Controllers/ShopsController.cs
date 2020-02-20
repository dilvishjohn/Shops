using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TestMvcApplication.Models;

namespace TestMvcApplication.Controllers
{
    [Route("api/shops")]
    [ApiController]
    public class ShopsController : ControllerBase
    {
        private readonly IMapper _mapper;

        public ShopsController(IMapper mapper)
        {
            _mapper = mapper;
        }

        [HttpGet("")]
        public IActionResult GetShops()
        {
            List<ShopModel> data = new List<ShopModel>() { new ShopModel() { Adress = "Test", Advisor = "Adv", Count = 1, DateOfAssigning = DateTime.Now, Name = "Shop1" },
            new ShopModel() { Adress = "Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1", Advisor = "Adv1", Count = 1, DateOfAssigning = DateTime.Now, Name = "Shop1" },
            new ShopModel() { Adress = "Test2", Advisor = "Adv2", Count = 2, DateOfAssigning = DateTime.Now, Name = "Shop2" },
            new ShopModel() { Adress = "Test3", Advisor = "Adv3", Count = 3, DateOfAssigning = DateTime.Now, Name = "Shop3" },
            new ShopModel() { Adress = "Test4", Advisor = "Adv4", Count = 4, DateOfAssigning = DateTime.Now, Name = "Shop4" },
            new ShopModel() { Adress = "Test5", Advisor = "Adv5", Count = 5, DateOfAssigning = DateTime.Now, Name = "Shop5" },
            new ShopModel() { Adress = "Test6", Advisor = "Adv6", Count = 6, DateOfAssigning = DateTime.Now, Name = "Shop6" }};

            return Ok(data);
        }

        [HttpGet("serch")]
        public IActionResult Serch(string sLookUpString)
        {
            List<ShopModel> data = new List<ShopModel>();
            return Ok(data);
        }

        [HttpPost("")]
        public IActionResult Add(ShopModel model)
        {

            return Ok(null);
        }

        [HttpPatch("assign")]
        public IActionResult Add(long shopID,long AdvisorID)
        {

            return Ok(null);
        }
    }
}