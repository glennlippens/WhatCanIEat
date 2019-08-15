using CA_WhatCanIEat.data;
using CA_WhatCanIEat.Method;
using CA_WhatCanIEat.viewModel;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CA_WhatCanIEat.Controllers
{
  [Route("api/[controller]")]
  public class ContactController : Controller
  {
    private readonly DatabaseContext _context;


    public ContactController(DatabaseContext context)
    {
      _context = context;

    }

    [HttpGet("{Email}")]
    public IActionResult Get(string Email)
    {
      var klant = _context.Klanten.First(x => x.Email == Email);
      var dietist = _context.Dietist.First(x => x.DietistID == klant.DietisID);

      var vm = new Register();

      vm.Email = dietist.Email;
      vm.AchterNaam = dietist.AchterNaam;
      vm.VoorNaam = dietist.VoorNaam;
      vm.Gsm = dietist.Gsm;

      return Json(vm);
    }


    [HttpPost]
    public IActionResult Post([FromBody] SendMail vm)
    {
      try
      {
        MailMethode.sendMail(vm.To, vm.Subject, vm.Message);
        return Json("Mail send");
      }
      catch (Exception)
      {
        return Json("sending mail failed");
        throw;
      }
      

    }

  }
}
