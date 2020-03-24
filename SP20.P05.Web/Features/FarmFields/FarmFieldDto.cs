using System.ComponentModel.DataAnnotations;
using SP20.P05.Web.Features.Shared;

namespace SP20.P05.Web.Features.FarmFields
{
    public class FarmFieldDto
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
        public bool Active { get; set; }

        [Required]
        public DimensionsDto Dimensions { get; set; }
        public double PriceSmallBucket { get; set; }
        public double PriceMediumBucket { get; set; }
        public double PriceLargeBucket { get; set; }
    }
}