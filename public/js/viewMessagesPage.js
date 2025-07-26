document.addEventListener('keydown', function(event) {
  if (event.altKey) {
    const key = event.key.toLowerCase(); // Normalize to lowercase

    switch (key) {
      case 'h':
        event.preventDefault();
        window.location.replace('/home');
        break;

      case 's':
        event.preventDefault();
        window.location.replace('/submit');
        break;

      // Add more shortcuts here if needed
      // case 'v':
      //   window.location.replace('/view');
      //   break;
    }
  }
});
