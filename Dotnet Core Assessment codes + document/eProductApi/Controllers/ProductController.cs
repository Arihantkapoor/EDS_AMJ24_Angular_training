using AutoMapper;
using eProductApi.Model;
using eProductApi.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.JSInterop.Infrastructure;

namespace eProductApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        IMapper _mapper;
        IProductRepository _productRepo;
        public ProductController(IMapper mapper, IProductRepository productRepo)
        {
            _mapper = mapper;
            _productRepo = productRepo;
        }

        [HttpGet("GetAllProducts")] 
        //Api end Point for Getting all the products present in the database
        public async Task<IActionResult> GetAllProducts(){
            return Ok(await _productRepo.GetAllProducts());
        }

        [HttpPost("PostProduct")]
        //Api end point for Adding new product 
        public async Task<IActionResult> AddProduct(ProductDTO productDTO){
            Product product = _mapper.Map<Product>(productDTO);
            return Ok(await _productRepo.AddProduct(product));
        }

        [HttpDelete("DeleteProduct")]
        //Api end point for deleting a product
        public async Task<IActionResult> DeleteProduct(int id){
            return Ok(await _productRepo.DeleteProduct(id));
        }

        [HttpPut("UpdateProduct")]
        //Api end point for updating a product
        public async Task<IActionResult> UpdateProduct(ProductDTO productDTO){
            Product product = _mapper.Map<Product>(productDTO);
            return Ok(await _productRepo.UpdateProduct(product));
        }
    }
}

