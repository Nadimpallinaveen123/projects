package com.example.customerBulkUpload.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import com.example.customerBulkUpload.model.Customer;
import com.example.customerBulkUpload.service.CustomerService;


import java.util.List;

@RestController
@RequestMapping("/api")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    // endpoint to search customers
    @GetMapping("/search-customers")
    public ResponseEntity<List<Customer>> searchCustomers(
            @RequestParam(name="name", required = false) String name,
            @RequestParam(name="gender", required = false) String gender) {
        List<Customer> customers = customerService.searchCustomers(name, gender);
        return ResponseEntity.ok(customers);
    }


    
    @PostMapping("/upload-records")
    public ResponseEntity<List<Customer>> uploadRecords(@RequestBody List<Customer> customers) {                                           //passing list of customers data into the server 
        List<Customer> uploadedCustomers = customerService.uploadRecords(customers);
        return ResponseEntity.ok(uploadedCustomers);
    }
}
