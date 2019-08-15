using CA_WhatCanIEat.data;
using CA_WhatCanIEat.Method;
using CA_WhatCanIEat.viewModel;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CA_WhatCanIEat.Controllers
{
  [Route("api/[controller]")]
  public class EdamanController : Controller
  {
    private readonly DatabaseContext _context;

    public EdamanController(DatabaseContext context)
    {
      _context = context;
    }

    [HttpPost]
    public ActionResult Post([FromBody] ing vm)
    {
      try
      {
        var product_results = _context.Producten.First(i => i.Name == vm.Naam);
        return Json(product_results);

      }
      catch (Exception)
      {

        if (_context.Klanten.Any(x => x.Email == vm.Email))
        {
          var dietistemail = _context.Klanten.Where(x => x.Email == vm.Email)
           .Join(_context.Dietist, klant => klant.DietisID, dietist => dietist.DietistID, (klant, dietist) => new { klant, dietist })
           .Single().dietist.Email;


          MailMethode.sendMail(dietistemail, vm.Email, "product " + vm.Naam + " is opgevraagd maar staat niet in de database");
        }
        if (_context.Dietist.Any(x => x.Email == vm.Email))
        {
          MailMethode.sendMail(vm.Email, vm.Email, "product " + vm.Naam + " is opgevraagd maar staat niet in de database");
        }
        return Json("does not exist");
      }      
    }
  }
}
