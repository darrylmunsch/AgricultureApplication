using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SP20.P05.Web.Features.Authentication;
using SP20.P05.Web.Features.Stripe;
using Stripe;
using Stripe.Checkout;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP20.P05.Web.Controllers
{
    [ApiController]
    [Route("api/stripe")]
    public class StripePaymentController : Controller
    {
        [HttpPost("charge")]
        [Authorize(Roles = Roles.Customer)]
        public IActionResult Charge(StripeChargeDto targetValue)
        {
            var options = new SessionCreateOptions{
                PaymentMethodTypes = new List<string>
                {
                    "card",
                },

                LineItems = new List<SessionLineItemOptions>
                {
                    new SessionLineItemOptions
                    {
                        Name= targetValue.Name,
                        Description= targetValue.Description,
                        Amount= targetValue.Amount,
                        Currency="usd"
                    },
                },

                SuccessUrl = "https://example.com/success?session_id={CHECKOUT_SESSION_ID}",
                CancelUrl = "https://example.com/cancel",
            };

            var service = new SessionService();
            Session session = service.Create(options);

            /*var customers = new CustomerService();
            var charges = new ChargeService();

            var customer = customers.Create(new CustomerCreateOptions{
                Email = stripeEmail,
                SourceToken = stripeToken
            });

            var charge = charges.Create(new ChargeCreateOptions{
                Amount = ammount,
                Description = description,
                Currency="USD",
                CustomerId=customer.Id

            });*/

            return Ok();
        }
    }
}
