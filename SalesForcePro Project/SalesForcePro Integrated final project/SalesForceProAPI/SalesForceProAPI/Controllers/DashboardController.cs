using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SalesForceProAPI.Models;
using System.Collections;

namespace SalesForceProAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DashboardController : ControllerBase
    {
        private readonly SalesForceProContext context;
        public DashboardController(SalesForceProContext _context) {
            context = _context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Lead>>> GetSales()
        {
            return Ok(await context.Leads.ToListAsync());
        }
        [HttpPost]
        public async Task<ActionResult<Lead>> PostLead(Lead lead)
        {
            context.Leads.Add(lead);
            await context.SaveChangesAsync();
            return Ok(lead);
        }

        [HttpGet("GraphData")]
        public async Task<ActionResult<IEnumerable<Lead>>> GraphData()
        {
            IDictionary<string, int> dic= new Dictionary<string, int>(); ;
            ArrayList arr = new ArrayList();
            IEnumerable<Lead> leads = context.Leads.ToList();
            foreach(var i in leads)
            {
                if(dic.ContainsKey(i.Interest))
                    dic[i.Interest]++;
                else
                    dic[i.Interest] = 1;
                
            }

            

            return Ok(dic);
        }
        [HttpPut]
        public async Task<ActionResult<Lead>> UpdateLead(Lead lead)
        {
            var l=context.Leads.Find(lead.Id);
            l.Contacted = lead.Contacted;
            context.SaveChanges();
            return Ok(lead);

        }
    }
}
