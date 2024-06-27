const {createApp, ref}=Vue
createApp({
    setup(){
        const product=ref('Boots');
        const description=ref('Fashionable, Comfort ones')
        const image=ref('./assets/images/socks_green.jpg');
        const url=ref('https://www.camt.cmu.ac.th');
        return{
            product,
            description,
            image,
            url
        }
    }
}).mount('#app');