CS50 Final Project Fall 2017
Ana Carolina Smith
Title: Donation Pickup Service
Description: A simple and accessible web app that allows users to easily request a company to pickup donations at their address.

I wanted the web app to be simple and easy to access for users, because, if used in real life, people would like to have a quick service.
I decided to implement the markup of the website first and add then back end functionality later.

script.js:
Although we have worked with google maps API in the past, this document required me to read up more the Google API documentation plus JavaScript documentation.
This implementation was a good lesson about how applications can be implemented differently.
In the future, I would like to add functionality to improve user's experience (Jquery form validation for example)

application.py:
Other than script.js (and design, more on this later), application.py was one the challenges of this project.
As I mentioned on the project report, even though some distribution code was user, you must understand how it works if you are going to make changes to fit you goal.
I am glad I was able to look up documentations and find what I needed, It was a great practice for the future, for example, def schedule() has a python function .join() that I found on Python documentation and was new to me.
I spent some time trying to add a list in the SQL table, execute() would consider a collum for every comma it saw and started wrongly adding items on the collum "comments".
So, after some research, I found out I could change items from a list to a string, using .join()
I used return_template() for error/success messages but I would definitely prefer, as an user, to use asynchronous validation
I intend to add asynchronous functionality to make the user's experience better.

templates/:
Note for the layout.html template, I add my own Google API key. I hope it will work for you as well.
All templates use bootstrap functionality (their documentation is clear and helpful)
index.html takes advantage of bootstrap griding system, since I needed to have 3 items horizontally aligned in the front page (used class="col-sm")

styles.css:
I added a border style on this file, W3Schools was really useful. Note that I only add information for the right border of a menu item and delete the items
located at the far end with the class .endnav
I needed some spacing between div's so I added some top and bottom margin on every tile using the .title class

