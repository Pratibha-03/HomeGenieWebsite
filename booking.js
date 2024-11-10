const firebaseConfig = {
  apiKey: "AIzaSyBCBl1pYWySqXoJV5dlNN-DhjK2-FqimZY",
  authDomain: "homegenie-a0e0d.firebaseapp.com",
  databaseURL: "https://homegenie-a0e0d-default-rtdb.firebaseio.com",
  projectId: "homegenie-a0e0d",
  storageBucket: "homegenie-a0e0d.firebasestorage.app",
  messagingSenderId: "623541940884",
  appId: "1:623541940884:web:74deee5f0a70e64e757a81"
};
// Access the Firebase Realtime Database (no need to reinitialize Firebase)
const database = firebase.database();

// Function to handle form submission
function submitBookingDetails() {
    // Get values from the form inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Validate inputs (optional, but recommended)
    if (!name || !email || !phone) {
        alert("Please fill in all fields.");
        return;
    }

    // Save data to Firebase
    const bookingRef = database.ref("bookings").push();
    bookingRef.set({
        name: name,
        email: email,
        phone: phone,
        timestamp: new Date().toISOString()
    })
    .then(() => {
        alert("Booking submitted successfully!");
    })
    .catch((error) => {
        console.error("Error submitting booking:", error);
        alert("Failed to submit booking. Please try again.");
    });
}

// Add click event to the "Book Now" button
document.getElementById("bookNowButton").addEventListener("click", submitBookingDetails);
