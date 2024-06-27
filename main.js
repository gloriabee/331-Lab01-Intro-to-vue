const {createApp, ref, computed}=Vue
createApp({
    setup(){
        const product=ref('Boots');
        const brand=ref('SE 331');
        const description=ref('Fashionable, Comfort ones')
       
        const url=ref('https://www.camt.cmu.ac.th');
       
        const inventory=ref(50);
        const onSale=ref(true);
        const details=ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants=ref([
            {id:2234, color:'green',image:'./assets/images/socks_green.jpg',quantity:50},
            {id:2235, color:'blue',image:'./assets/images/socks_blue.jpg',quantity:0}
        ])
        const selectedVariant=ref(0);
        function updateVariant(index){
            selectedVariant.value=index;
        }
        const image=computed(()=>{
            return variants.value[selectedVariant.value].image;
        })
        const inStock=computed(()=>{
            return variants.value[selectedVariant.value].quantity
        })
        const sizes=ref([
            'S',
            'M',
            'L'
        ])
        const cart=ref(0);
        function addToCart(){
            cart.value+=1;
        }

        const title=computed(()=>{
            return brand.value + ' '+product.value
        })

        const saleStatus=computed(()=>{
            if(onSale.value){
                return brand.value+' '+product.value+' is on sale';
            }
            else{
                return '';
            }
        })

        function updateImage(variantImage){
            image.value=variantImage;
        }

        function toggleStock(){
            inStock.value=!inStock.value;
            console.log(inStock.value)
        }

        return{
            product,
            brand,
            title,
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
            saleStatus,
            addToCart,
            updateImage,
            toggleStock,
            updateVariant,
           
        }
    }
}).mount('#app');