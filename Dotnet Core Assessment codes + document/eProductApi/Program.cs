using eProductApi.DAL;
using eProductApi.DynamicMigrations;
using eProductApi.Model;
using eProductApi.Repository;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//AddControllers to the service
builder.Services.AddControllers();

//Adding ProductDBContext
builder.Services.AddDbContext<ProductDBContext>(options=>options.UseSqlServer(builder.Configuration.GetConnectionString("connectionString")));


//Adding Automapper to the service
builder.Services.AddAutoMapper(typeof(ProductMapper));

//Doing IOC of Repository classes
builder.Services.AddTransient<IProductRepository, ProductRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//using dynamic migrations
app.DynamicMigration();

//configuring end points
app.MapControllers();

app.UseHttpsRedirection();



app.Run();

