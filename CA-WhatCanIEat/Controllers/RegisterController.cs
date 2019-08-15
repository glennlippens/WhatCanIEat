using CA_WhatCanIEat.data;
using CA_WhatCanIEat.Models;
using CA_WhatCanIEat.viewModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CA_WhatCanIEat.Controllers
{
  [Route("api/[controller]")]
  public class RegisterController : Controller
    {
    private readonly DatabaseContext _context;
    private readonly UserManager<User> _userManager;

    public RegisterController(DatabaseContext context, UserManager<User> userManager)
    {
      _context = context;
      _userManager = userManager;

    }


    [HttpPost]
    public async Task<IActionResult> Post([FromBody]Register vm)
    {
      int DietistID;
      try
      {
        DietistID = _context.Dietist.Single(x => x.Email == vm.DietisEmail).DietistID;

      }
      catch (Exception)
      {
        return Json("error");
        throw;
      }

      if (ModelState.IsValid)
      {
        var user = new User { UserName = vm.Email, Email = vm.Email };
        var result = await _userManager.CreateAsync(user, vm.Password);

        if (result.Succeeded)
        {
          _context.Klanten.Add(new Klanten
          {
            VoorNaam = vm.VoorNaam,
            AchterNaam = vm.AchterNaam,
            Email = vm.Email,
            Gsm = vm.Gsm,
            Doelgroep = vm.Doelgroep,
            DietisID = DietistID
          });

          var role = await _userManager.AddToRoleAsync(user, "Klant");
          if (role.Succeeded)
          {
            var username = _context.Klanten.Single(x => x.Email == vm.Email).VoorNaam;
            string[] userInfo = { user.UserName, "Klant", vm.VoorNaam };
            return Json(userInfo);
          }
        }
        else
        {
          foreach (var error in result.Errors)
          {
            ModelState.AddModelError("", error.Description);
          }
        }
      }
      return View();
    }
  }
}
