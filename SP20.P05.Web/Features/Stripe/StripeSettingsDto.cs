using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP20.P05.Web.Features.Stripe
{
    public class StripeSettingsDto
    {
        public string SeceretKey { get; set; }
        public string PublishableKey { get; set; }
    }
}
