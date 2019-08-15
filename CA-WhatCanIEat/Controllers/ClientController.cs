using System.Linq;
using Microsoft.AspNetCore.Mvc;
using CA_WhatCanIEat.data;
using CA_WhatCanIEat.viewModel;
using CA_WhatCanIEat.Method;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CA_WhatCanIEat.Controllers
{
  [Route("api/[controller]")]
  public class ClientController : Controller
  {
    private readonly DatabaseContext _context;
    public ClientController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/values
    [HttpGet("{Email}")]
    public ActionResult Get(string Email)
    {
      var dietistID = _context.Dietist.Single(x => x.Email == Email).DietistID;
      var results = _context.Klanten.Where(x => x.DietisID == dietistID).ToList();
      return Json(results);
    }

    // GET api/values/5
    [HttpGet("{id}")]
    public string Get(int id)
    {
      return "value";
    }

    // POST api/values
    [HttpPost]
    public void SendMail([FromBody] Email contact)
    {
      MailMethode.sendMail(contact.email, contact.Subject, contact.Message);
    }
  }
}
