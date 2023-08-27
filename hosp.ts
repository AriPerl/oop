class Person{
    fName:string;
    lName:string;

    constructor(fName:string,lName:string){
        this.fName = fName;
        this.lName = lName;
    };
};

class Patient extends Person{
    patientID:number;

    constructor(fName:string,lName:string,patientID:number){
        super(fName,lName);
        this.patientID = patientID;
    }

    patientInfo():string{
        return `Patient name is: ${this.fName} ${this.lName}. and his ID is: ${this.patientID}`;
    };
}

class Doctor extends Person{
    doctorID:number;
    specialization: string;

    constructor(fName:string,lName:string,doctorID:number,specialization: string){
        super(fName,lName);
        this.doctorID =doctorID;
        this.specialization = specialization;
    }

    doctorInfo():string{
        return `Doctor name is: ${this.fName} ${this.lName}. and his ID is: ${this.doctorID} specialization - ${this.specialization}`;
    };

};

class Appointment{
    patient:Patient;
    doctor:Doctor;
    date:string;
    time:string;

    constructor(patient:Patient,doctor:Doctor,date:string,time:string){
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
        this.time = time;
    }

    appointmentInfo():string{
        return `
        appoitnment date: ${this.date} , ${this.time} .
        patient name: ${this.patient.fName} ${this.patient.lName}. and his ID is: ${this.patient.patientID}
        doctor name: ${this.doctor.fName} ${this.doctor.lName}. and his ID is: ${this.doctor.doctorID} specialization - ${this.doctor.specialization}`
    };
};

class Hospital{
    patientsArr:Patient[];
    doctorsArr:Doctor[];
    appointmentsArr:Appointment[];

    constructor(patientsArr:Patient[],doctorsArr:Doctor[],appointmentsArr:Appointment[]){
        this.patientsArr = patientsArr;
        this.doctorsArr = doctorsArr;
        this.appointmentsArr = appointmentsArr;
    };

    addPatient(patient:Patient){
        this.patientsArr.push(patient)
    };

    addAppointment(appointment:Appointment){
        this.appointmentsArr.push(appointment)
    };

    addDoctor(doctor:Doctor){
        this.doctorsArr.push(doctor);
    };

    showAppointments(){
        this.appointmentsArr.forEach(element => {
            console.log(element.appointmentInfo());
        });
    }

    appointmentByDoctor(id:number){
        this.appointmentsArr.forEach(element => {
            if (element.doctor.doctorID === id){
                console.log(element.appointmentInfo());
            };
        });
    };

    appointmentByPatient(id:number){
        this.appointmentsArr.forEach(element => {
            if (element.patient.patientID === id){
                console.log(element.appointmentInfo());
            };
        });
    };

    

}