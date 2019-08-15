using System.Linq;
using Microsoft.AspNetCore.Mvc;
using CA_WhatCanIEat.data;
using CA_WhatCanIEat.viewModel;
using CA_WhatCanIEat.Models;

namespace CA_WhatCanIEat.Controllers
{
  [Route("api/[controller]")]
  public class ClientdbsaveController : Controller
  {
    private readonly DatabaseContext _context;
    public ClientdbsaveController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/values
    [HttpGet]
    public ActionResult Get()
    {
      var results = _context.Klanten;
      return Json(results);
    }
    // POST api/values
    [HttpPost]
    public ActionResult Post([FromBody] Klantenvm vm)
    {
      //edit
      if (vm.editklant == true)
      {
        var OutDatedClient = _context.Klanten.First(klant => klant.CostumerId == vm.CostumerId);
        OutDatedClient.AchterNaam = vm.achternaam;
        OutDatedClient.VoorNaam = vm.voornaam;
        OutDatedClient.Gsm = vm.gsm;
        OutDatedClient.Email = vm.email;
        OutDatedClient.Doelgroep = vm.Doelgroep;
        OutDatedClient.DietisID = vm.DietisID;
        _context.SaveChanges();
      }
      //delete
      else if (vm.deleteklant == true)
      {
        var OutDatedClient = _context.Klanten.First(klant => klant.CostumerId == vm.CostumerId);
        _context.Klanten.Remove(OutDatedClient);
        _context.SaveChanges();

      }
      //add
      else if (vm.addklant == true)
      {
        _context.Klanten.Add(
           new Klanten
           {
             VoorNaam = vm.voornaam,
             AchterNaam = vm.achternaam,
             Email = vm.email,
             Gsm = vm.gsm,
             DietisID = vm.DietisID,
             Doelgroep = vm.Doelgroep,
           });
        _context.SaveChanges();

      }
      var results = _context.Klanten;
      return Json(results);
    }
  }
}
