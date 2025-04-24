import { getTranslation } from '../i18n/index.js';

export class ProfileSelector {
    constructor(container) {
        this.container = container;
        this.render();
    }

    render() {
        const div = document.createElement('div');
        div.className = 'profile-selector';
        
        const select = document.createElement('select');
        select.className = 'profile-select';
        
        const profiles = [
            { value: 'car', label: 'profileCar' },
            { value: 'bike', label: 'profileBike' },
            { value: 'foot', label: 'profileFoot' }
        ];
        
        profiles.forEach(profile => {
            const option = document.createElement('option');
            option.value = profile.value;
            option.textContent = getTranslation(profile.label);
            select.appendChild(option);
        });
        
        div.appendChild(select);
        this.container.appendChild(div);
    }
} 