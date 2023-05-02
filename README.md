# Ecommerce Website Project
This is a project made as part of React assignment for Sharpener placement course.

### Features:
1. Shop 
    - Can add and delete products
    - All carts are user specific
    - the REST endpoint expires in a day and needs to be updated everytime
2. Contact Us:
    - User can enter their contact details which are saved in a firebase db

### Installing the project:
since the project uses a REST API link that expires in 24 hours, you will need to download the project 
to your local machine and change the crudLink in the store.js to a new one from crudcrud.com

#### Steps:
1. Download the repository to local machine
2. install all required dependencies using npm
```
npm install
```
3. find cartContext.js and change the crudLink

── src/

     ├── components
    
    └── store/
    
        └── cartContext.js
        
```
// CartContext.js
import React, { createContext, useReducer, useEffect, useState } from "react";
import axios from "axios";
export const CartContext = createContext();

//change this
const crudLink =
  "https://crudcrud.com/api/a50042c984e745d0a0c22279af7c3f91/";
  ```
4. run the project
```
npm start
```



