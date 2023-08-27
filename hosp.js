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
    function Person(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    ;
    return Person;
}());
;
var Patient = /** @class */ (function (_super) {
    __extends(Patient, _super);
    function Patient(fName, lName, patientID) {
        var _this = _super.call(this, fName, lName) || this;
        _this.patientID = patientID;
        return _this;
    }
    Patient.prototype.patientInfo = function () {
        return "Patient name is: ".concat(this.fName, " ").concat(this.lName, ". and his ID is: ").concat(this.patientID);
    };
    ;
    return Patient;
}(Person));
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor(fName, lName, doctorID, specialization) {
        var _this = _super.call(this, fName, lName) || this;
        _this.doctorID = doctorID;
        _this.specialization = specialization;
        return _this;
    }
    Doctor.prototype.doctorInfo = function () {
        return "Doctor name is: ".concat(this.fName, " ").concat(this.lName, ". and his ID is: ").concat(this.doctorID, " specialization - ").concat(this.specialization);
    };
    ;
    return Doctor;
}(Person));
;
var Appointment = /** @class */ (function () {
    function Appointment(patient, doctor, date, time) {
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
        this.time = time;
    }
    Appointment.prototype.appointmentInfo = function () {
        return "\n        appoitnment date: ".concat(this.date, " , ").concat(this.time, " .\n        patient name: ").concat(this.patient.fName, " ").concat(this.patient.lName, ". and his ID is: ").concat(this.patient.patientID, "\n        doctor name: ").concat(this.doctor.fName, " ").concat(this.doctor.lName, ". and his ID is: ").concat(this.doctor.doctorID, " specialization - ").concat(this.doctor.specialization);
    };
    ;
    return Appointment;
}());
;
var Hospital = /** @class */ (function () {
    function Hospital(patientsArr, doctorsArr, appointmentsArr) {
        this.patientsArr = patientsArr;
        this.doctorsArr = doctorsArr;
        this.appointmentsArr = appointmentsArr;
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
    return Hospital;
}());
