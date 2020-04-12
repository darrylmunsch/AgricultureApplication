using System;

namespace SP20.P05.Web.Features.FarmFieldTickets
{
    public class FarmFieldTicketDto
    {
        public int Id { get; set; }
        public DateTimeOffset TicketTimeSlot { get; set; }
        public int SmallBucketQty { get; set; }
        public int MediumBucketQty { get; set; }
        public int LargeBucketQty { get; set; }
        public int FarmFieldId { get; set; }
        public int UserId { get; set; }
    }
}