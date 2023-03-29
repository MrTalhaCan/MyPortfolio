const categories = [
    {
      name: 'Breakfast',
      sub_message: null,
      sub_category: ['Soups', 'Snacks', 'Eggs'],
      image: null,
      bg: 'light',
      items: [
        {
          name: 'Single Breakfast',
          price: 100,
          sub_category: null,
          description:
            '4 Çeşit yöresel peynir, 2 çeşit zeytin, bal, kaymak, tereyağı, krem çikolata, isot ezmesi, çemen, murtuğa, reçel, domates, salatalık, yeşillik, patates kızartması, pişi, sahanda yumurta ve sınrsız çay',
        },
        {
          name: 'Pişi',
          price: 20,
          sub_category: 'Snacks',
          description: null,
        },
        {
          name: 'One Ladle Lentil Soup',
          price: 20,
          sub_category: 'Soups',
          description: null,
        },
        {
          name: 'Full Lentil Soup',
          price: 25,
          sub_category: 'Soups',
          description: null,
        },
        {
          name: 'Less Seasoned Lentil Soup',
          price: 23,
          sub_category: 'Soups',
          description: null,
        },
        {
          name: 'Seasoned Lentil Soup',
          price: 28,
          sub_category: 'Soups',
          description: null,
        },
        {
          name: 'Patates Tava',
          price: 30,
          sub_category: 'Snacks',
          description: null,
        },
        {
          name: 'Onion Ring 8 pieces',
          price: 30,
          sub_category: 'Snacks',
          description: null,
        },
  
        {
          name: 'Sucuklu Yumurta',
          price: 35,
          sub_category: 'Eggs',
          description: null,
        },
        {
          name: 'Menemen',
          price: 35,
          sub_category: 'Eggs',
          description: null,
        },
        {
          name: 'Kavurmalı Yumurta',
          price: 48,
          sub_category: 'Eggs',
          description: null,
        },
        {
          name: 'Cheese Omelet',
          price: 39,
          sub_category: 'Eggs',
          description: null,
        },
        {
          name: 'Stager Cheese',
          price: 39,
          sub_category: 'Eggs',
          description: null,
        },
        {
          name: 'Vegetable Omlet',
          price: 39,
          sub_category: 'Eggs',
          description: null,
        },
        {
          name: 'Kavurmalı Omlet',
          price: 48,
          sub_category: 'Eggs',
          description: null,
        },
      ],
    },
    {
      name: 'Çiğ Köfteler',
      sub_message: null,
      sub_category: null,
      image: 'https://s1.gifyu.com/images/kofte7482b57a7d9f767a.jpg',
      bg: 'dark',
      items: [
        {
          name: 'Çiğ Köfte',
          price: 30,
          sub_category: null,
          description: null,
        },
      ],
    },
    {
      name: 'Burger',
      sub_message: 'Çaylar İkramımızdır',
      sub_category: null,
      image:
        'https://s8.gifyu.com/images/WhatsApp-Image-2022-05-28-at-7.35.29-PM.jpg',
      bg: 'light',
      items: [
        {
          name: 'Chicken Burger',
          price: 55,
          sub_category: null,
          description:
            'Özel soslar ile marine edilmiş 150gr ızgara tavuk,karamelize soğan, domates,marul,burger turşusu,el yapımı burger ekmeği,yanında patates kızartması, 2 adet soğan halkası ',
        },
        {
          name: 'Klasik Burger',
          price: 59,
          sub_category: null,
          description:
            '150gr dana eti, karamelize soğan, domates, burger turşusu,karamelize soğan,marul,el yapımı burger ekmeği,yanında patates kızartması, 2 adet soğan halkası ',
        },
        {
          name: 'Cheese Burger',
          price: 64,
          sub_category: null,
          description:
            '150gr dana eti, cheddar peyniri,karamelize soğan, domates, burger turşusu,marul, el yapımı burger ekmeği, yanında patates kızartması, 2 adet soğan halkası ',
        },
        {
          name: 'BBQ Burger',
          price: 64,
          sub_category: null,
          description:
            '150gr dana eti, cheddar peyniri,karamelize soğan, domates, burger turşusu,marul, bbq sos, el yapımı burger ekmeği, yanında patates kızartması, 2 adet soğan halkası ',
        },
        {
          name: 'Anatolia Burger',
          price: 68,
          sub_category: null,
          description:
            '150gr dana eti, pastırma, cheddar peyniri,karamelize soğan, domates,marul, burger turşusu, el yapımı burger ekmeği, yanında patates kızartması, 2 adet soğan halkası ',
        },
        {
          name: 'Beyoğlu Burger',
          price: 72,
          sub_category: null,
          description:
            '150gr dana eti , dana füme, karamelize soğan, burger turşusu, domates, marul, közlenmiş biber, cheddar peyniri ve patates kızartması  ve 2 adet soğan halkası eşliğinde servis edilir ',
        },
      ],
    },
    {
      name: 'Pizza',
      sub_message: 'Çaylar İkramımızdır',
      sub_category: null,
      image:
        'https://s8.gifyu.com/images/WhatsApp-Image-2022-06-23-at-2.49.50-PM.jpg',
      bg: 'dark',
      items: [
        {
          name: 'Italian Pizza',
          price: 75,
          sub_category: null,
          description:
            'Domates sos, mozzarella, sucuk, zeytin, kekik, mantar, biber, yanında patates kızartması ',
        },
        {
          name: 'Mixed Pizza',
          price: 75,
          sub_category: null,
          description:
            'Domates sos, mozzarella, sucuk, salam, kırmızı biber, yeşil biber, mantar, zeytin, mısır, domates, yanında patates kızartması ',
        },
        {
          name: 'Sucuklu Pizza',
          price: 75,
          sub_category: null,
          description:
            'Domates sos, mozzarella, kasap sucuk, sivri biber,yanında patates kızartması ',
        },
        {
          name: 'Salami Pizza',
          price: 70,
          sub_category: null,
          description:
            'Domates sos, mozerealla peyniri, salam ve yanında patates kızartması',
        },
        {
          name: 'Tonno Pizza',
          price: 75,
          sub_category: null,
          description:
            'Domates sos, mozzarella, ton balığı,biber mantar, mısır  yanında patates kızartması ',
        },
        {
          name: 'Margarita Pizza',
          price: 75,
          sub_category: null,
          description:
            'Domates sos, mozzarella, fesleğen sos, yanında patates kızartması ',
        },
        {
          name: 'Four Cheese Pizza',
          price: 75,
          sub_category: null,
          description:
            'Domates sos, mozzarella, beyaz peynir, parmesan, kaşar peyniri, yanında patates kızartması ',
        },
        {
          name: 'Kavurmalı Pizza',
          price: 85,
          sub_category: null,
          description:
            'Domates sos, mozzarella, kavurma yanında patates kızartması ',
        },
        {
          name: 'Beyoğlu Pizza',
          price: 90,
          sub_category: null,
          description:
            'Domates sos, mozzarella, kavurma, köz patlıcan, közlenmiş biber, yanında patates kızartması  ',
        },
      ],
    },
    {
      name: 'Mangal',
      sub_message: 'Çaylar ve Salatalar İkramımızdır',
      sub_category: null,
      image:
        'https://s8.gifyu.com/images/WhatsApp-Image-2022-05-28-at-7.35.53-PM.jpg',
      bg: 'light',
      items: [
        {
          name: 'Kasap Köfte',
          price: 85,
          sub_category: null,
          description: '180gr kasap kıyma eti ',
        },
        {
          name: 'Non-Seasoned Chicken',
          price: 85,
          sub_category: null,
          description: '200gr dinlendirilmiş tavuk budu',
        },
        {
          name: 'Seasoned Chicken',
          price: 85,
          sub_category: null,
          description: '200gr terbiyelenmiş acı soslu tavuk budu ',
        },
        {
          name: 'Adana Kebap(Hot)',
          price: 95,
          sub_category: null,
          description: '180gr zırhlı kuzu kaburga kıyması ',
        },
        {
          name: 'Beyoglu Kebap',
          price: 95,
          sub_category: null,
          description: '180gram zırhlı kuzu kaburga kıyması ',
        },
        {
          name: 'Urfa Kebap',
          price: 95,
          sub_category: null,
          description: '180gr kuzu kaburga kıyması',
        },
        {
          name: 'Siverek Kebabı',
          price: 110,
          sub_category: null,
          description:
            'Yarım porsiyon Beyoğlu kebabı ve yarım porsiyon patlıcanlı kebap',
        },
        {
          name: 'Eggplant Kebap',
          price: 120,
          sub_category: null,
          description: 'Patlıcan arası zırhta kuzu eti',
        },
  
        {
          name: 'Liver',
          price: 100,
          sub_category: null,
          description: '160gr kuzu ciğer ',
        },
  
        {
          name: 'Non-Seasoned Cubed Meat',
          price: 120,
          sub_category: null,
          description: '200gr dinlendirilmiş dana bonfile',
        },
        {
          name: 'Seasoned Cubed Meat(hot)',
          price: 120,
          sub_category: null,
          description: '200gr terbiyelenmiş soslu dana bonfile ',
        },
        {
          name: 'Ali Nazik',
          price: 135,
          sub_category: null,
          description:
            'Közlenmiş patlıcan üzerine, terbiyelenmiş 200gr dana bonfile ile tereyağlı sos ',
        },
      ],
    },
    {
      name: 'Meat',
      sub_message: 'Çaylar ve Salatalar İkramımızdır',
      sub_category: null,
      image:
        'https://s8.gifyu.com/images/WhatsApp-Image-2022-05-30-at-4.23.40-PM.jpg',
      bg: 'dark',
      items: [
        {
          name: 'Bodrum Çökertme',
          price: 130,
          sub_category: null,
          description:
            'Kibrit patates üstüne yoğurt, 200gr dana dana bonfile üzerine tereyağlı sos, ',
        },
        {
          name: 'Tenderloin with Mushrooms',
          price: 130,
          sub_category: null,
          description: '200gr mantar soslu dana bonfile ',
        },
        {
          name: 'Fajita',
          price: 130,
          sub_category: null,
          description: 'Jülyan 200gr dana bonfile ',
        },
        {
          name: 'Beyoğlu Gurme Special',
          price: 130,
          sub_category: null,
          description: '200gr doğranmış dana bonfile,',
        },
      ],
    },
    {
      name: 'Salads',
      sub_message: 'Çaylar İkramımızdır',
      sub_category: null,
      image: 'https://s10.gifyu.com/images/salad.jpg',
      bg: 'light',
      items: [
        {
          name: 'Chicken Salata',
          price: 53,
          sub_category: null,
          description:
            '130gr ızgara tavuk bonfile, akdeniz yeşilliği,iceberg marul, roka, salatalık, kiraz domates, zeytinyağı ve balzemik sirke',
        },
        {
          name: 'chef\'s Salad',
          price: 50,
          sub_category: null,
          description:
            'Peynir, akdeniz yeşilliği,iceberg marul, roka, salatalık, kiraz domates, zeytinyağı, limon ve balzemik sirke',
        },
        {
          name: 'Chicken Caesar Salad',
          price: 55,
          sub_category: null,
          description:
            '130gr ızgara tavuk bonfile, marul, çeri domates, kruoton ekmeği, kaşar peyniri, kornişon turşu, sezar sos ile',
        },
        {
          name: 'Tuna Fish Salad',
          price: 60,
          sub_category: null,
          description:
            '100gr ton balığı, akdeniz yeşilliği, iceberg marul, roka, kiraz domates, zeytinyağı, limon',
        },
        {
          name: 'Grilled Salad',
          price: 70,
          sub_category: null,
          description:
            '100gr ızgara fileto dana bonfile, akdeniz yeşilliği, iceberg marul, roka, salatalık, kiraz domates, zeytinyağı, balzamik sirke ve kekik',
        },
      ],
    },
    {
      name: 'White Meat',
      sub_message: 'Çaylar ve Salatalar İkramımızdır',
      sub_category: null,
      image: 'https://s10.gifyu.com/images/tavuk.jpg',
      bg: 'dark',
      items: [
        {
          name: 'Basil Chicken',
          price: 75,
          sub_category: null,
          description: '200gr fesleğen soslu tavuk ',
        },
        {
          name: 'Curry Sauce Chicken',
          price: 75,
          sub_category: null,
          description: '200gr köri soslu tavuk ',
        },
        {
          name: 'Fresh Spicey Chicken',
          price: 75,
          sub_category: null,
          description:
            '200gr tavuk içine kırmızı biber, kekik, toz biber, karabiber',
        },
        {
          name: 'Cream Mushroom Chicken',
          price: 75,
          sub_category: null,
          description: '200gr tavuk içine mantar ve krema ',
        },
      ],
    },
    {
      name: 'Waffle',
      sub_message: null,
      sub_category: null,
      image:
        'https://s8.gifyu.com/images/WhatsApp-Image-2022-05-28-at-6.19.57-PM.jpg',
      bg: 'light',
      items: [
        {
          name: 'Klasik Waffle',
          price: 55,
          sub_category: null,
          description:
            'Sütlü dip sos üzerinde muz, çilek, kivi, parça fındık, parça fıstık, sütlü üst sos ',
        },
        {
          name: 'Chocolate Aşkı',
          price: 55,
          sub_category: null,
          description:
            'Bitter dip sos üzerinde muz, çilek, kivi, toz fındık, ceviz, damla bitter drop, bittter üst sos ',
        },
        {
          name: 'Tropic Waffle',
          price: 55,
          sub_category: null,
          description:
            'Sütlü dip sos, üzerinde muz kivi ananas parça fındık, çakıl taşı, üzerinde frambuaz ve muz sos ',
        },
        {
          name: 'Ice Cream Waffle',
          price: 60,
          sub_category: null,
          description:
            'Sütlü dip sos üzerinde muz çilek, 3 top dondurma ceviz, bitter üst sos',
        },
      ],
    },
    {
      name: 'Desserts and Campaigns',
      sub_message: null,
      sub_category: ['Tatlı', 'Kampanyalar'],
      image:
        'https://s10.gifyu.com/images/fbe25bb1-130a-408f-a385-4d3765356972.jpg',
      bg: 'dark',
      items: [
        {
          name: 'Kesme Dondurma',
          price: 20,
          sub_category: 'Tatlı',
          description: null,
        },
        {
          name: 'Kup Dondurma (3 Top)',
          price: 24,
          sub_category: 'Tatlı',
          description: null,
        },
        {
          name: 'Supangle',
          price: 25,
          sub_category: 'Tatlı',
          description: null,
        },
        {
          name: 'profiteroles',
          price: 25,
          sub_category: 'Tatlı',
          description: null,
        },
        {
          name: 'Ice Cream Moist Cake',
          price: 35,
          sub_category: 'Tatlı',
          description: null,
        },
        {
          name: 'Kıbrıs Tatlısı',
          price: 35,
          sub_category: 'Tatlı',
          description: null,
        },
  
        {
          name: 'Suffle',
          price: 35,
          sub_category: 'Tatlı',
          description: null,
        },
        {
          name: 'Cake A La Mode',
          price: 35,
          sub_category: 'Tatlı',
          description: null,
        },
        {
          name: 'Slice Cakes',
          price: 35,
          sub_category: 'Tatlı',
          description: null,
        },
        {
          name: 'Kıbrıs Tatlısı + Coffee',
          price: 50,
          sub_category: 'Kampanyalar',
          description: null,
        },
        {
          name: 'Ice Cream Moist Cake + Coffee',
          price: 50,
          sub_category: 'Kampanyalar',
          description: null,
        },
  
        {
          name: 'Suffle  + Coffee',
          price: 50,
          sub_category: 'Kampanyalar',
          description: null,
        },
        {
          name: 'Cake A La Mode  + Coffee',
          price: 50,
          sub_category: 'Kampanyalar',
          description: null,
        },
        {
          name: ' Slice Cake  + Coffee',
          price: 50,
          sub_category: 'Kampanyalar',
          description: null,
        },
      ],
    },
    {
      name: 'Hot Coffees',
      sub_message: null,
      sub_category: ['Türk Kahveleri', 'Tchibo Kahveleri'],
      image:
        'https://s8.gifyu.com/images/WhatsApp-Image-2022-06-23-at-2.49.39-PM.jpg',
      bg: 'light',
      items: [
        {
          name: 'Espresso',
          price: 15,
          sub_category: 'Tchibo Kahveleri',
          description: null,
        },
        {
          name: 'Double Espresso',
          price: 19,
          sub_category: 'Tchibo Kahveleri',
          description: null,
        },
        {
          name: 'Americano',
          price: 19,
          sub_category: 'Tchibo Kahveleri',
          description: null,
        },
        {
          name: 'Cappucino',
          price: 19,
          sub_category: 'Tchibo Kahveleri',
          description: null,
        },
        {
          name: 'Vanilla Cappucino',
          price: 19,
          sub_category: 'Tchibo Kahveleri',
          description: null,
        },
        {
          name: 'Latte',
          price: 19,
          sub_category: 'Tchibo Kahveleri',
          description: null,
        },
        {
          name: 'Mocha',
          price: 19,
          sub_category: 'Tchibo Kahveleri',
          description: null,
        },
        {
          name: 'Coffee with milk',
          price: 19,
          sub_category: 'Tchibo Kahveleri',
          description: null,
        },
        {
          name: 'Hot Chocolate',
          price: 19,
          sub_category: 'Tchibo Kahveleri',
          description: null,
        },
        {
          name: 'Milk Hot Chocolate',
          price: 19,
          sub_category: 'Tchibo Kahveleri',
          description: null,
        },
        {
          name: 'Filtered Coffee',
          price: 19,
          sub_category: 'Tchibo Kahveleri',
          description: null,
        },
        {
          name: 'Milk Filtered Coffee',
          price: 19,
          sub_category: 'Tchibo Kahveleri',
          description: null,
        },
        {
          name: 'Turkish Coffee',
          price: 17.5,
          sub_category: 'Türk Kahveleri',
          description: null,
        },
        {
          name: 'Double Turkish Coffee',
          price: 25,
          sub_category: 'Türk Kahveleri',
          description: null,
        },
        {
          name: 'Double Menengiç Coffee',
          price: 25,
          sub_category: 'Türk Kahveleri',
          description: null,
        },
        {
          name: 'Double Dibek Coffee',
          price: 25,
          sub_category: 'Türk Kahveleri',
          description: null,
        },
      ],
    },
    {
      name: 'Soğuk Kahveler',
      sub_message: null,
      sub_category: null,
      image: 'https://s1.gifyu.com/images/sogukkahve.jpg',
      bg: 'dark',
      items: [
        {
          name: 'Milksahe',
          price: 25,
          sub_category: null,
          description: 'Muzlu, Çilekli, Çikolatalı',
        },
        {
          name: 'Cold Chocolate',
          price: 25,
          sub_category: null,
          description: null,
        },
  
        {
          name: 'Cold Filtered Coffee',
          price: 25,
          sub_category: null,
          description: null,
        },
        {
          name: 'Cold Milk Filtered Coffee',
          price: 25,
          sub_category: null,
          description: null,
        },
        {
          name: 'Ice Americano',
          price: 25,
          sub_category: null,
          description: null,
        },
        {
          name: 'Ice Latte',
          price: 25,
          sub_category: null,
          description: null,
        },
        {
          name: 'Ice Mocha',
          price: 25,
          sub_category: null,
          description: null,
        },
      ],
    },
    {
      name: 'Black Tea & Herbal Teas',
      sub_message: null,
      sub_category: ['Sıcak İçecekler', 'Bitki Çayları'],
      image:
        'https://s8.gifyu.com/images/WhatsApp-Image-2022-06-29-at-8.07.32-PM.jpg',
      bg: 'light',
      items: [
        {
          name: 'Black Tea',
          price: 8.5,
          sub_category: 'Sıcak İçecekler',
          description: null,
        },
        {
          name: 'Cup of Tea',
          price: 14.5,
          sub_category: 'Sıcak İçecekler',
          description: null,
        },
        {
          name: 'Hot Milk',
          price: 15,
          sub_category: 'Sıcak İçecekler',
          description: null,
        },
        {
          name: 'Mint and Lemon',
          price: 17.5,
          sub_category: 'Bitki Çayları',
          description: null,
        },
        {
          name: 'Green Tea',
          price: 17.5,
          sub_category: 'Bitki Çayları',
          description: null,
        },
        {
          name: 'Linden',
          price: 17.5,
          sub_category: 'Bitki Çayları',
          description: null,
        },
        {
          name: 'Sage Tea',
          price: 17.5,
          sub_category: 'Bitki Çayları',
          description: null,
        },
        {
          name: 'Kış Çayı',
          price: 17.5,
          sub_category: 'Bitki Çayları',
          description: null,
        },
      ],
    },
    {
      name: 'Black Mulberry',
      sub_message: null,
      sub_category: null,
      image:
        'https://s8.gifyu.com/images/WhatsApp-Image-2022-06-22-at-2.16.11-PM.jpg',
      bg: 'dark',
      items: [
        {
          name: 'Black Mulberry',
          price: 20,
          sub_category: null,
          description: null,
        },
      ],
    },
    {
      name: 'Kıbrıs Limonatası',
      sub_message: null,
      sub_category: null,
      image:
        'https://s8.gifyu.com/images/WhatsApp-Image-2022-05-30-at-4.23.51-PM.jpg',
      bg: 'light',
      items: [
        {
          name: 'Lemonade',
          price: 20,
          sub_category: null,
          description: null,
        },
        {
          name: 'Strawberry Lemonade',
          price: 25,
          sub_category: null,
          description: null,
        },
        {
          name: 'Forest Fruit Lemonade',
          price: 25,
          sub_category: null,
          description: null,
        },
        {
          name: 'Green Apple Lemonade',
          price: 25,
          sub_category: null,
          description: null,
        },
        {
          name: 'Black Mulberry',
          price: 20,
          sub_category: null,
          description: null,
        },
      ],
    },
    {
      name: 'Cold Drinks',
      sub_message: null,
      sub_category: null,
      image: 'https://s8.gifyu.com/images/Screen-Shot-2022-06-23-at-13.10.04.png',
      bg: 'dark',
      items: [
        {
          name: 'Water',
          price: 7.5,
          sub_category: null,
          description: null,
        },
        {
          name: 'Soda',
          price: 12,
          sub_category: null,
          description: null,
        },
        {
          name: 'Ayran',
          price: 13,
          sub_category: null,
          description: null,
        },
        {
          name: 'Coke',
          price: 15,
          sub_category: null,
          description: null,
        },
        {
          name: 'Fanta',
          price: 15,
          sub_category: null,
          description: null,
        },
        {
          name: 'FuseTea',
          price: 15,
          sub_category: null,
          description: null,
        },
        {
          name: 'Beyoğlu Gazoz',
          price: 15,
          sub_category: null,
          description: null,
        },
        {
          name: 'Ginger Beyoğlu Gazoz ',
          price: 16,
          sub_category: null,
          description: null,
        },
  
        {
          name: 'Organic Adana Şalgamı',
          price: 15,
          sub_category: null,
          description: null,
        },
        {
          name: 'Şıra',
          price: 15,
          sub_category: null,
          description: null,
        },
        {
          name: 'Churchil',
          price: 15,
          sub_category: null,
          description: null,
        },
        {
          name: 'Soda-Lemon',
          price: 15,
          sub_category: null,
          description: null,
        },
        {
          name: 'Fresh Squeezed Orange Juice',
          price: 25,
          sub_category: null,
          description: null,
        },
      ],
    },
  ]
  
  let tags  =   categories.map(item => {    
        const divCat        =   document.createElement("div");
        divCat.className    =   "category-item bg-"+item.bg;
        divCat.id           =   item.name;
        const divCat2       =   document.createElement("div");
        divCat2.className   =   "category-item-name";
        divCat2.innerHTML   =   item.name;
        divCat.appendChild(divCat2);
        if(item.image != null){
            const imgEl         =   document.createElement("img");
            imgEl.src           =   item.image;
            divCat.appendChild(imgEl);
        }
        const divEl1  =   document.createElement("div");
        const divEl2  =   document.createElement("div");
        if(item.sub_category == null){
            divEl1.className    =   "single-menu-item";
            divEl2.className    =   "menu-item-header";
            item.items.forEach(element => {
                const divEl1  =   document.createElement("div");
                const divEl2  =   document.createElement("div");
                divEl1.className    =   "single-menu-item";
                divEl2.className    =   "menu-item-header";
                const p1      =   document.createElement("p");
                const p2      =   document.createElement("p");
                p1.className    =   "menu-item-name";        
                p1.innerHTML    =   element.name;
                p2.innerHTML    =   element.price + " $";
                divEl2.appendChild(p1);
                divEl2.appendChild(p2);
                divEl1.appendChild(divEl2);
                if(item.items.description =! null){
                    const p3      =   document.createElement("p");
                    p3.className    =   "menu-item-description";
                    p3.innerHTML    =   element.description;
                    divEl1.appendChild(p3);
                }
                divCat.appendChild(divEl1);
            });
            
        }else{
            item.sub_category.forEach(subcat => {
                const divEl1  =   document.createElement("div");
                const divEl2  =   document.createElement("div");
                divEl1.className    =   "sub_category";
                divEl2.className    =   "sub_category_name";
                divEl2.innerHTML    =   subcat;
                divEl1.appendChild(divEl2)
                divCat.appendChild(divEl1);
                let filterIt    =   item.items.filter( (subitem) => {
                    return subitem.sub_category == subcat;
                })
                filterIt.forEach(element => {
                    const divEl3  =   document.createElement("div");
                    const divEl4  =   document.createElement("div");
                    divEl3.className    =   "single-menu-item";
                    divEl4.className    =   "menu-item-header";    
                    const p1      =   document.createElement("p");
                    const p2      =   document.createElement("p");
                    p1.className    =   "menu-item-name";
                    p1.innerHTML    =   element.name;
                    p2.innerHTML    =   element.price + " $";
                    divEl4.appendChild(p1);
                    divEl4.appendChild(p2);
                    divEl3.appendChild(divEl4);
                    if(element.description =! true){
                        const p3      =   document.createElement("p");
                        p3.className    =   "menu-item-description";
                        p3.innerHTML    =   element.description;
                        divEl3.appendChild(p3);
                    }
                    divEl1.appendChild(divEl3);
                });
            })
        }
       return divCat.outerHTML;
    })

  document.querySelector("#root").innerHTML =   tags.join("");