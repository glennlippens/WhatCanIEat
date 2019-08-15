using MailKit.Net.Smtp;
using MimeKit;

namespace CA_WhatCanIEat.Method
{
  public class MailMethode
  {
    public static void sendMail(string email, string subject, string msg)
    {


      var message = new MimeMessage();
      message.From.Add(new MailboxAddress("tom.peeters.dietist@gmail.com"));
      message.To.Add(new MailboxAddress(email));
      message.Subject = subject;
      message.Body = new TextPart("html")
      {
        Text = msg
      };
      using (var client = new SmtpClient())
      {
        client.ServerCertificateValidationCallback = (s, c, h, e) => true;
        client.Connect("smtp.gmail.com", 587, false);
        client.Authenticate("tom.peeters.dietist@gmail.com", "Tom*1234");
        client.Send(message);

        client.Disconnect(true);


      }
    }
  }
}
