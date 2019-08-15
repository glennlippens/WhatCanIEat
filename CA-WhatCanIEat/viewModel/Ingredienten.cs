using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace CA_WhatCanIEat.viewModel
{
    public class Ingredienten
    {
    [Required]
    [DataType(DataType.Text)]
    public string Naam1 { get; set; }

    [Required]
    [DataType(DataType.Text)]
    public string Naam2 { get; set; }

    [Required]
    [DataType(DataType.Text)]
    public string Naam3 { get; set; }

    [Required]
    [DataType(DataType.Text)]
    public string Naam4 { get; set; }
  }
}
