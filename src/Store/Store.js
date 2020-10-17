const redux = require("redux")
const houseInfo = [
  {
    id: 1,
    address: "Villa on Marseiller Strasse 99, Garmisch-Partenkirchen",
    price: 26100,
    living__area: 385,
    land__area: 518,
    storeys: 1,
    bedrooms: 1,
    top__slide: true,
    mainImage: require("../image/house/01/main/florian-schmidinger-b_79nOqf95I-unsplash.jpg"),
    sideImage: [
      require("../image/house/01/main/florian-schmidinger-b_79nOqf95I-unsplash.jpg"),
      require("../image/house/01/francesca-tosolini-DmOhItSo49k-unsplash-1024x683.jpg"),
      require("../image/house/01/francesca-tosolini-l43rLPXCP1M-unsplash-1024x683.jpg"),
      require("../image/house/01/francesca-tosolini-Mx_W2atEaDo-unsplash-1024x683.jpg"),
      require("../image/house/01/im3rd-media-CbZ4EDP__VQ-unsplash-1024x683.jpg"),
      require("../image/house/01/kara-eads-L7EwHkq1B2s-unsplash-1024x683.jpg"),        
    ],
    key__feature: [
      "Backyard",
      "Balcony",
      "Swimming pool",
      "Fireplace",
      "Air conditioning system",
      "Underfloor heating"
    ],
    house__description: [
      "Sed molestie diam sed metus rhoncus tincidunt. Integer et urna in leo rutrum placerat. Nam interdum, lacus in euismod tristique, urna velit scelerisque dui, malesuada eleifend magna purus eget lectus. Sed fringilla metus vitae mollis aliquam. Aenean pellentesque est a metus hendrerit, at vulputate ante aliquam. Mauris nec risus iaculis, viverra est dictum, vehicula metus. Mauris ligula augue, viverra id tortor non, auctor malesuada purus. Fusce bibendum, tellus nec vulputate tristique, erat nisl ultrices metus, vel tincidunt diam lacus bibendum mi.",

      "Fusce ut ullamcorper justo. Curabitur at lacus quis nunc pulvinar dignissim. Nulla vel aliquet nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at commodo nibh. Proin odio ante, dictum vitae augue vitae, efficitur molestie nulla. Pellentesque pulvinar risus ac nisl fringilla, id volutpat diam lacinia. Phasellus facilisis risus et risus auctor rutrum non eu neque. Vivamus id efficitur nisi, a cursus nibh. Maecenas sem ante, dictum id hendrerit sed, ultricies accumsan metus. Ut feugiat felis eget libero dapibus, et rutrum tellus malesuada. Proin eget tortor id ligula malesuada ultrices non a enim. Nulla arcu nulla, facilisis in pellentesque varius, sollicitudin non est. Suspendisse sapien felis, posuere a odio mollis, ultricies maximus erat. Vestibulum accumsan orci quis tortor pretium lacinia.",

      "Quisque molestie mollis sollicitudin. Praesent tincidunt sollicitudin auctor. Maecenas eget lacus id erat blandit hendrerit id vitae velit. Aenean a dignissim enim. Etiam ultrices, metus eu pulvinar ultrices, mi elit imperdiet velit, nec gravida est nisi ac sem. Pellentesque ut gravida est. Proin sagittis auctor ipsum, id malesuada purus porttitor quis. Suspendisse sed porttitor nunc. Ut vitae pellentesque libero. Integer rutrum ante non auctor varius. Duis varius vestibulum nunc, nec accumsan augue iaculis et. Aliquam non aliquet justo, condimentum suscipit leo. Integer imperdiet dolor ligula, vitae hendrerit magna molestie non. Suspendisse luctus ullamcorper rhoncus. Ut nec gravida lectus, ut hendrerit nisl."
    ],
    mapLocation: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d86417.24579637955!2d10.8658715!3d47.4014283!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x341158ac5c3b14a1!2sVilla%20Buchenhain!5e0!3m2!1svi!2s!4v1602133658873!5m2!1svi!2s"
  },
  {
    id: 2,
    address: "House on 34 St Denys Road, PORTYERROCK",
    price: 17600,
    living__area: 410,
    land__area: 458,
    storeys: 1,
    bedrooms: 2,
    top__slide: true,
    mainImage: require("../image/house/02/main/naomi-ellsworth-EMPLSuvDuhQ-unsplash.jpg"),
    sideImage: [
      require("../image/house/02/main/naomi-ellsworth-EMPLSuvDuhQ-unsplash.jpg"),
      require("../image/house/02/francesca-tosolini-DmOhItSo49k-unsplash-1024x683.jpg"),
      require("../image/house/02/francesca-tosolini-l43rLPXCP1M-unsplash-1024x683.jpg"),
      require("../image/house/02/francesca-tosolini-Mx_W2atEaDo-unsplash-1024x683.jpg"),
      require("../image/house/02/im3rd-media-CbZ4EDP__VQ-unsplash-1024x683.jpg"),
      require("../image/house/02/kara-eads-L7EwHkq1B2s-unsplash-1024x683.jpg"),        
    ],
    key__feature: [
      "Backyard",
      "Balcony",
      "Swimming pool",
      "Fireplace",
      "Air conditioning system",
      "Underfloor heating"
    ],
    house__description: [
      "Sed molestie diam sed metus rhoncus tincidunt. Integer et urna in leo rutrum placerat. Nam interdum, lacus in euismod tristique, urna velit scelerisque dui, malesuada eleifend magna purus eget lectus. Sed fringilla metus vitae mollis aliquam. Aenean pellentesque est a metus hendrerit, at vulputate ante aliquam. Mauris nec risus iaculis, viverra est dictum, vehicula metus. Mauris ligula augue, viverra id tortor non, auctor malesuada purus. Fusce bibendum, tellus nec vulputate tristique, erat nisl ultrices metus, vel tincidunt diam lacus bibendum mi.",

      "Fusce ut ullamcorper justo. Curabitur at lacus quis nunc pulvinar dignissim. Nulla vel aliquet nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at commodo nibh. Proin odio ante, dictum vitae augue vitae, efficitur molestie nulla. Pellentesque pulvinar risus ac nisl fringilla, id volutpat diam lacinia. Phasellus facilisis risus et risus auctor rutrum non eu neque. Vivamus id efficitur nisi, a cursus nibh. Maecenas sem ante, dictum id hendrerit sed, ultricies accumsan metus. Ut feugiat felis eget libero dapibus, et rutrum tellus malesuada. Proin eget tortor id ligula malesuada ultrices non a enim. Nulla arcu nulla, facilisis in pellentesque varius, sollicitudin non est. Suspendisse sapien felis, posuere a odio mollis, ultricies maximus erat. Vestibulum accumsan orci quis tortor pretium lacinia.",

      "Quisque molestie mollis sollicitudin. Praesent tincidunt sollicitudin auctor. Maecenas eget lacus id erat blandit hendrerit id vitae velit. Aenean a dignissim enim. Etiam ultrices, metus eu pulvinar ultrices, mi elit imperdiet velit, nec gravida est nisi ac sem. Pellentesque ut gravida est. Proin sagittis auctor ipsum, id malesuada purus porttitor quis. Suspendisse sed porttitor nunc. Ut vitae pellentesque libero. Integer rutrum ante non auctor varius. Duis varius vestibulum nunc, nec accumsan augue iaculis et. Aliquam non aliquet justo, condimentum suscipit leo. Integer imperdiet dolor ligula, vitae hendrerit magna molestie non. Suspendisse luctus ullamcorper rhoncus. Ut nec gravida lectus, ut hendrerit nisl."
    ],
    mapLocation: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2514.920300764085!2d-1.3861966!3d50.9251913!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487473e37f39d87d%3A0x5e9c77e1d9902fe7!2zU3QgRGVueXMgUmQsIFNvdXRoYW1wdG9uLCBWxrDGoW5nIFF14buRYyBBbmg!5e0!3m2!1svi!2s!4v1602133695913!5m2!1svi!2s"
  },
  {
    id: 3,
    address: "Villa on 4643 Alpha Avenue, Jacksonville Beach",
    price: 16100,
    living__area: 370,
    land__area: 438,
    storeys: 2,
    bedrooms: 2,
    top__slide: true,
    mainImage: require("../image/house/03/main/stephan-bechert-yFV39g6AZ5o-unsplash.jpg"),
    sideImage: [
      require("../image/house/03/main/stephan-bechert-yFV39g6AZ5o-unsplash.jpg"),
      require("../image/house/03/francesca-tosolini-DmOhItSo49k-unsplash-1024x683.jpg"),
      require("../image/house/03/francesca-tosolini-l43rLPXCP1M-unsplash-1024x683.jpg"),
      require("../image/house/03/francesca-tosolini-Mx_W2atEaDo-unsplash-1024x683.jpg"),
      require("../image/house/03/im3rd-media-CbZ4EDP__VQ-unsplash-1024x683.jpg"),
      require("../image/house/03/kara-eads-L7EwHkq1B2s-unsplash-1024x683.jpg"),        
    ],
    key__feature: [
      "Backyard",
      "Balcony",
      "Swimming pool",
      "Fireplace",
      "Air conditioning system",
      "Underfloor heating"
    ],
    house__description: [
      "Sed molestie diam sed metus rhoncus tincidunt. Integer et urna in leo rutrum placerat. Nam interdum, lacus in euismod tristique, urna velit scelerisque dui, malesuada eleifend magna purus eget lectus. Sed fringilla metus vitae mollis aliquam. Aenean pellentesque est a metus hendrerit, at vulputate ante aliquam. Mauris nec risus iaculis, viverra est dictum, vehicula metus. Mauris ligula augue, viverra id tortor non, auctor malesuada purus. Fusce bibendum, tellus nec vulputate tristique, erat nisl ultrices metus, vel tincidunt diam lacus bibendum mi.",

      "Fusce ut ullamcorper justo. Curabitur at lacus quis nunc pulvinar dignissim. Nulla vel aliquet nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at commodo nibh. Proin odio ante, dictum vitae augue vitae, efficitur molestie nulla. Pellentesque pulvinar risus ac nisl fringilla, id volutpat diam lacinia. Phasellus facilisis risus et risus auctor rutrum non eu neque. Vivamus id efficitur nisi, a cursus nibh. Maecenas sem ante, dictum id hendrerit sed, ultricies accumsan metus. Ut feugiat felis eget libero dapibus, et rutrum tellus malesuada. Proin eget tortor id ligula malesuada ultrices non a enim. Nulla arcu nulla, facilisis in pellentesque varius, sollicitudin non est. Suspendisse sapien felis, posuere a odio mollis, ultricies maximus erat. Vestibulum accumsan orci quis tortor pretium lacinia.",

      "Quisque molestie mollis sollicitudin. Praesent tincidunt sollicitudin auctor. Maecenas eget lacus id erat blandit hendrerit id vitae velit. Aenean a dignissim enim. Etiam ultrices, metus eu pulvinar ultrices, mi elit imperdiet velit, nec gravida est nisi ac sem. Pellentesque ut gravida est. Proin sagittis auctor ipsum, id malesuada purus porttitor quis. Suspendisse sed porttitor nunc. Ut vitae pellentesque libero. Integer rutrum ante non auctor varius. Duis varius vestibulum nunc, nec accumsan augue iaculis et. Aliquam non aliquet justo, condimentum suscipit leo. Integer imperdiet dolor ligula, vitae hendrerit magna molestie non. Suspendisse luctus ullamcorper rhoncus. Ut nec gravida lectus, ut hendrerit nisl."
    ],
    mapLocation: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13782.529687899592!2d-81.3961275!3d30.2760528!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e449ac0d732bed%3A0x9e88273ee02484f8!2sOceanfront%20Park!5e0!3m2!1svi!2s!4v1602133726463!5m2!1svi!2s"
  },
  {
    id: 4,
    address: "House on 55 South Street, MONREITH",
    price: 14600,
    living__area: 370,
    land__area: 434,
    storeys: 2,
    bedrooms: 2,
    top__slide: true,
    mainImage: require("../image/house/04/main/vu-anh-TiVPTYCG_3E-unsplash.jpg"),
    sideImage: [
      require("../image/house/04/main/vu-anh-TiVPTYCG_3E-unsplash.jpg"),
      require("../image/house/04/francesca-tosolini-DmOhItSo49k-unsplash-1024x683.jpg"),
      require("../image/house/04/francesca-tosolini-l43rLPXCP1M-unsplash-1024x683.jpg"),
      require("../image/house/04/francesca-tosolini-Mx_W2atEaDo-unsplash-1024x683.jpg"),
      require("../image/house/04/im3rd-media-CbZ4EDP__VQ-unsplash-1024x683.jpg"),
      require("../image/house/04/kara-eads-L7EwHkq1B2s-unsplash-1024x683.jpg"),        
    ],
    key__feature: [
      "Backyard",
      "Balcony",
      "Swimming pool",
      "Fireplace",
      "Air conditioning system",
      "Underfloor heating"
    ],
    house__description: [
      "Sed molestie diam sed metus rhoncus tincidunt. Integer et urna in leo rutrum placerat. Nam interdum, lacus in euismod tristique, urna velit scelerisque dui, malesuada eleifend magna purus eget lectus. Sed fringilla metus vitae mollis aliquam. Aenean pellentesque est a metus hendrerit, at vulputate ante aliquam. Mauris nec risus iaculis, viverra est dictum, vehicula metus. Mauris ligula augue, viverra id tortor non, auctor malesuada purus. Fusce bibendum, tellus nec vulputate tristique, erat nisl ultrices metus, vel tincidunt diam lacus bibendum mi.",

      "Fusce ut ullamcorper justo. Curabitur at lacus quis nunc pulvinar dignissim. Nulla vel aliquet nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at commodo nibh. Proin odio ante, dictum vitae augue vitae, efficitur molestie nulla. Pellentesque pulvinar risus ac nisl fringilla, id volutpat diam lacinia. Phasellus facilisis risus et risus auctor rutrum non eu neque. Vivamus id efficitur nisi, a cursus nibh. Maecenas sem ante, dictum id hendrerit sed, ultricies accumsan metus. Ut feugiat felis eget libero dapibus, et rutrum tellus malesuada. Proin eget tortor id ligula malesuada ultrices non a enim. Nulla arcu nulla, facilisis in pellentesque varius, sollicitudin non est. Suspendisse sapien felis, posuere a odio mollis, ultricies maximus erat. Vestibulum accumsan orci quis tortor pretium lacinia.",

      "Quisque molestie mollis sollicitudin. Praesent tincidunt sollicitudin auctor. Maecenas eget lacus id erat blandit hendrerit id vitae velit. Aenean a dignissim enim. Etiam ultrices, metus eu pulvinar ultrices, mi elit imperdiet velit, nec gravida est nisi ac sem. Pellentesque ut gravida est. Proin sagittis auctor ipsum, id malesuada purus porttitor quis. Suspendisse sed porttitor nunc. Ut vitae pellentesque libero. Integer rutrum ante non auctor varius. Duis varius vestibulum nunc, nec accumsan augue iaculis et. Aliquam non aliquet justo, condimentum suscipit leo. Integer imperdiet dolor ligula, vitae hendrerit magna molestie non. Suspendisse luctus ullamcorper rhoncus. Ut nec gravida lectus, ut hendrerit nisl."
    ],
    mapLocation: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9213.691519457903!2d-4.5601668!3d54.7373656!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48625304e512ce89%3A0x33ef31751267f1c6!2sMonreith%2C%20Newton%20Stewart%20DG8%209LL%2C%20V%C6%B0%C6%A1ng%20Qu%E1%BB%91c%20Anh!5e0!3m2!1svi!2s!4v1602133759264!5m2!1svi!2s"  
  },
  {
    id: 5,
    address: "House on 2789, 5th Avenue, Edmonton",
    price: 16900,
    living__area: 290,
    land__area: 342,
    storeys: 1,
    bedrooms: 2,
    top__slide: false,
    mainImage: require("../image/house/05/main/david-veksler-VW5YwCYbPyk-unsplash.jpg"),
    sideImage: [
      require("../image/house/05/main/david-veksler-VW5YwCYbPyk-unsplash.jpg"),
      require("../image/house/05/francesca-tosolini-DmOhItSo49k-unsplash-1024x683.jpg"),
      require("../image/house/05/francesca-tosolini-l43rLPXCP1M-unsplash-1024x683.jpg"),
      require("../image/house/05/francesca-tosolini-Mx_W2atEaDo-unsplash-1024x683.jpg"),
      require("../image/house/05/im3rd-media-CbZ4EDP__VQ-unsplash-1024x683.jpg"),
      require("../image/house/05/kara-eads-L7EwHkq1B2s-unsplash-1024x683.jpg"),        
    ],
    key__feature: [
      "Backyard",
      "Balcony",
      "Swimming pool",
      "Fireplace",
      "Air conditioning system",
      "Underfloor heating"
    ],
    house__description: [
      "Sed molestie diam sed metus rhoncus tincidunt. Integer et urna in leo rutrum placerat. Nam interdum, lacus in euismod tristique, urna velit scelerisque dui, malesuada eleifend magna purus eget lectus. Sed fringilla metus vitae mollis aliquam. Aenean pellentesque est a metus hendrerit, at vulputate ante aliquam. Mauris nec risus iaculis, viverra est dictum, vehicula metus. Mauris ligula augue, viverra id tortor non, auctor malesuada purus. Fusce bibendum, tellus nec vulputate tristique, erat nisl ultrices metus, vel tincidunt diam lacus bibendum mi.",

      "Fusce ut ullamcorper justo. Curabitur at lacus quis nunc pulvinar dignissim. Nulla vel aliquet nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at commodo nibh. Proin odio ante, dictum vitae augue vitae, efficitur molestie nulla. Pellentesque pulvinar risus ac nisl fringilla, id volutpat diam lacinia. Phasellus facilisis risus et risus auctor rutrum non eu neque. Vivamus id efficitur nisi, a cursus nibh. Maecenas sem ante, dictum id hendrerit sed, ultricies accumsan metus. Ut feugiat felis eget libero dapibus, et rutrum tellus malesuada. Proin eget tortor id ligula malesuada ultrices non a enim. Nulla arcu nulla, facilisis in pellentesque varius, sollicitudin non est. Suspendisse sapien felis, posuere a odio mollis, ultricies maximus erat. Vestibulum accumsan orci quis tortor pretium lacinia.",

      "Quisque molestie mollis sollicitudin. Praesent tincidunt sollicitudin auctor. Maecenas eget lacus id erat blandit hendrerit id vitae velit. Aenean a dignissim enim. Etiam ultrices, metus eu pulvinar ultrices, mi elit imperdiet velit, nec gravida est nisi ac sem. Pellentesque ut gravida est. Proin sagittis auctor ipsum, id malesuada purus porttitor quis. Suspendisse sed porttitor nunc. Ut vitae pellentesque libero. Integer rutrum ante non auctor varius. Duis varius vestibulum nunc, nec accumsan augue iaculis et. Aliquam non aliquet justo, condimentum suscipit leo. Integer imperdiet dolor ligula, vitae hendrerit magna molestie non. Suspendisse luctus ullamcorper rhoncus. Ut nec gravida lectus, ut hendrerit nisl."
    ],
    mapLocation: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2687.6500187956703!2d-80.7799758!3d47.6523675!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d2503351a853cfd%3A0x15bf92a40254c55a!2s5%20Ave%2C%20Unorganized%20West%20Timiskaming%20District%2C%20ON%2C%20Ca-na-%C4%91a!5e0!3m2!1svi!2s!4v1602133803277!5m2!1svi!2s"  
  },
  {
    id: 6,
    address: "House on Lietzensee-Ufer 7, Lübbenau",
    price: 14100,
    living__area: 320,
    land__area: 364,
    storeys: 2,
    bedrooms: 4,
    top__slide: false,
    mainImage: require("../image/house/06/main/jacques-bopp-Hh18POSx5qk-unsplash-1.jpg"),
    sideImage: [
      require("../image/house/06/main/jacques-bopp-Hh18POSx5qk-unsplash-1.jpg"),
      require("../image/house/06/francesca-tosolini-DmOhItSo49k-unsplash-1024x683.jpg"),
      require("../image/house/06/francesca-tosolini-l43rLPXCP1M-unsplash-1024x683.jpg"),
      require("../image/house/06/francesca-tosolini-Mx_W2atEaDo-unsplash-1024x683.jpg"),
      require("../image/house/06/im3rd-media-CbZ4EDP__VQ-unsplash-1024x683.jpg"),
      require("../image/house/06/kara-eads-L7EwHkq1B2s-unsplash-1024x683.jpg"),        
    ],
    key__feature: [
      "Backyard",
      "Balcony",
      "Swimming pool",
      "Fireplace",
      "Air conditioning system",
      "Underfloor heating"
    ],
    house__description: [
      "Sed molestie diam sed metus rhoncus tincidunt. Integer et urna in leo rutrum placerat. Nam interdum, lacus in euismod tristique, urna velit scelerisque dui, malesuada eleifend magna purus eget lectus. Sed fringilla metus vitae mollis aliquam. Aenean pellentesque est a metus hendrerit, at vulputate ante aliquam. Mauris nec risus iaculis, viverra est dictum, vehicula metus. Mauris ligula augue, viverra id tortor non, auctor malesuada purus. Fusce bibendum, tellus nec vulputate tristique, erat nisl ultrices metus, vel tincidunt diam lacus bibendum mi.",

      "Fusce ut ullamcorper justo. Curabitur at lacus quis nunc pulvinar dignissim. Nulla vel aliquet nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at commodo nibh. Proin odio ante, dictum vitae augue vitae, efficitur molestie nulla. Pellentesque pulvinar risus ac nisl fringilla, id volutpat diam lacinia. Phasellus facilisis risus et risus auctor rutrum non eu neque. Vivamus id efficitur nisi, a cursus nibh. Maecenas sem ante, dictum id hendrerit sed, ultricies accumsan metus. Ut feugiat felis eget libero dapibus, et rutrum tellus malesuada. Proin eget tortor id ligula malesuada ultrices non a enim. Nulla arcu nulla, facilisis in pellentesque varius, sollicitudin non est. Suspendisse sapien felis, posuere a odio mollis, ultricies maximus erat. Vestibulum accumsan orci quis tortor pretium lacinia.",

      "Quisque molestie mollis sollicitudin. Praesent tincidunt sollicitudin auctor. Maecenas eget lacus id erat blandit hendrerit id vitae velit. Aenean a dignissim enim. Etiam ultrices, metus eu pulvinar ultrices, mi elit imperdiet velit, nec gravida est nisi ac sem. Pellentesque ut gravida est. Proin sagittis auctor ipsum, id malesuada purus porttitor quis. Suspendisse sed porttitor nunc. Ut vitae pellentesque libero. Integer rutrum ante non auctor varius. Duis varius vestibulum nunc, nec accumsan augue iaculis et. Aliquam non aliquet justo, condimentum suscipit leo. Integer imperdiet dolor ligula, vitae hendrerit magna molestie non. Suspendisse luctus ullamcorper rhoncus. Ut nec gravida lectus, ut hendrerit nisl."
    ],
    mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d626948.3868660103!2d13.129606051465723!3d52.13400977855759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a850d755d5a053%3A0x3ecd7ee17c9ef2c6!2zTGlldHplbnNlZXVmZXIgNywgMTQwNTcgQmVybGluLCDEkOG7qWM!5e0!3m2!1svi!2s!4v1602133399609!5m2!1svi!2s" 
  },
  {
    id: 7,
    address: "House on 2079 Rue King, Sherbrooke",
    price: 24200,
    living__area: 540,
    land__area: 712,
    storeys: 2,
    bedrooms: 2,
    top__slide: false,
    mainImage: require("../image/house/07/main/stephen-leonardi-Al9Cl-b7EFU-unsplash.jpg"),
    sideImage: [
      require("../image/house/07/main/stephen-leonardi-Al9Cl-b7EFU-unsplash.jpg"),
      require("../image/house/07/francesca-tosolini-DmOhItSo49k-unsplash-1024x683.jpg"),
      require("../image/house/07/francesca-tosolini-l43rLPXCP1M-unsplash-1024x683.jpg"),
      require("../image/house/07/francesca-tosolini-Mx_W2atEaDo-unsplash-1024x683.jpg"),
      require("../image/house/07/im3rd-media-CbZ4EDP__VQ-unsplash-1024x683.jpg"),
      require("../image/house/07/kara-eads-L7EwHkq1B2s-unsplash-1024x683.jpg"),        
    ],
    key__feature: [
      "Backyard",
      "Balcony",
      "Swimming pool",
      "Fireplace",
      "Air conditioning system",
      "Underfloor heating"
    ],
    house__description: [
      "Sed molestie diam sed metus rhoncus tincidunt. Integer et urna in leo rutrum placerat. Nam interdum, lacus in euismod tristique, urna velit scelerisque dui, malesuada eleifend magna purus eget lectus. Sed fringilla metus vitae mollis aliquam. Aenean pellentesque est a metus hendrerit, at vulputate ante aliquam. Mauris nec risus iaculis, viverra est dictum, vehicula metus. Mauris ligula augue, viverra id tortor non, auctor malesuada purus. Fusce bibendum, tellus nec vulputate tristique, erat nisl ultrices metus, vel tincidunt diam lacus bibendum mi.",

      "Fusce ut ullamcorper justo. Curabitur at lacus quis nunc pulvinar dignissim. Nulla vel aliquet nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at commodo nibh. Proin odio ante, dictum vitae augue vitae, efficitur molestie nulla. Pellentesque pulvinar risus ac nisl fringilla, id volutpat diam lacinia. Phasellus facilisis risus et risus auctor rutrum non eu neque. Vivamus id efficitur nisi, a cursus nibh. Maecenas sem ante, dictum id hendrerit sed, ultricies accumsan metus. Ut feugiat felis eget libero dapibus, et rutrum tellus malesuada. Proin eget tortor id ligula malesuada ultrices non a enim. Nulla arcu nulla, facilisis in pellentesque varius, sollicitudin non est. Suspendisse sapien felis, posuere a odio mollis, ultricies maximus erat. Vestibulum accumsan orci quis tortor pretium lacinia.",

      "Quisque molestie mollis sollicitudin. Praesent tincidunt sollicitudin auctor. Maecenas eget lacus id erat blandit hendrerit id vitae velit. Aenean a dignissim enim. Etiam ultrices, metus eu pulvinar ultrices, mi elit imperdiet velit, nec gravida est nisi ac sem. Pellentesque ut gravida est. Proin sagittis auctor ipsum, id malesuada purus porttitor quis. Suspendisse sed porttitor nunc. Ut vitae pellentesque libero. Integer rutrum ante non auctor varius. Duis varius vestibulum nunc, nec accumsan augue iaculis et. Aliquam non aliquet justo, condimentum suscipit leo. Integer imperdiet dolor ligula, vitae hendrerit magna molestie non. Suspendisse luctus ullamcorper rhoncus. Ut nec gravida lectus, ut hendrerit nisl."
    ],
    mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.9100070109603!2d-71.84545258444429!3d45.411154279100366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb7b25d4804e3a7%3A0x93e8e3f5284b8806!2s2079%20Rue%20King%20E%2C%20Sherbrooke%2C%20QC%20J1G%205G7%2C%20Ca-na-%C4%91a!5e0!3m2!1svi!2s!4v1602515328415!5m2!1svi!2s" 
  },
  {
    id: 8,
    address: "Villa on 86 Loris Way, NOMANS LAKE",
    price: 13400,
    living__area: 210,
    land__area: 418,
    storeys: 2,
    bedrooms: 1,
    top__slide: false,
    mainImage: require("../image/house/08/main/stephen-leonardi-8hbbbCN1ds8-unsplash.jpg"),
    sideImage: [
      require("../image/house/08/main/stephen-leonardi-8hbbbCN1ds8-unsplash.jpg"),
      require("../image/house/08/francesca-tosolini-DmOhItSo49k-unsplash-1024x683.jpg"),
      require("../image/house/08/francesca-tosolini-l43rLPXCP1M-unsplash-1024x683.jpg"),
      require("../image/house/08/francesca-tosolini-Mx_W2atEaDo-unsplash-1024x683.jpg"),
      require("../image/house/08/im3rd-media-CbZ4EDP__VQ-unsplash-1024x683.jpg"),
      require("../image/house/08/kara-eads-L7EwHkq1B2s-unsplash-1024x683.jpg"),        
    ],
    key__feature: [
      "Backyard",
      "Balcony",
      "Swimming pool",
      "Fireplace",
      "Air conditioning system",
      "Underfloor heating"
    ],
    house__description: [
      "Sed molestie diam sed metus rhoncus tincidunt. Integer et urna in leo rutrum placerat. Nam interdum, lacus in euismod tristique, urna velit scelerisque dui, malesuada eleifend magna purus eget lectus. Sed fringilla metus vitae mollis aliquam. Aenean pellentesque est a metus hendrerit, at vulputate ante aliquam. Mauris nec risus iaculis, viverra est dictum, vehicula metus. Mauris ligula augue, viverra id tortor non, auctor malesuada purus. Fusce bibendum, tellus nec vulputate tristique, erat nisl ultrices metus, vel tincidunt diam lacus bibendum mi.",

      "Fusce ut ullamcorper justo. Curabitur at lacus quis nunc pulvinar dignissim. Nulla vel aliquet nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at commodo nibh. Proin odio ante, dictum vitae augue vitae, efficitur molestie nulla. Pellentesque pulvinar risus ac nisl fringilla, id volutpat diam lacinia. Phasellus facilisis risus et risus auctor rutrum non eu neque. Vivamus id efficitur nisi, a cursus nibh. Maecenas sem ante, dictum id hendrerit sed, ultricies accumsan metus. Ut feugiat felis eget libero dapibus, et rutrum tellus malesuada. Proin eget tortor id ligula malesuada ultrices non a enim. Nulla arcu nulla, facilisis in pellentesque varius, sollicitudin non est. Suspendisse sapien felis, posuere a odio mollis, ultricies maximus erat. Vestibulum accumsan orci quis tortor pretium lacinia.",

      "Quisque molestie mollis sollicitudin. Praesent tincidunt sollicitudin auctor. Maecenas eget lacus id erat blandit hendrerit id vitae velit. Aenean a dignissim enim. Etiam ultrices, metus eu pulvinar ultrices, mi elit imperdiet velit, nec gravida est nisi ac sem. Pellentesque ut gravida est. Proin sagittis auctor ipsum, id malesuada purus porttitor quis. Suspendisse sed porttitor nunc. Ut vitae pellentesque libero. Integer rutrum ante non auctor varius. Duis varius vestibulum nunc, nec accumsan augue iaculis et. Aliquam non aliquet justo, condimentum suscipit leo. Integer imperdiet dolor ligula, vitae hendrerit magna molestie non. Suspendisse luctus ullamcorper rhoncus. Ut nec gravida lectus, ut hendrerit nisl."
    ],
    mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5531.130817539546!2d-92.0546381225684!3d46.11956611645659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52add749859d74cd%3A0x428ec5ab608d5a07!2sNo%20Mans%20Lake!5e0!3m2!1svi!2s!4v1602515658575!5m2!1svi!2s" 
  },
  {
    id: 9,
    address: "House on 2868 Wellington Ave, Chilliwack",
    price: 15700,
    living__area: 320,
    land__area: 476,
    storeys: 2,
    bedrooms: 1,
    top__slide: false,
    mainImage: require("../image/house/09/main/ralph-kelly-z9fFOzL5L_Y-unsplash.jpg"),
    sideImage: [
      require("../image/house/09/main/ralph-kelly-z9fFOzL5L_Y-unsplash.jpg"),
      require("../image/house/08/francesca-tosolini-DmOhItSo49k-unsplash-1024x683.jpg"),
      require("../image/house/08/francesca-tosolini-l43rLPXCP1M-unsplash-1024x683.jpg"),
      require("../image/house/08/francesca-tosolini-Mx_W2atEaDo-unsplash-1024x683.jpg"),
      require("../image/house/08/im3rd-media-CbZ4EDP__VQ-unsplash-1024x683.jpg"),
      require("../image/house/08/kara-eads-L7EwHkq1B2s-unsplash-1024x683.jpg"),        
    ],
    key__feature: [
      "Backyard",
      "Balcony",
      "Swimming pool",
      "Fireplace",
      "Air conditioning system",
      "Underfloor heating"
    ],
    house__description: [
      "Sed molestie diam sed metus rhoncus tincidunt. Integer et urna in leo rutrum placerat. Nam interdum, lacus in euismod tristique, urna velit scelerisque dui, malesuada eleifend magna purus eget lectus. Sed fringilla metus vitae mollis aliquam. Aenean pellentesque est a metus hendrerit, at vulputate ante aliquam. Mauris nec risus iaculis, viverra est dictum, vehicula metus. Mauris ligula augue, viverra id tortor non, auctor malesuada purus. Fusce bibendum, tellus nec vulputate tristique, erat nisl ultrices metus, vel tincidunt diam lacus bibendum mi.",

      "Fusce ut ullamcorper justo. Curabitur at lacus quis nunc pulvinar dignissim. Nulla vel aliquet nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at commodo nibh. Proin odio ante, dictum vitae augue vitae, efficitur molestie nulla. Pellentesque pulvinar risus ac nisl fringilla, id volutpat diam lacinia. Phasellus facilisis risus et risus auctor rutrum non eu neque. Vivamus id efficitur nisi, a cursus nibh. Maecenas sem ante, dictum id hendrerit sed, ultricies accumsan metus. Ut feugiat felis eget libero dapibus, et rutrum tellus malesuada. Proin eget tortor id ligula malesuada ultrices non a enim. Nulla arcu nulla, facilisis in pellentesque varius, sollicitudin non est. Suspendisse sapien felis, posuere a odio mollis, ultricies maximus erat. Vestibulum accumsan orci quis tortor pretium lacinia.",

      "Quisque molestie mollis sollicitudin. Praesent tincidunt sollicitudin auctor. Maecenas eget lacus id erat blandit hendrerit id vitae velit. Aenean a dignissim enim. Etiam ultrices, metus eu pulvinar ultrices, mi elit imperdiet velit, nec gravida est nisi ac sem. Pellentesque ut gravida est. Proin sagittis auctor ipsum, id malesuada purus porttitor quis. Suspendisse sed porttitor nunc. Ut vitae pellentesque libero. Integer rutrum ante non auctor varius. Duis varius vestibulum nunc, nec accumsan augue iaculis et. Aliquam non aliquet justo, condimentum suscipit leo. Integer imperdiet dolor ligula, vitae hendrerit magna molestie non. Suspendisse luctus ullamcorper rhoncus. Ut nec gravida lectus, ut hendrerit nisl."
    ],
    mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.4114939815286!2d-121.96318898431448!3d49.17377777931962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54843f74b45c3415%3A0xa648616e5875cfa!2sWellington%20Ave%2C%20Chilliwack%2C%20BC%2C%20Ca-na-%C4%91a!5e0!3m2!1svi!2s!4v1602515807557!5m2!1svi!2s" 
  }
]
const reducer = (state = houseInfo, action) => {
  return state
}

const Store = redux.createStore(reducer);
export default Store