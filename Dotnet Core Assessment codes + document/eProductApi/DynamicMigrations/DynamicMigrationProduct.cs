using eProductApi.DAL;
using Microsoft.EntityFrameworkCore;

namespace eProductApi.DynamicMigrations
{
    public static class DynamicMigrationProduct
    {

        //Extension method to be used in program.cs
        public static void DynamicMigration(this IApplicationBuilder app){
           
           using(var obj = app.ApplicationServices.CreateScope()){

            //creating database without running any
               obj.ServiceProvider.GetService<ProductDBContext>().Database.Migrate(); 
           }
        }
    }
}