using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeTable.Models
{
    [Table("Employees")]
    public class Employee
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { set; get; }

        [StringLength(255)]
        [Required]
        public string Name { set; get; }

        public float Salary { set; get; }

        [Required]
        public DateTime CreatedDate { set; get; }

        public bool Status { set; get; }

    }
}
