const sname = document.getElementById("studentName");
const sId = document.getElementById("studentId");
const sEmail = document.getElementById("studentEmail");
const addBtn = document.getElementById("addBtn");
const content = document.getElementById("container");

addBtn.addEventListener("click", ()=> {
    if(sname.value.trim() === "" || sId.value.trim() === ""){
        alert("Input fields cannot be empty");
        return;
    }

    const studentBox = document.createElement("div");
    studentBox.classList.add("child");

    const stdName = document.createElement("p");
    stdName.textContent = "Name : " + sname.value;

    const stdID = document.createElement("p");
    stdID.textContent = "Student ID : " + sId.value;

    const stdEmail = document.createElement("p");

    if(sEmail.value.trim() == "") {
        stdEmail.textContent = "Email : - ";
    }
    else {
        stdEmail.textContent = "Email : " + sEmail.value;
    }

    const dltBtn = document.createElement("button");
    dltBtn.textContent = "Remove";

    dltBtn.addEventListener("click", ()=> {
        studentBox.remove();
    });

    content.appendChild(studentBox);
    studentBox.appendChild(stdName);
    studentBox.appendChild(stdID);
    studentBox.appendChild(stdEmail);
    studentBox.appendChild(dltBtn);

    sname.value = "";
    sId.value = "";
    sEmail.value = "";

});