const {createApp, ref, computed,reactive}=Vue
const app=createApp({
    setup(){
            const cart=ref([]);
            const premium=ref(true);
            function updateCart(id){
                cart.value.push(id)

            }
            const cartCounts=computed(()=> {
                return cart.value.reduce((acc, id) => {
                    if (!acc[id]) {
                        acc[id] = 0;
                    }
                    acc[id]++;
                    return acc;
                }, {});
            });

            function removeCart(id){
                const index=cart.value.indexOf(id);
                if(index>-1)
                cart.value.splice(index,1);
                
            }

            return {
                cart,
                premium,
                updateCart,
                removeCart,
                cartCounts
            }
        }
})

app.component('product-display',productDisplay);
app.component('product-details',productDetails);
app.component('review-form',reviewForm);
app.component('review-list',reviewList)
app.mount('#app');