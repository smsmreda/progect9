// مصفوفة لتخزين العناصر في السلة
let cart = [];

// دالة لإضافة المنتج إلى السلة
function addToCart(productName, productPrice) {
    // إضافة المنتج إلى المصفوفة
    cart.push({ name: productName, price: productPrice });

    // إخفاء الزر الذي تم النقر عليه
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        if (button.textContent === "اختر" && button.previousElementSibling?.textContent === productName) {
            button.style.display = 'none';
        }
    });

    // عاوز اما اجي اضغط علي زرار مسح السله يحذف المنتجات والاسعار والزرار كلها 
    displayCart();

    // إظهار سلة المشتريات فقط إذا كانت السلة تحتوي على منتجات
    if (cart.length > 0) {
        document.getElementById("cart").style.display = "block";
        document.getElementById("clearButton").style.display = "inline-block"; // إظهار زر مسح السلة
    }
}

// دالة لعرض المنتجات المضافة إلى السلة
function displayCart() {
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = ''; // إفراغ القائمة قبل إعادة عرض السلة

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
}

// دالة لحساب المجموع وعرضه
function showTotal() {
    let total = 0;
    cart.forEach(item => {
        total += item.price;
    });

    const totalPrice = document.getElementById("totalPrice");
    totalPrice.textContent = `Total: $${total}`;
    totalPrice.style.display = "block"; // إظهار المجموع
}

// دالة لمسح السلة
function clearCart() {
    cart = []; // مسح محتوى السلة
    displayCart(); // تحديث العرض
    document.getElementById("totalPrice").style.display = "none"; // إخفاء المجموع
    document.getElementById("clearButton").style.display = "none"; // إخفاء زر مسح السلة

    // إخفاء سلة المشتريات إذا كانت فارغة
    document.getElementById("cart").style.display = "none";
}


