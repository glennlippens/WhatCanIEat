using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CA_WhatCanIEat.Models;
using CA_WhatCanIEat.data;
using Newtonsoft.Json;
using System.Net.Http;
using System.Text;
using CA_WhatCanIEat.models;
using CA_WhatCanIEat.viewModel;
using CA_WhatCanIEat.Method;


// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CA_WhatCanIEat.Controllers
{
  [Route("api/[controller]")]
  public class IngredientController : Controller
    {
    private readonly DatabaseContext _context;

    public IngredientController(DatabaseContext context)
    {
      _context = context;
    }

    [HttpGet("{item}")]
    public ActionResult Get(string item)
    {

      if (item != "all")
      {
        var results = _context.Ingrediënten.First(i => i.Naam == item);
       
        return Json(results);
      }
      else
      {
        var results = _context.Ingrediënten;
        return Json(results);
      }

    }

    [HttpPost]
    public ActionResult Post([FromRoute]string action, [FromBody]ing ing)
    {

        if (_context.Ingrediënten.Any(x => x.Naam == ing.Naam))
        {

          var mainIng = _context.Ingrediënten.First(x => x.Naam == ing.Naam);
          var vervangIng = _context.Ingrediënten.First(x => x.IngredientID == mainIng.VervangIngId);




          if (_context.Klanten.Any(x => x.Email == ing.Email))
          {
          var inglist = new List<ingredient>();

          var klantDoelgroep = _context.Klanten.Single(x => x.Email == ing.Email).Doelgroep;

            switch (klantDoelgroep)
            {
              case "Zwanger":

                ingredient zMainIng = new ingredient
                {
                  Naam = mainIng.Naam,
                  Value = mainIng.Value
                  ,
                  Doelgroep = mainIng.Zwanger,
                  Max = mainIng.MaxZwanger
                };
                inglist.Add(zMainIng);

                ingredient zSubIng = new ingredient
                {
                  Naam = vervangIng.Naam,
                  Value = vervangIng.Value
                  ,
                  Doelgroep = vervangIng.Zwanger,
                  Max = vervangIng.MaxZwanger
                };
                inglist.Add(zSubIng);

                return Json(inglist);


              case "Diabeet":

                ingredient dMainIng = new ingredient
                {
                  Naam = mainIng.Naam,
                  Value = mainIng.Value
                  ,
                  Doelgroep = mainIng.Diabeet,
                  Max = mainIng.MaxDiabeet
                };
                inglist.Add(dMainIng);

                ingredient dSubIng = new ingredient
                {
                  Naam = vervangIng.Naam,
                  Value = vervangIng.Value
                  ,
                  Doelgroep = vervangIng.Zwanger,
                  Max = vervangIng.MaxZwanger
                };
                inglist.Add(dSubIng);

                return Json(inglist);
            }

          }

        else
        {
          var inglist = new List<Ingrediënt>();
          inglist.Add(mainIng);
          inglist.Add(vervangIng);

          return Json(inglist);
        }




        return Json("error");
        }
        else
        {
          if (_context.Klanten.Any(x => x.Email == ing.Email))
            {
            var dietistemail = _context.Klanten.Where(x => x.Email == ing.Email)
              .Join(_context.Dietist, klant => klant.DietisID, dietist => dietist.DietistID, (klant, dietist) => new { klant, dietist })
              .Single().dietist.Email;


            MailMethode.sendMail(dietistemail, ing.Email, "igredient " + ing.Naam + " is opgevraagd maar staat niet in de database");
          }
          if (_context.Dietist.Any(x => x.Email == ing.Email))
          {
            MailMethode.sendMail(ing.Email, ing.Email, "igredient " + ing.Naam + " is opgevraagd maar staat niet in de database");
          }
        }
      
     /* if (_context.Ingrediënten.Any(x => x.Naam == ing.Naam))
      {
        var ingredient = _context.Ingrediënten.First(x => x.Naam == ing.Naam);

        return Json(ingredient);
      }
      else
      {
       Ingrediënt ingrediënt = new Ingrediënt { Naam = ing.Naam, Value = ing.Value, Zwanger = ing.Zwanger, MaxDiabeet = ing.MaxZwanger };
        _context.Ingrediënten.Add(ingrediënt);
        _context.SaveChanges();
        return Json(ingrediënt);
      }*/
      return View();
    }



    [HttpDelete("{item}")]
    public void Delete(string item)
    {
      var result = _context.Ingrediënten.First(i => i.Naam == item);
      _context.Ingrediënten.Remove(result);
      _context.SaveChanges();

    }
  }
}
