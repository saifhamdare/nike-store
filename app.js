var product_total_amount = document.getElementById('product_total_amount');
var total_cart_amount=document.getElementById('total_cart_amt');
var shipping_charge=document.getElementById('shipping_charge');
var discountCode=document.getElementById('discount_code1');
const decreaseNumber=(incdec,price)=>{
    var itemval=document.getElementById(incdec);
    var price=document.getElementById(price);
    // console.log(itemval.value);
    if(itemval.value<=0){
        itemval.value=0;
    }else{
        itemval.value=parseInt(itemval.value)-1;
        itemval.style.background='#fff';
        itemval.style.color='#000';
        price.innerHTML=parseInt(price.innerHTML)-15;
        product_total_amount.innerHTML=parseInt(product_total_amount.innerHTML)-15;
        total_cart_amt.innerHTML=parseInt(product_total_amount.innerHTML)+parseInt(shipping_charge.innerHTML);
    }
}
const increaseNumber=(incdec,price)=>{
    var itemval=document.getElementById(incdec);
    var price=document.getElementById(price);
    // console.log(itemval.value);
    if(itemval.value>=5){
        itemval.value=5;
        itemval.style.background='red';
        itemval.style.color='#fff';
        alert('Max no. 5 allow');
    }else{
        itemval.value=parseInt(itemval.value)+1;
        price.innerHTML=parseInt(price.innerHTML)+15;
        product_total_amount.innerHTML=parseInt(product_total_amount.innerHTML)+15;
        total_cart_amt.innerHTML=parseInt(product_total_amount.innerHTML)+parseInt(shipping_charge.innerHTML);
    }
}
const discount_code=()=>{
    let total=parseInt(total_cart_amount.innerHTML);
    let error_trw=document.getElementById('error_trw')
    if(discountCode.value=== 'OFF100'){
        let newtotal=total-15;
        total_cart_amount.innerHTML=newtotal;
        
        error_trw.innerHTML='Coupon Applied'
    }else{
        error_trw.innerHTML='Try Again! Invalid Code'
    }
}
