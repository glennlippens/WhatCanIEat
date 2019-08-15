using System.Linq;
using Microsoft.AspNetCore.Mvc;
using CA_WhatCanIEat.data;
using CA_WhatCanIEat.viewModel;
using CA_WhatCanIEat.Models;

namespace CA_WhatCanIEat.Controllers
{
  [Route("api/[controller]")]
  public class IngredientdbsaveController : Controller
  {
    private readonly DatabaseContext _context;
    public IngredientdbsaveController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/values
    [HttpGet]
    public ActionResult Get()
    {
      var results = _context.Ingrediënten;
      return Json(results);
    }
    // POST api/values
    [HttpPost]
    public ActionResult Post([FromBody] ing vm)
    {
      //edit
      if (vm.editingredient == true)
      {
        var OutDateding = _context.Ingrediënten.First(ingredient => ingredient.IngredientID == vm.IngredientID);
        OutDateding.Naam = vm.Naam;
        OutDateding.MaxZwanger = vm.MaxZwanger;
        OutDateding.Value = vm.Value;
        OutDateding.IngredientID = vm.IngredientID;
        OutDateding.Zwanger = vm.Zwanger;
        OutDateding.Diabeet = vm.Diabeet;
        OutDateding.MaxDiabeet = vm.MaxDiabeet;
        _context.SaveChanges();
      }
      //delete
      else if (vm.deleteingredient == true)
      {
        var OutDateding = _context.Ingrediënten.First(ingredient => ingredient.IngredientID == vm.IngredientID);
        _context.Ingrediënten.Remove(OutDateding);
        _context.SaveChanges();

      }
      //add
      else if (vm.addingredient == true)
      {
        _context.Ingrediënten.Add(
          new Ingrediënt
          {
            MaxZwanger = vm.MaxZwanger,
            Naam = vm.Naam,
            Zwanger = vm.Zwanger,
            Value = vm.Value,
            Diabeet = vm.Diabeet,
            MaxDiabeet = vm.MaxDiabeet
          });
        _context.SaveChanges();
      }

      var results = _context.Ingrediënten;
      return Json(results);
    }

  }
}
