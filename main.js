const {createApp, ref}=Vue
createApp({
    setup(){
        const product=ref('Boots');
        const description=ref('Fashionable, Comfort ones')
        return{
            product,description
        }
    }
}).mount('#app');