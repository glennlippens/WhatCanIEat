using System.ComponentModel.DataAnnotations;

namespace CA_WhatCanIEat.Models
{
  public class Dietist
    {
    [Key]
    public int DietistID { get; set; }
    [Required]
    public string VoorNaam { get; set; }
    [Required]
    public string AchterNaam { get; set; }
    public string Email { get; set; }
    public int Gsm { get; set; }
  }
}
