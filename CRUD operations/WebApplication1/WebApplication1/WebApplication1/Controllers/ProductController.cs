using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Model;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.OpenApi.Any;
using Microsoft.Data.SqlClient;
using Microsoft.Data;
using System.Data;


namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        const string con = "Data Source=(localdb)\\ProjectModels;Initial Catalog=angdb;Integrated Security=true";

        private readonly Apidbcontext _context;
        public ProductController(Apidbcontext context)
        {
            _context = context;
        }
        [HttpGet]
        [Route("GetProduct")]
        public async Task<IEnumerable<Product>> GetProduct()
        {
            //var products= await _context.Database.ExecuteSqlInterpolatedAsync($"EXEC usp_productcrud @Action='Read'");
            //return await _context.Product.ToListAsync();
            return await _context.Product.FromSqlRaw("EXEC usp_productcrud @Action='Read'").ToListAsync();
        }
        [HttpPost]
        [Route("PostProduct")]
        public async Task<Product> PostProduct(Product product)
        {
            //_context.Product.Add(product);
            //await _context.SaveChangesAsync();
            //return product;
            //var resukt= await _context.Database.ExecuteSqlInterpolated($"EXEC usp_productcrud @Action='Create', @Name={product.Name}, @Price={product.Price}");

            //return await _context.Product.FromSqlRaw("EXEC usp_productcrud @Action='Create', @Name="+product.Name+" ,@Price="+product.Price).FirstOrDefaultAsync();

            //var parameters = new[]
            //{
            //    //new SqlParameter("@Action", "Create"),
            //    //new SqlParameter("@Name", product.Name),
            //    //new SqlParameter("@Price", product.Price)
            //     new SqlParameter("@Action", SqlDbType.VarChar) { Value = "Create" },
            //     new SqlParameter("@@ProductId", SqlDbType.Int) { Value = product.Id },

            //     new SqlParameter("@Name", SqlDbType.NVarChar) { Value = product.Name },
            //     new SqlParameter("@Price", SqlDbType.Int) { Value = product.Price }




            //};

            //int count=await _context.Database.ExecuteSqlRawAsync("EXEC usp_productcrud @Action, @Name, @Price", parameters);


            //if (count > 0)
            //{
            //    await _context.SaveChangesAsync();
            //    return product;
            //}

            //return null;
            using (SqlConnection connection = new SqlConnection(con))
            {
                connection.Open();
                using (SqlCommand command = connection.CreateCommand())
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.CommandText = "usp_productcrud";
                    command.Parameters.AddWithValue("@Action", "Create");
                    command.Parameters.AddWithValue("@Name", product.Name);
                    command.Parameters.AddWithValue("@Price", product.Price);
                    int rows = command.ExecuteNonQuery();
                    if (rows > 0)
                    {
                        return product;

                    }
                    else
                    {
                        return null;
                    }
                }
            }
        }
        [HttpPut]
        [Route("UpdateProduct")]

        public async Task<Product> UpdateProduct(Product product) {
            using (SqlConnection connection = new SqlConnection(con))
            {
                connection.Open();
                using (SqlCommand command = connection.CreateCommand())
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.CommandText = "usp_productcrud";
                    command.Parameters.AddWithValue("@Action", "Update");
                    command.Parameters.AddWithValue("@ProductId", product.Id);
                    command.Parameters.AddWithValue("@Name", product.Name);
                    command.Parameters.AddWithValue("@Price", product.Price);
                    int rows = command.ExecuteNonQuery();
                    if (rows > 0)
                    {
                        return product;

                    }
                    else
                    {
                        return null;
                    }
                }
            }
        }

        [HttpDelete]
        [Route("DeleteProduct")]

        public async Task<int> DeleteProduct(int id)
        {
            using (SqlConnection connection = new SqlConnection(con))
            {
                connection.Open();
                using (SqlCommand command = connection.CreateCommand())
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.CommandText = "usp_productcrud";
                    command.Parameters.AddWithValue("@Action", "Delete");
                    command.Parameters.AddWithValue("@ProductId", id);
                    int rows = command.ExecuteNonQuery();
                    return rows;
                }
            }
        }

    }
}
