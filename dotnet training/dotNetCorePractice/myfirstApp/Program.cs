using FluentValidation;
using Microsoft.EntityFrameworkCore;
using myfirstApp.DAL;
using myfirstApp.dbmodel;
using myfirstApp.DynamicMigration;
using myfirstApp.Models;
using myfirstApp.Models.AutoMapper;
using myfirstApp.Models.DTO;
using myfirstApp.Repository;
using FluentValidation.AspNetCore;

var builder = WebApplication.CreateBuilder(args);


// Add services to the container.
//To register my class (dependent objects) with Unity Container is said to be/Known as IOC. 

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies()); //for AutoMapper

builder.Services.AddDbContext<EmployeeDBContext>(t=>t.UseSqlServer(builder.Configuration.GetConnectionString("empcs"))); //This is IOC

// builder.Services.AddDbContext<Dotnet8Context>();

builder.Services.AddTransient<IEmployeeRepository,EmployeeRepository>();

builder.Services.AddScoped<IValidator<EmployeeDTO>,EmployeeValidator>();

builder.Services.AddFluentValidationAutoValidation();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// var summaries = new[]
// {
//     "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
// };

// app.MapGet("/weatherforecast", () =>
// {
//     var forecast =  Enumerable.Range(1, 5).Select(index =>
//         new WeatherForecast
//         (
//             DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
//             Random.Shared.Next(-20, 55),
//             summaries[Random.Shared.Next(summaries.Length)]
//         ))
//         .ToArray();
//     return forecast;
// })
// .WithName("GetWeatherForecast")
// .WithOpenApi();

app.MapControllerRoute(name:"default",pattern:"api/{Controller}/{Action}/{id?}");

app.UseCors(x=>x.WithOrigins("*").AllowAnyMethod().AllowAnyHeader());

app.DynamicMigrationMiddleware();

app.MapControllers();

app.Run(); //terminal middleware

// record WeatherForecast(DateOnly Date, int TemperatureC, string Summary)
// {
//     public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
// }
