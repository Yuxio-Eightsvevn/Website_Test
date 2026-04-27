window.addEventListener('DOMContentLoaded', function() {
    fetch('redirect-config.json')
        .then(response => response.json())
        .then(config => {
            if (config.enabled && config.target_url) {
                setTimeout(() => {
                    window.location.href = config.target_url;
                }, config.delay_seconds * 1000);
            }
        })
        .catch(error => console.log('Redirect config not found:', error));
});