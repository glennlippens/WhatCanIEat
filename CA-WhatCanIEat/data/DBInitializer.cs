using CA_WhatCanIEat.models;
using CA_WhatCanIEat.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace CA_WhatCanIEat.data
{
  public class DBInitializer
  {
    public static void Initialize(DatabaseContext context, UserManager<User> userManager, RoleManager<IdentityRole> roleManager)
    {
      context.Database.EnsureCreated();

      if (context.Producten.Any())
      {
        return;
      }
      if (context.Ingrediënten.Any())
      {
        return;
      }
      if (context.Klanten.Any())
      {
        return;
      }
      if (context.Dietist.Any())
      {
        return;
      }

      var usersCreated = SetUsers(context, userManager, roleManager);

      context.Producten.AddRange(
          new Product
          {
            Name = "pizza",
            ImageUrl = "https://static.takeaway.com/images/generic/categories/pizza/pizza-hawaii.png",
            Alcohol_free = true,
            Crustacean_free = true,
            Egg_free = true,
            Red_meat_free = true,
            Shellfish_free = true,
            Dairy_free = true,
            Fish_free = true
          },
          new Product
          {
            Name = "sushi",
            ImageUrl = "data:image/jpeg;base64,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",
            Alcohol_free = true,
            Crustacean_free = true,
            Egg_free = true,
            Red_meat_free = true,
            Shellfish_free = true,
            Dairy_free = true,
            Fish_free = false,
            Celery_free = true,
            Sesame_free = true
          },
          new Product
          {
            Name = "hamburger",
            ImageUrl = "https://media.istockphoto.com/photos/hamburger-with-fries-picture-id617364554?k=6&m=617364554&s=612x612&w=0&h=BifDNyNdMMMPvE3q9MX3PmBPmmIfG_9v5jbarS7vHLo=",
            Alcohol_free = true,
            Crustacean_free = true,
            Egg_free = true,
            Red_meat_free = true,
            Shellfish_free = true,
            Dairy_free = true,
            Fish_free = true
          },
          new Product
          {
            Name = "paella",
            ImageUrl = "http://nlcdn.ar-cdn.com/recipes/originalxl/c5356beb-e2d0-4faa-9fcc-7800b073c855.jpg",
            Celery_free = true,
            Mustard_free = true
          }
          );

      context.Ingrediënten.AddRange(
          new Ingrediënt { Naam = "onbekend", Value = "nog geen vervangingredient toegevoegd", Zwanger = false, MaxZwanger = "geen limiet", Diabeet = false, MaxDiabeet = "geen limiet", VervangIngId = 2 },
          new Ingrediënt { Naam = "alcoholvrij bier", Value = "alcoholvrij", Zwanger = false, MaxZwanger = "geen limiet", Diabeet = true, MaxDiabeet = "niet teveel", VervangIngId = 20 },
          new Ingrediënt { Naam = "alcoholvrije wijn", Value = "alcoholvrij", Zwanger = false, MaxZwanger = "geen limiet", Diabeet = true, MaxDiabeet = "niet teveel", VervangIngId = 18 },
          new Ingrediënt { Naam = "bier", Value = "alcholische gebrouwde drank", Zwanger = true, MaxZwanger = "niet toegestaan", Diabeet = true, MaxDiabeet = "niet teveel", VervangIngId = 23 },
          new Ingrediënt { Naam = "witloof", Value = "bittere gezonde groente", Zwanger = false, MaxZwanger = "geen limiet", Diabeet = false, MaxDiabeet = "geen limiet", VervangIngId = 1 },
          new Ingrediënt { Naam = "wijn", Value = "rode wijn 14% alcohol", Zwanger = true, MaxZwanger = "niet toegestaan", Diabeet = true, MaxDiabeet = "niet teveel", VervangIngId = 21 },
          new Ingrediënt { Naam = "cola", Value = "frisdank met hoog suikergehalte", Zwanger = false, MaxZwanger = "geen limiet", Diabeet = true, MaxDiabeet = "teveel suiker", VervangIngId = 1 },
          new Ingrediënt { Naam = "applewood-smoked bacon", Value = "speciaal spek", Zwanger = false, MaxZwanger = "geen limiet", Diabeet = false, MaxDiabeet = "geen limiet", VervangIngId = 1 },
          new Ingrediënt { Naam = "Pizza Dough", Value = "deeg voor pizza", Zwanger = false, MaxZwanger = "geen limiet", Diabeet = false, MaxDiabeet = "geen limiet", VervangIngId = 1 },
          new Ingrediënt { Naam = "crème fraîche", Value = "room", Zwanger = false, MaxZwanger = "geen limiet", Diabeet = false, MaxDiabeet = "geen limiet", VervangIngId = 1 },
          new Ingrediënt { Naam = "Caramelized Onions", Value = "ajuin", Zwanger = false, MaxZwanger = "geen limiet", Diabeet = false, MaxDiabeet = "geen limiet", VervangIngId = 7 },
          new Ingrediënt { Naam = "eggs", Value = "eikes", Zwanger = false, MaxZwanger = "geen limiet", Diabeet = false, MaxDiabeet = "geen limiet", VervangIngId = 1 },
          new Ingrediënt { Naam = "mozzarella cheese", Value = "magere mozarella kaas", Zwanger = false, MaxZwanger = "geen limiet", Diabeet = false, MaxDiabeet = "geen limiet", VervangIngId = 1 },
          new Ingrediënt { Naam = "beef", Value = "biefstuk", Zwanger = true, MaxZwanger = "niet rauw", Diabeet = false, MaxDiabeet = "geen limiet", VervangIngId = 1 },
          new Ingrediënt { Naam = "hamburger bun", Value = "hamburger broodje", Zwanger = false, MaxZwanger = "geen limiet", Diabeet = false, MaxDiabeet = "geen limiet", VervangIngId = 1 },
          new Ingrediënt { Naam = "tomato", Value = "tomaat", Zwanger = false, MaxZwanger = "geen limiet", Diabeet = false, MaxDiabeet = "geen limiet", VervangIngId = 1 },
          new Ingrediënt { Naam = "pickles", Value = "augurk", Zwanger = false, MaxZwanger = "geen limiet", Diabeet = false, MaxDiabeet = "geen limiet", VervangIngId = 1 },
          new Ingrediënt { Naam = "onion", Value = "ajuin", Zwanger = false, MaxZwanger = "geen limiet", Diabeet = false, MaxDiabeet = "geen limiet", VervangIngId = 13 },
          new Ingrediënt { Naam = "iceberg lattuce", Value = "ijsbergsla", Zwanger = false, MaxZwanger = "geen limiet", Diabeet = false, MaxDiabeet = "geen limiet", VervangIngId = 1 },
          new Ingrediënt { Naam = "sugar", Value = "suiker", Zwanger = false, MaxZwanger = "geen limiet", Diabeet = true, MaxDiabeet = "oppassen", VervangIngId = 1 },
          new Ingrediënt { Naam = "sushi rice", Value = "sushi rijst", Zwanger = false, MaxZwanger = "geen limiet", Diabeet = false, MaxDiabeet = "geen limiet", VervangIngId = 1 },
          new Ingrediënt { Naam = "salt", Value = "zout", Zwanger = false, MaxZwanger = "geen limiet", Diabeet = false, MaxDiabeet = "geen limiet", VervangIngId = 1 },
          new Ingrediënt { Naam = "rice vinegar", Value = "rijst azijn", Zwanger = false, MaxZwanger = "geen limiet", Diabeet = false, MaxDiabeet = "geen limiet", VervangIngId = 1 }
          );

      context.Klanten.AddRange(
          new Klanten { VoorNaam = "Glenn", AchterNaam = "Lippens", Email = "glenn.lippens@gmail.com", Gsm = 0456881273, Doelgroep = "Zwanger", DietisID = 1 },
          new Klanten { VoorNaam = "Jonan", AchterNaam = "DeBiel", Email = "jonan.debiele@hotmail.com", Gsm = 0456881255, Doelgroep = "Diabeet", DietisID = 1 },
          new Klanten { VoorNaam = "Florian", AchterNaam = "Pieters", Email = "florian.pieters@gman.com", Gsm = 0456886578, Doelgroep = "Zwanger", DietisID = 1 }
          );
      context.Dietist.Add(
          new Dietist { VoorNaam = "Tom", AchterNaam = "Peeters", Email = "tom.peeters.dietist@gmail.com", Gsm = 04568796 }
        );




    }
    public static async Task<bool> SetUsers(DatabaseContext context, UserManager<User> userManager, RoleManager<IdentityRole> roleManager)
    {
      //create users
      await userManager.CreateAsync(new User { UserName = "tom.peeters.dietist@gmail.com" }, "Tom*1234");
      await userManager.CreateAsync(new User { UserName = "glenn.lippens@gmail.com" }, "Glenn*123");
      await userManager.CreateAsync(new User { UserName = "jonan.debiele@hotmail.com" }, "Jon*123");
      var florian = await userManager.CreateAsync(new User { UserName = "florian.pieters@gman.com" }, "Flo*123");

      if (florian.Succeeded)
      {
        //create UserRoles
        await roleManager.CreateAsync(new IdentityRole { Name = "Klant" });
        var admin = await roleManager.CreateAsync(new IdentityRole { Name = "Dietist" });

        if (admin.Succeeded)
        {
          var tom = context.User.First(x => x.UserName == "tom.peeters.dietist@gmail.com");
          var glenn = context.User.First(x => x.UserName == "glenn.lippens@gmail.com");
          var jon = context.User.First(x => x.UserName == "jonan.debiele@hotmail.com");
          var flo = context.User.First(x => x.UserName == "florian.pieters@gman.com");

          //assign roles to users  -> florian = admin (additems)
          await userManager.AddToRoleAsync(tom, "Dietist");
          await userManager.AddToRoleAsync(glenn, "Klant");
          await userManager.AddToRoleAsync(jon, "Klant");
          var created = await userManager.AddToRoleAsync(flo, "Klant");

          if (created.Succeeded)
          {
            context.SaveChanges();
            return true;
          }

          else return false;
        }
        else return false;
      }
      else return false;
    }
  }
}
