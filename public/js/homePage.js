document.addEventListener('keydown', function (event) {
    const key = event.key.toLowerCase(); // Normalize case

    if (event.altKey) {
        event.preventDefault(); // Prevent default browser action

        switch (key) {
            case 's':
                window.location.replace('/submit');
                break;
            case 'v':
                window.location.replace('/view');
                break;
            // Add more shortcuts here if needed
        }
    }
});
