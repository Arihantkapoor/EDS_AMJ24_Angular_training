using AutoMapper;

namespace eProductApi.Model
{
    public class ProductMapper: Profile
    {
        public ProductMapper(){
            //source, destination mapping
            CreateMap<ProductDTO,Product>();
        }
    }
}