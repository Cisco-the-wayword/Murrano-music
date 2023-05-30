document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#formspree');
    const errorEmail = document.querySelector('#email_error');
  
    function validateEmail(input) {
      const emailRegex = /^[a-z_\-0-9.*#$!~%^&-+?|]+@+[a-z\-0-9]+(.com)$/gm;
      return emailRegex.test(input);
    }
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default form submission
  
      const emailValid = validateEmail(form.elements.email.value);
      if (!emailValid) {
        errorEmail.style.display = 'block';
      } else {
        errorEmail.style.display = 'none';
  
        // Perform AJAX form submission
        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onreadystatechange = function () {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            // Form submission successful
            console.log('Form submitted successfully');
          } else {
            // Form submission failed
            console.error('Form submission failed');
          }
        };
        xhr.send(formData);
      }
    });
  });
  