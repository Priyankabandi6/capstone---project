package com.wipro.priya.Services;

import java.util.List;

import com.wipro.priya.Entities.Appointment;
import com.wipro.priya.dto.DoctorDto;
import com.wipro.priya.dto.PatientDto;

public interface AppointmentService {
    Appointment bookAppointment(Appointment appointment);
    List<Appointment> getAllAppointments();
    Appointment getAppointmentById(Long id);
    List<Appointment> getAppointmentsByDoctor(Long doctorId);
    List<Appointment> getAppointmentsByPatient(Long patientId);
    Appointment updateAppointment(Long id, Appointment updatedAppointment);
    void cancelAppointment(Long id);
    Appointment updateStatus(Long id, Appointment.Status status);
	PatientDto getPatientDetailsForAppointment(Long appointmentId);
	DoctorDto getDoctorDetailsForAppointment(Long appointmentId);
}