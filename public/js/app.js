(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation');
  const content = document.querySelector('#content');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {

      // reset custom message every time :
      content.setCustomValidity("");

      // custom content length check :
      if (content.value.trim().length < 10) {
        content.setCustomValidity("At least 10 characters required.");
      }

      // if invalid, stop submission
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false)
  })
})();
