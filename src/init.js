import i18n from './translations/index.js';

// Make i18n globally available
window.i18n = i18n;

// Initialize the language selector
document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('lang-select');
    if (select) {
        select.value = i18n.getCurrentLanguage();
        select.addEventListener('change', (e) => {
            i18n.setLanguage(e.target.value);
        });
    }
});

// Update the loading message
const mapElement = document.getElementById('map');
if (mapElement) {
    mapElement.textContent = i18n.translate('ui.loading');
} 