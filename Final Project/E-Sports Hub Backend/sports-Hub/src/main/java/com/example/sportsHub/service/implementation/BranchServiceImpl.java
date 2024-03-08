package com.example.sportsHub.service.implementation;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sportsHub.model.Branch;
import com.example.sportsHub.repository.BranchRepository;
import com.example.sportsHub.service.BranchService;

import java.util.List;

@Service
public class BranchServiceImpl implements BranchService {
    @Autowired
    private BranchRepository branchRepository;

    @Override
    public Branch createBranch(Branch branch) {
        return branchRepository.save(branch);
    }

    @Override
    public List<Branch> getAllBranches() {
        return branchRepository.findAll();
    }

    @Override
    public Branch getBranchById(String id) {
        return branchRepository.findById(id).orElse(null);
    }

    @Override
    public Branch updateBranch(String id, Branch branch) {
        if (branchRepository.existsById(id)) {
            branch.setId(id);
            return branchRepository.save(branch);
        }
        return null;
    }

    @Override
    public void deleteBranch(String id) {
        branchRepository.deleteById(id);
    }
}
