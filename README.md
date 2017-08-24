**_WORK IN PROGRESS, CHECK BACK LATER!_**

# Alignment

![Tag yourself!](https://cdn.glitch.com/0cecf23c-e373-4cc6-abf5-52b30b1359cb%2Falignment.png?1503516823972)

This project template lets you create your own [Character Alignment](https://en.wikipedia.org/wiki/Alignment_(Dungeons_%26_Dragons)).

- HTML version: [alignment.glitch.me](https://alignment.glitch.me)
- Image version: [alignment.glitch.me/image](https://alignment.glitch.me/image)

![Twitter card](https://cdn.glitch.com/0cecf23c-e373-4cc6-abf5-52b30b1359cb%2Ftwitter-card.png?1503538524975)

The image version is also used as a thumbnail when sharing your page on Facebook or Twitter.


# Instructions

1. Upload your images to the `assets` folder.
2. Update `views/home.handlebars` with the URLs of your images and names and descriptions of the characters.

# For developers

This project uses my [personal Glitch starter project](https://glitch.com/edit/#!/glitch-starter-project). I like using [gulp](http://gulpjs.com/), so that's what you are stuck with, sorry!

If you want to update the CSS and JS files, here's how to do it.

Open the console, and run `gulp`. (See screenshots below.) You can now edit all CSS and JS files inside the `src` folder and they will be updated without restarting your app.

![Step 1: Navigate to Advanced options](https://cdn.glitch.com/ade603f9-216b-48b0-a9d1-90c922a7237a%2Fhowto-01.PNG?1500481479450)

![Step 2: Open the console](https://cdn.glitch.com/ade603f9-216b-48b0-a9d1-90c922a7237a%2Fhowto-02.PNG?1500481479627)

![Step 3: Run gulp](https://cdn.glitch.com/ade603f9-216b-48b0-a9d1-90c922a7237a%2Fhowto-03.PNG?1500481612469)

~~The Bootstrap v4 grid system is available for use: [documentation](https://v4-alpha.getbootstrap.com/layout/grid/#grid-options). (No other Bootstrap classes are imported.)~~

I had to add Bootstrap 3, because phantomjs can't apparently render `flexbox`, which breaks the thumbnail generator ¯\\_(ツ)\_/¯

This project is hosted on [Glitch](https://glitch.com).

