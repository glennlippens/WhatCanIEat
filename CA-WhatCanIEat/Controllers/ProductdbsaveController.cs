using System.Linq;
using Microsoft.AspNetCore.Mvc;
using CA_WhatCanIEat.data;
using CA_WhatCanIEat.viewModel;
using CA_WhatCanIEat.models;

namespace CA_WhatCanIEat.Controllers
{
  [Route("api/[controller]")]
  public class ProductdbsaveController : Controller
  {
    private readonly DatabaseContext _context;

    public ProductdbsaveController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/values
    [HttpGet]
    public ActionResult Get()
    {
      var results = _context.Producten;
      return Json(results);
    }
    // POST api/values
    [HttpPost]
    public ActionResult Post([FromBody] Producten vm)
    {
      //edit
      if (vm.editproduct == true)
      {
        var OutDatedproduct = _context.Producten.First(product => product.Id == vm.Id);
        OutDatedproduct.Name = vm.Name;
        OutDatedproduct.ImageUrl = vm.ImageUrl;
        OutDatedproduct.Alcohol_free = vm.Alcohol_free;
        OutDatedproduct.Celery_free = vm.Celery_free;
        OutDatedproduct.Crustacean_free = vm.Crustacean_free;
        OutDatedproduct.Dairy_free = vm.Dairy_free;
        OutDatedproduct.Egg_free = vm.Egg_free;
        OutDatedproduct.Fish_free = vm.Fish_free;
        OutDatedproduct.Gluten_free = vm.Gluten_free;
        OutDatedproduct.Kidney_friendly = vm.Kidney_friendly;
        OutDatedproduct.Kosher = vm.Kosher;
        OutDatedproduct.Low_potassium = vm.Low_potassium;
        OutDatedproduct.Lupine_free = vm.Lupine_free;
        OutDatedproduct.Low_fat_abs = vm.Low_fat_abs;
        OutDatedproduct.Mustard_free = vm.Mustard_free;
        OutDatedproduct.No_oil_added = vm.No_oil_added;
        OutDatedproduct.Low_sugar = vm.Low_sugar;
        OutDatedproduct.Paleo = vm.Paleo;
        OutDatedproduct.Peanut_free = vm.Peanut_free;
        OutDatedproduct.Pecatarian = vm.Pecatarian;
        OutDatedproduct.Pork_free = vm.Pork_free;
        OutDatedproduct.Red_meat_free = vm.Red_meat_free;
        OutDatedproduct.Sesame_free = vm.Sesame_free;
        OutDatedproduct.Shellfish_free = vm.Shellfish_free;
        OutDatedproduct.Soy_free = vm.Soy_free;
        OutDatedproduct.Sugar_conscious = vm.Sugar_conscious;
        OutDatedproduct.Tree_nut_free = vm.Tree_nut_free;
        OutDatedproduct.Vegan = vm.Vegan;
        OutDatedproduct.Vegetarian = vm.Vegetarian;
        OutDatedproduct.Wheat_free = vm.Wheat_free;
        _context.SaveChanges();
      }
      //delete
      else if (vm.deleteproduct == true)
      {
        var OutDatedproduct = _context.Producten.First(product => product.Id == vm.Id);

        _context.Producten.Remove(OutDatedproduct);
        _context.SaveChanges();

      }
      //add
      else if (vm.addproduct == true)
      {
        _context.Producten.Add(
           new Product
           {
             Name = vm.Name,
             ImageUrl = vm.ImageUrl,
             Alcohol_free = vm.Alcohol_free,
             Celery_free = vm.Celery_free,
             Crustacean_free = vm.Crustacean_free,
             Dairy_free = vm.Dairy_free,
             Egg_free = vm.Egg_free,
             Fish_free = vm.Fish_free,
             Gluten_free = vm.Gluten_free,
             Kidney_friendly = vm.Kidney_friendly,
             Kosher = vm.Kosher,
             Low_potassium = vm.Low_potassium,
             Lupine_free = vm.Lupine_free,
             Low_fat_abs = vm.Low_fat_abs,
             Mustard_free = vm.Mustard_free,
             No_oil_added = vm.No_oil_added,
             Low_sugar = vm.Low_sugar,
             Paleo = vm.Paleo,
             Peanut_free = vm.Peanut_free,
             Pecatarian = vm.Pecatarian,
             Pork_free = vm.Pork_free,
             Red_meat_free = vm.Red_meat_free,
             Sesame_free = vm.Sesame_free,
             Shellfish_free = vm.Shellfish_free,
             Soy_free = vm.Soy_free,
             Sugar_conscious = vm.Sugar_conscious,
             Tree_nut_free = vm.Tree_nut_free,
             Vegan = vm.Vegan,
             Vegetarian = vm.Vegetarian,
             Wheat_free = vm.Wheat_free
           });
        _context.SaveChanges();
      }
      var results = _context.Producten;
      return Json(results);
    }
  }
}

