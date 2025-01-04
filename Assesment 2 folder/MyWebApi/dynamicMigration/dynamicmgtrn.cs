using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MyWebApi.DAL;

namespace dynamicMigration
{
    public  static class DynamicMgtrn
    {
       public static void DynamicMigrationPractice(this IApplicationBuilder obj){

          using(var obj1 = obj.ApplicationServices.CreateScope()){
            obj1.ServiceProvider.GetService<ProductDBContext>().Database.Migrate();
          }
       }
    }
}