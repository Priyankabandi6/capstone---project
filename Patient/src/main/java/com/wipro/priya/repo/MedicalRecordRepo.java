package com.wipro.priya.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wipro.priya.entities.MedicalRecord;

import java.util.List;

public interface MedicalRecordRepo extends JpaRepository<MedicalRecord, Long> {
    List<MedicalRecord> findByPatient_PatientId(Long patientId);
}
