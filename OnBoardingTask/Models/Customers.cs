using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace OnBoardingTask.Models
{
    public partial class Customers
    {
        public Customers()
        {
            Sales = new HashSet<Sales>();
        }

        public int CustomerId { get; set; }
        
        public string Name { get; set; }
        
        public string Address { get; set; }

        public virtual ICollection<Sales> Sales { get; set; }
    }
}
