using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CA_WhatCanIEat.Models;
using System.ComponentModel.DataAnnotations;
namespace CA_WhatCanIEat.viewModel
{
    public class Klantenvm
    {
      public int CostumerId { get; set; }
      public string voornaam { get; set; }
    public string achternaam { get; set; }
    public string email { get; set; }
    public int gsm { get; set; }
    public int DietisID { get; set; }
    public string Doelgroep { get; set; }
    public bool deleteklant { get; set; }
    public bool addklant { get; set; }
    public bool editklant { get; set; }


  }
}
