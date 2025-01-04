using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace myfirstApp.dbmodel;

public partial class Dotnet8Context : DbContext
{
    public Dotnet8Context()
    {
    }

    public Dotnet8Context(DbContextOptions<Dotnet8Context> options)
        : base(options)
    {
    }

    public virtual DbSet<Product> Products { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("data source=(localdb)\\ProjectModels;database=dotnet8;integrated security=true;encrypt=false;multipleactiveresultsets=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.ProdId).HasName("PK__Products__56958AB273445D9C");

            entity.Property(e => e.ProdId)
                .ValueGeneratedNever()
                .HasColumnName("prod_id");
            entity.Property(e => e.Price).HasColumnName("price");
            entity.Property(e => e.ProdName)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("prod_name");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
