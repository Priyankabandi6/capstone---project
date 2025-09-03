package com.wipro.priya.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.priya.entities.Patient;

@Repository
public interface PatientRepo extends JpaRepository<Patient, Long> {
    // JpaRepository already provides:
    // save(), findById(), findAll(), deleteById(), etc.
    // No need to declare custom deleteById
}
