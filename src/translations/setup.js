// Initialize translations
document.addEventListener('DOMContentLoaded', function() {
    // Update the loading message
    const mapElement = document.getElementById('map');
    if (mapElement) {
        mapElement.textContent = window.i18n.translate('ui.loading');
    }

    // Initialize the language selector
    const select = document.getElementById('lang-select');
    if (select) {
        select.value = window.i18n.getCurrentLanguage();
        select.addEventListener('change', function(e) {
            window.i18n.setLanguage(e.target.value);
            // Update the loading message
            if (mapElement) {
                mapElement.textContent = window.i18n.translate('ui.loading');
            }
        });
    }
}); 