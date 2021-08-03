/**
 * Dynamic content with xhr request
 */
let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    const data = req.responseText;
    const ar_data = JSON.parse(req.responseText)
    const categoreis = ar_data['responses'][0][0].params.userCategories;
    const recommendedProducts = Object.values(ar_data['responses'][0][0].params.recommendedProducts);
    const wrapperMobil = document.getElementById('vertical-nav-tabs');
    const splitted_categories = [];

    categoreis.forEach(str => {
      if(str.search(">") == -1) {
        splitted_categories.push(str)
      }else{
        splitted_categories.push(str.split("> ")[1])
      }
    });

    splitted_categories.forEach((element, index) => {
      let container = document.getElementById(index.toString())
      console.log(container)
      recommendedProducts[index].forEach(x => {
        console.log(x)
        
        container.innerHTML += `
                    <li>
                      <div class="product-container">
                        <div class="product-image"><img height=150 src="${x.image}" loading="lazy"  alt=""></div>
                        <h4 style="height:100px">${x.name} - ${x.productId}</h4>
                        <div class="product-price"><span>${x.priceText}</span></div>
                        <div class="free-shipping"><i class="fas fa-truck d-none d-lg-block mt-1"></i>&nbsp; <span
                            class=" star d-block d-lg-none">*</span>ücretsiz kargo</div>
                        <button class="addcart d-block d-lg-none popup1">
                          <a ><span>sepete ekle</span></a>
                        </button>
                      </div>
                    </li>
        `
      })
      
    });
  }
};


req.open("GET", "http://orhangokce.xyz/product-list.json", true);
req.send();
