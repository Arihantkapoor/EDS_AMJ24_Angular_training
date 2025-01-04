using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;

namespace WebApplication1.Shared
{
    public class SQLHelper
    {
        const string con = "Data Source=(localdb)\\ProjectModels;Initial Catalog=angdb;Integrated Security=true";


        public Task<IActionResult> CallProcedure(string procedureName, params object[] parameters)
        {
            using (SqlConnection connection = new SqlConnection(con))
            {
                connection.Open();
                using (SqlCommand command = connection.CreateCommand())
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.CommandText = procedureName;

                    for (int i = 0; i < parameters.Length; i += 2)
                    {
                        command.Parameters.AddWithValue(parameters[i].ToString(), parameters[i + 1]);
                    }

                    
                    
                }
            }
            return Task.FromResult<IActionResult>(null);
        }
    }
}
