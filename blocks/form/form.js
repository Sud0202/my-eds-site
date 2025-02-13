export default function decorate(block) {

    const formBlock = document.createElement('div');
    formBlock.classList.add('feedback-form-block');

   
    const formContent = document.createElement('div');
    formContent.classList.add('feedback-form-content');

    
    const title = document.createElement('h2');
    title.classList.add('feedback-form-title');
    title.textContent = 'Feedback Form';
    formContent.appendChild(title);

   
    const form = document.createElement('form');
    form.id = 'feedbackForm';
    form.classList.add('feedback-form');

    
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


    const commentsLabel = document.createElement('label');
    commentsLabel.setAttribute('for', 'comments');
    commentsLabel.classList.add('feedback-form-label');
    commentsLabel.textContent = 'Comments:';
    const commentsTextarea = document.createElement('textarea');
    commentsTextarea.id = 'comments';
    commentsTextarea.name = 'comments';
    commentsTextarea.classList.add('feedback-form-textarea');
    commentsTextarea.required = true;

    
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit Feedback';
    submitButton.type = 'submit';
    submitButton.classList.add('feedback-form-button');

    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(experienceLabel);
    form.appendChild(experienceSelect);
    form.appendChild(commentsLabel);
    form.appendChild(commentsTextarea);
    form.appendChild(submitButton);

    formContent.appendChild(form);

    formBlock.appendChild(formContent);

    const formWrapper = document.querySelector('.form-wrapper');
    if (formWrapper) {
        formWrapper.appendChild(formBlock);
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const experience = document.getElementById('experience').value;
        const comments = document.getElementById('comments').value;

        const submitURL = "https://google.com/submit"; 

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('experience', experience);
        formData.append('comments', comments);

        fetch(submitURL, {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (response.ok) {
                alert('Thank you for your feedback!');
                form.reset();
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
