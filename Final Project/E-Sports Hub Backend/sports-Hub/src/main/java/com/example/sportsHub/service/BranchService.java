package com.example.sportsHub.service;

import java.util.List;

import com.example.sportsHub.model.Branch;

public interface BranchService {

    Branch createBranch(Branch branch);

    List<Branch> getAllBranches();

    Branch getBranchById(String id);

    Branch updateBranch(String id, Branch branch);

    void deleteBranch(String id);

}
