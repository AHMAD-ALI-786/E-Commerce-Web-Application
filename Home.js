// Default add some product card, project ki functionality chk krna ka lya 
const pr = [
    {
        badge: "Popular",
        category: "Basin Mixers",
        id: "SAN-024",
        image_alt: "Sonex Grandy chrome basin mixer",
        image_src: "https://cdn.quicksell.co/-MV2RHX5bNkiQqSSukxF/products/-OcP2Y_eIZfcW_eEbb08.jpg",
        name: "Sonex Grandy Basin Mixer",
        newPrice: 13500,
        oldPrice: 17000
    },
    {
        badge: "Best Seller",
        category: "Water Tanks",
        id: "SAN-041",
        image_alt: "Ahmad blue plastic water storage tank",
        image_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhh2DMSzyDVGaypM86cl91G8HFZ8sG2Gnpe3rp3SQ0sA&s=10",
        name: "Master Blue Water Tank 220L",
        newPrice: 7100,
        oldPrice: 8500
    },
    {
        category: "Concealed Sets",
        id: "SAN-018",
        image_alt: "Sonex chrome concealed bath mixer and basin fittings collection",
        image_src: "https://cdn.quicksell.co/-MV2RHX5bNkiQqSSukxF/products/-ODQRyrQS1RN7EQAd0ya.jpg",
        name: "Sonex Chrome Concealed Mixer Set",
        newPrice: 36000,
        oldPrice: 45000
    },
    {
        badge: null,
        category: "Muslim Showers",
        id: "SAN-007",
        image_alt: "Sonex Euro chrome Muslim shower with hose",
        image_src: "https://homepoint.pk/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/a/i/aiselect_20250714_155336_samsung_notes.jpg",
        name: "Sonex Euro Muslim Shower 529",
        newPrice: 3450,
        oldPrice: null
    },
    {
        badge: "Premium",
        category: "Bathtubs",
        id: "SAN-016",
        image_alt: "Indus Bath semi loaded white bathtub with hydro massage jets",
        image_src: "https://cdn.dotpe.in/longtail/item_thumbnails/7345108/BFjjgGXk-800-800.webp",
        name: "Indus Bath Hydro Massage Bathtub",
        newPrice: 125000,
        oldPrice: 150000
    },
    {
        badge: "Popular",
        category: "PPRC Fittings",
        id: "SAN-057",
        image_alt: "Green PPRC tee and connector fittings",
        image_src: "https://www.duraflow.com.pk/assets/img/team/pprc-pipes-01.webp",
        name: "Dura Flow PPRC Tee Fitting",
        newPrice: 220,
        oldPrice: 280
    },
    {
        badge: "Best Seller",
        category: "Toilets",
        id: "SAN-012",
        image_alt: "Porta HD180N white one piece toilet",
        image_src: "https://designbath.pk/wp-content/uploads/2022/09/HD180N-1.png",
        name: "Porta HD180N One Piece Toilet",
        newPrice: 28500,
        oldPrice: 34000
    },
    {
        badge: "Heavy Duty",
        category: "Garden Pipes",
        id: "SAN-067",
        image_alt: "Hi Flow reinforced green water hose",
        image_src: "https://www.pakistanpowertool.com/cdn/shop/files/Waterpipe22_67fdcd6b-972b-4757-90cb-3bb3f4797f49.png?v=1745473151&width=1445",
        name: "Hi Flow Heavy Duty Garden Pipe",
        newPrice: 5200,
        oldPrice: 6000
    },
    {
        badge: "Premium",
        category: "Bath Sets",
        id: "SAN-004",
        image_alt: "Faisal Sanitary Flat Series gold bathroom fittings",
        image_src: "https://products.designbath.pk/_next/image?q=100&url=https%3A%2F%2Fadmin.designbath.pk%2F%2Fuploads%2FFlat_Series_edb97faa41.jpg&w=2048",
        name: "Faisal Flat Series Gold Fittings",
        newPrice: 24000,
        oldPrice: 29500
    },
    {
        category: "Water Tanks",
        id: "SAN-046",
        image_alt: "Ahmad Flow blue water storage tank",
        image_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4D8qeS6BZg0FbWZzJ096x8O4PPs5L5B1eLs-oi11oA&s=10",
        name: "AHMAD Flow Water Tank 300 Gallon",
        newPrice: 22500
    },
    {
        badge: "Premium",
        category: "Water Tanks",
        id: "SAN-049",
        image_alt: "Dura Max horizontal water storage tank",
        image_src: "https://watertanksmart.com/cdn/shop/files/Dura_Max_Roto_Horizontal_Water_Tank_for_farm_and_agricultural_water_storage.png?v=1761227281&width=1024",
        name: "Dura Max Horizontal Tank 300 Gallon",
        newPrice: 42000,
        oldPrice: 48000
    },
    {
        badge: "Premium",
        category: "Concealed Sets",
        id: "SAN-022",
        image_alt: "Sonex PVD full gold concealed bathroom mixer set",
        image_src: "https://cdn.quicksell.co/-MV2RHX5bNkiQqSSukxF/products_400/-NzwiH8k3ETDgEIS7jGx.jpg",
        name: "Sonex PVD Gold Concealed Mixer Set",
        newPrice: 45000,
        oldPrice: 58000
    },
    {
        category: "Basin Mixers",
        id: "SAN-026",
        image_alt: "Sonex Quarter Round chrome basin mixer",
        image_src: "https://homepoint.pk/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/q/u/quarter-round-fancy-set-basin-mixer.jpg",
        name: "Sonex Quarter Round Basin Mixer",
        newPrice: 9500
    },
    {
        badge: "New",
        category: "Vanity Basins",
        id: "SAN-039",
        image_alt: "Porta HDA028 oval white above counter vanity wash basin",
        image_src: "https://builddurable.com/images/ajax/product/2018/11/2813_341_art-vanity-washbasin_HDA028_1.jpg",
        name: "Porta HDA028 Vanity Wash Basin",
        newPrice: 12500,
        oldPrice: 15000
    },
    {
        badge: "Best Seller",
        category: "PPRC Pipes",
        id: "SAN-051",
        image_alt: "IIL green PPRC pipes and fittings",
        image_src: "https://iil.com.pk/public/uploads/catalog/products/prod_RDnA60_13-_IIL_PPRC_Pipe_%26_Fitting_1.jpg",
        name: "IIL PPRC Pipe 20mm PN16",
        newPrice: 650,
        oldPrice: 750
    },
    {
        badge: "Best Seller",
        category: "Garden Pipes",
        id: "SAN-061",
        image_alt: "Popular Lahore green flexible garden pipe",
        image_src: "https://popularlahorepipes.com/cdn/shop/files/final_garden_pipe_image.webp?v=1777445553",
        name: "Popular Garden Pipe Green 3/4 Inch",
        newPrice: 3200,
        oldPrice: 3800
    },
    {
        badge: "Popular",
        category: "Wash Basins",
        id: "SAN-033",
        image_alt: "Porta HD14A white wash basin with full pedestal",
        image_src: "https://www.sanitary.pk/admin/assets/uploaded_images/HD14A.jpg",
        name: "Porta HD14A Wash Basin",
        newPrice: 14999,
        oldPrice: 17674
    },
    {
        badge: "New",
        category: "Kitchen Mixers",
        id: "SAN-035",
        image_alt: "Sonex Falcon pull out chrome kitchen sink mixer",
        image_src: "https://homepoint.pk/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/s/o/sonex_kitchen_mixer_pull_out_tap_937_.jpg",
        name: "Sonex Falcon Pull Out Kitchen Mixer",
        newPrice: 18074,
        oldPrice: 23781
    },
    {
        category: "Bathroom Accessories",
        id: "SAN-036",
        image_alt: "Stainless steel bathroom accessories set with towel rack and soap holder",
        image_src: "https://d3rs3wc4pbrcza.cloudfront.net/files/53836/Images/comp-set-53836-2312713-080225122947334.jpg",
        name: "Chrome Bathroom Accessories Set",
        newPrice: 3500,
        oldPrice: 4500
    },
    {
        category: "PPRC Pipes",
        id: "SAN-053",
        image_alt: "Green PPRC pipe plumbing system",
        image_src: "https://www.duraflow.com.pk/assets/img/team/pprc-pipes-01.webp",
        name: "Dura Flow PPRC Pipe 25mm",
        newPrice: 950,
        oldPrice: 1100
    }
];





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
      localStorage.setItem("products", JSON.stringify(pr));
    return pr;   // Agar data nahi hai, toh khali array return kar do
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

    prev = setTimeout(() => {
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

