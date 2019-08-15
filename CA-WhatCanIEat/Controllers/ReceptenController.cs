using CA_WhatCanIEat.data;
using CA_WhatCanIEat.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace CA_WhatCanIEat.Controllers
{
  [Route("api/[controller]")]
  public class ReceptenController : Controller
  {
    private readonly DatabaseContext _context;

    public ReceptenController(DatabaseContext context)
    {
      _context = context;
    }

    [HttpPost]
    public ActionResult Post([FromBody]string[] vm)
    {
      var ingList = new List<Ingrediënt>();

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
 .Replace("/", "").Replace("–", " ").Replace(@"\", "").Replace("of a  ripe", "").Replace("x g ", "");

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
            var ing = _context.Ingrediënten.First(x => x.Naam == withoutNumbers);
            ingList.Add(ing);
          }
          else
          {
            try
            {
              int index2 = withoutNumbers.IndexOf(",");
              if (index2 > 0)
                withoutNumbers = withoutNumbers.Substring(0, index2);
              var ing = _context.Ingrediënten.First(x => x.Naam == withoutNumbers);
              ingList.Add(ing);
            }
            catch (Exception)
            {
              var ing = _context.Ingrediënten.First(x => x.Naam == withoutNumbers);
              ingList.Add(ing);
              //    throw;
            }

          }
        }
        catch (Exception)
        {
          var ing = _context.Ingrediënten.First(x => x.Naam == withoutNumbers);
          ingList.Add(ing);
          //throw;
        }
      }
      return Json(ingList);
    }
  }
}

