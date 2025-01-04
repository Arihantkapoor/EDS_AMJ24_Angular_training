using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace MyFirstApp.dbmodel;

public partial class DatabaseFirstApproachContext : DbContext
{
    public DatabaseFirstApproachContext()
    {
    }

    public DatabaseFirstApproachContext(DbContextOptions<DatabaseFirstApproachContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Product> Products { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("data source=(localdb)\\ProjectModels;database=DatabaseFirstApproach;integrated security=true;encrypt=false;multipleactiveresultsets=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.Prodid).HasName("PK__Products__31A473299F6BF8A4");

            entity.Property(e => e.Prodid)
                .ValueGeneratedNever()
                .HasColumnName("prodid");
            entity.Property(e => e.Prodname)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("prodname");
            entity.Property(e => e.Prodprice).HasColumnName("prodprice");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
