var express = require('express');
var router = express.Router();

let data = {
  "restaurant": {
    "id": "1",
    "name": "Restoran",
    "active_menu": {
      "id": "1",
      "menu_name": "Kahvaltı Menüsü",
      "menu": {
        "id": "1",
        "sections": [
          "Kaseler",
          "Pancakes",
          "Yumurtalar",
          "Tostlar",
          "İçecekler"
        ],
        "item_order": [
          {
            "section": "Kaseler",
            "items": [
              "item-1",
              "item-2"
            ]
          },
          {
            "section": "Pancakes",
            "items": [
              "item-3",
              "item-4"
            ]
          },
          {
            "section": "Yumurtalar",
            "items": [
              "item-5",
              "item-6"
            ]
          },
          {
            "section": "Tostlar",
            "items": [
              "item-7",
              "item-8",
              "item-9"
            ]
          },
          {
            "section": "İçecekler",
            "items": [
              "item-10",
              "item-11",
              "item-12",
              "item-13"
            ]
          }
        ],
        "items": [
          {
            "id": "item-1",
            "section": "Kaseler",
            "promotion": "33.00",
            "item": {
              "name": "Granola Bowl",
              "price": "39.00",
              "dietary_info": [
                "GLUTEN_FREE"
              ],
              "ingredients": [
                "Çilek",
                "Granola",
                "Yogurt",
                "Yaban mersini"
              ],
              "images": [
                {
                  "400": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0dyYW5vbGEgQm93bF81ZjcyMjk3OS1mNGE2LTQxNjMtYmZhMy02NDRjZDllYTI2YzQ=_400x400.jpg",
                  "200": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0dyYW5vbGEgQm93bF81ZjcyMjk3OS1mNGE2LTQxNjMtYmZhMy02NDRjZDllYTI2YzQ=_200x200.jpg",
                  "100": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0dyYW5vbGEgQm93bF81ZjcyMjk3OS1mNGE2LTQxNjMtYmZhMy02NDRjZDllYTI2YzQ=_100x100.jpg"
                }
              ]
            }
          },
          {
            "id": "item-2",
            "section": "Kaseler",
            "item": {
              "name": "Smoothie Bowl",
              "price": "39.00",
              "dietary_info": [
                "GLUTEN_FREE"
              ],
              "ingredients": [
                "Çilek",
                "Chia tohumu",
                "Muz"
              ],
              "images": [
                {
                  "400": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X1Ntb290aGllIEJvd2xfZmFhNzdhYTgtNjg2NC00MmZlLWI3YWEtMTIyY2VlN2I3NTNm_400x400.jpg",
                  "200": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X1Ntb290aGllIEJvd2xfZmFhNzdhYTgtNjg2NC00MmZlLWI3YWEtMTIyY2VlN2I3NTNm_200x200.jpg",
                  "100": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X1Ntb290aGllIEJvd2xfZmFhNzdhYTgtNjg2NC00MmZlLWI3YWEtMTIyY2VlN2I3NTNm_100x100.jpg"
                }
              ]
            }
          },
          {
            "id": "item-3",
            "section": "Pancakes",
            "item": {
              "name": "Nutella Strawberry Pancake",
              "price": "40.00",
              "dietary_info": [
                "GLUTEN_FREE"
              ],
              "ingredients": [
                "Krep içerisinde sotelenmiş dana jambon",
                "tavuk jambon",
                "mantar",
                "Hardallı soslu"
              ],
              "images": [
                {
                  "400": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X051dGVsbGEgU3RyYXdiZXJyeSBQYW5jYWtlXzMzYTYyNzgxLTI5YTItNGU3Yy04MTcxLWE2MGQ1MzZjNzliYQ==_400x400.jpg",
                  "200": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X051dGVsbGEgU3RyYXdiZXJyeSBQYW5jYWtlXzMzYTYyNzgxLTI5YTItNGU3Yy04MTcxLWE2MGQ1MzZjNzliYQ==_200x200.jpg",
                  "100": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X051dGVsbGEgU3RyYXdiZXJyeSBQYW5jYWtlXzMzYTYyNzgxLTI5YTItNGU3Yy04MTcxLWE2MGQ1MzZjNzliYQ==_100x100.jpg"
                }
              ]
            }
          },
          {
            "id": "item-4",
            "section": "Pancakes",
            "item": {
              "name": "Berry Pancake",
              "price": "37.00",
              "dietary_info": [
                "GLUTEN_FREE"
              ],
              "ingredients": [
                "Çilek",
                "Yaban mersini"
              ],
              "images": [
                {
                  "400": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0JlcnJ5IFBhbmNha2VfNGZmZjgzNjItMzgwNi00MTUwLTkzODMtMDhjY2MyNDcxZjYw_400x400.jpg",
                  "200": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0JlcnJ5IFBhbmNha2VfNGZmZjgzNjItMzgwNi00MTUwLTkzODMtMDhjY2MyNDcxZjYw_200x200.jpg",
                  "100": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0JlcnJ5IFBhbmNha2VfNGZmZjgzNjItMzgwNi00MTUwLTkzODMtMDhjY2MyNDcxZjYw_100x100.jpg"
                }
              ]
            }
          },
          {
            "id": "item-5",
            "section": "Yumurtalar",
            "item": {
              "name": "Sucuklu Yumurta",
              "price": "42.00",
              "dietary_info": [
                "SPICY"
              ],
              "ingredients": [],
              "images": [
                {
                  "400": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X1N1Y3VrbHUgWXVtdXJ0YV8zZjgzMWUxYS0xZTI5LTRjZTctODA3NC04OWM0OTYwOWQ3Njc=_400x400.jpg",
                  "200": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X1N1Y3VrbHUgWXVtdXJ0YV8zZjgzMWUxYS0xZTI5LTRjZTctODA3NC04OWM0OTYwOWQ3Njc=_200x200.jpg",
                  "100": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X1N1Y3VrbHUgWXVtdXJ0YV8zZjgzMWUxYS0xZTI5LTRjZTctODA3NC04OWM0OTYwOWQ3Njc=_100x100.jpg"
                }
              ]
            }
          },
          {
            "id": "item-6",
            "section": "Yumurtalar",
            "item": {
              "name": "Menemen",
              "price": "41.00",
              "dietary_info": [],
              "ingredients": [
                "Domates",
                "Biber",
                "Soğan",
                "Köy yumurta"
              ],
              "images": [
                {
                  "400": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X01lbmVtZW5fYzJhM2ZiNzktODQ4YS00NjMxLWIzNWUtMWMzMDFhZTFjNTcz_400x400.jpg",
                  "200": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X01lbmVtZW5fYzJhM2ZiNzktODQ4YS00NjMxLWIzNWUtMWMzMDFhZTFjNTcz_200x200.jpg",
                  "100": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X01lbmVtZW5fYzJhM2ZiNzktODQ4YS00NjMxLWIzNWUtMWMzMDFhZTFjNTcz_100x100.jpg"
                }
              ]
            }
          },
          {
            "id": "item-7",
            "section": "Tostlar",
            "item": {
              "name": "Avocado Toast",
              "price": "41.00",
              "dietary_info": [],
              "ingredients": [
                "Ezilmiş avocado"
              ],
              "images": [
                {
                  "400": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0F2b2NhZG8gVG9hc3RfYjY3MTMwZDUtYjY2Zi00OWM3LTk5MTktMzU1MDkyMWE5MWYx_400x400.jpg",
                  "200": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0F2b2NhZG8gVG9hc3RfYjY3MTMwZDUtYjY2Zi00OWM3LTk5MTktMzU1MDkyMWE5MWYx_200x200.jpg",
                  "100": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0F2b2NhZG8gVG9hc3RfYjY3MTMwZDUtYjY2Zi00OWM3LTk5MTktMzU1MDkyMWE5MWYx_100x100.jpg"
                }
              ]
            }
          },
          {
            "id": "item-8",
            "section": "Tostlar",
            "promotion": "30.00",
            "item": {
              "name": "French Toast",
              "price": "35.00",
              "dietary_info": [],
              "ingredients": [
                "Mapple syrup",
                "Bal"
              ],
              "images": [
                {
                  "400": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0ZyZW5jaCBUb2FzdF81MThjZWJkMS0zNmEwLTQ5MjMtYmU0ZS1mYjRlMzgxN2Q3M2U=_400x400.jpg",
                  "200": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0ZyZW5jaCBUb2FzdF81MThjZWJkMS0zNmEwLTQ5MjMtYmU0ZS1mYjRlMzgxN2Q3M2U=_200x200.jpg",
                  "100": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0ZyZW5jaCBUb2FzdF81MThjZWJkMS0zNmEwLTQ5MjMtYmU0ZS1mYjRlMzgxN2Q3M2U=_100x100.jpg"
                }
              ]
            }
          },
          {
            "id": "item-9",
            "section": "Tostlar",
            "item": {
              "name": "Kızarmış Ekmek üstünde Çırpılmış Yumurta",
              "price": "41.00",
              "dietary_info": [
                "VEGETARIAN"
              ],
              "ingredients": [],
              "images": [
                {
                  "400": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0vEsXphcm3EscWfIEVrbWVrIMO8c3TDvG5kZSDDh8SxcnDEsWxtxLHFnyBZdW11cnRhXzkyYmUyNTQ2LTZiODEtNDBiMi04MWU4LTBiNDNjNWZmOGU3ZQ==_400x400.jpg",
                  "200": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0vEsXphcm3EscWfIEVrbWVrIMO8c3TDvG5kZSDDh8SxcnDEsWxtxLHFnyBZdW11cnRhXzkyYmUyNTQ2LTZiODEtNDBiMi04MWU4LTBiNDNjNWZmOGU3ZQ==_200x200.jpg",
                  "100": "https://d31rjztghkwp50.cloudfront.net/menu/thumbs/NWU1ZmEyZmEwNDUxODY0Zjg1MGMzN2U2X0vEsXphcm3EscWfIEVrbWVrIMO8c3TDvG5kZSDDh8SxcnDEsWxtxLHFnyBZdW11cnRhXzkyYmUyNTQ2LTZiODEtNDBiMi04MWU4LTBiNDNjNWZmOGU3ZQ==_100x100.jpg"
                }
              ]
            }
          },
          {
            "id": "item-10",
            "section": "İçecekler",
            "item": {
              "name": "Nar Suyu",
              "price": "18.00",
              "dietary_info": [],
              "ingredients": [],
              "images": []
            }
          },
          {
            "id": "item-11",
            "section": "İçecekler",
            "item": {
              "name": "Taze Sıkılmış Portakal Suyu",
              "price": "15.00",
              "dietary_info": [],
              "ingredients": [],
              "images": []
            }
          },
          {
            "id": "item-12",
            "section": "İçecekler",
            "item": {
              "name": "English Breakfast Tea",
              "price": "6.00",
              "dietary_info": [],
              "ingredients": [
              ],
              "images": []
            }
          },
          {
            "id": "item-13",
            "section": "İçecekler",
            "item": {
              "name": "Earl Grey Tea",
              "price": "6.00",
              "dietary_info": [],
              "ingredients": [],
              "images": []
            }
          }
        ]
      }
    }
  }
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { data: JSON.stringify(data) });
});

module.exports = router;
