// 💫💫💫💫💫 main function with perameter where update product 💫💫💫💫💫
function updateProduct(option, price) {
    const selectProduct = document.getElementById(option + "-total")
    selectProduct.innerText = price;
    totalPrice();
}

// 💫💫💫💫💫 Get total from product select option 💫💫💫💫💫

function getPriceValue(product) {
    const productOption = document.getElementById(product + "-total");
    const productPrice = parseInt(productOption.innerText);
    return productPrice;
}
// 💫💫💫💫💫 Total cost calculation 💫💫💫💫💫

function totalPrice() {
    const memoryTotal = getPriceValue("memory-price");
    const storageTotal = getPriceValue("storage-price");
    const deliveryTotal = getPriceValue("delivery-price");

    // 💫💫💫💫💫 Calculation and conditinals 💫💫💫💫💫
    const subTotal = memoryTotal + storageTotal + deliveryTotal;
    const totalAmount = document.getElementById("total-price");
    totalAmount.innerText = subTotal + 1299;
    // Calculate promotional price
    const promoTotalPrice = document.getElementById("promo-total");
    promoTotalPrice.innerText = subTotal + 1299;
    const discount = document.getElementById("promo-code");
    if (discount.value == "stevekaku") {
        const realPrice = subTotal + 1299;
        const promotion = (realPrice / 100) * 20;
        const total = realPrice - promotion;
        const promoTotalPrice = document.getElementById("promo-total");
        promoTotalPrice.innerText = total;
        discount.value = "";
    }
}

// 💨💨💨💨💨 code for Memory  option 💨💨💨💨💨

document.getElementById("memory1").addEventListener("click",
    function () {
        updateProduct("memory-price", 0)
    });
document.getElementById("memory2").addEventListener("click",
    function () {
        updateProduct("memory-price", 180)

    });

    // 💨💨💨💨💨 code Storage part 💨💨💨💨💨

document.getElementById("storage1").addEventListener("click",
    function () {
        updateProduct("storage-price", 0)
    });
document.getElementById("storage2").addEventListener("click",
    function () {
        updateProduct("storage-price", 100)
    });
document.getElementById("storage3").addEventListener("click",
    function () {
        updateProduct("storage-price", 180)
    });

    // 🚚🚚🚚🚚🚚 code for Delivery 🚚🚚🚚🚚🚚

document.getElementById("delivery-free").addEventListener("click",
    function () {
        updateProduct("delivery-price", 0)
    });
document.getElementById("delivery-charge").addEventListener("click",
    function () {
        updateProduct("delivery-price", 20)
    });
    // ♪♪♪♪♪♪ Promo option ♪♪♪♪♪♪
document.getElementById("promo-apply").addEventListener("click", function () {

    totalPrice();
})