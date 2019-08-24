using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace EmployeeTable.Models
{
    public class EmployeeTableContext : DbContext
    {
        public EmployeeTableContext (DbContextOptions<EmployeeTableContext> options)
            : base(options)
        {
        }

        public DbSet<EmployeeTable.Models.Employee> Employee { get; set; }
    }
}
