// Initialize translations
document.addEventListener('DOMContentLoaded', function() {
    // Function to update all UI elements with translations
    function updateUITranslations() {
        // Update loading message
        const mapElement = document.getElementById('map');
        if (mapElement) {
            mapElement.textContent = window.i18n.translate('ui.loading');
        }

        // Update menu items
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            const key = item.getAttribute('data-translate');
            if (key) {
                item.textContent = window.i18n.translate('ui.' + key);
            }
        });

        // Update dialog texts
        const dialogs = document.querySelectorAll('.dialog-text');
        dialogs.forEach(dialog => {
            const key = dialog.getAttribute('data-translate');
            if (key) {
                dialog.textContent = window.i18n.translate('ui.' + key);
            }
        });
    }

    // Initialize the language selector
    const select = document.getElementById('lang-select');
    if (select) {
        // Set initial language
        const initialLang = window.i18n.getCurrentLanguage();
        select.value = initialLang;
        
        // Update UI with initial language
        updateUITranslations();

        // Add change event listener
        select.addEventListener('change', function(e) {
            window.i18n.setLanguage(e.target.value);
            updateUITranslations();
        });
    }

    // Add listener for language changes
    window.i18n.addListener(function() {
        updateUITranslations();
    });
}); 