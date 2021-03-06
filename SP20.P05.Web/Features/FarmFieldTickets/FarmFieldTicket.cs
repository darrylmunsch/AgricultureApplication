﻿using System;
using SP20.P05.Web.Features.Authentication;
using SP20.P05.Web.Features.FarmFields;

namespace SP20.P05.Web.Features.FarmFieldTickets
{
    public class FarmFieldTicket
    {
        public int Id { get; set; }
        public DateTimeOffset? Redeemed { get; set; }
        public DateTimeOffset TicketTimeSlot { get; set; }
        public int SmallBucketQty { get; set; }
        public int MediumBucketQty { get; set; }
        public int LargeBucketQty { get; set; }

        public int FarmFieldId { get; set; }
        public virtual FarmField FarmField { get; set; }

        public int UserId { get; set; }
        public virtual User User { get; set; }

    }
}