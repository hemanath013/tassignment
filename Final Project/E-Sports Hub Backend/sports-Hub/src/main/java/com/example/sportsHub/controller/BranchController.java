package com.example.sportsHub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.sportsHub.model.Branch;
import com.example.sportsHub.service.BranchService;

import java.util.List;
@RestController
@CrossOrigin
@RequestMapping("/branches")
public class BranchController {
    @Autowired
    private BranchService branchService;

    @PostMapping
    public ResponseEntity<Branch> createBranch(@RequestBody Branch branch) {
        Branch createdBranch = branchService.createBranch(branch);
        return ResponseEntity.ok(createdBranch);
    }

    @GetMapping
    public ResponseEntity<List<Branch>> getAllBranches() {
        List<Branch> branches = branchService.getAllBranches();
        return ResponseEntity.ok(branches);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Branch> getBranchById(@PathVariable String id) {
        Branch branch = branchService.getBranchById(id);
        if (branch != null) {
            return ResponseEntity.ok(branch);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Branch> updateBranch(@PathVariable String id, @RequestBody Branch branch) {
        Branch updatedBranch = branchService.updateBranch(id, branch);
        if (updatedBranch != null) {
            return ResponseEntity.ok(updatedBranch);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBranch(@PathVariable String id) {
        branchService.deleteBranch(id);
        return ResponseEntity.noContent().build();
    }
}
