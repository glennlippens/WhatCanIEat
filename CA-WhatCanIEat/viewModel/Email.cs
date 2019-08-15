using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace CA_WhatCanIEat.viewModel
{
  public class Email
    {

    [Required]
    [DataType(DataType.Text)]
    public string Name { get; set; }
    [Required]
    [DataType(DataType.EmailAddress)]
    public string email { get; set; }
    [Required]
    [DataType(DataType.Text)]
    public string Subject { get; set; }
    [Required]
    [DataType(DataType.MultilineText)]
    public string Message { get; set; }
    public string Messagea { get; set; }
    public string Messageb { get; set; }
  }
}
