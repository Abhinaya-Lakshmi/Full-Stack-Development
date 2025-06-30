function calculateAge() {
    const dobInput = document.getElementById('dobInput').value;
    if (!dobInput) {
        document.getElementById("dobResult").innerHTML = "Please enter your date and time of birth.";
        return;
    }

    const dob = new Date(dobInput);
    const now = new Date();

    if (dob > now) {
        document.getElementById("dobResult").innerHTML = "DOB cannot be in the future.";
        return;
    }


    let years = now.getFullYear() - dob.getFullYear();
    let months = now.getMonth() - dob.getMonth();
    let days = now.getDate() - dob.getDate();
    let hours = now.getHours() - dob.getHours();
    let minutes = now.getMinutes() - dob.getMinutes();
    let seconds = now.getSeconds() - dob.getSeconds();


    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    document.getElementById("dobResult").innerHTML = `
        <div class="result-box">
            <strong>Your age is:</strong><br><br>
            <b>Years:</b> ${years}<br>
            <b>Months:</b> ${months}<br>
            <b>Days:</b> ${days}<br>
            <b>Hours:</b> ${hours}<br>
            <b>Minutes:</b> ${minutes}<br>
            <b>Seconds:</b> ${seconds}
        </div>
    `;
}