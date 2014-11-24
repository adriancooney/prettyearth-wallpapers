![](http://i.imgur.com/JVn5qPW.jpg)

# Pretty Earth Wallpapers
I fell in love with Google's [Earth View from Google Maps](https://chrome.google.com/webstore/detail/earth-view-from-google-ma/bhloflhklmhfpedakmangadcdofhnnoh) Chrome plugin which displays a beautiful place on earth every time you open a new tab. Everytime I opened a tab, I was in awe (which admittedly did stunt productivity a little). I wanted these photos for some sweet wallpapers. After a quick dip into the source, the plugin has a list of ID's and an endpoint which provides the image so I created a script to download each of these ID's to a folder.

	$ git clone https://github.com/adriancooney/prettyearth-wallpapers.git
	$ cd prettyearth-wallpapers
	$ npm install
	$ OUTPUT_FOLDER="/Users/Me/Library/Whatever" node index.js
	1003 successfully downloaded.
	.... successfully downloaded.
	2448 successfully downloaded.
	Congratulations, you own the earth. Download complete to /Users/Me/Library/Whatever.

Once the download is complete, jump into system preferences and add the folder (tip: use CMD+Alt+G to type the path) then fiddle with the display preferences. Now you have beautiful, rotating desktop wallpapers (not that you ever see the desktop too often).

![Import your image folder](http://i.imgur.com/DjVbqFC.png)

Created by [Adrian Cooney](http://twitter.com/adrian_cooney), enabled by Google.
