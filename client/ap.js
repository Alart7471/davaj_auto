import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.8/dist/vue.esm.browser.js'



const app = new Vue({
    el: '#app',
    data: {
        languages: ['RU', 'SR'],
        currentLanguage: 'RU',
        choosedLang: 1,
        uslugi: ['Usluge', 'Услуги'],
        about: ['O nama', 'О нас'],
        contacts: ['Kontakti', 'Контакты'],
        footer: ['© 2023 Auto servis Davaj Davaj Garage. Sva prava zadržana.', '© 2023 Автосервис Davaj Davaj Garage. Все права защищены.'],
        welcome: ['Izbor automobila od profesionalaca', 'Автоподбор от профессионалов'],
    },
    methods:{
        toggleLanguage() {
            console.log(this.currentLanguage)
            this.currentLanguage = (this.currentLanguage === 'RU') ? 'SR' : 'RU';
            app.choosedLang = (app.choosedLang === 0) ? 1 : 0
        }
    },
    mounted(){
        const element = document.getElementById('language');
        element.addEventListener('click', this.toggleLanguage);
    }
})