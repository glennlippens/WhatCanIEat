using CA_WhatCanIEat.models;
using CA_WhatCanIEat.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CA_WhatCanIEat.data
{
  public class DatabaseContext : IdentityDbContext<User>
  {
    public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
    {
    }
    public DbSet<Product> Producten { get; set; }
    public DbSet<Ingrediënt> Ingrediënten { get; set; }
    public DbSet<Klanten> Klanten { get; set; }
    public DbSet<Dietist> Dietist { get; set; }
    public DbSet<User> User { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      builder.Entity<Product>().ToTable("Product");
      builder.Entity<Ingrediënt>().ToTable("Ingrediënt");
      builder.Entity<Klanten>().ToTable("Klanten");
      builder.Entity<Dietist>().ToTable("Dietist");
      builder.Entity<User>().ToTable("User");
      base.OnModelCreating(builder);
    }


  }
}
