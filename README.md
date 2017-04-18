# email_dispatcher
This is a simple email notification microservice, that I can integrate to any project that requires this functionality. Hosted on heroku, it is built using sendgrid module

we are going to build a email notification micro service, for which we will use the sendgrid module 

create an api route
where we will create basic fuctionalities such as email sending, by calling /:action end point

Now, lets create a new project in heroku
now lets deploy our app to heroku
once its done copy the live url and check to see if the api endpoints work

in heroku click on your app and go to resource tab and find more adding
search for send grid
copy the heroku install link
heroku addons:create sendgrid:starter
and paste in on the terminal, it will hookup your app with sendgrid to your heroku app

Now click on the sendgrid module at add ons on your heroku page, go to settings on sendgrid and create an API key

Get your Access_Key_SG

now lets add the api key in heroku app inside setttings at config vars

test the send grid functionality on post endpoint with a form

lets create a wrapper utility class around send grid api

core functionality is in place
 lets add some bootstrap

done!

