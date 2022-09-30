import React from 'react';
import { useNavigate } from 'react-router-dom';

const Donation = () => {
    const navigate = useNavigate();
    let data;
    const loadScript = (src)=>{

        return new Promise(resolve=>{
        const script =document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
        script.onload = ()=>{
            resolve(true)
        }
        script.onerror = ()=>{
            resolve(false)
        }
    })
    }

    const displayRazorPay = async ()=>{
       const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
       if(!res)
       {
        alert('Razorpay SDK failed to load. Please make sure you are online')
        return
       }
        data = await fetch('https://rocky-lake-95379.herokuapp.com/razorpay',{
            method: 'POST',    
            body: JSON.stringify({amount:700,currency:'INR'}),      
            headers: {
              'Content-Type': 'application/json',
            },
            
            }).then((t)=>
            t.json()
           )
       
       var options = {
        "key": "rzp_test_yrfc0BeYclscek", // Enter the Key ID generated from the Dashboard
        "amount": data.amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": data.currency,
        "name": "Donation",
        "description": "Thank you for your generous donation",
        "image": "https://rocky-lake-95379.herokuapp.com/TOG-Logo.png",
        "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)},
            
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9999999999"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 = new window.Razorpay(options);

    rzp1.open();
    
}
  return (
    <div>
      <button onClick={displayRazorPay}>Donate</button>
    </div>
  );
}

export default Donation;
