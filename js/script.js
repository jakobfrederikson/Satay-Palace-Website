// NAV BAR Animation
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
          link.style.animation = ``;
      } else {
          link.style.animation = `navLinkFade 0.5s ease forwards  ${index / 7 + 0.2}s`;
      }
    });
  });
}
navSlide();

// GOOGLE MAPS
// Initialize and add the map
function initMap() {
  // The location of Satay Palace
  const satay_palace = { lat: -41.293420355906385, lng: 174.77566422946646 };
  // The map, centered at Satay Palace
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: satay_palace, // tells the map where to properly centre itself
  });
  // The marker, positioned at Satay Palace
  const marker = new google.maps.Marker({
    position: satay_palace,
    map: map,
  });
}


// MOBILE ORDER CARD TOGGLE
$("#mobile-order-card").hide();
$("#mobile-order-button").click(function(){
  $("#mobile-order-card").toggle();
});

// MENU ADD TO ORDER Functionality
if (window.location.href.indexOf('menu.html') > -1) {
  var total = 0;
  document.getElementById('wontons').addEventListener('click', function() {
    var itemName = "Wontons (x8)";
    var price = 10;
    total += parseInt(price);

    document.getElementById('itemName').innerHTML += itemName + "<br>";
    document.getElementById('mobile-itemName').innerHTML += itemName + "<br>";

    document.getElementById('price').innerHTML += price + "<br>";
    document.getElementById('mobile-price').innerHTML += price + "<br>";


    document.getElementById('total').innerHTML = "";
    document.getElementById('total').innerHTML += "Total = NZ$ " + total;
    document.getElementById('mobile-total').innerHTML = "";
    document.getElementById('mobile-total').innerHTML += "Total = NZ$ " + total;
  });

  document.getElementById('satay').addEventListener('click', function() {
    var itemName = "Satay (x6)"
    var price = 13;
    total += parseInt(price);

    document.getElementById('itemName').innerHTML += itemName + "<br>";
    document.getElementById('mobile-itemName').innerHTML += itemName + "<br>";

    document.getElementById('price').innerHTML += price + "<br>";
    document.getElementById('mobile-price').innerHTML += price + "<br>";

    document.getElementById('total').innerHTML = "";
    document.getElementById('total').innerHTML += "Total = NZ$ " + total;
    document.getElementById('mobile-total').innerHTML = "";
    document.getElementById('mobile-total').innerHTML += "Total = NZ$ " + total;
  });

  document.getElementById('dumplings').addEventListener('click', function() {
    var itemName = "Dumpling (x5)"
    var price = 10;
    total += parseInt(price);

    document.getElementById('itemName').innerHTML += itemName + "<br>";
    document.getElementById('mobile-itemName').innerHTML += itemName + "<br>";

    document.getElementById('price').innerHTML += price + "<br>";
    document.getElementById('mobile-price').innerHTML += price + "<br>";

    document.getElementById('total').innerHTML = "";
    document.getElementById('total').innerHTML += "Total = NZ$ " + total;
    document.getElementById('mobile-total').innerHTML = "";
    document.getElementById('mobile-total').innerHTML += "Total = NZ$ " + total;
  });
}
