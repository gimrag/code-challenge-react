# Picme Code Challenge
Welcome to the Picme Code Challenge. This document explain what is given and
what is expected in this challenge.

In this challenge you are given a very simple web server that provides a
restaurant menu data and you are expected to write the React application that
displays the restaurant menu for the provided data.

The web server code is implemented in express.js, you need node and npm to start
running the web server code.

Once you have the requirement, clone the repo, and run
```
npm install
```
within the repository.

## Web Server

There is only single endpoint in the web server, which just tries to render
`index.jade`. Express uses jade for templating engine by default so we are keeping
it. It should be [quite straightforward](https://naltatis.github.io/jade-syntax-docs/) to work with jade templates.

The default libraries have already added in the `layout.jade` for convenience. By default we include:
- bootstrap
- react
- jquery

You can also include any 3rd party library you want to use in the `layout.jade`

### Restaurant Data Format
`window.data.restaurant` contains the Restaurant json which you will use to implement restaurant menu.

A Restaurant data looks like:
```
"id": "1",
"name": "Restoran",
"active_menu": {
  ...
}
```
Restaurant contains `active_menu` which is where the menu data contained
```
"id": "1",
"menu_name": "Kahvaltı Menüsü",
"menu": {
  "id": "1",
  "sections": [
    "Kaseler",
    "Pancakes",
    ... // menu section names
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
    ... // Items are ordered in the sections items array here points to item ids in the menu listed below
  ],
  "items": [
    {
      "id": "item-1",
      "section": "Kaseler",
      "promotion": "33.00", // An item can have a promotion which is it's final price
      "item": {
        "name": "Granola Bowl",
        "price": "39.00", // Item's base price
        "dietary_info": [
          "GLUTEN_FREE"
        ], // Dietary info can be either GLUTEN_FREE or SPICY
        "ingredients": [
          "Çilek",
          "Granola",
          "Yogurt",
          "Yaban mersini"
        ],
        "images": [
          {
            "400": "....jpg",
            "200": "....jpg",
            "100": "....jpg"
          } // images contains the links of the menu item images in different sizes for responsive design
        ]
      }
    },
    ///
  ]
}
```

### Your Task

Your task is complete the frontend app that renders the Restaurant menu, and defines some actions that users
can do.

See the [Menu List style design screen shot](https://s3.eu-central-1.amazonaws.com/static.picme.co/menu-list-style.png) for the overall page design, and the menu design in list theme.

The actions you need to implement:

#### search(str: String)
Implement a search action, which will be triggered when user starts typing in the search bar at the top of the page.
The search should be done locally, item matching should be done by item names.
Output: Only the items matching should be displayed.

#### changeTheme(theme: String)
Implement a change menu theme action which will be triggered when the user clicks on the buttons right below the search bar.
A list style is the default menu theme, and grid style can be found in [here](https://s3.eu-central-1.amazonaws.com/static.picme.co/menu-grid-style.png)
Output: Theme applied to the items in the menu

#### toggleFavorite(item: Object)
Implement a toggle favorite item action which will be triggered when the user clicks Add to Favorite (Favorilere Ekle) in the each item.
Output:
- if the item currently not favorited: Item's Add to Favorite button text should change to Favorited (Favorilerde), also the favorited item should move to the top of the list.
- if the item has already favorited: Item's Add to Favorite button text should change to Add to Favorite (Favorilere Ekle), also it should move to it's original position.

Note that the page should be implemented responsive design in mind.
