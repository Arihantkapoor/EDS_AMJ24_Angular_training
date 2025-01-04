using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace SalesForceProAPI.Models;

public partial class SalesForceProContext : DbContext
{
    public SalesForceProContext()
    {
    }

    public SalesForceProContext(DbContextOptions<SalesForceProContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<Lead> Leads { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<Sale> Sales { get; set; }

    public virtual DbSet<UserCredential> UserCredentials { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("data source=(localdb)\\ProjectModels;database=SalesForcePro;integrated security=true;encrypt=false;multipleactiveresultsets=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Customer__3213E83FF9FA435D");

            entity.ToTable("Customer");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CustomerAddress)
                .IsUnicode(false)
                .HasColumnName("customer_address");
            entity.Property(e => e.CustomerName)
                .IsUnicode(false)
                .HasColumnName("customer_name");
            entity.Property(e => e.Email)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.Mobile)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("mobile");
        });

        modelBuilder.Entity<Lead>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__leads__3213E83F7C25AF36");

            entity.ToTable("leads");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Contacted)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasColumnName("contacted");
            entity.Property(e => e.Email)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.Interest)
                .IsUnicode(false)
                .HasColumnName("interest");
            entity.Property(e => e.LeadAddress)
                .IsUnicode(false)
                .HasColumnName("lead_address");
            entity.Property(e => e.LeadName)
                .IsUnicode(false)
                .HasColumnName("lead_name");
            entity.Property(e => e.Mobile)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("mobile");
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Product__3213E83FAEE5B616");

            entity.ToTable("Product");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Discount).HasColumnName("discount");
            entity.Property(e => e.IsAvailable)
                .HasMaxLength(1)
                .IsUnicode(false);
            entity.Property(e => e.ProductDescription)
                .IsUnicode(false)
                .HasColumnName("product_description");
            entity.Property(e => e.ProductName)
                .IsUnicode(false)
                .HasColumnName("product_name");
            entity.Property(e => e.ProductPrice)
                .IsUnicode(false)
                .HasColumnName("product_price");
            entity.Property(e => e.Quantity)
                .IsUnicode(false)
                .HasColumnName("quantity");
        });

        modelBuilder.Entity<Sale>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Sales__3213E83F912F7AF7");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CustomerId).HasColumnName("customer_id");
            entity.Property(e => e.CustomerName)
                .IsUnicode(false)
                .HasColumnName("customer_name");
            entity.Property(e => e.ProductId).HasColumnName("product_id");
            entity.Property(e => e.ProductName)
                .IsUnicode(false)
                .HasColumnName("product_name");
            entity.Property(e => e.ProductPrice)
                .IsUnicode(false)
                .HasColumnName("product_price");
            entity.Property(e => e.Selldate).HasColumnName("selldate");
            entity.Property(e => e.Sellquantity)
                .IsUnicode(false)
                .HasColumnName("sellquantity");

        });

        modelBuilder.Entity<UserCredential>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__UserCred__3213E83FC6CCC3F2");

            entity.ToTable("UserCredential");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Email)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.Mobile)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("mobile");
            entity.Property(e => e.UsersName)
                .IsUnicode(false)
                .HasColumnName("users_name");
            entity.Property(e => e.UsersPassword)
                .IsUnicode(false)
                .HasColumnName("users_password");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
