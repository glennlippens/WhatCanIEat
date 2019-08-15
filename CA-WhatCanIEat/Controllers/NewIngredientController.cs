using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CA_WhatCanIEat.data;
using System.Text.RegularExpressions;
using CA_WhatCanIEat.Method;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CA_WhatCanIEat.Controllers
{
  [Route("api/[controller]")]
  public class NewIngredientController : Controller
  {
    private readonly DatabaseContext _context;

    public NewIngredientController(DatabaseContext context)
    {
      _context = context;
    }
    [HttpPost]
    public ActionResult Post([FromBody]string[] vm)
    {
      var stringList = new List<string>();

      foreach (var item in vm)
      {
        string withoutNumbers = Regex.Replace(item, "[0-9]", "").Replace("homemade or store-bought low-sodium Basic ", "").Replace("plus tablespoons ", "").Replace("-thick slices of a  ", "").Replace("- sheets ", "").Replace("(optional)", "").Replace("slices thick-cut, ", "")
        .Replace(", depending on size", "").Replace("shredded part", "").Replace("thick slices", "").Replace(", finely chopped", "").Replace(", crushed", "").Replace("unseasoned ", "")
        .Replace("raw Japanese ", "").Replace(" and freshly ground black pepper", "")
        .Replace(" tins chopped", "").Replace("FOR THE ", "").Replace(", chopped", "").Replace("grated ", "").Replace("minced ", "").Replace("sliced ", "").Replace("-skim ", "")

        .Replace("ground ", "").Replace(" soft white ", "")
        .Replace("peeled ", "").Replace("leaves ", "")

        .Replace("pound ", "").Replace("Spanish ", "").Replace(", stemmed, seeded, and julienned", "").Replace(" yellow bell pepper, stemmed, seeded, and julienned", "")
        .Replace(", thinly sliced", "").Replace(" and freshly pepper", "").Replace(", very thinly sliced, plus tablespoons finely chopped", "").Replace("teaspoon ", "")
        .Replace("medium grain Spanish rice, such as bomba", "").Replace("(-ounce)", "").Replace("new york strip ", "").Replace("springs sprigs ", "")/*.Replace("", "").Replace("", "").Replace("", "").Replace("", "").Replace("", "").Replace("", "").Replace("", "")*/

        .Replace("large", "").Replace("small", "").Replace(", split", "").Replace("batch", "").Replace("cups", "").Replace("cup", "").Replace("bunch ", "")
        .Replace("ball ", "").Replace("stick ", "")
        .Replace(".ml ", "").Replace(".g ", "").Replace("lb.", "").Replace(". tbsp ", "").Replace("Tbs. ", "").Replace("tsp. ", "")
        .Replace("/", "").Replace("–", " ").Replace(@"\", "").Replace("of a ripe", "").Replace("x g ", "");

        if (withoutNumbers[0] == ' ')
        {
          withoutNumbers = withoutNumbers.Remove(0, 1);
          if (withoutNumbers[0] == '"')
            withoutNumbers = withoutNumbers.Remove(0, 2);
          if (withoutNumbers[0] == ' ')
            withoutNumbers = withoutNumbers.Remove(0, 1);
          if (withoutNumbers[0] == ' ')
            withoutNumbers = withoutNumbers.Remove(0, 1);
        }

        try
        {

          int index = withoutNumbers.IndexOf(" or ");
          if (index > 0)
          {
            withoutNumbers = withoutNumbers.Substring(0, index);
            stringList.Add(withoutNumbers);
          }
          else
          {
            try
            {
              int index2 = withoutNumbers.IndexOf(",");
              if (index2 > 0)
                withoutNumbers = withoutNumbers.Substring(0, index2);
              stringList.Add(withoutNumbers);
            }
            catch (Exception)
            {
              stringList.Add(withoutNumbers);
          //    throw;
            }

          }
        }
        catch (Exception)
        {
          stringList.Add(withoutNumbers);
          //throw;
        }
        }
      var result = String.Join(" && ", stringList.ToArray());
        var dietistemail = _context.Dietist.First().Email;
        MailMethode.sendMail(dietistemail, "toe te voegen ingredienten", result);
        return Json("succes");
      }
    }
  } 
