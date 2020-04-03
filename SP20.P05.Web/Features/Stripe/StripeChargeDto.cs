using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP20.P05.Web.Features.Stripe
{
    public class StripeChargeDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int Amount { get; set; }
    }
}
