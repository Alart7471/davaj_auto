import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.8/dist/vue.esm.browser.js'



const app = new Vue({
    el: '#app',
    data: {
        languages: ['RU', 'SR'],
        currentLanguage: 'RU',
        choosedLang: 1,
        uslugi: ['Usluge', 'Услуги'],
        about: ['O nama', 'О нас'],
        about_text: ['Mi smo profesionalni autoservis koji pruža usluge popravke i održavanja automobila visokog kvaliteta. Naš tim iskusnih mehaničara je spreman da vam pomogne u vezi bilo kakvih problema sa vašim vozilom.', 'Мы являемся профессиональным автосервисом, который предоставляет услуги по ремонту и техническому обслуживанию автомобилей высокого качества. Наша команда опытных механиков готова помочь вам в любых ситуациях с вашим автомобилем.'],
        contacts: ['Kontakti', 'Контакты'],
        welcome: ['Dobrodošli u naš auto servis', 'Добро пожаловать в наш автосервис'],
        href1: ['AutoIzbor', 'Автоподбор'],
        our_uslugi: ['Naše usluge', 'Наши услуги'],
        our_uslugi1: ['Popravka motora', 'Ремонт двигателя'],
        our_uslugi2: ['Servis guma', 'Шиномонтаж'],
        our_uslugi3: ['Održavanje', 'Техническое обслуживание'],
        our_uslugi4: ['Popravka suspenzije', 'Ремонт подвески'],
        adress: ['Adresa', 'Адрес'],
        tel: ['Telefon', 'Телефон'],
        footer: ['© 2023 Auto servis Davaj Davaj Garage. Sva prava zadržana.', '© 2023 Автосервис Davaj Davaj Garage. Все права защищены.']
    },
    methods: {
        toggleLanguage() {
            console.log(this.currentLanguage)
            this.currentLanguage = (this.currentLanguage === 'RU') ? 'SR' : 'RU';
            app.choosedLang = (app.choosedLang === 0) ? 1 : 0
        }
    },
    mounted() {
        const element = document.getElementById('language');
        element.addEventListener('click', this.toggleLanguage);
    }
})