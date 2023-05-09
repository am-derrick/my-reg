document.addEventListener('DOMContentLoaded', () => {
    // Gets user details and parse into JSON
    const cachedData = JSON.parse(localStorage.getItem('userDetails'));

    // if data is already cached, pre-fill the form
    if (cachedData) {
        document.getElementById('firstName').value = cachedData.firstName;
        document.getElementById('lastName').value = cachedData.lastName;
        document.getElementById('email').value = cachedData.email;
        document.getElementById('contactNumber').value = cachedData.contactNumber;
        document.getElementsById('homeArea').value = cachedData.homeArea;
        document.getElementById('learningInstitution').value = cachedData.learningInstitution;
    }

    // event listener for submission of form
    document.getElementById('customForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const userData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            contactNumber: document.getElementById('contactNumber').value,
            homeArea: document.getElementsById('homeArea').value,
            learningInstitution: document.getElementById('learningInstitution').value,
        };

        // store user data in local storage as user details
        localStorage.setItem('userDetails', JSON.stringify(userData));

        // Success alert
        alert('Submitted. Be blessed!');
    });
});