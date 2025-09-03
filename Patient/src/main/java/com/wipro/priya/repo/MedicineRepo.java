package com.wipro.priya.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wipro.priya.entities.Medicine;

public interface MedicineRepo extends JpaRepository<Medicine, Long> {
}
