using Microsoft.AspNetCore.Mvc;
using Stripe;
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
        public IActionResult Charge(string stripeEmail, string stripeToken)
        {
            var customers = new CustomerService();
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

            });

            return Ok();
        }
    }
}
