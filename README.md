# kcp288-final-project

##Summary
My final project comes in four parts. The parts are:

1. Collection of web-based projects from this semester in AIT: Busy Birder, MoviesDB, Matchicode. Busy Birder tracks and filters birds, MoviesDB is a database-backed movies list with AJAX integration and Matchicode is a thrilling card game created with nothing but DOM manipulation.
2. Bagel Tracker: an app with one purpose - tracking how many bagels you eat. The target audience is New Yorkers who are training for a marathon (aka me). As you can imagine, this process requires a lot of bagels. But how many? Bagel Tracker lets you enter whenever you eat a bagel, and will update a visual stack of bagels, along with a display that shows facts about bagels. This data is saved for each user using passport for authentication.
3. Haiku Generator: a web app, backed by natural language processing done in Python. With text input into a form, the app will pull out important words and meaningful poems in the classic 5/7/5 syllable structure. Check out the Python repo [here](https://github.com/kcp288/haiku-generator).
4. "Where Can I Print In Bobst?": Bobst has 14 printers on 7 floors, but with more than 1 million pages printed every day, these printers are down much of the time. Instead of climbing up and down stairs to find a functioning printer, I plan to pull the printer status data from the internet to model it in an attractive interface that all students can use. This project is [coming soon](https://www.youtube.com/watch?v=wABKM73YSrE), but there is a clickable prototype on the site!

### More details for grading
6 Route Handlers
* AIT 
* Bagels
* Bobst
* Haiku
* Haiku-nlp (Identical to haiku, but formatted for cleaner presentation)
* Index

3 Mongoose Schemae
* Movies for MoviesDB
* User for passport in Bagel Tracker
* Bagel

7 Forms
* (AJAX) MoviesDB filter
* Birds input
* Birds display filter
* Matchicode number of cards
* Bagel sign up/log in
* Bagel creation form
* Haiku text input

## Modules/Concepts

* *Express* web development framework for Node.js (that I know how to use)
* *Handlebars* templating engine (that I know how to use)
* *Passport* authentication for users to store bagel data
* *MongoDB* to store bagel, user and movie info
* *python-shell* can spin off processes with stdio and run python NLP Haiku script from Node.js. Repo for python-shell is [here](https://github.com/extrabacon/python-shell)

## Point Values + Research Topics

(1) CSS Framework: Bootstrap

(3) Passport: User authentication

(1) JSHint

(2) Clientside templating: handlebars 

(1+) Serverside library: python-shell 
* _I know I made 8 points here, but I do think integrating this was worth more than 1 point of work_

##Wireframes
####Where Can I Print In Bobst?
![Alt text](/documentation/wireframe_Print_in_bobst.png?raw=true "Print in Bobst")

####Haiku page
![Alt text](/documentation/wireframe_Haiku.png?raw=true "Haiku")

####Bagel Tracker
![Alt text](/documentation/wireframe_Bagel.png?raw=true "Bagel Tracker")
![Alt text](/documentation/wireframe-05.png?raw=true "Bagel Tracker Dropdown")

####AIT Projects (Menu dropdown)
![Alt text](/documentation/wireframe_AIT_Dropdown.png?raw=true "Haiku")


##Site Map
![Alt text](/documentation/sitemap.png?raw=true "Site Map")

##Use Case Table
User | Need | Interaction
--- | --- | ---
Runner with a bagel passion | I've got to find some way to quantify all these bagels that I've been eating after my long runs! | Log into the bagel tracker, log bagel consumption and watch the bagel stack grow!
Haiku Generator | That natural language processing knowledge | Any text can be dropped into the box--an essay, job rejection, love letter--and turned into a haiku. Try it out!
Recruiters | Does this Kira person know anything? | The project page shows me all these cool representations of front end, database and server-side knowledge! And I can finally track my bird watching.
NYU Student | I need to print, but which Bobst printers are working right now?| Load the single-page site, and view which printers are working (or how long they have been broken) in an intuitive way. 

## Thanks!
What will be in version 2.0:
* List displaying individual bagel info for each user
* Functional display of Bobst printing data 
* Revised login/signup flow for Bagel Tracker
* More robust error handling for haiku generator
...Stay tuned!