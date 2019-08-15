
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using CA_WhatCanIEat.data;
using CA_WhatCanIEat.viewModel;
using CA_WhatCanIEat.models;
using CA_WhatCanIEat.Method;

namespace CA_WhatCanIEat.Controllers
{
  [Route("api/[controller]")]
  public class ProductController : Controller
    {
    private readonly DatabaseContext _context;

    public ProductController(DatabaseContext context)
    {
      _context = context;
    }
    [HttpGet("{item}")]
    public ActionResult Get(string item)
    {
      try
      {
        var product_results = _context.Producten.First(i => i.Name == item);
        return Json(product_results);

      }
      catch (System.Exception)
      {

        MailMethode.sendMail("jonandebielde@hotmail.com", "onbekend product opgevraagd", "het product " + item + " werd door een klant opgevraagt, maar deze bestaat niet");
        return Json(item + " bestaat niet");

        throw;

      }
    }

    [HttpPost]
    public ActionResult Post([FromBody]Producten producten)
    {
      if (_context.Producten.Any(x => x.Name == producten.Name))
      {
        var product = _context.Producten.First(x => x.Name == producten.Name);
        product.Name = producten.Name;
        product.ImageUrl = producten.ImageUrl;

        product.Alcohol_free = producten.Alcohol_free;
        product.Celery_free = producten.Celery_free;
        product.Crustacean_free = producten.Crustacean_free;
        product.Dairy_free = producten.Dairy_free;
        product.Egg_free = producten.Egg_free;
        product.Fish_free = producten.Fish_free;
        product.Gluten_free = producten.Gluten_free;
        product.Kidney_friendly = producten.Kidney_friendly;
        product.Kosher = producten.Kosher;
        product.Low_potassium = producten.Low_potassium;
        product.Lupine_free = producten.Lupine_free;
        product.Low_fat_abs = producten.Low_fat_abs;
        product.Mustard_free = producten.Mustard_free;
        product.No_oil_added = producten.No_oil_added;
        product.Low_sugar = producten.Low_sugar;
        product.Paleo = producten.Paleo;
        product.Peanut_free = producten.Peanut_free;
        product.Pecatarian = producten.Pecatarian;
        product.Pork_free = producten.Pork_free;
        product.Red_meat_free = producten.Red_meat_free;
        product.Sesame_free = producten.Sesame_free;
        product.Shellfish_free = producten.Shellfish_free;
        product.Soy_free = producten.Soy_free;
        product.Sugar_conscious = producten.Sugar_conscious;
        product.Tree_nut_free = producten.Tree_nut_free;
        product.Vegan = producten.Vegan;
        product.Vegetarian = producten.Vegetarian;
        product.Wheat_free = producten.Wheat_free;

        _context.SaveChanges();
        return Json(product);
      }
      else
      {
        Product product = new Product { Name = producten.Name, ImageUrl = producten.ImageUrl,  Alcohol_free = producten.Alcohol_free,
          Celery_free = producten.Celery_free, Crustacean_free = producten.Crustacean_free, Dairy_free = producten.Dairy_free,
          Egg_free = producten.Egg_free, Fish_free = producten.Fish_free, Gluten_free = producten.Gluten_free,
          Kidney_friendly = producten.Kidney_friendly, Kosher = producten.Kosher, Low_potassium = producten.Low_potassium,
          Lupine_free = producten.Lupine_free, Low_fat_abs = producten.Low_fat_abs, Mustard_free = producten.Mustard_free,
          No_oil_added =producten.No_oil_added, Low_sugar = producten.Low_sugar, Paleo = producten.Paleo, Peanut_free = producten.Peanut_free,
          Pecatarian = producten.Pecatarian, Pork_free = producten.Pork_free, Red_meat_free = producten.Red_meat_free,
          Sesame_free = producten.Sesame_free, Shellfish_free = producten.Shellfish_free, Soy_free = producten.Soy_free,
          Sugar_conscious = producten.Sugar_conscious, Tree_nut_free = producten.Tree_nut_free, Vegan = producten.Vegan,
          Vegetarian = producten.Vegetarian, Wheat_free = producten.Wheat_free
        };
        _context.Producten.Add(product);
        _context.SaveChanges();
        return Json(product);
      }
    }
  
    [HttpDelete("{item}")]
    public void Delete(string item)
    {
      var result = _context.Producten.First(i => i.Name == item);
      _context.Producten.Remove(result);
      _context.SaveChanges();
    }
  }
}
