using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SP20.P05.Web.Features.Authentication;
using SP20.P05.Web.Features.Stripe;
using Stripe;
using Stripe.Checkout;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;

namespace SP20.P05.Web.Controllers
{
    [ApiController]
    [Route("api/stripe")]
    public class StripePaymentController : Controller
    {
        [HttpPost("charge")]
        public async Task<IActionResult> Charge(StripeChargeDto targetValue)
        {
            try{
                StripeConfiguration.ApiKey = ConfigurationManager.AppSettings["stripe:PublishableKey"];

                var options = new ChargeCreateOptions
                {
                    Amount = targetValue.Amount,
                    Currency = "USD",
                    Description = targetValue.Description,
                    Source = targetValue.stripeToken.Id,
                    ReceiptEmail = targetValue.stripeEmail           
                };
                var service = new ChargeService();
                Charge charge = await service.CreateAsync(options);

                if (charge.Paid)
                {
                    return Ok("Success");
                }
                else
                {
                    return BadRequest("Payment Failed");
                }
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
