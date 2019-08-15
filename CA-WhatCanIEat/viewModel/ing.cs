using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace CA_WhatCanIEat.viewModel
{
    public class ing
    {
    public string Email { get; set; }
    public string Naam { get; set; }
    public int Ingid { get; set; }
    [Required]
    [DataType(DataType.Text)]
    public string Value { get; set; }
    public bool Zwanger { get; set; }
    public bool Diabeet { get; set; }

    [Required]
    [DataType(DataType.Text)]
    public string MaxZwanger { get; set; }
    public string MaxDiabeet { get; set; }

    public int IngredientID { get; set; }
    public bool deleteingredient { get; set; }
    public bool editingredient { get; set; }
    public bool addingredient { get; set; }
  }
}
