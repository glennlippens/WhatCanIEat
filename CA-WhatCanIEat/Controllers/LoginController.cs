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
  public class LoginController : Controller
  {
    private readonly DatabaseContext _context;
    private readonly UserManager<User> _userManager;


    public LoginController(DatabaseContext context, UserManager<User> userManager)
    {
      _context = context;
      _userManager = userManager;
    }

    [HttpPost]
    public async Task<IActionResult> Login([FromBody]Login vm)
    {
      var user = _context.User.First(x => x.UserName == vm.Email);
      if (user != null)
      {
        var password = await _userManager.CheckPasswordAsync(user, vm.Password);

        if (password)
        {
          var test = await _userManager.GetRolesAsync(user);
          if (test.Count > 0)
          {
            if (test[0] == "Klant")
            {
              var username = _context.Klanten.Single(x => x.Email == vm.Email).VoorNaam;
              string[] userInfo = { user.UserName, test[0], username };
              return Json(userInfo);

            }
            if (test[0] == "Dietist")
            {
              var username = _context.Dietist.Single(x => x.Email == vm.Email).VoorNaam;
              string[] userInfo = { user.UserName, test[0], username };
              return Json(userInfo);
            }
          }
        }
      }
      return Json("error");
    }
  }
}
