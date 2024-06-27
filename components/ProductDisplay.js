const productDisplay={
    template: 
    /*html*/
    `
    <div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <!--image goes here-->
                <img :src="image" alt="" :class="{out_of_stock_img :!inStock}">
            </div>        
        </div>
    
        <div className="product-info">
        <p>{{saleStatus}}</p>
        <h1><a :href="url">{{title}}</a></h1>
        <!-- <p v-if="inStock">In Stock</p> -->
         <p v-if="inventory>10">In Stock</p>
         <p v-else-if="inventory<=10 && inventory >0">Almost out of Stock</p>
         <p v-else>Out Of Stock</p>
         <p>Shipping {{shipping}}</p>
         
         <product-details :details="details"></product-details>
        <div v-for="(variant,index) in variants" :key="variant.id"
        @mouseover="updateVariant(index)" class="color-circle" :style="{backgroundColor: variant.color}">
            
        </div>

        Sizes: <span v-for="size in sizes">{{size}} &nbsp;</span>
        <br />

        <button class="button" @click="addToCart" :disabled="!inStock" :class="{disabledButton: !inStock}">Add To Cart</button>
        
        <button  @click="removeFromCart">Remove Product</button>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
</div>
`,
    props:{
        premium: Boolean
    },
    setup(props,{emit}){
        const shipping=computed(()=>{
            if(props.premium){
                return 'Free'
            }
            else{
                return 30
            }
        })
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
        const sizes=ref([
            'S',
            'M',
            'L'
        ])
        const variants=ref([
            {id:2234, color:'green',image:'./assets/images/socks_green.jpg',quantity:50},
            {id:2235, color:'blue',image:'./assets/images/socks_blue.jpg',quantity:0}
        ])
        
        const selectedVariant=ref(0);
        const cart=ref(0);
        function updateVariant(index){
            selectedVariant.value=index;
        }
        const image=computed(()=>{
            return variants.value[selectedVariant.value].image;
        })
        const inStock=computed(()=>{
            return variants.value[selectedVariant.value].quantity
        })
        function addToCart(){
            emit('add-to-cart',variants.value[selectedVariant.value].id)
        }

        function removeFromCart(){
            emit('remove-from-cart',variants.value[selectedVariant.value].id)
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

        const reviews=ref([]);

        function addReview(review){
            reviews.value.push(review);
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
            updateVariant,
            shipping,
            removeFromCart,
            reviews,
            addReview
           
        }
    }
}