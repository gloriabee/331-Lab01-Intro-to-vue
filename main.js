const {createApp, ref}=Vue
createApp({
    setup(){
        const product=ref('Boots');
        const description=ref('Fashionable, Comfort ones')
        const image=ref('./assets/images/socks_green.jpg');
        const url=ref('https://www.camt.cmu.ac.th');
        const inStock=ref(false);
        const inventory=ref(5);
        const onSale=ref(false);


        return{
            product,
            description,
            image,
            url,
            inStock,
            inventory,
            onSale
        }
    }
}).mount('#app');