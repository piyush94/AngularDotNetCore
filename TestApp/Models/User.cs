using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TestApp.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string username { get; set; }
        public string password { get; set; }
    }
}
