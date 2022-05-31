package com.employee.crud;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/employee")
public class EmployeeController {

    @Autowired
    EmployeeRepository employeeRepository;

    @PostMapping("/create")
    public ResponseEntity<?> createEmployee(@RequestBody EmployeeCreateReq employeeCreateReq) {
        Employee employee = new Employee();
        employee.setName(employeeCreateReq.getName());
        employee.setAge(Integer.parseInt(employeeCreateReq.getAge()));
        employee.setGender(employeeCreateReq.getGender());
        employee.setAddress(employeeCreateReq.getAddress());
        employee.setEmail(employeeCreateReq.getEmail());
        employeeRepository.save(employee);
        return ResponseEntity.ok("Employee Created Successfully");
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateEmployee(@PathVariable Long id, @RequestBody EmployeeCreateReq employeeCreateReq) {
        Optional<Employee> employeeOptional = employeeRepository.findById(id);
        Employee employee = employeeOptional.get();
        employee.setName(employeeCreateReq.getName());
        employee.setAge(Integer.parseInt(employeeCreateReq.getAge()));
        employee.setGender(employeeCreateReq.getGender());
        employee.setAddress(employeeCreateReq.getAddress());
        employee.setEmail(employeeCreateReq.getEmail());
        employeeRepository.save(employee);
        return ResponseEntity.ok("Employee Updated Successfully");
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Long id) {
        Optional<Employee> employeeOptional = employeeRepository.findById(id);
        Employee employee = employeeOptional.get();
        employeeRepository.delete(employee);
        return ResponseEntity.ok("Employee Deleted Successfully");
    }

    @GetMapping("/get/all")
    public ResponseEntity<?> getEmployee() {
        List<Employee> employees = employeeRepository.findAll();
        return ResponseEntity.ok(employees);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getEmployeeById(@PathVariable Long id) {
        Optional<Employee> employees = employeeRepository.findById(id);
        return ResponseEntity.ok(employees);
    }

}
