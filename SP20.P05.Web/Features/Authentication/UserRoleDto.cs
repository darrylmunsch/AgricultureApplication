using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP20.P05.Web.Features.Authentication
{
    public class UserRoleDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public IList<string> UserRoles { get; set; }
        public bool isManagerPlus { get; set; }
        public bool isEmployeePlus { get; set; }
    }
}
