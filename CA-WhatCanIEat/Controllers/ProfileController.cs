using CA_WhatCanIEat.data;
using CA_WhatCanIEat.Models;
using CA_WhatCanIEat.viewModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CA_WhatCanIEat.Controllers
{
  [Route("api/[controller]")]
  public class ProfileController : Controller
    {
    private readonly DatabaseContext _context;
    private readonly UserManager<User> _userManager;

    public ProfileController(DatabaseContext context, UserManager<User> userManager)
    {
      _context = context;
      _userManager = userManager;
    }

    [HttpGet("{Email}")]
    public async Task<IActionResult> Get(string Email) {

      var vm = new Register();
      vm.Email = Email;

      var user = _context.User.First(x => x.UserName == Email);

      var test = await _userManager.GetRolesAsync(user);
      //var trere = await _userManager.getc(user);
      if (test.Count > 0)
      {
        if (test[0] == "Klant")
        {
          var klant = _context.Klanten.First(x => x.Email == Email);
          vm.AchterNaam = klant.AchterNaam;
          vm.VoorNaam = klant.VoorNaam;
          vm.Gsm = klant.Gsm;
          vm.Doelgroep = klant.Doelgroep;
          vm.DietisEmail = _context.Dietist.Single(x => x.DietistID == klant.DietisID).Email;

          return Json(vm);
        }
        if (test[0] == "Dietist")
        {
          var dietist = _context.Dietist.First(x => x.Email == Email);
          vm.AchterNaam = dietist.AchterNaam;
          vm.VoorNaam = dietist.VoorNaam;
          vm.Gsm = dietist.Gsm;
          return Json(vm);
        }
      }
      return View();
    }


    [HttpPost]
    public async Task<IActionResult> Post([FromBody]Register vm)
    {
      var user = _context.User.First(x => x.UserName == vm.Email);

      var test = await _userManager.GetRolesAsync(user);
      //var trere = await _userManager.getc(user);
      if (test.Count > 0)
      {
        if (test[0] == "Klant")
        {

          user.Email = vm.Email;
          user.UserName = vm.Email;

          var klant = _context.Klanten.First(x => x.Email == vm.Email);

          klant.AchterNaam = vm.AchterNaam ;
          klant.VoorNaam = vm.VoorNaam ;
          klant.Gsm = vm.Gsm ;
          klant.Doelgroep = vm.Doelgroep;
          klant.DietisID = _context.Dietist.Single(x => x.Email == vm.DietisEmail).DietistID;
          _context.SaveChanges();

          return Json(vm);

        }
        if (test[0] == "Dietist")
        {
          user.Email = vm.Email;
          user.UserName = vm.Email;

          var dietist = _context.Dietist.First(x => x.Email == vm.Email);

          dietist.AchterNaam = vm.AchterNaam;
          dietist.VoorNaam = vm.VoorNaam;
          dietist.Gsm = vm.Gsm;

          _context.SaveChanges();

          return Json(vm);
        }
        }
          return View();
      }
    }
}
