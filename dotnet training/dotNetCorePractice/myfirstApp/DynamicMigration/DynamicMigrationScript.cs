using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using myfirstApp.DAL;

namespace myfirstApp.DynamicMigration
{
    public static class DynamicMigrationScript
    {
        public static void DynamicMigrationMiddleware(this IApplicationBuilder obj){
            //need to write code to generate database dynamically without using tool dotnet ef


            //explicit garbage collection
            using(var obj1 = obj.ApplicationServices.CreateScope()){

                obj1.ServiceProvider.GetService<EmployeeDBContext>().Database.Migrate();


            }   
        }
    }
}