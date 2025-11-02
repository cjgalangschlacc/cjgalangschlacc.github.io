// Array to store user data
let userDataArray = [];

// Run after page load
window.onload = function() {

    // Current date and Time
    showDateTime();

    // Start a timer to update the time every second
    setInterval(showDateTime, 1000);

    // Add event listener to Save button (DOM event)
    document.getElementById("saveBtn").addEventListener("click", saveUserData);
};

// Function to show the current date and time
function showDateTime() {
    const dateTimeDiv = document.getElementById("dateTime");
    const now = new Date();

    // Presentable format for date and time with emojis
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();

    dateTimeDiv.textContent = `📅 ${formattedDate} | 🕒 ${formattedTime}`;
}

// Function to save form data
function saveUserData() {

    // Get form values from user input
    const fname = document.getElementById("fname").value.trim();
    const mname = document.getElementById("mname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const gender = document.getElementById("gender").value;
    const birthday = document.getElementById("birthday").value;
    const age = document.getElementById("age").value;
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("pwd").value;

    // Basic validation
    if (!fname || !lname || !username || !password) {
        alert("Please fill in all required fields (First name, Last name, Username, Password).");
        return;
    }

    // Create user object
    const user = {
        firstName: fname, middleName: mname, lastName: lname, gender: gender, birthday: birthday, age: age, username: username, password: password
    };

    // Add to array
    userDataArray.push(user);

    // Display table on the webpage
    displayUserData();

    // Log to console for verification
    console.table(userDataArray);

    // Reset the form after save
    document.querySelector("form").reset();
}

// Function to display user data in a table
function displayUserData() {
    const outputDiv = document.getElementById("output");

    let tableHTML = `
        <h3>Saved User Data</h3>
        <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width:100%;">
            <tr style="background-color:#f2f2f2;">
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Birthday</th>
                <th>Age</th>
                <th>Username</th>
                <th>Password</th>
            </tr>
    `;

    userDataArray.forEach(user => {
        tableHTML += `
            <tr>
                <td>${user.firstName}</td>
                <td>${user.middleName}</td>
                <td>${user.lastName}</td>
                <td>${user.gender}</td>
                <td>${user.birthday}</td>
                <td>${user.age}</td>
                <td>${user.username}</td>
                <td>${user.password}</td>
            </tr>
        `;
    });

    tableHTML += `</table>`;
    outputDiv.innerHTML = tableHTML;
}
