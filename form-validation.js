// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');
  var noRisk = document.getElementById("norisk");
  var risk = document.getElementById("risk");
  var line = document.getElementById("line");
  var okTalii = document.getElementById("okTalii");
  var gluk = document.getElementById("gluk");
  var fer = document.getElementById("fer");

  function hide(item) {
    if(item.className.indexOf('d-none') == -1){
      item.className = item.className + ' d-none';
    }
  }

  function show(item) {
    if(item.className.indexOf('d-none') > -1){
      item.className = item.className.replace(' d-none', '');
    }
  }

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault()

        hide(noRisk);
        hide(risk);
        hide(line);
      
        if (!form.checkValidity()) {
          event.stopPropagation()
        }
        else {
          var y = -13.404 + 0.047 * okTalii.value + 1.876 * gluk.value + 0.009 * fer.value;

          if(y >= 0.197) {
            show(risk);
            show(line);
          } else {
            show(noRisk);
            show(line);
          }
        }

        form.classList.add('was-validated')
      }, false)
    });
})();
