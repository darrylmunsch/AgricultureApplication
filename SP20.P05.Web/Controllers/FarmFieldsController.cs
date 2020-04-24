using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SP20.P05.Web.Data;
using SP20.P05.Web.Features.Authentication;
using SP20.P05.Web.Features.FarmFields;
using SP20.P05.Web.Features.Shared;

namespace SP20.P05.Web.Controllers
{
    [ApiController]
    [Route("api/farm-fields")]
    public class FarmFieldsController : ControllerBase
    {
        private readonly DataContext context;

        public FarmFieldsController(DataContext context)
        {
            this.context = context;
        }

        // this is so we don't have to write a lot of repetitive code
        // hint: automapper might be useful for things like this
        private static Expression<Func<FarmField, FarmFieldDto>> MapEntityToDto()
        {
            return x => new FarmFieldDto
            {
                Id = x.Id,
                Active = x.Active,
                Name = x.Name,
                Dimensions = new DimensionsDto
                {
                    Width = x.Dimensions.Width,
                    Height = x.Dimensions.Height
                },
                PriceSmallBucket = x.PriceSmallBucket,
                PriceMediumBucket = x.PriceMediumBucket,
                PriceLargeBucket = x.PriceLargeBucket
            };
        }

        [HttpGet]
        [Authorize(Roles = Roles.ManagerPlus)]
        public IEnumerable<FarmFieldDto> GetAll()
        {
            return context.Set<FarmField>().Select(MapEntityToDto()).ToList();
        }

        [HttpGet("active")]
        public IEnumerable<FarmFieldDto> GetAllActive()
        {
            return context.Set<FarmField>().Where(x=>x.Active).Select(MapEntityToDto()).ToList();
        }

        [HttpGet("/get-by-name/{name}")]
        public ActionResult<FarmFieldDto> GetByName(string name)
        {
            var data= context.Set<FarmField>().Where(x => x.Name == name).Select(MapEntityToDto()).FirstOrDefault();

            if(data == null)
            {
                return NotFound();
            }

            if(!data.Active && !Roles.IsManagerPlus(User))
            {
                return NotFound();
            }

            return data;
        }

        [HttpGet("/api/farm-fields/{id}")]
        public ActionResult<FarmFieldDto> GetById(int id)
        {
            var data = context.Set<FarmField>().Where(x => x.Id == id).Select(MapEntityToDto()).FirstOrDefault();
            if (data == null)
            {
                return NotFound();
            }

            if (!data.Active && !Roles.IsManagerPlus(User))
            {
                return NotFound();
            }

            return data;
        }

        [HttpPost]
        [Authorize(Roles = Roles.ManagerPlus)]
        public ActionResult<FarmFieldDto> Create(FarmFieldDto targetValue)
        {
            var data = context.Set<FarmField>().Add(new FarmField
            {
                Name = targetValue.Name,
                Active = targetValue.Active,
                Dimensions = new Dimensions
                {
                    Width = targetValue.Dimensions.Width,
                    Height = targetValue.Dimensions.Height
                },
                PriceSmallBucket = targetValue.PriceSmallBucket,
                PriceMediumBucket = targetValue.PriceMediumBucket,
                PriceLargeBucket = targetValue.PriceLargeBucket
            });

            context.SaveChanges();
            targetValue.Id = data.Entity.Id;

            return Created($"/api/farm-field/{data.Entity.Id}", targetValue);
        }

        [HttpPut("{id}")]
        [Authorize(Roles = Roles.ManagerPlus)]
        public ActionResult<FarmFieldDto> Update(int id, FarmFieldDto targetValue)
        {
            var data = context.Set<FarmField>().FirstOrDefault(x => x.Id == id);
            if (data == null)
            {
                return NotFound();
            }

            data.Name = targetValue.Name;
            data.Active = targetValue.Active;
            data.Dimensions = new Dimensions
            {
                Width = targetValue.Dimensions.Width,
                Height = targetValue.Dimensions.Height
            };
            data.PriceSmallBucket = targetValue.PriceSmallBucket;
            data.PriceMediumBucket = targetValue.PriceMediumBucket;
            data.PriceLargeBucket = targetValue.PriceLargeBucket;

            context.SaveChanges();

            return Ok();
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = Roles.ManagerPlus)]
        public ActionResult<FarmFieldDto> Delete(int id)
        {
            var data = context.Set<FarmField>().FirstOrDefault(x => x.Id == id);
            if (data == null)
            {
                return NotFound();
            }

            context.Set<FarmField>().Remove(data);
            context.SaveChanges();

            return Ok();
        }
    }
}