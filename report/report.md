# COM519 Advanced Databases 
## Adam Chu
## Git: https://github.com/AChu-Dev/advancedDatabases
## Live Link : https://stark-woodland-19185.herokuapp.com/

</br >
</br >

## Introduction
This project was created to collate and show information from the PYPL, Programming Language Index held on: https://pypl.github.io/PYPL.html, this data was then scrapped by a Kaggle User Data is licenced under 'Most Popular Programming Languages Since 2004' By Muhammad Khalid at: https://www.kaggle.com/muhammadkhalid/most-popular-programming-languages-since-2004

The problem I have chosen is that new programmers are forced to learn antiquated languages, and those are not representative of the languages that are actually in demand. The problem with this data source is that it is not easily displayed, with only one months records being eaisly accessed.

I decided to use MongoDB for Databases, with NodeJS as Backend and Mongoose as an interfacing layer between them, this would allow me to learn a new technology and backend, type but in retrospect I would rather use languages more developed for web back end like Python Flask, or PHP. This normally is not an issue as NodeJS is actually rather good at simple backend applications the problem lies with Mongoose the middleware which is flawed in its processes, for example .FindByIdAndUpdate() does not actually return the updated record unless {new: true} is passed as a secondary object.

The problem I have chosen is that new programmers are forced to learn antiquated languages, and those are not representative of the languages that are actually in demand. The problem with this data source is that it is not easily displayed, with only one months records being eaisly accessed.

I decided to use MongoDB for Databases, with NodeJS as Backend and Mongoose as an interfacing layer between them, this would allow me to learn a new technology and backend, as we are learning PHP with Nick Whitelegg next semester anyway so I wanted to learn both in the sessions available.

# Security and Scalabilty

This application is scalable due to its usage of the 4 CRUD applications allowing for the control and expansion of the data in the DB, which is held on the MongoAtlas Cloud, and Heroku Hosting Service. Allowing for moderators and other users to keep building on the information and upgrading it as the time progresses. The problem lies with security as that has not been taken into account properly with any potential user having access to the website and being able to use rwx permissions while on the page. I should add a user account system so only trusted users can access and change data but as a prototype this is not as much of an issue. It is fully compliant with the principles of Creative Commons as both providers of data use an attribution licence which this does reference them correctly. 

# Systems Overview

I originally chose to use a .CSV database as that was the given format from Kaggle, this normally should have been fine as MongoDB has a command allowing the user to import data from a .CSV and convert it into a .JSON format. The problem lies with MongoAtlas a extension of MongoDB which uses a Node Module called Seeder to rebuild the database, from a .JSON File. I used MongoAtlas as a remote database hosting service allowing me to have the datastore be live and updatable instead of just being client side. This forced me to use a online converter tool that took the .CSV Format and convert it to .JSON so I could use Node Seeder.

I am using the View, Model & Controller layout in a standard Node alteration with app.js outside of the three groupings, being the file to initalise the other Javascript elements inside of the application. 

* Inside of the views contains the .EJS and front-end webpages alongside the CSS and JS files that is related to the front-end. These file use the .EJS language allowing for <% console.log("Hello World") %> (EJS Tags), which can contain JavaScript inside of a HTML document

* In the models folder I have placed the Mongoose, schemas, with their respective data classifcations allowing me to select and aggregate data using Mongooses' find by schema. 
Name: String, is an example for an object in a Mongoose Schema.

* In the controllers I have placed the files responsible for managing queries and CRUD applications and starting page rendering using Express, another JavaScript addition.

![File Structure Diagram](/diagram.png "File Structure")\
(/diagram.png is where the image should be located)

# In Conclusion

This program is a good prototype in its abilty to show and collate data, the problems with it mainly come down to a lack of understanding the key features of NodeJS, Mongoose, Express and MongoDB. Now that I have learned more about these web subsets I would in retrospect, rather use languages more developed for web back end like Python Flask, or PHP. This normally is not an issue with NodeJS/Express or MongoDB itself actually rather good at simple backend applications the problem lies with Mongoose the middleware which is flawed in its processes, for example .FindByIdAndUpdate() does not actually return the updated record unless {new: true} is passed as a secondary object.

The problems I have with Mongoose are the fact it uses different syntax, when compared to MongoDB the server it interfaces with but it uses the same query names as MongoDB to confuse potential programmers. Whereas most of the functions are just middleware with its self this has an issue where functions which you would think do a specific query actually just call another spider of functions, these functions cause latency and also mislead developers.I wanted the program to be more have queries and be changed on the fly by potential users. If I had time to set up a testing procedure I would have included a proper test plan giving more credence to the security part of this report.

I did not manage to get proper CSS and styling implemented which is detrimental to the user experience being mainly a demonstration of my ability to use the relevant API's and mainframes. I wish that the user had more freedom to select queries and data as well as manipulate the output. Which I feel netures the completetion of this prototype

I wanted the program to be more have queries and be changed on the fly by potential users. If I had time to set up a testing procedure I would have included a proper test plan giving more credence to the security part of this report. As well as adding user authentication, and data / cookies protection page which the website at current does not use.

I did not manage to get proper CSS and Bootstrap styling implemented which is detrimental to the user experience being effectively a HTML5 Webpage without any styling or UX benefits. These benefits for UX would not help too much as this is a prototype for the project, but it is something I would like to add in a future revision.
