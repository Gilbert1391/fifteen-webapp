# Fifteen

I originally built this web page with jQuery, [here](https://github.com/Gilbert1391/Fifteen) you can check the repo for the old version of the project. After learning back-end stuff I decided to take this project to the next level, my aim was to build a web page similar to Wordpress themes, in which the user can edit the content of the page by login with the admin credentials.

Specifically in this web page, the admin can add, edit or even delete data (CRUD operations)on the menu and can edit the content of the hero section.

### [View Demo](https://fifteen-app.herokuapp.com/)

## How do I login as admin?

It's pretty easy, just add /admin at the end of the URL and you will be redirected to the admin login route, submit the form with the credentials (You will have to contact me for the credentials) and you will be taken back to the home page, but this time it will look a slightly different.

![screen shot 2019-01-11 at 11 24 00 am](https://user-images.githubusercontent.com/36945268/51042752-74796780-1593-11e9-8a8f-2cc4b46979cd.png)

## Admin panel

After login in you will be taken to the admin panel where you can perform HTTP requests to handle the data of the page. As mentioned above, you can add, edit or delete data on the menu (also from the hero section). Needless to say, the buttons to perform these actions are hidden unless the user is authenticated as admin.

![screen shot 2019-01-11 at 11 28 59 am](https://user-images.githubusercontent.com/36945268/51043241-a3440d80-1594-11e9-922b-85ef64c7dd1d.png)

## Not found page

I implemented a route in case the user makes a typo in the URL.

![screen shot 2019-01-11 at 11 37 39 am](https://user-images.githubusercontent.com/36945268/51043576-6593b480-1595-11e9-823e-8fdaa928233a.png)

Coded with :heart: by [Gilbert Rosario](https://gilbertrosario.com/)
