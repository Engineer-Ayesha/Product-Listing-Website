const productsArray = [
  {
    title: "Wireless Headphones",
    owner: "TechStore",
    price: "$79",
    description: "High-quality sound with noise cancellation.",
    image: "product_images/headphone.avif"  
  },
  {
    title: "Digital Camera",
    owner: "PhotoWorld",
    price: "$299",
    description: "Capture every moment in stunning clarity.",
    image: "product_images/camera.avif"
  },
  {
    title: "Wooden Stool",
    owner: "HomeDeco",
    price: "$120",
    description: "Elegant and sturdy wooden stool for home.",
    image: "product_images/wooden_stool.avif"
  },
  {
    title: "Smart Watch",
    owner: "GadgetPro",
    price: "$199",
    description: "Track your fitness and notifications easily.",
    image: "product_images/watch.avif"
  },
  {
    title: "Leather Handbag",
    owner: "FashionHub",
    price: "$149",
    description: "Stylish and durable leather handbag for daily use.",
    image: "product_images/handbag.webp"
  },
  {
    title: "Matte Lipstick",
    owner: "BeautyCo",
    price: "$25",
    description: "Long-lasting matte finish in vibrant shades.",
    image: "product_images/Lipstick.avif"
  },
  {
    title: "Smartphone",
    owner: "MobileWorld",
    price: "$499",
    description: "Latest model with high-performance camera.",
    image: "product_images/smartphone.avif"
  },
  {
    title: "Running Sneakers",
    owner: "SportyShoes",
    price: "$89",
    description: "Comfortable sneakers for daily runs and workouts.",
    image: "product_images/sneakers.avif"
  }
];
let image=document.querySelector("#main_container #image_container");
let product=document.querySelector("#main_container h3");
let owner=document.querySelector("#main_container i");
let price=document.querySelector("#main_container span");
let description=document.querySelector(" #main_container p");
let previousButton=document.querySelector("#buttons_section #previous_button");
let nextButton=document.querySelector("#buttons_section #next_button");
let mainContainer=document.querySelector("#main_container");
let currentIndex=0;
function displayCards(){
  let currentProduct=productsArray[currentIndex];
  image.style.backgroundImage=`url(${currentProduct.image})`;
  product.textContent=currentProduct.title;
  owner.textContent="by" + currentProduct.owner;
  price.textContent=currentProduct.price;
  description.textContent=currentProduct.description;
}
previousButton.addEventListener("click",()=>{
  mainContainer.style.opacity=0;
  setTimeout(()=>{
    currentIndex--;
    if(currentIndex < 0){
      currentIndex=productsArray.length-1;
   }
    displayCards();
    mainContainer.style.opacity=1;
  },300);
});
nextButton.addEventListener("click",()=>{
  mainContainer.style.opacity=0;
  setTimeout(()=>{
    currentIndex++;
    if(currentIndex >= productsArray.length){
      currentIndex=0;
    }
    displayCards();
    mainContainer.style.opacity=1;
  },300);
});
displayCards();