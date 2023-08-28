class Person{
    fName:string;
    lName:string;
    phoneNum:number;
    emergencyContant:string;


    constructor(fName:string,lName:string,phoneNum:number,emergencyContant:string){
        this.phoneNum = phoneNum;
        this.emergencyContant =emergencyContant;
        this.fName = fName;
        this.lName = lName;
    };
};

class MediacalStaff extends Person{
    staffID:number;
    position:string;
    department:string;

    constructor(fName:string,lName:string,phoneNum:number,emergencyContant:string,staffID:number,position:string,department:string){
        super(fName,lName,phoneNum,emergencyContant);
        this.staffID = staffID;
        this.position = position;
        this.department = department;
    };
    
}

class Patient extends Person{
    patientID:number;
    medicalHistory: string[];


    constructor(fName:string,lName:string,patientID:number,phoneNum:number,emergencyContant:string,medicalHistory: string[]){
        super(fName,lName,phoneNum,emergencyContant);
        this.patientID = patientID;
        this.medicalHistory = medicalHistory;

    }

    patientInfo():string{
        return `Patient name is: ${this.fName} ${this.lName}. and his ID is: ${this.patientID}`;
    };

    updateMedic(newData:string[]){
        this.medicalHistory = newData;
    }
}

class Doctor extends MediacalStaff{
    doctorID:number;
    specialization: string;

    constructor(fName:string,lName:string,phoneNum:number,emergencyContant:string,staffID:number,position:string,department:string,doctorID:number,specialization: string){
        super(fName,lName,phoneNum,emergencyContant,staffID,position,department);
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
    private status:string;

    constructor(patient:Patient,doctor:Doctor,date:string,time:string,status:string){
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
        this.time = time;
        this.status = status;
    }

    appointmentInfo():string{
        return `
        appoitnment date: ${this.date} , ${this.time} .
        patient name: ${this.patient.fName} ${this.patient.lName}. and his ID is: ${this.patient.patientID}
        doctor name: ${this.doctor.fName} ${this.doctor.lName}. and his ID is: ${this.doctor.doctorID} specialization - ${this.doctor.specialization}
        status of this appointment: ${this.status}`
    };

    statusSet(word:string){
        if (word === "available" || word === "not available" || word === "cancelled" ){
            this.status = word;
        }else{
            console.log("not a valid input");
        };
    };

    getStatus():string{
        return this.status;
    }
};

class MedicalRecord{
    patient:Patient;
    doctor:Doctor;
    diagnosis:string;
    presciption:string;

    constructor(patient:Patient,doctor:Doctor,diagnosis:string,presciption:string){
        this.patient = patient;
        this.doctor = doctor;
        this.diagnosis = diagnosis;
        this.presciption = presciption;
    };
};

class Hospital{
    private patientsArr:Patient[];
    doctorsArr:Doctor[];
    appointmentsArr:Appointment[];
    medicalRecArr:MedicalRecord[];

    constructor(patientsArr:Patient[],doctorsArr:Doctor[],appointmentsArr:Appointment[],medicalRecArr:MedicalRecord[]){
        this.patientsArr = patientsArr;
        this.doctorsArr = doctorsArr;
        this.appointmentsArr = appointmentsArr;
        this.medicalRecArr = medicalRecArr;
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

    addMedicalRec(medicalRec:MedicalRecord){
        this.medicalRecArr.push(medicalRec);
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

    getMedicalRec(pID:number){
        this.medicalRecArr.forEach(element => {
            if(element.patient.patientID === pID){
                console.log(`Patient: ${element.patient.fName} ${element.patient.lName} diagnosis: ${element.diagnosis}`);
            }
        });
    };

    getDocSchedule(docID:number){        
        this.appointmentsArr.forEach(element => {
            if(element.doctor.doctorID === docID && element.getStatus() === "available"){
                console.log(`Doctor ${element.doctor.lName + " " +element.doctor.lName } available at this date ${element.date}`);}
        });
    };
}



