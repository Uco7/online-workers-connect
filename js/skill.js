document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('professionForm');

    // Regular expressions for validation
    const addressRegex = /^[A-Za-z0-9\s.,#'-]+$/;
    const stateRegex = /^[A-Za-z\s.'-]+$/;
    const lgaRegex = /^[A-Za-z\s\-'’]+$/;
    const jobTitleRegex = /^[A-Za-z\s.-]+$/;
    const yearsOfExperienceRegex = /^\d+$/; // Only digits
    const qualificationRegex = /^[A-Za-z\s.,'-]+$/;
    const skillsToolsRegex = /^[A-Za-z\s.,'-]+$/;
    const bioRegex = /^[A-Za-z\s.,'-]+$/;

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Gather form data
        const address = document.getElementById('address').value;
        const dateOfBirth = document.getElementById('date_of_birth').value;
        const state = document.getElementById('state').value;
        const LGA = document.getElementById('LGA').value;
        const jobTitle = document.getElementById('job_title').value;
        const yearsOfExperience = document.getElementById('Years_of_experience').value;
        const qualification = document.getElementById('qualification').value;
        const skillsTools = document.getElementById('skills_tools').value;
        const bio = document.getElementById('bio').value;
        const profileImage = document.getElementById('profileImage').files[0];
        
        // Validation
        if (!addressRegex.test(address)) return alert('Invalid address format.');
        if (!stateRegex.test(state)) return alert('Invalid state format.');
        if (!lgaRegex.test(LGA)) return alert('Invalid LGA format.');
        if (isNaN(Date.parse(dateOfBirth))) return alert('Invalid date of birth format.');
        if (!jobTitleRegex.test(jobTitle)) return alert('Invalid job title format.');
        if (!yearsOfExperienceRegex.test(yearsOfExperience)) return alert('Invalid years of experience format.');
        if (!qualificationRegex.test(qualification)) return alert('Invalid qualification format.');
        if (!skillsToolsRegex.test(skillsTools)) return alert('Invalid skills/tools format.');
        if (!bioRegex.test(bio)) return alert('Invalid bio format.');

        // Check if profileImage is a valid file type if selected
        if (profileImage && !['image/jpeg', 'image/png'].includes(profileImage.type)) {
            return alert('Invalid profile image format. Only JPEG and PNG are allowed.');
        }

        // Create FormData object
        const formData = new FormData(form);

        try {
            // Submit form data via fetch
            const response = await fetch('/api/profession/register', {
                method: 'POST',
                body: formData
            });

            // Parse JSON response
            const result = await response.json();

            if (response.ok) {
                // Handle success
                alert('Profession registered successfully!');
                form.reset(); // Optionally reset the form
            } else {
                // Handle server-side validation errors
                alert(`Error: ${result.message}`);
            }
        } catch (error) {
            // Handle client-side errors
            console.error('Error:', error);
            alert('An error occurred while registering the profession.');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('updateForm');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);

        try {
            const response = await fetch(`/api/profession/update/${document.getElementById('updateId').value}`, {
                method: 'PUT',
                body: formData
            });

            const result = await response.json();

            if (response.ok) {
                alert('Profession updated successfully!');
                form.reset();
            } else {
                alert(`Error: ${result.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while updating the profession.');
        }
    });
});

async function deleteProfession(id) {
    if (!confirm('Are you sure you want to delete this profession?')) {
        return;
    }

    try {
        const response = await fetch(`/api/profession/delete/${id}`, {
            method: 'DELETE'
        });

        const result = await response.json();

        if (response.ok) {
            alert('Profession deleted successfully!');
            // Optionally, remove the profession from the DOM
        } else {
            alert(`Error: ${result.message}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while deleting the profession.');
    }
}
