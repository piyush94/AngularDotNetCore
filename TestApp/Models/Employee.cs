using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TestApp.Models
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }
        public string empName { get; set; }
        public string empDesig { get; set; }
    }
}
