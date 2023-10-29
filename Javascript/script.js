 
const { createApp } = Vue

createApp ({
    
    data(){
        
        return{
            message: 'Ciao mi chiamo Luca Masera',
            //Bonus immagine
            img: './img/walter-gordon-office-manager.jpg'
        }
    }

}).mount ('#app')