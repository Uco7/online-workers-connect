// admin.js

document.addEventListener('DOMContentLoaded', function() {
    const updateAdminForm = document.getElementById('updateAdminForm');
    const deleteAdminBtn = document.getElementById('deleteAdminBtn');
    const adminId = document.getElementById('adminId').value;

    // Handle update form submission
    updateAdminForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const formData = {
            fName: document.getElementById('fName').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            lName: document.getElementById('lName').value,
            phone_no: document.getElementById('phone_no').value,
            address: document.getElementById('address').value,
            date_of_birth: document.getElementById('date_of_birth').value,
            state: document.getElementById('state').value,
            LGA: document.getElementById('LGA').value,
            gender: document.getElementById('gender').value
        };

        fetch(`/api/admin/${adminId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(result => {
            if (response.ok) {
                alert('Admin updated successfully');
                console.log('Admin updated:', result);
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
    deleteAdminBtn.addEventListener('click', function() {
        fetch(`/api/admin/${adminId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(result => {
            if (response.ok) {
                alert('Admin deleted successfully');
                console.log('Admin deleted:', result);
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
