document.addEventListener('DOMContentLoaded', () => {
    // Gets user details and parse into JSON
    const cachedData = JSON.parse(localStorage.getItem('userDetails'));

    // if data is already cached, pre-fill the form
    if (cachedData) {
        document.getElementById('fullName').value = cachedData.fullName;
        document.getElementById()
    }
})