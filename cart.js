/**
 * Toss Notification System
 */
const toast = document.querySelector("#toast");

let toastTimer;

function showToast(message) {
  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}



/**
 * ============================================================
 * 1. GET CART PRODUCTS FROM LOCAL STORAGE
 * ============================================================
 *
 * --> LocalStorage se "Cart_Items" key ka data get kro.
 *
 * ============================================================
 * 1.1. IF CART DATA DOES NOT EXIST
 * ============================================================
 *
 * --> Agr LocalStorage ma cart_data available nahi ha to
 *     empty array [] return kr do.
 *
 * ============================================================
 * 1.2. PARSE CART DATA
 * ============================================================
 *
 * --> JSON.parse() ki madad se cart_data ko JavaScript
 *     value ma convert kro.
 *
 * --> Check kro ka parsed data array ha ya nahi:
 *     - Agr array ha to usay return kr do.
 *     - Agr array nahi ha to empty array [] return kr do.
 *
 * ============================================================
 * 1.3. HANDLE ERRORS
 * ============================================================
 *
 * --> Agr JSON.parse() ya try block ma kisi bhi step pr error
 *     aata ha to catch block execute ho ga.
 *
 * --> Catch block ma error handle kro aur empty array []
 *     return kr do, ta ka application ka execution continue
 *     reh sky.
 *
 * ============================================================
 * 1.4. INITIALIZE CART PRODUCTS
 * ============================================================
 *
 * --> IIFE (Immediately Invoked Function Expression) ki madad
 *     se function ko define krte hi execute kro.
 *
 * --> Return hone wali value ko cart_products variable ma
 *     store kr do.
 */

function getCartProducts() {
  try {
    let cart_data = localStorage.getItem("Cart_Items");

    if (!cart_data) {
      return [];
    }

    let parse = JSON.parse(cart_data);

    return Array.isArray(parse) ? parse : [];
  } catch (error) {
    return [];
  }
}
let cart_products = getCartProducts();





/**
 * --> Display (  create_row() , Calculate()     )
 * --> Create_row()
 * --> calculate()
 */

function calculate_total() {
  const Discount = 0;

  let sub_total = cart_products.reduce((accumulator, product) => {
    return accumulator + product.quantity * product.newPrice;
  }, 0);

  let total = sub_total - Discount;

  const total_tag = document.querySelector("#total");
  const sub_total_tag = document.querySelector("#sub_total");
  const discount_tag = document.querySelector("#discount");

  total_tag.textContent = total;
  sub_total_tag.textContent = sub_total;
  discount_tag.textContent = Discount;

  return total;
}

let tbody = document.querySelector("tbody");

function Display(products) {
  tbody.innerHTML = "";

  for (let product of products) {
    tbody.appendChild(create_row(product));
  }

  calculate_total();
}
Display(cart_products);

function unit_price(product) {
  return product.newPrice * product.quantity;
}

function create_row(product) {
  let tr = document.createElement("tr");

  tr.innerHTML = `

<td>${product.name}</td>

<td>${product.category}</td>

<td>
  <span data-id="${product.id}" class="dec"> - </span>

  ${product.quantity}

  <span data-id="${product.id}" class="inc"> + </span>
</td>

<td>${product.newPrice}</td>

<td>${unit_price(product)}</td>

<td>
  <img src="${product.image_src}" />
</td>

<td>
  <svg class="del-icon" data-id="${product.id}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path
      d="M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z" />
  </svg>
</td>
`;

  return tr;
}




/**
 * ============================================================
 * DELETE PRODUCT FROM CART
 * ============================================================
 *
 * --> Table body (tbody) par click event listener lgaya ha.
 *
 * --> Check kro ka click Delete icon (.del-icon) pr howa ha ya nahi.
 *
 * ============================================================
 * 1. GET PRODUCT ID
 * ============================================================
 *
 * --> Delete icon se us product ki ID get kro jo delete krna ha.
 *
 * ============================================================
 * 2. FILTER CART PRODUCTS
 * ============================================================
 *
 * --> filter() method ki madad se ek new array bnao.
 *
 * --> Sirf un products ko new array ma include kro jin ki ID,
 *     delete hone wali product ki ID se match nahi krti.
 *
 * --> Is tarah delete hone wala product new array ma include
 *     nahi hoga.
 *
 * ============================================================
 * 3. UPDATE CART PRODUCTS ARRAY
 * ============================================================
 *
 * --> filter() se return hone wali new array ko
 *     cart_products variable ma assign kr do.
 *
 * --> Is tarah cart_products ab updated cart ko reference
 *     kry ga aur purani array ka reference replace ho jai ga.
 *
 * ============================================================
 * 4. UPDATE TABLE DISPLAY
 * ============================================================
 *
 * --> Display() function call kro aur updated cart_products
 *     pass kro.
 *
 * --> Display() pehly table body ki existing rows clear kry ga,
 *     phir updated products ki rows display kry ga.
 *
 * ============================================================
 * 5. UPDATE LOCAL STORAGE
 * ============================================================
 *
 * --> Updated cart_products array ko JSON.stringify() ki madad
 *     se JSON string ma convert kro.
 *
 * --> Updated cart ko "Cart_Items" key ka against LocalStorage
 *     ma save kr do, ta ka deleted product dobara load na ho.
 *
 * ============================================================
 * 6. IF CLICK IS NOT ON THE DELETE ICON
 * ============================================================
 *
 * --> Agr click Delete icon pr nahi howa to function ko
 *     further execute na kro.
 */

/**
 * --> if click on + icon 
 * --> if click on - icon
 * --> if click on del icon
 */

let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");

tbody.addEventListener(
  "click", (e) => {

    if (e.target.classList.contains("inc")) {

      const id_inc = e.target.getAttribute("data-id");

      let inc_prod = cart_products.find((product) => {
        return product.id === id_inc;
      });

      inc_prod.quantity = inc_prod.quantity + 1;


    }
    else if (e.target.classList.contains("dec")) {

      const id_dec = e.target.getAttribute("data-id");

      let dec_prod = cart_products.find((product) => {
        return product.id === id_dec;
      });

      dec_prod.quantity = Math.max(1, dec_prod.quantity - 1);

    }
    else if (e.target.classList.contains("del-icon")) {

      const del_id = e.target.getAttribute("data-id");

      let filter_products = cart_products.filter((product) => {
        return product.id !== del_id;
      });

      cart_products = filter_products;

      showToast("Cart item deleted succeffully!");

    }


    localStorage.setItem("Cart_Items", JSON.stringify(cart_products));

    Display(cart_products);


  });




/**
 * --> if cart is empty ? display mssg cart is empty 
 * --> else show form, remove hidden class
 * 
 */

let btn = document.querySelector(".confirm-btn-tabel");

let empty_cart = document.querySelector(".empty-cart");

let order_form = document.querySelector(".order-popup");

btn.addEventListener("click", (e) => {

  if (cart_products.length === 0) {
    showToast(`Your cart is empty! Add items to cart kindly.`);
  }
  else {
    order_form.classList.remove("hidden");
  }

});



/**
 * --> get orders() function
 * --> agr click form ka, cancel btn pr howa ha to, simply form hide kr do
 * 
 * --> submit event call
 * --> getorders()
 * --> object_crete kro or usa orders array ma push kr do, and usa localstorage ma set kr do
 * --> storage sa ab cart itrems del kr do
 * --> form hide kr da
 * --> dsiplay function ko call kr da bs.
 */

function get_orders() {
  try {
    let orders = localStorage.getItem("orders");

    if (!orders) {
      return [];
    }

    let parse = JSON.parse(orders);

    return Array.isArray(parse) ? parse : [];
  } catch (error) {
    return [];
  }
}

let cancel_btn = document.querySelector(".cancel-btn");

cancel_btn.addEventListener("click", () => {

  order_form.classList.add("hidden");

});


order_form.addEventListener("submit", (e) => {

  e.stopPropagation();
  e.preventDefault();

  let orders = get_orders();

  let email = document.querySelector("#email");
  let contact = document.querySelector("#contact");
  let address = document.querySelector("#address");

  let create_obj = {
    order_Id: crypto.randomUUID(),
    email: email.value,

    contact: (contact.value) ? contact.value : null,

    address: address.value,
    total_amount: calculate_total(),
    date: new Date().toISOString(),

    OrderDetail: structuredClone(cart_products),
  };

  orders.push(create_obj);

  localStorage.setItem("orders", JSON.stringify(orders));

  localStorage.removeItem("Cart_Items");
  cart_products = [];

  order_form.classList.add("hidden");

  showToast("Your order succeffully placed.");

  Display(cart_products);

});


