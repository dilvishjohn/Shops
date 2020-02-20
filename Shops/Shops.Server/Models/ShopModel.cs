using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestMvcApplication.Models
{
    public class ShopModel
    {
        public long Count { get; set; }

        public string Name { get; set; }

        public string Adress { get; set; }

        public string Advisor { get; set; }

        public DateTime DateOfAssigning { get; set; }
    }
}
