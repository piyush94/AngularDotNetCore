using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TestApp.EFHandler;
using TestApp.Models;

namespace TestApp.Controllers
{
    [Produces("application/json")]
    [Route("api/Login")]
    public class LoginController : Controller
    {

        private readonly UserContext _context;

        public LoginController(UserContext context)
        {
            _context = context;
        }
        //// GET: api/Login
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET: api/Login/5
        //[HttpGet("{id}", Name = "Get")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST: api/Login
        [HttpPost]
        public IActionResult Post([FromBody]User user)
        {
            var loginuser = _context.User.SingleOrDefault(m => (m.username == user.username) && (m.password == user.password));

            if (loginuser == null)
            {
                return NotFound();
            }

            return Ok(loginuser);
        }

        //// PUT: api/Login/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE: api/ApiWithActions/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
