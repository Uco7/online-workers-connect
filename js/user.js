// user.js

document.addEventListener('DOMContentLoaded', function() {
    const updateUserForm = document.getElementById('updateUserForm');
    const deleteUserBtn = document.getElementById('deleteUserBtn');
    const userId = document.getElementById('userId').value;

    // Handle update form submission
    updateUserForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const formData = {
            fName: document.getElementById('fName').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            lName: document.getElementById('lName').value,
            phone_no: document.getElementById('phone_no').value,
            gender: document.getElementById('gender').value
        };

        fetch(`/api/user/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(result => {
            if (response.ok) {
                alert('User updated successfully');
                console.log('User updated:', result);
            } else {
                alert('Update failed: ' + result.message);
                console.error('Update failed:', result.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    // Handle delete button click
    deleteUserBtn.addEventListener('click', function() {
        fetch(`/api/user/${userId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(result => {
            if (response.ok) {
                alert('User deleted successfully');
                console.log('User deleted:', result);
            } else {
                alert('Deletion failed: ' + result.message);
                console.error('Deletion failed:', result.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
