OHLC Software
Group-3
Members:
	1. Aditya Khanke
	2. Gowtham Gorrepati
	3. Gourav Chayande
	4. M. D. Abdul Raheem
	5. Mamidi Manikanta

Tech Stack used:
1. NodeJS for backend
2. HTML, CSS and Bootstrap for frontend
3. MongoDB for database

Dependencies:
    "ejs": "^3.1.6"
    "express": "^4.17.1"
    "fs": "0.0.1-security"
    "mongoose": ^6.0.5"

File Hierarchy
├── README.txt
├── app.js
├── data.json
├── package-lock.json
├── package.json
├── public
│   ├── css
│   │   ├── bootstrap.min.css
│   │   ├── bootstrap.min.css.map
│   │   └── paper-dashboard.css
│   ├── fonts
│   │   ├── nucleo-icons.eot
│   │   ├── nucleo-icons.ttf
│   │   ├── nucleo-icons.woff
│   │   └── nucleo-icons.woff2
│   └── img
│       └── NT.jpg
└── views
    ├── company.ejs
    ├── dashboard.ejs
    ├── header.ejs
    └── hist.ejs

Methods used:
get, post, render, redirect, listen, connect, model, find 

After all dependencies are installed, we need to start the server by using the command
$ node app.js

Now head over to https://localhost:3000/ on a browser.

There you could search for a company profile using it's ticker, you would be greeted by
the company portfolio.

You could search for your history by going to the search history tab in the side bar.





