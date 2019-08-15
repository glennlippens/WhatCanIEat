using System.ComponentModel.DataAnnotations;

namespace CA_WhatCanIEat.Models
{

  public class Ingrediënt
    {
      [Key]
      public int IngredientID { get; set; }
      [Required]
      public string Naam { get; set; }
      [Required]
      public string Value { get; set; }
      public bool Zwanger { get; set; }
      public string MaxZwanger { get; set; }
      public bool Diabeet { get; set; }
      public string MaxDiabeet { get; set; }
      public int VervangIngId { get; set; }

      public Ingrediënt ParentIngrediënt { get; set; }


  }
  
}



