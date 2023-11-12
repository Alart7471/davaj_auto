import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.8/dist/vue.esm.browser.js'



const app = new Vue({
    el: '#app',
    data: {
        inpt_name:'',
        inpt_contact:'',
        inpt_message:'',
        inpt:{
            name:'',
            contact:'',
            msg:''
        },
        languages: ['RU', 'SR'],
        currentLanguage: 'RU',
        choosedLang: 1,
        uslugi: ['Usluge', 'Услуги'],
        about: ['O nama', 'О нас'],
        contacts: ['Kontakti', 'Контакты'],
        footer: ['© 2023 Auto servis Davaj Davaj Garage. Sva prava zadržana.', '© 2023 Автосервис Davaj Davaj Garage. Все права защищены.'],
        welcome: ['Izbor automobila od profesionalaca', 'Автоподбор от профессионалов'],
        items: [
            { id: 1, image: 'image1.svg', caption: 'Image 1' },
            { id: 2, image: 'image2.svg', caption: 'Image 2' },
            // Add more items here
          ],
        currentSlide: 0
    },
    methods:{
        toggleLanguage() {
            console.log(this.currentLanguage)
            this.currentLanguage = (this.currentLanguage === 'RU') ? 'SR' : 'RU';
            app.choosedLang = (app.choosedLang === 0) ? 1 : 0
        },
        tryToSendReq(){
            if(this.inpt.name == '' || this.inpt.name == null){
                alert('Имя не может быть пустым')
                return
            }
            if(this.inpt.contact == '' || this.inpt.contact == null){
                alert('Контактные данные не могут быть пустыми')
                return
            }
            if(this.inpt.msg == '' || this.inpt.msg == null){
                if(!confirm('Ваша заявка не содержит текста, уверены, что хотите продолжить?\nВ таком случае наш менеджер свяжется с вами')){
                    return
                }
                alert('Ваша заявка принята')
                this.addRequestToDb(this.inpt)
                this.inpt.name = ''
                this.inpt.contact = ''
                this.inpt.msg = ''
                return
            }
            alert('Ваша заявка принята')
            this.addRequestToDb(this.inpt)
            this.inpt.name = ''
            this.inpt.contact = ''
            this.inpt.msg = ''
            return


            

            
            
            alert(`Contact: ${this.inpt_contact}\nMsg:${this.inpt_message}\nName:${this.inpt_name}`)

            
        },
        addRequestToDb(data){
            axios
            .get('/api/createUserRequest', {
                params:{
                    name: data.name,
                    contact: data.contact,
                    message: data.msg
                }
            })
            .then(response => {
                this.news = response.data
                console.log(this.news)
            })
            .catch(error =>{
                console.log(error)
            })
        },
        prevSlide() {
            if(this.currentSlide == 0){

            }
            else{
                this.currentSlide--
            }
            //this.currentSlide = (this.currentSlide - 1 + this.items.length) % this.items.length;
        },
        nextSlide() {
            if(this.currentSlide == this.items.length-1){

            }
            else{
                this.currentSlide++
            }
            //this.currentSlide = (this.currentSlide + 1) % this.items.length;
        }
    },
    mounted(){
        const element = document.getElementById('language');
        element.addEventListener('click', this.toggleLanguage);
    }
})