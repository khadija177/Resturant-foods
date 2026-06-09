let foods = [
{name:"Karachi Biryani", price:250, img:"https://cdn.pixabay.com/photo/2016/11/29/04/17/biryani-1869744_1280.jpg"},
{name:"BBQ Grill", price:500, img:"https://cdn.pixabay.com/photo/2017/06/02/18/24/barbecue-2366012_1280.jpg"},
{name:"Zinger Burger", price:300, img:"https://cdn.pixabay.com/photo/2017/09/02/13/38/burger-2706411_1280.jpg"},
{name:"Pizza", price:700, img:"https://cdn.pixabay.com/photo/2016/03/05/19/02/pizza-1239077_1280.jpg"},
{name:"Cold Drinks", price:100, img:"https://cdn.pixabay.com/photo/2017/06/02/18/24/cola-2366029_1280.jpg"},
{name:"Soup", price:150, img:"https://cdn.pixabay.com/photo/2017/01/20/15/06/soup-1995064_1280.jpg"},
{name:"Grilled Fish", price:600, img:"https://cdn.pixabay.com/photo/2016/11/18/15/31/fish-1838967_1280.jpg"},
{name:"Chicken Karahi", price:800, img:"https://cdn.pixabay.com/photo/2018/06/18/16/05/food-3482749_1280.jpg"},
{name:"Fries", price:120, img:"https://cdn.pixabay.com/photo/2014/10/19/20/59/french-fries-494715_1280.jpg"},
{name:"Pasta", price:350, img:"https://cdn.pixabay.com/photo/2017/10/16/10/43/pasta-2857822_1280.jpg"},
{name:"Sandwich", price:200, img:"https://cdn.pixabay.com/photo/2017/01/22/19/12/sandwich-2001158_1280.jpg"},
{name:"Ice Cream", price:180, img:"https://cdn.pixabay.com/photo/2016/03/05/19/02/ice-cream-1239073_1280.jpg"},
{name:"Noodles", price:220, img:"https://cdn.pixabay.com/photo/2016/11/21/16/00/noodles-1846077_1280.jpg"},
{name:"Shawarma", price:280, img:"https://cdn.pixabay.com/photo/2021/03/01/17/35/shawarma-6060715_1280.jpg"},
{name:"Kebab", price:400, img:"https://cdn.pixabay.com/photo/2017/06/06/22/22/kebab-2372804_1280.jpg"}
];

let cart = [];
let fav = [];

/* LOGIN */
function login(){
let email = document.getElementById("email").value;

if(email){
document.getElementById("loginPage").style.display="none";
document.getElementById("main").style.display="block";
loadFoods();
showHome();
}
}

/* SHOW PAGE CONTROL */
function showSection(section){

document.getElementById("foodList").style.display="none";
document.getElementById("cart").style.display="none";
document.getElementById("fav").style.display="none";
document.getElementById("about").style.display="none";

if(section==="home"){
document.getElementById("foodList").style.display="grid";
}
if(section==="cart"){
document.getElementById("cart").style.display="block";
}
if(section==="fav"){
document.getElementById("fav").style.display="block";
}
if(section==="about"){
document.getElementById("about").style.display="block";
}
}

/* LOAD FOODS */
function loadFoods(){
let box = document.getElementById("foodList");
box.innerHTML="";

foods.forEach((f,i)=>{
box.innerHTML+=`
<div class="card">
<img src="${f.img}">
<div class="card-content">
<h3>${f.name}</h3>
<p>Rs ${f.price}</p>

<button onclick="addCart(${i})">🛒 Add to Cart</button>
<button onclick="addFav(${i})">❤ Favorite</button>

</div>
</div>
`;
});

showSection("home");
}

/* CART ADD */
function addCart(i){
cart.push(foods[i]);
updateCart();
}

/* CART UPDATE (NOW WITH IMAGES FIXED) */
function updateCart(){
let box = document.getElementById("cartItems");
box.innerHTML="";
let total=0;

cart.forEach((c)=>{
total+=c.price;

box.innerHTML+=`
<div style="display:flex;gap:10px;align-items:center;margin:10px 0;">
<img src="${c.img}" width="60" height="60" style="border-radius:8px;">
<div>
<p><b>${c.name}</b></p>
<p>Rs ${c.price}</p>
</div>
</div>
`;
});

document.getElementById("total").innerText="Total: Rs "+total;
}

/* FAVORITE ADD */
function addFav(i){
fav.push(foods[i]);
updateFav();
}

/* FAVORITE UPDATE (WITH IMAGES FIXED) */
function updateFav(){
let box=document.getElementById("favItems");
box.innerHTML="";

fav.forEach((f)=>{
box.innerHTML+=`
<div style="display:flex;gap:10px;align-items:center;margin:10px 0;">
<img src="${f.img}" width="60" height="60" style="border-radius:8px;">
<div>
<p><b>${f.name}</b></p>
<p>Rs ${f.price}</p>
</div>
</div>
`;
});
}

/* NAV FUNCTIONS (HEADER FIX) */
function showCart(){
showSection("cart");
updateCart();
}

function showFav(){
showSection("fav");
updateFav();
}

function showHome(){
showSection("home");
}

function toggleAbout(){
let a=document.getElementById("about");
a.style.display = (a.style.display==="block") ? "none":"block";
}