const studentDetails=[{
    sName:"nisha",
    fatherName:"Sekaran",
    age:"16",
    dateOfBirth:"2002-05-20",
    class:"10",
    contactName:"9150520470"
},{
    sName:"mala",
    fatherName:"Sekaran",
    age:"18",
    dateOfBirth:"2002-05-20",
    class:"12",
    contactName:"7339505010" 
}]


// for (let details in studentDetails){
//    console.log(studentDetails[details]);
// }

for (let index = 0; index < studentDetails.length; index++) {
    const element = studentDetails[index].age;   
    const res =studentDetails[index].sName +" "+studentDetails[index].fatherName
    const result =studentDetails[index].sName
    if (element <= 16) {
        console.log(res);
    }
    if(element >=18){
        console.log(result);
    }
}

// console.log(studentDetails);
// const age =studentDetails[0].age
// console.log(age);