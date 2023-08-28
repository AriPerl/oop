var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(fName, lName, phoneNum, emergencyContant) {
        this.phoneNum = phoneNum;
        this.emergencyContant = emergencyContant;
        this.fName = fName;
        this.lName = lName;
    }
    ;
    return Person;
}());
;
var MediacalStaff = /** @class */ (function (_super) {
    __extends(MediacalStaff, _super);
    function MediacalStaff(fName, lName, phoneNum, emergencyContant, staffID, position, department) {
        var _this = _super.call(this, fName, lName, phoneNum, emergencyContant) || this;
        _this.staffID = staffID;
        _this.position = position;
        _this.department = department;
        return _this;
    }
    ;
    return MediacalStaff;
}(Person));
var Patient = /** @class */ (function (_super) {
    __extends(Patient, _super);
    function Patient(fName, lName, patientID, phoneNum, emergencyContant, medicalHistory) {
        var _this = _super.call(this, fName, lName, phoneNum, emergencyContant) || this;
        _this.patientID = patientID;
        _this.medicalHistory = medicalHistory;
        return _this;
    }
    Patient.prototype.patientInfo = function () {
        return "Patient name is: ".concat(this.fName, " ").concat(this.lName, ". and his ID is: ").concat(this.patientID);
    };
    ;
    Patient.prototype.updateMedic = function (newData) {
        this.medicalHistory = newData;
    };
    return Patient;
}(Person));
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor(fName, lName, phoneNum, emergencyContant, staffID, position, department, doctorID, specialization) {
        var _this = _super.call(this, fName, lName, phoneNum, emergencyContant, staffID, position, department) || this;
        _this.doctorID = doctorID;
        _this.specialization = specialization;
        return _this;
    }
    Doctor.prototype.doctorInfo = function () {
        return "Doctor name is: ".concat(this.fName, " ").concat(this.lName, ". and his ID is: ").concat(this.doctorID, " specialization - ").concat(this.specialization);
    };
    ;
    return Doctor;
}(MediacalStaff));
;
var Appointment = /** @class */ (function () {
    function Appointment(patient, doctor, date, time, status) {
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
        this.time = time;
        this.status = status;
    }
    Appointment.prototype.appointmentInfo = function () {
        return "\n        appoitnment date: ".concat(this.date, " , ").concat(this.time, " .\n        patient name: ").concat(this.patient.fName, " ").concat(this.patient.lName, ". and his ID is: ").concat(this.patient.patientID, "\n        doctor name: ").concat(this.doctor.fName, " ").concat(this.doctor.lName, ". and his ID is: ").concat(this.doctor.doctorID, " specialization - ").concat(this.doctor.specialization, "\n        status of this appointment: ").concat(this.status);
    };
    ;
    Appointment.prototype.statusSet = function (word) {
        if (word === "available" || word === "not available" || word === "cancelled") {
            this.status = word;
        }
        else {
            console.log("not a valid input");
        }
        ;
    };
    ;
    Appointment.prototype.getStatus = function () {
        return this.status;
    };
    return Appointment;
}());
;
var MedicalRecord = /** @class */ (function () {
    function MedicalRecord(patient, doctor, diagnosis, presciption) {
        this.patient = patient;
        this.doctor = doctor;
        this.diagnosis = diagnosis;
        this.presciption = presciption;
    }
    ;
    return MedicalRecord;
}());
;
var Hospital = /** @class */ (function () {
    function Hospital(patientsArr, doctorsArr, appointmentsArr, medicalRecArr) {
        this.patientsArr = patientsArr;
        this.doctorsArr = doctorsArr;
        this.appointmentsArr = appointmentsArr;
        this.medicalRecArr = medicalRecArr;
    }
    ;
    Hospital.prototype.addPatient = function (patient) {
        this.patientsArr.push(patient);
    };
    ;
    Hospital.prototype.addAppointment = function (appointment) {
        this.appointmentsArr.push(appointment);
    };
    ;
    Hospital.prototype.addDoctor = function (doctor) {
        this.doctorsArr.push(doctor);
    };
    ;
    Hospital.prototype.addMedicalRec = function (medicalRec) {
        this.medicalRecArr.push(medicalRec);
    };
    ;
    Hospital.prototype.showAppointments = function () {
        this.appointmentsArr.forEach(function (element) {
            console.log(element.appointmentInfo());
        });
    };
    Hospital.prototype.appointmentByDoctor = function (id) {
        this.appointmentsArr.forEach(function (element) {
            if (element.doctor.doctorID === id) {
                console.log(element.appointmentInfo());
            }
            ;
        });
    };
    ;
    Hospital.prototype.appointmentByPatient = function (id) {
        this.appointmentsArr.forEach(function (element) {
            if (element.patient.patientID === id) {
                console.log(element.appointmentInfo());
            }
            ;
        });
    };
    ;
    Hospital.prototype.getMedicalRec = function (pID) {
        this.medicalRecArr.forEach(function (element) {
            if (element.patient.patientID === pID) {
                console.log("Patient: ".concat(element.patient.fName, " ").concat(element.patient.lName, " diagnosis: ").concat(element.diagnosis));
            }
        });
    };
    ;
    Hospital.prototype.getDocSchedule = function (docID) {
        this.appointmentsArr.forEach(function (element) {
            if (element.doctor.doctorID === docID && element.getStatus() === "available") {
                console.log("Doctor ".concat(element.doctor.lName + " " + element.doctor.lName, " available at this date ").concat(element.date));
            }
        });
    };
    ;
    return Hospital;
}());
