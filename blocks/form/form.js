export default function decorate(block) {
    // Create the form container
    const formBlock = document.createElement('div');
    formBlock.classList.add('feedback-form-block');
    formBlock.setAttribute('data-block-name', 'form');
    formBlock.setAttribute('data-block-status', 'loaded');

    // Create the form content
    const formContent = document.createElement('div');
    formContent.classList.add('feedback-form-content');

    // Create a title for the form
    const title = document.createElement('h2');
    title.classList.add('feedback-form-title');
    title.textContent = 'Feedback Form';
    formContent.appendChild(title);

    // Create the actual form
    const form = document.createElement('form');
    form.id = 'feedbackForm';
    form.classList.add('feedback-form');

    // Create Name input
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.classList.add('feedback-form-label');
    nameLabel.textContent = 'Name:';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.name = 'name';
    nameInput.classList.add('feedback-form-input');
    nameInput.required = true;

    // Create Email input
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.classList.add('feedback-form-label');
    emailLabel.textContent = 'Email ID:';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.name = 'email';
    emailInput.classList.add('feedback-form-input');
    emailInput.required = true;

    // Create Experience dropdown
    const experienceLabel = document.createElement('label');
    experienceLabel.setAttribute('for', 'experience');
    experienceLabel.classList.add('feedback-form-label');
    experienceLabel.textContent = 'Overall Experience:';
    const experienceSelect = document.createElement('select');
    experienceSelect.id = 'experience';
    experienceSelect.name = 'experience';
    experienceSelect.classList.add('feedback-form-select');
    experienceSelect.required = true;
    ['Good', 'Moderate', 'Bad'].forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText;
        option.textContent = optionText;
        experienceSelect.appendChild(option);
    });

    // Create Comments textarea
    const commentsLabel = document.createElement('label');
    commentsLabel.setAttribute('for', 'comments');
    commentsLabel.classList.add('feedback-form-label');
    commentsLabel.textContent = 'Comments:';
    const commentsTextarea = document.createElement('textarea');
    commentsTextarea.id = 'comments';
    commentsTextarea.name = 'comments';
    commentsTextarea.classList.add('feedback-form-textarea');
    commentsTextarea.required = true;

    // Create Submit Button
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit Feedback';
    submitButton.type = 'submit';
    submitButton.classList.add('feedback-form-button');

    // Append all form elements to the form
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(experienceLabel);
    form.appendChild(experienceSelect);
    form.appendChild(commentsLabel);
    form.appendChild(commentsTextarea);
    form.appendChild(submitButton);

    // Append the form to the form content
    formContent.appendChild(form);

    // Append the form content to the form block
    formBlock.appendChild(formContent);

    // Append the entire form block to the body
    document.body.appendChild(formBlock);

   // Handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const experience = document.getElementById('experience').value;
    const comments = document.getElementById('comments').value;

    // Your custom endpoint (replace this with the URL of your choice)
    const customURL = "https://google.com/submit"; 

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('experience', experience);
    formData.append('comments', comments);

    // Send the data to your custom endpoint via POST request
    fetch(customURL, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you for your feedback!');
            form.reset(); // Reset the form after submission
        } else {
            alert('There was an error submitting your feedback. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error submitting feedback:', error);
        alert('There was an error submitting your feedback. Please try again.');
    });
});

}
