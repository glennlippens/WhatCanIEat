using System.ComponentModel.DataAnnotations;

namespace CA_WhatCanIEat.Models
{
  public class Klanten
    {
    [Key]
    public int CostumerId { get; set; }
    [Required]
    public string VoorNaam { get; set; }
    [Required]
    public string AchterNaam { get; set; }
    public string Email { get; set; }
    public int Gsm { get; set; }
    public string Doelgroep { get; set; }
    public int DietisID { get; set; }
  }
}
