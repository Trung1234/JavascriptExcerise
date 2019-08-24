using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using EmployeeTable.Models;

namespace EmployeeTable.Controllers
{
    public class EmployeeController : Controller
    {
        private readonly EmployeeTableContext _context;

        public EmployeeController(EmployeeTableContext context)
        {
            _context = context;
        }
        [Route("~/api/GetEmployees")]
        [HttpGet]
        public ICollection<Employee> GetEmployees()
        {
            return _context.Employee.ToList();
        }

        // GET: Employee
        public async Task<IActionResult> Index()
        {
            return View(await _context.Employee.ToListAsync());
        }

        [Route("~/api/AddEmployee")]
        [HttpPost]
        public IActionResult AddEmployee([FromBody]Employee obj)
        {
            _context.Employee.Add(obj);
            _context.SaveChanges();
            return new ObjectResult("Employee added successfully!");
        }

        [HttpGet("{id}")]
        public Employee Get(int id)
        {
            return _context.Employee.Find(id);
        }

        [Route("~/api/UpdateEmployee")]
        [HttpPut]
        public IActionResult UpdateEmployee([FromBody]Employee obj)
        {
            _context.Employee.Update(obj);
            _context.SaveChanges();
            return new ObjectResult("Employee modified successfully!");
        }

        [Route("~/api/DeleteEmployee/{id}")]
        [HttpDelete]
        public IActionResult Delete(int id)
        {
            _context.Employee.Remove(_context.Employee.Find(id));
            _context.SaveChanges();
            return new ObjectResult("Employee deleted successfully!");
        }

    }
}
