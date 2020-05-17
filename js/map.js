const advertList = [
    {
        "author": {
             "avatar": "img/avatars/user01.png"
        },
        "offer": {
            "title": "Большая уютная квартира",
            "address":"600, 600",
            "price": 1000,
            "type":  "palace",
            "rooms":  2,
            "guests": 3,
            "checkin": "12:00",
            "checkout":  "12:00",
            "features":["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
            "description": "",
            "photos": ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"],
         },
        "location": {
            "x": 200,
            "y": 190
         }
    },
    {
        "author": {
            "avatar": "img/avatars/user02.png"
        },
        "offer": {
            "title": "Большая уютная квартира",
            "address":"{{location.300}}, {{location.700}}",
            "price": 1000,
            "type":  "palace",
            "rooms":  1,
            "guests": 1,
            "checkin": "12:00",
            "checkout":  "12:00",
            "features":["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
            "description": "",
            "photos": ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"],
        },
        "location": {
            "x": 200,
            "y": 120
        }
    },
    {
        "author": {
            "avatar": "img/avatars/user03.png"
        },
        "offer": {
            "title": "Большая уютная квартира",
            "address":"{{location.100}}, {{location.600}}",
            "price": 1000,
            "type":  "palace",
            "rooms":  2,
            "guests": 1,
            "checkin": "12:00",
            "checkout":  "12:00",
            "features":["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
            "description": "",
            "photos": ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"],
        },
        "location": {
            "x": 250,
            "y": 130
        }
    },
    {
        "author": {
            "avatar": "img/avatars/user04.png"
        },
        "offer": {
            "title": "Большая уютная квартира",
            "address":"{{location.100}}, {{location.670}}",
            "price": 1000,
            "type":  "palace",
            "rooms":  4,
            "guests": 1,
            "checkin": "12:00",
            "checkout":  "12:00",
            "features":["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
            "description": "",
            "photos": ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"],
        },
        "location": {
            "x": 500,
            "y": 130
        }
    },
    {
        "author": {
            "avatar": "img/avatars/user05.png"
        },
        "offer": {
            "title": "Большая уютная квартира",
            "address":"{{location.200}}, {{location.900}}",
            "price": 1000,
            "type":  "palace",
            "rooms":  1,
            "guests": 4,
            "checkin": "12:00",
            "checkout":  "12:00",
            "features":["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
            "description": "",
            "photos": ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"],
        },
        "location": {
            "x": 300,
            "y": 130
        }
    },
    {
        "author": {
            "avatar": "img/avatars/user06.png"
        },
        "offer": {
            "title": "Большая уютная квартира",
            "address":"{{location.300}}, {{location.500}}",
            "price": 1000,
            "type":  "palace",
            "rooms":  2,
            "guests": 1,
            "checkin": "12:00",
            "checkout":  "12:00",
            "features":["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
            "description": "",
            "photos": ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"],
        },
        "location": {
            "x": 280,
            "y": 230
        }
    },
    {
        "author": {
            "avatar": "img/avatars/user07.png"
        },
        "offer": {
            "title": "Большая уютная квартира",
            "address":"{{location.370}}, {{location.600}}",
            "price": 1050,
            "type":  "palace",
            "rooms":  1,
            "guests": 3,
            "checkin": "12:00",
            "checkout":  "12:00",
            "features":["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
            "description": "",
            "photos": ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"],
        },
        "location": {
            "x": 240,
            "y": 160
        }
    },
    {
        "author": {
            "avatar": "img/avatars/user08.png"
        },
        "offer": {
            "title": "Большая уютная квартира",
            "address":"320, 900",
            "price": 1100,
            "type":  "palace",
            "rooms":  2,
            "guests": 2,
            "checkin": "12:00",
            "checkout":  "12:00",
            "features":["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
            "description": "",
            "photos": ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"],
        },
        "location": {
            "x": 300,
            "y": 150
        }
    }
];
const mapContain = document.querySelector(".map");
const mapPins = document.querySelector(".map__pins");
const mapPinTemplate = document.querySelector("#pin").content.querySelector(".map__pin");;
const mapCardTemplate = document.querySelector("#card").content.querySelector(".map__card");
const cardPlace =  document.querySelector(".map__filters-container");

for (let i = 0; i < advertList.length; i++) {
    const mapPin = mapPinTemplate.cloneNode(true);
    mapPin.style.left = `${advertList[i].location.x}px`;
    mapPin.style.top = `${advertList[i].location.y}px`;
    mapPin.querySelector("img").src = advertList[i].author.avatar;
    mapPin.querySelector("img").alt= advertList[i].offer.title;
    mapPins.appendChild(mapPin);
}

const firstAdvert = advertList[0];
const mapCard = mapCardTemplate.cloneNode(true);
mapCard.querySelector("img").src = advertList[0].author.avatar;
mapCard.querySelector(".popup__title").textContent = advertList[0].offer.title;
mapCard.querySelector(".popup__text--address").textContent = advertList[0].offer.address;
mapCard.querySelector(".popup__text--price").textContent = `${advertList[0].offer.price}₽/ночь`;
mapCard.querySelector(".popup__type").textContent = "Дворец";
mapCard.querySelector(".popup__text--capacity").textContent = `${advertList[0].offer.rooms} комнаты для ${advertList[0].offer.guests} гостей`;
mapCard.querySelector(".popup__text--time").textContent = `Заезд после ${advertList[0].offer.checkin} выезд до ${advertList[0].offer.checkout}`;
mapCard.querySelector(".popup__features").textContent = advertList[0].offer.features;
mapCard.querySelector(".popup__description").textContent = advertList[0].offer.description;
mapCard.querySelector(".popup__photos img").src = advertList[0].offer.photos;
mapContain.insertBefore(mapCard, cardPlace);


