Greek Mythology App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Welcome

Welcome to the Greek Mythology App! Here you will be able to navigate to a few different spots that show you some information and images of Greek Gods. You will also be able to create a new god, or fill out information for a god that you know about but isn't on the page yet. 

Have fun!


## Setup
1. Run `npm run server. This will run the backend on the port `3004`. 
2. In a new terminal, run `npm start`. 

After running this setup, the webpage should open in your internet browser showing: `http://localhost:3004/gods`. 


## CRUD Info
This app fetches information from a db.json, that was copied over from 
`https://github.com/Dane-Dawson/json-server-collection/blob/main/greek-mythology/db.json`. 
This info is compiled in the form of an object and shows different Greek Gods and Goddesses, and info for each including their...
1. Name
2. Roman Name
3. Power
4. An Image of them (each of these images was found on Google.)

The app uses a "GET" through the url `http://localhost:3004/gods`
The app also uses a "DELETE through the url `http://localhost:3004/gods/${god.id}`. 
The app also uses a "POST" through the url `http://localhost:3004/gods`. 

Feel free to add, and delete gods as you wish! 

## Routes
This webpage uses different routes to navigate to different parts of the app (home, godslist, gods/new). 
On the godslist page, you are able to use a search bar to search through the gods that are listed on that page. 

I hope you enjoy the app! Thanks for checking it out!

Here's a link to youtube if you want a visual walkthrough of the app. 
`https://youtu.be/laXxeU6DyGw`.


## Images
"https://i.etsystatic.com/5801272/r/il/0e49ff/1419919515/il_794xN.1419919515_q77t.jpg"
"https://cdn.thinglink.me/api/image/598940036477485057/1024/10/scaletowidth/0/0/1/1/false/true?wait=true"
"http://mythologian.net/wp-content/uploads/2012/08/ares.jpg"
"http://1.bp.blogspot.com/-mkn-ZXq5XGM/UPWlHTPorgI/AAAAAAAAAvU/gIYz2JBdhMg/s1600/artemis__goddess_of_the_hunt_by_violscraper.jpg"
"https://i.pinimg.com/originals/b2/0d/8b/b20d8b2f72a3573ed6328da2f00c699c.jpg"
"http://2.bp.blogspot.com/-J49l2N33zlw/Tr7Zw5FDuDI/AAAAAAAAACg/dIHeqmqkuQM/s1600/Demeter+Goddess..jpg"
"https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/dionysus-or-bacchus-god-of-wine-science-source.jpg" 
"https://pre06.deviantart.net/ef3b/th/pre/f/2011/321/b/6/hephaestus_by_drawingformonkeys-d4gisc2.jpg"
"https://pm1.narvii.com/7217/ba44a1d8cdac577e4db5f14edb9edf671c27a736r1-922-1011v2_hq.jpg"
"https://i.pinimg.com/736x/40/44/9d/40449d83de7a5ecb448858337e294a49.jpg"
"http://4.bp.blogspot.com/-ydayPL0hHr0/UPWjIvcaIAI/AAAAAAAAAjc/eWkYvZ3d37o/s1600/posiedon+5.jpg"
"http://wallpapercave.com/wp/xgDD6pl.jpg"
"http://vignette3.wikia.nocookie.net/p__/images/a/aa/Hestia.png/revision/latest?cb=20130426022556&path-prefix=protagonist"
"http://images2.wikia.nocookie.net/__cb20120702001507/greekmythology/images/1/14/Atlas_and_the_earth.jpg"
"https://factfile.org/wp-content/uploads/2016/05/Cronus-Power.jpg"
"https://vignette.wikia.nocookie.net/olympians/images/f/ff/Oceanus.jpg/revision/latest?cb=20171204032527"
"http://paigeentwistle.com/wp-content/uploads/2015/12/persephone.jpg"


