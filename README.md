# Sell and Buy

## Description

This application allows you to view categories in a departments database, view products associated to those categories, and also view the tags associated with the products. You can update information and delete any items in either of these sections. 

This is the backend development which could be tied to an eventual store and its frontend website, so patrons can buy and sell their own products!

## Installation

To run the application, you must have these installed on your computer

<li>Node.js</li>
<li>mySQL</li>
<li>Insomnia</li>

Then, you must open your codebase and install these npm packages:

<li>mySQL2 (npm i mysql2)</li>
<li>Sequelize (npm i sequelize)</li>
<li>mySQL2 (npm i dotenv)</li>
<li>mySQL2 (npm i express)</li>

Create a .env file and enter the information to access your personal mysql in the file using this syntax: 

```
DB_NAME='ecommerce_db'
DB_USER='{mysql username}'
DB_PASSWORD='{mysql password}'
```

To start your sever, run  ```node server.js``` in the terminal, and switch over to the Insomnia Application. Here, you can run GET requests for each of the aforementioned sections of the application.

![GET Request](/images/GETRequest.png)

You may also run PUT, POST, and DELETE requests for specific items in each category using the appropriate names for columns you wish to change.

![POST Request](/images/POSTRequest.png)
![PUT Request](/images/PUTRequest.png)
![DELETE Request](/images/DELETERequest.png)

# Link

<a href="https://drive.google.com/file/d/1cmD9mb6g3KhQAfY3u6KcN2r9faY86Btb/view">Walkthrough E-Commerce Database</a>