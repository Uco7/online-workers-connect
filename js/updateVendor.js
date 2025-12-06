document.addEventListener("DOMContentLoaded", function(){
    alert("ok")
})

// document.querySelector('form').addEventListener('submit', async function(event) {
//     event.preventDefault();  // Prevent the form from submitting the traditional way

//     const formData = new FormData(this);

//     try {
//         const response = await fetch(this.action, {
//             method: 'PUT',  // Ensure this method matches your backend route
//             body: formData,
//         });

//         if (response.ok) {
//             alert("Vendor profile updated successfully.");  // Show success message
//             window.location.href = '/admin/vendors';  // Redirect to the vendors list
//         } else {
//             let errorMessage;
//             // Handle different error status codes
//             if (response.status === 400) {
//                 errorMessage = "Missing required fields. Please fill in all necessary information.";
//             } else if (response.status === 409) {
//                 errorMessage = "A vendor with this email already exists. Please use a different email.";
//             } else {
//                 errorMessage = "An error occurred while updating the vendor. Please try again later.";
//             }

//             alert(errorMessage);  // Show error message in an alert box
//         }
//     } catch (error) {
//         console.error('Error submitting form:', error);
//         alert('An unexpected error occurred. Please try again later.');  // Show alert for unexpected errors
//     }
// });


 