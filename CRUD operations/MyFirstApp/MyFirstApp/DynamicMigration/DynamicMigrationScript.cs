using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MyFirstApp.dbmodel;

namespace MyFirstApp.DynamicMigration
{
    public static class DynamicMigrationScript
    {
        public static void DynamicMigrationMiddleware(this IApplicationBuilder obj){
            //need to write code to generate database dynamically without using tool 
            //dotnet ef
            using(var obj1 = obj.ApplicationServices.CreateScope()){
                obj1.ServiceProvider.GetService<DatabaseFirstApproachContext>().Database.Migrate();
            }
        }
    }
}