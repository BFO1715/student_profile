let saveFile = () => {
    // Get the data from each element on the form.
    const studentId = document.getElementById("studentId").value;
    const firstName = document.getElementById("firstName").value;
    const middleName = document.getElementById("middleName").value;
    const lastName = document.getElementById("lastName").value;
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const department = document.getElementById("department").value;
    const program = document.getElementById("program").value;
    const admissionYear = document.getElementById("admissionYear").value;

    // To store all the data.
    let data = 
        "Student ID: " + studentId + " \r\n" +
        "First Name: " + firstName + " \r\n" +
        "Middle Name: " + (middleName ? middleName : "N/A") + " \r\n" +
        "Last Name: " + lastName + " \r\n" +
        "Gender: " + gender + " \r\n" +
        "Age: " + age + " \r\n" +
        "Department: " + department + " \r\n" +
        "Program: " + program + " \r\n" +
        "Admission Year: " + admissionYear;

    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: "text/plain" });
    const sFileName = `StudentProfile_${new Date().toISOString().slice(0,10)}.txt`; // Download filename as "StudentProfile_YYYY-MM-DD.txt"

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
};