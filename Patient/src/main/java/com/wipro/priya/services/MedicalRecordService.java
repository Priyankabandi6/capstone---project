package com.wipro.priya.services;

import java.util.List;

import com.wipro.priya.dto.MedicalRecordDto;
import com.wipro.priya.dto.MedicineDto;

public interface MedicalRecordService {

    MedicalRecordDto addMedicalRecord(int patientId, MedicalRecordDto dto);

    List<MedicalRecordDto> getRecordsByPatientId(int patientId);

    MedicalRecordDto addMedicineToRecord(Long recordId, List<MedicineDto> medicines);
}

