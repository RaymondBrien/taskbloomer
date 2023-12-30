/**
 * BS light theme set to document if user clicks light mode button on index.html
 */
document.getElementById('btn-check-5').addEventListener('change', function() {
  console.log('checkbox clicked');

  let colorCheckbox = document.getElementById("btn-check-5");
  let theme = colorCheckbox.checked ? 'light' : 'dark';

  console.log('currently theme is: ' + theme);

  switch (theme) {
      case 'light':
          document.documentElement.setAttribute('data-bs-theme', 'light');
          break;
      case 'dark':
          document.documentElement.setAttribute('data-bs-theme', 'dark');
          break;
  }
});




