const {createApp, ref}=Vue
createApp({
    setup(){
        const product=ref('Boots');
        const description=ref('Fashionable, Comfort ones')
        const image=ref('./assets/images/socks_green.jpg');
        const url=ref('https://www.camt.cmu.ac.th');
        const inStock=ref(false);
        const inventory=ref(50);
        const onSale=ref(false);
        const details=ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants=ref([
            {id:2234, color:'green',image:'./assets/images/socks_green.jpg'},
            {id:2235, color:'blue',image:'./assets/images/socks_blue.jpg'}
        ])
        const sizes=ref([
            'S',
            'M',
            'L'
        ])
        const cart=ref(0);
        function addToCart(){
            cart.value+=1;
        }

        function updateImage(variantImage){
            image.value=variantImage;
        }

        function toggleStock(){
            inStock.value=!inStock.value;
            console.log(inStock.value)
        }

        return{
            product,
            description,
            image,
            url,
            inStock,
            inventory,
            onSale,
            details,
            variants,
            sizes,
            cart,
            addToCart,
            updateImage,
            toggleStock
        }
    }
}).mount('#app');