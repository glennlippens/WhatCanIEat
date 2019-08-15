using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace CA_WhatCanIEat.viewModel
{
    public class Register
    {

    public string Email { get; set; }

    public string Password { get; set; }

    [Required]
    public string VoorNaam { get; set; }
    [Required]
    public string AchterNaam { get; set; }
    public int Gsm { get; set; }
    public string Doelgroep { get; set; }
    public string Passwoord { get; set; }
    public string DietisEmail { get; set; }

  }
}
