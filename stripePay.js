window.onload = function() {
  // Your code, and code from Stripe's walkthrough goes here.
  document.getElementById("purchase").addEventListener("click", displayDate);

  stripe.redirectToCheckout({
  items: [
    // Replace with the ID of your SKU
    {sku: 'sku_123', quantity: 1}
  ],
  successUrl: 'http://localhost:8000',
  cancelUrl: 'http://localhost:8000',
}).then(function (result) {
  // If `redirectToCheckout` fails due to a browser or network
  // error, display the localized error message to your customer
  // using `result.error.message`.
});

  .then(function (result) {
  // If redirectToCheckout fails due to a browser or network
  // error, display the localized error message to your customer
  // using result.error.message.
  console.log(result.error.message) // ADD THIS LINE!
});
}