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
          document.documentElement.style.setProperty('--bs-body-bg', '#fffce1');
          document.documentElement.style.setProperty('--bs-body-color', '#3D3D3D');
          document.documentElement.style.setProperty('--bs-emphasis-color', '#93B569');
          document.documentElement.style.setProperty('--bs-secondary-color', '#2c2c2c');
          break;
      case 'dark':
          document.documentElement.setAttribute('data-bs-theme', 'dark');
          document.documentElement.style.setProperty('--bs-body-bg', '#0e100f');
          document.documentElement.style.setProperty('--bs-body-color', '#fffce1');
          document.documentElement.style.setProperty('--bs-emphasis-color', '#93B569');
          document.documentElement.style.setProperty('--bs-secondary-color', '#BDBDBD');
          break;
  }
});



