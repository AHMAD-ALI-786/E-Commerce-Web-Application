
/**
 * Displays a short message on the screen and automatically hides it
 * after 2.5 seconds. If another message appears before the previous
 * timer finishes, the previous timer is cleared and restarted.
 * 
 */
const toast = document.querySelector("#toast");

let prev_timer;

function showToast(message) {

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(prev_timer);

  prev_timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}


/**
 * product get kra ga or usa products variable ma store kr daga 
 * agr product get na ho to empty array hi snd kr da ga 
 */
function getProducts() {

  const savedData = localStorage.getItem("products"); // LocalStorage se data liya

  if (!savedData) {
    return [];   // Agar data nahi hai, toh khali array return kar do
  }

  const parsedData = JSON.parse(savedData); // Data ko parse kiya

  // Check kiya ke parse hone ke baad data asal mein array hai ya nahi ?
  return Array.isArray(parsedData) ? parsedData : [];
}
let products = getProducts();



/**
 * --> ul ko access kro
 * --> ul ka nadr ka html phla khtm kro
 * --> products pr loop lgao
 * --> hr product ak ak kr ka createproduct function ko do
 * --> wo ak li bna kr return kra
 * --> ap us li ko ul ka andr dalta jao 
 */

let ul = document.querySelector(".product-grid");

function DisplayProduct(products) {

  ul.innerHTML = "";

  for (let product of products) {
    let li = CreateProductCard(product);
    ul.appendChild(li);
  }
} DisplayProduct(products);

function CreateProductCard(product) {

  let li = document.createElement('li');
  li.classList.add("product-card");


  /** 2. Optional inputs ko handle "badge and old price"
  * Optional chizo ko handle krna ka lya, like "badge and old price"
  * agr wo user da to thk, phr bna do html tag us ka, wrna mt bnao
  * agr user null da or hm tag bna da to wha null print ho ga, kio ka us ki value user na di nai or is lya hm na usa null bna dya tha.
  */
  const badge = product.badge
    ? `<span class="product-card-badge"> ${product.badge}</span>`
    : "";

  const oldPrice = product.oldPrice !== null
    ? `<span class="product-card-price-old">PKR ${product.oldPrice}</span>`
    : "";
  
  li.innerHTML = `
            <a href="#" class="product-card-link">

              <div class="product-card-media">

                <img class="product-card-media-img"  src="${product.image_src}"alt="${product.image_alt}" loading="lazy" />
                ${badge} 

              </div>

              <div class="product-card-body">

                <p class="product-card-category"> ${product.category} </p>
                <h3 class="product-card-name"> ${product.name} </h3>
                <div class="product-card-price">
                  <span class="product-card-price-current">PKR ${product.newPrice}</span>
                  ${oldPrice}  
                </div>

              </div>

            </a>

            <button type="button" data-product-id="${product.id}" class="product-card-cart-btn"> Add to cart </button>
          `;

  return li;

}



/**
 * --> search bar ko acces kro
 * --> jasa hi user us ma input dala , input event call ho
 * --> ab hm na setTimeout() lgaya ha wo 5 sec bad chla ga 
 * --> wo filter lga kr products ma inputs ki products find kra
 * --> or phr wo products display function ko da da
 * 
 * --> display() function ul ka andr jo purana html tha usa khtm kra ga or new filter products ko show kra ga bs
 */

let search_bar = document.querySelector('#search_bar');
let prev;

search_bar.addEventListener(
  'input', () => {

    setTimeout(prev);

    setTimeout(() => {
      let query = search_bar.value.trim().toLowerCase();

      let search_result = products.filter(
        (product) => {
          let name_search = product.name.toLowerCase().includes(query);
          let category_search = product.category.toLowerCase().includes(query);

          return name_search || category_search;
        }
      );

      DisplayProduct(search_result);
    }, 1000);

  }
);



/**
 * ============================================================
 * 1. GET CART PRODUCTS FROM LOCAL STORAGE
 * ============================================================
 *
 * --> LocalStorage se "Cart_Items" ka data get kro.
 *
 * --> Agr data available nahi ha to empty array [] return kr do.
 *
 * --> Agr data available ha to usay JSON.parse() se parse kro.
 *
 * --> Check kro ka parsed data array ha ya nahi:
 *     - Agr array ha to usay return kr do.
 *     - Agr array nahi ha to empty array [] return kr do.
 *
 * --> Agr kisi bhi step pr error aata ha to catch block ma
 *     error handle kro aur empty array [] return kr do.
 *
 * 
 * ============================================================
 * 2. ADD PRODUCT TO CART
 * ============================================================
 *
 * ============================================================
 * 2.1. EVENT DELEGATION ON UL
 * ============================================================
 *
 * --> UL element pr click event listener lgaya ha.
 *
 * --> Check kro ka click "Add to Cart" button pr howa ha ya nahi.
 *
 * ============================================================
 * CASE 1: PRODUCT ALREADY EXISTS IN CART
 * ============================================================
 *
 * --> Button se product ki ID get kro.
 *
 * --> find() method ki madad se check kro ka kya ya product
 *     pehly se cart_products array ma available ha.
 *
 * --> Agr product already cart ma ha to:
 *     - Us product ki quantity ma 1 add kr do.
 *     - Agr quantity available nahi ha to quantity 1 set kr do.
 *
 * ============================================================
 * CASE 2: PRODUCT DOES NOT EXIST IN CART
 * ============================================================
 *
 * --> Agr product pehly se cart ma available nahi ha to:
 *
 * --> Products array se us product ka object find kro.
 *
 * --> Spread operator (...) ki madad se product object ki
 *     properties ko copy kr ka ek new object bnao.
 *
 * --> New object ma "quantity" ki property add kro aur
 *     uski initial value 1 set kr do.
 *
 *     Example:
 *     let new_obj = { ...new_cart, quantity: 1 };
 *
 * --> New product object ko cart_products array ma push() kro.
 *
 * ============================================================
 * 2.2. SAVE UPDATED CART TO LOCAL STORAGE
 * ============================================================
 *
 * --> Product add hone ya quantity update hone ka baad
 *     updated cart_products array ko JSON.stringify() se
 *     JSON string ma convert kro.
 *
 * --> Updated cart ko LocalStorage ma "Cart_Items" key
 *     ka against save kr do.
 *
 * ============================================================
 * 2.3. IF CLICK IS NOT ON THE ADD TO CART BUTTON
 * ============================================================
 *
 * --> Agr click Add to Cart button pr nahi howa to
 *     function ko further execute na kro.
 * 
 */
function get_cart_products() {
  try {
    let data = localStorage.getItem("Cart_Items");

    if (!data) {
      return [];
    }

    let parse_data = JSON.parse(data);

    return (Array.isArray(parse_data)) ? parse_data : [];
  }
  catch (error) {
    return [];
  }
}
let cart_products = get_cart_products();


ul.addEventListener(
  "click", (e) => {

    if (e.target.classList.contains("product-card-cart-btn")) {

      const card_id = e.target.getAttribute("data-product-id");


      let already_exist = cart_products.find(
        (cart_product) => {
          return (cart_product.id === card_id);
        }
      );

      if (already_exist) {

        already_exist.quantity = (already_exist.quantity) ? already_exist.quantity + 1 : 1;

      }
      else {
        let new_cart = products.find(
          (product) => {
            return (product.id === card_id);
          }
        );

        let new_obj = { ...new_cart, quantity: 1 };

        cart_products.push(new_obj);
      }

      localStorage.setItem("Cart_Items", JSON.stringify(cart_products));

      showToast("Added to cart successfully!");
    }

  }
);

