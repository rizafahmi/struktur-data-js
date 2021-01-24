const queryString = window.location.search;
const [_ignore, id] = queryString.split('=');

// SHOW PRODUCT
let html = '';

// GENERATE RELATED PRODUCTS
let relatedHtml = '';
recommendation[parseInt(id)].map(function (item) {
  relatedHtml += showRelatedProduct(item);
  return item;
});

function showRelatedProduct(item) {
  const html = `<div class="col-lg-3 col-sm-6">
                    <div class="product-item">
                        <div class="pi-pic">
                            <img src="${item.img}" alt="">
                            <div class="icon">
                                <i class="icon_heart_alt"></i>
                            </div>
                            <ul>
                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                            </ul>
                        </div>
                        <div class="pi-text">
                            <div class="catagory-name">Geek Stuff</div>
                            <a href="#">
                                <h5>${item.title}</h5>
                            </a>
                            <div class="product-price">
                                $${item.price}
                                <span>$${item.price * 10}</span>
                            </div>
                        </div>
                    </div>
                </div>
`
  return html;
}

function showProduct(id) {
    return `
        <div class="pd-title">
            <span>Geek Stuff</span>
            <h3>${allItems[id].title}</h3>
            <a href="#" class="heart-icon"><i class="icon_heart_alt"></i></a>
        </div>
        <div class="pd-rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
            <span>(5)</span>
        </div>
        <div class="pd-desc">
            <p>This officially licensed Sonic the Hedgehog snood has an all over print of Sonic on it. An elasticated tube, you can wear it in 12+ ways. Use it as a scarf, head covering, bandana, headband, hairband, wrist cuff, and more! It’s not medical grade, but it’s excellent for complying with Covid-19 regulations.</p>
            <h4>$${allItems[id].price} <span>${(parseFloat(allItems[id].price) + 10).toFixed(2)}</span></h4>
        </div>
        <div class="pd-size-choose">
            <div class="sc-item">
                <input type="radio" id="sm-size">
                <label for="sm-size">s</label>
            </div>
            <div class="sc-item">
                <input type="radio" id="md-size">
                <label for="md-size">m</label>
            </div>
            <div class="sc-item">
                <input type="radio" id="lg-size">
                <label for="lg-size">l</label>
            </div>
            <div class="sc-item">
                <input type="radio" id="xl-size">
                <label for="xl-size">xs</label>
            </div>
        </div>
        <div class="quantity">
            <div class="pro-qty">
                <input type="text" value="1">
            </div>
            <a href="#" class="primary-btn pd-cart">Add To Cart</a>
        </div>
        <ul class="pd-tags">
            <li><span>CATEGORIES</span>: More Accessories, Wallets & Cases</li>
            <li><span>TAGS</span>: Clothing, T-shirt, Woman</li>
        </ul>
        <div class="pd-share">
            <div class="p-code">Sku : 00012</div>
            <div class="pd-social">
                <a href="#"><i class="ti-facebook"></i></a>
                <a href="#"><i class="ti-twitter-alt"></i></a>
                <a href="#"><i class="ti-linkedin"></i></a>
            </div>
        </div>

`
}

function showProductContent(id) {
    return `
            <div class="row">
                <div class="col-lg-7">
                    <h5>Introduction</h5>
                    <p>This officially licensed Sonic the Hedgehog snood has an all over print of Sonic on it. An elasticated tube, you can wear it in 12+ ways. Use it as a scarf, head covering, bandana, headband, hairband, wrist cuff, and more! It’s not medical grade, but it’s excellent for complying with Covid-19 regulations.</p>
                    <h5>Features</h5>
                    <p>This officially licensed Sonic the Hedgehog snood has an all over print of Sonic on it. An elasticated tube, you can wear it in 12+ ways. Use it as a scarf, head covering, bandana, headband, hairband, wrist cuff, and more! It’s not medical grade, but it’s excellent for complying with Covid-19 regulations.</p>
                </div>
                <div class="col-lg-5">
                    <img src="${allItems[id].img}" alt="">
                </div>
            </div>
`
}

function render() {
  const product = document.querySelector('.product-details');
  product.innerHTML = showProduct(parseInt(id));
  const productContent = document.querySelector('.product-content');
  productContent.innerHTML = showProductContent(parseInt(id));
  const recommendation = document.querySelector("#recommendation");
  recommendation.innerHTML = relatedHtml;
}

render(html);
