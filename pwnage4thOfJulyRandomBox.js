
{  
  
  
    var LuckyBox = {
        data: {},
        
        init: function() {
            var boxProducts = []

            boxProducts.push({
                available: true,
                title: "Ultra Custom Ergo Gaming Mouse",
                variantTitle: "Black",
                price: 59.99,
                url: "/products/ultra-custom-ergo-gaming-mouse?variant=34912436584602",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/wired_4_holed_v3-min_70x70_crop_center.png?v=1593836510"
            })

            boxProducts.push({
                available: true,
                title: "Ultra Custom Ergo Gaming Mouse",
                variantTitle: "Black Solid",
                price: 59.99,
                url: "/products/ultra-custom-ergo-gaming-mouse?variant=34912436617370",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/wired_4_solid_v3-min_70x70_crop_center.png?v=1593836510"
            })

            boxProducts.push({
                available: true,
                title: "Ultra Custom Ergo Gaming Mouse",
                variantTitle: "White",
                price: 59.99,
                url: "/products/ultra-custom-ergo-gaming-mouse?variant=34912436650138",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/wired_4_white_holed_v3-min_70x70_crop_center.png?v=1593836510"
            })

            boxProducts.push({
                available: true,
                title: "Ultra Custom Ergo Gaming Mouse",
                variantTitle: "White Solid",
                price: 59.99,
                url: "/products/ultra-custom-ergo-gaming-mouse?variant=34912436682906",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/wired_1_white_solid_v3-min_70x70_crop_center.png?v=1593836510"
            })

            boxProducts.push({
                available: false,
                title: "Ultra Custom Wireless Symm",
                variantTitle: "Black",
                price: 79.99,
                url: "/products/ultra-custom-wireless-symm?variant=36922127941786",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/uc_symm-wifi_black_4_holed_70x70_crop_center.png?v=1606027163"
            })

            boxProducts.push({
                available: false,
                title: "Ultra Custom Wireless Symm",
                variantTitle: "Solid Black",
                price: 79.99,
                url: "/products/ultra-custom-wireless-symm?variant=36922127974554",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/uc_symm-wifi_black_4_solid_70x70_crop_center.png?v=1606027163"
            })

            boxProducts.push({
                available: true,
                title: "Ultra Custom Wireless Symm",
                variantTitle: "White",
                price: 79.99,
                url: "/products/ultra-custom-wireless-symm?variant=36922128007322",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/uc_symm-wifi_white_4_holed_70x70_crop_center.png?v=1605833599"
            })

            boxProducts.push({
                available: false,
                title: "Ultra Custom Wireless Symm",
                variantTitle: "Solid White",
                price: 79.99,
                url: "/products/ultra-custom-wireless-symm?variant=36922128040090",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/uc_symm-wifi_white_4_solid_70x70_crop_center.png?v=1605833599"
            })

            boxProducts.push({
                available: true,
                title: "Side Grips For Ergo Mouse",
                price: 5.00,
                url: "/products/side-grips-for-ergo-mouse?variant=34482490048666",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/grips_70x70_crop_center.png?v=1590833212"
            })

            boxProducts.push({
                available: true,
                title: "Extra Cover Sets - Ergo",
                variantTitle: "Black",
                price: 12.00,
                url: "/products/extra-cover-sets-ergo?variant=34488862900378",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/covers_black_70x70_crop_center.png?v=1590887339"
            })

            boxProducts.push({
                available: true,
                title: "Extra Cover Sets - Ergo",
                variantTitle: "White",
                price: 12.00,
                url: "/products/extra-cover-sets-ergo?variant=34488866078874",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/covers_white_70x70_crop_center.png?v=1590887339"
            })

            boxProducts.push({
                available: true,
                title: "Extra Cover Sets - Ergo",
                variantTitle: "Mint",
                price: 12.00,
                url: "/products/extra-cover-sets-ergo?variant=34488913461402",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/covers_mint_70x70_crop_center.png?v=1590887468"
            })

            boxProducts.push({
                available: true,
                title: "Extra Cover Sets - Ergo",
                variantTitle: "Red",
                price: 12.00,
                url: "/products/extra-cover-sets-ergo?variant=34498881126554",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/covers_red_70x70_crop_center.png?v=1597550794"
            })

            boxProducts.push({
                available: true,
                title: "Extra Cover Sets - Ergo",
                variantTitle: "Orange",
                price: 12.00,
                url: "/products/extra-cover-sets-ergo?variant=34498707357850",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/covers_orange_70x70_crop_center.png?v=1597550794"
            })

            boxProducts.push({
                available: true,
                title: "Extra Cover Sets - Ergo",
                variantTitle: "Yellow",
                price: 12.00,
                url: "/products/extra-cover-sets-ergo?variant=35075195273370",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/covers_yellow_70x70_crop_center.png?v=1597550794"
            })

            boxProducts.push({
                available: true,
                title: "Extra Cover Sets - Ergo",
                variantTitle: "Green",
                price: 12.00,
                url: "/products/extra-cover-sets-ergo?variant=35069142401178",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/covers_green_70x70_crop_center.png?v=1597550794"
            })

            boxProducts.push({
                available: true,
                title: "Extra Cover Sets - Ergo",
                variantTitle: "Purple",
                price: 12.00,
                url: "/products/extra-cover-sets-ergo?variant=35765185740954",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/covers_purpule_70x70_crop_center.png?v=1597550794"
            })

            boxProducts.push({
                available: true,
                title: "Extra Cover Sets - Ergo",
                variantTitle: "Pink",
                price: 12.00,
                url: "/products/extra-cover-sets-ergo?variant=35765171781786",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/covers_pink_70x70_crop_center.png?v=1597550794"
            })

            boxProducts.push({
                available: true,
                title: "Extra Cover Sets - Ergo",
                variantTitle: "Neon Pink",
                price: 12.00,
                url: "/products/extra-cover-sets-ergo?variant=35076330979482",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/covers_hot-pink_70x70_crop_center.png?v=1597550794"
            })

            boxProducts.push({
                available: true,
                title: "Extra Cover Sets - Ergo",
                variantTitle: "Blue",
                price: 12.00,
                url: "/products/extra-cover-sets-ergo?variant=35809694023834",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/covers_blue_70x70_crop_center.png?v=1597550794"
            })

            boxProducts.push({
                available: true,
                title: "Extra Cover Sets - Symm",
                variantTitle: "Black",
                price: 12.00,
                url: "/products/extra-cover-sets-symm?variant=37552465936575",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/covers_symm_black_70x70_crop_center.png?v=1610315080"
            })

            boxProducts.push({
                available: true,
                title: "Extra Cover Sets - Symm",
                variantTitle: "White",
                price: 12.00,
                url: "/products/extra-cover-sets-symm?variant=37552469541055",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/covers_symm_white_70x70_crop_center.png?v=1610315080"
            })

            boxProducts.push({
                available: true,
                title: "Extra Cover Sets - Symm",
                variantTitle: "Mint",
                price: 12.00,
                url: "/products/extra-cover-sets-symm?variant=36922320126106",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/covers_symm_mint_70x70_crop_center.png?v=1610315030"
            })

            boxProducts.push({
                available: true,
                title: "Extra Cover Sets - Symm",
                variantTitle: "Red",
                price: 12.00,
                url: "/products/extra-cover-sets-symm?variant=36922320158874",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/covers_symm_red_70x70_crop_center.png?v=1610315030"
            })

            boxProducts.push({
                available: true,
                title: "Extra Cover Sets - Symm",
                variantTitle: "Orange",
                price: 12.00,
                url: "/products/extra-cover-sets-symm?variant=37948212576447",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/covers_symm_orange_70x70_crop_center.png?v=1610315089"
            })

            boxProducts.push({
                available: true,
                title: "Extra Cover Sets - Symm",
                variantTitle: "Yellow",
                price: 12.00,
                url: "/products/extra-cover-sets-symm?variant=37948220080319",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/covers_symm_yellow_70x70_crop_center.png?v=1610315089"
            })

            boxProducts.push({
                available: true,
                title: "Extra Cover Sets - Symm",
                variantTitle: "Green",
                price: 12.00,
                url: "/products/extra-cover-sets-symm?variant=37948222210239",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/covers_symm_green_70x70_crop_center.png?v=1610315089"
            })

            boxProducts.push({
                available: true,
                title: "Extra Cover Sets - Symm",
                variantTitle: "Purple",
                price: 12.00,
                url: "/products/extra-cover-sets-symm?variant=37948224602303",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/covers_symm_purple_70x70_crop_center.png?v=1610315089"
            })

            boxProducts.push({
                available: true,
                title: "Extra Cover Sets - Symm",
                variantTitle: "Pink",
                price: 12.00,
                url: "/products/extra-cover-sets-symm?variant=36922320191642",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/covers_symm_pink_70x70_crop_center.png?v=1610315089"
            })

            boxProducts.push({
                available: true,
                title: "Extra Cover Sets - Symm",
                variantTitle: "Neon Pink",
                price: 12.00,
                url: "/products/extra-cover-sets-symm?variant=37948225421503",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/covers_symm_hot-pink_70x70_crop_center.png?v=1610315089"
            })

            boxProducts.push({
                available: true,
                title: "Extra Cover Sets - Symm",
                variantTitle: "Blue",
                price: 12.00,
                url: "/products/extra-cover-sets-symm?variant=37552452567231",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/covers_symm_blue_70x70_crop_center.png?v=1610315089"
            })

            boxProducts.push({
                available: true,
                title: "USB C Paracord Cable",
                variantTitle: "black",
                price: 10.00,
                url: "/products/mouse-cable-black?variant=34487754555546",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/cableblack_70x70_crop_center.png?v=1594868555"
            })

            boxProducts.push({
                available: true,
                title: "USB C Paracord Cable",
                variantTitle: "white",
                price: 10.00,
                url: "/products/mouse-cable-black?variant=35209553608858",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/cable_white-only_70x70_crop_center.png?v=1594868555"
            })

            boxProducts.push({
                available: true,
                title: "USB C Paracord Cable",
                variantTitle: "mint",
                price: 10.00,
                url: "/products/mouse-cable-black?variant=35109039177882",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/cable_mint_70x70_crop_center.png?v=1599538332"
            })

            boxProducts.push({
                available: true,
                title: "USB C Paracord Cable",
                variantTitle: "red",
                price: 10.00,
                url: "/products/mouse-cable-black?variant=35109043077274",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/cable_red_70x70_crop_center.png?v=1599538332"
            })

            boxProducts.push({
                available: true,
                title: "USB C Paracord Cable",
                variantTitle: "orange",
                price: 10.00,
                url: "/products/mouse-cable-black?variant=35107086434458",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/cable_orange_70x70_crop_center.png?v=1599538332"
            })

            boxProducts.push({
                available: true,
                title: "USB C Paracord Cable",
                variantTitle: "green",
                price: 10.00,
                url: "/products/mouse-cable-black?variant=35231917998234",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/cable_green_70x70_crop_center.png?v=1599538332"
            })

            boxProducts.push({
                available: true,
                title: "USB C Paracord Cable",
                variantTitle: "yellow",
                price: 10.00,
                url: "/products/mouse-cable-black?variant=36102222217370",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/cable_yellow-min_70x70_crop_center.png?v=1599538332"
            })

            boxProducts.push({
                available: true,
                title: "USB C Paracord Cable",
                variantTitle: "neon pink",
                price: 10.00,
                url: "/products/mouse-cable-black?variant=37844354891967",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/cable_neon-pink-min_70x70_crop_center.png?v=1599538345"
            })

            boxProducts.push({
                available: true,
                title: "USB C Paracord Cable",
                variantTitle: "pink",
                price: 10.00,
                url: "/products/mouse-cable-black?variant=37844363149503",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/cable_pink-min_70x70_crop_center.png?v=1599538345"
            })

            boxProducts.push({
                available: true,
                title: "USB C Paracord Cable",
                variantTitle: "purple",
                price: 10.00,
                url: "/products/mouse-cable-black?variant=37844369375423",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/cable_purple-min_70x70_crop_center.png?v=1599538345"
            })

            boxProducts.push({
                available: true,
                title: "USB C Paracord Cable",
                variantTitle: "blue",
                price: 10.00,
                url: "/products/mouse-cable-black?variant=37846832382143",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/cable_blue-min_70x70_crop_center.png?v=1608715562"
            })

            boxProducts.push({
                available: true,
                title: "Ultra Custom Wireless Ergo",
                variantTitle: "Black",
                price: 89.99,
                url: "/products/ultra-custom-wireless-ergo?variant=34481296146586",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/slide4black_70x70_crop_center.png?v=1591300908"
            })

            boxProducts.push({
                available: true,
                title: "Ultra Custom Wireless Ergo",
                variantTitle: "White",
                price: 89.99,
                url: "/products/ultra-custom-wireless-ergo?variant=34481296179354",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/slide4white_70x70_crop_center.png?v=1591300908"
            })

            boxProducts.push({
                available: true,
                title: "Button Spacers",
                price: 1.50,
                url: "/products/button-spacers?variant=36572866445466",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/uc-wifi-button-spacer_70x70_crop_center.png?v=1610323547"
            })

            boxProducts.push({
                available: true,
                title: "Custom Mouse Grips for Ergo Mouse",
                variantTitle: "Carnage Red",
                price: 9.99,
                url: "/products/custom-mouse-grips?variant=36795762540698",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/Ultra-Custom-Mouse-Grip-Tape-Carnage-Red_70x70_crop_center.png?v=1614234012"
            })

            boxProducts.push({
                available: true,
                title: "Custom Mouse Grips for Ergo Mouse",
                variantTitle: "Phantom Mint",
                price: 9.99,
                url: "/products/custom-mouse-grips?variant=37915430518975",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/snow-mint_70x70_crop_center.jpg?v=1614234012"
            })

            boxProducts.push({
                available: true,
                title: "Custom Mouse Grips for Ergo Mouse",
                variantTitle: "Camo Green",
                price: 9.99,
                url: "/products/custom-mouse-grips?variant=36795762573466",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/Ultra-Custom-Mouse-Grip-Tape_70x70_crop_center.png?v=1614119827"
            })

            boxProducts.push({
                available: true,
                title: "Ergo Mouse Extra Mouse Feet",
                price: 4.00,
                url: "/products/ergo-mouse-extra-mouse-feet?variant=34377939845165",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/skates_70x70_crop_center.png?v=1590833068"
            })

            boxProducts.push({
                available: true,
                title: "Ultra Custom Symm 2 Gaming Mouse",
                variantTitle: "Black",
                price: 59.99,
                url: "/products/ultra-custom-symm-2-gaming-mouse?variant=39839295602879",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/symm2_5_2_black_holed_wired_70x70_crop_center.png?v=1621321859"
            })

            boxProducts.push({
                available: false,
                title: "Ultra Custom Symm 2 Gaming Mouse",
                variantTitle: "Solid Black",
                price: 59.99,
                url: "/products/ultra-custom-symm-2-gaming-mouse?variant=39839295635647",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/symm2_4_2_black_holed_wired_70x70_crop_center.png?v=1621321859"
            })

            boxProducts.push({
                available: true,
                title: "Ultra Custom Symm 2 Gaming Mouse",
                variantTitle: "White",
                price: 59.99,
                url: "/products/ultra-custom-symm-2-gaming-mouse?variant=39839295668415",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/symm2_4_3_white_holed_wired_70x70_crop_center.png?v=1621321859"
            })

            boxProducts.push({
                available: false,
                title: "Ultra Custom Symm 2 Gaming Mouse",
                variantTitle: "Solid White",
                price: 59.99,
                url: "/products/ultra-custom-symm-2-gaming-mouse?variant=39839295701183",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/symm2_4_4_white_holed_wired_70x70_crop_center.png?v=1621321859"
            })

            boxProducts.push({
                available: true,
                title: "Custom Mouse Grips for Symm Mouse",
                variantTitle: "Carnage Red",
                price: 9.99,
                url: "/products/custom-mouse-grips-for-symm-mouse?variant=39988126351551",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/symm-grips_0081_70x70_crop_center.png?v=1623292324"
            })

            boxProducts.push({
                available: true,
                title: "Custom Mouse Grips for Symm Mouse",
                variantTitle: "Phantom Mint",
                price: 9.99,
                url: "/products/custom-mouse-grips-for-symm-mouse?variant=39988126384319",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/symm-grips_0121_70x70_crop_center.png?v=1623292333"
            })

            boxProducts.push({
                available: true,
                title: "Ultra Custom Wireless Symm 2",
                variantTitle: "Black",
                price: 109.99,
                url: "/products/ultra-custom-wireless-symm-2?variant=39769369379007",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/symm2_4_1_black_holed_70x70_crop_center.png?v=1620353265"
            })

            boxProducts.push({
                available: true,
                title: "Ultra Custom Wireless Symm 2",
                variantTitle: "Solid Black",
                price: 109.99,
                url: "/products/ultra-custom-wireless-symm-2?variant=39769369411775",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/symm2_4_2_black_solid_70x70_crop_center.png?v=1620353265"
            })

            boxProducts.push({
                available: true,
                title: "Ultra Custom Wireless Symm 2",
                variantTitle: "White",
                price: 109.99,
                url: "/products/ultra-custom-wireless-symm-2?variant=39769369477311",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/symm2_4_3_white_holed_70x70_crop_center.png?v=1620353265"
            })

            boxProducts.push({
                available: true,
                title: "Ultra Custom Wireless Symm 2",
                variantTitle: "Solid White",
                price: 109.99,
                url: "/products/ultra-custom-wireless-symm-2?variant=39769369542847",
                image: "//cdn.shopify.com/s/files/1/1573/2927/products/symm2_4_4_white_solid_70x70_crop_center.png?v=1620353265"
            })

            this.data.boxProducts = boxProducts

            this.data.boxRerollBtn = document.getElementById('box-reroll')
            this.data.currentPrice = 0
            if(document.querySelector('.product__base--selected')) this.data.currentPrice = document.querySelector('.product__base--selected').dataset.price
            else if(document.getElementById('price')) this.data.currentPrice = document.getElementById('price').innerHTML
            else if(document.getElementById('product-price--dynamic')) document.getElementById('product-price--dynamic').innerHTML

            this.data.minValue = Number((this.data.currentPrice).replace(/[^0-9.-]+/g,""))
            if(document.querySelectorAll('.product__base').length > 1) {
                [159, 350][[].indexOf.call(document.querySelectorAll('.product__base'), document.querySelector('.product__base--selected'))]
            } // TODO add blocks for min values
            else {
                this.data.limit = 350
            }
            this.data.boxProductsEl = document.getElementById('box-items')
            this.data.boxTotalValueEl = document.getElementById('box-total-value')

            this.data.images = [];
            for (var i = 0; i < this.data.boxProducts.length; i++) {
                this.data.images[i] = new Image();
                this.data.images[i].src = this.data.boxProducts[i].image;
                this.data.boxProducts[i].image = this.data.images[i].src
            }

            this.bindUIActions()
            this.createBoxProducts()
        },

        bindUIActions: function() {
            this.data.boxRerollBtn.addEventListener('click', event => {
                this.createBoxProducts()
            })
        },

        showItems: function(currentProducts, currentValue) {
            this.data.boxProductsEl.innerHTML = ""

            this.data.boxTotalValueEl.innerHTML = "$" + Math.round(currentValue*100)/100
            currentProducts.forEach(currentProduct => {
                var htmlString = ''
                htmlString += `<pwn-flex hcenter vcenter no-wrap-important class="border-box box-product tiny-margin-bottom bg-lighter content-box--small">
                                                <a href="${ currentProduct.url }"><div class="bg-light content-box--tiny border-radius box-image-small small-margin-right">
                                                <img src="${ currentProduct.image }">
                                                </div></a>
                                                <pwn-flex spacebetween hcenter vcenter>
                                                    <div><a href="${ currentProduct.url }"><div class="h4 no-margin-bottom">${ currentProduct.title }</div></a>`
                htmlString += currentProduct.variantTitle ? `<p class="small">${ currentProduct.variantTitle }</p>` : ``
                htmlString += `	   </div>
                                                <div class="price-medium tiny-margin-right">$${ currentProduct.price.toFixed(2) }</div>
                                            </pwn-flex>
                                            </pwn-flex>`
                this.data.boxProductsEl.innerHTML += htmlString 
            })
        },

        createBoxProducts: function() {
            var currentProducts = []; // list of items in your gift box
            var currentValue = 0; // value of your gift box (value of all items added together)
            var currentLimit = this.data.limit; // set maximum value of your gift box

            var spin = true; // variable that controls when to stop spinning for new items
            var index = 0; // variable that represents the amount of items in your gift box
            var i2 = 0; // variable that represents the amount of spins that has occured
            while(spin) {
                // Randomly selet a product to add to the gift box:
                var potentialProduct = this.data.boxProducts[getRandomInt(0, this.data.boxProducts.length)];

                // if the price of the product isn't above the current limit
                if(potentialProduct.price < currentLimit) {
                    /*
                    * if:
                    * - minValue is greater than 20 OR
                    * - minValue is lesser that 20 AND the price of the randomly selected product is more than 50 AND a 27% chance succeeds OR
                    * - the price of the potential product is less than 50
                    */
                    if((this.data.minValue > 20) ||
                        (this.data.minValue < 20 && ((potentialProduct.price > 50 && Math.random() > (73 / 100)) ||
                        potentialProduct.price < 50)))
                        {
                        // then we add the randomly selected product to the gift box,
                        currentProducts.push(potentialProduct);
                        // reduce the limit by the price of the randomly selected product,
                        currentLimit -= potentialProduct.price;
                        // add the price of the randomly selected product to the current value of the whole gift box
                        currentValue += potentialProduct.price;
                        // and finally increase the amount of items in the gift box by 1
                        index++;
                    }
                }

                // if the total value of the current gift box is greater than or equal to the set minimum value of any gift box (50)...
                if(currentValue >= this.data.minValue) {
                    // ...then create a random decimal value between 0 and 1
                    var chance = Math.random();
                    // set the value of `spin` to true if chance is less then 0.5, set to false if it's greater
                    spin = chance < (50 / 100);
                    // IF `spin` IS NOW FALSE, THE WHILE LOOP ENDS AND THE GIFT BOX IS DONE BEING ADDED TO
                }

                // if the total number of items in your gift box is somehow greater than 20...
                if(index > 20) {
                    // ...then end the loop (this is a case where your gift box could be less than $50 in value, it's VERY unlikely though)
                    spin = false;
                }
                // increment the spin counter by 1:
                i2++;
                // if the amount of spins is somehow greater than 1000...
                if(i2 > 1000) {
                    // ...then end the loop (this is a case where your gift box could be less than $50 in value, it's VERY unlikely though)
                    spin = false;
                }
            }

            // now that we're out of the spin loop, go ahead and show the items in the gift box to the user:
            this.showItems(currentProducts, currentValue);
        }
    }
    LuckyBox.init();

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        // Returns a number from 0 to 58 (which is the # of products in the product pool)
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

  
}
