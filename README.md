# Express MongoDB API for Heroku Deployment

## Description

This is a single model full C.R.U.D. API for contacts.

Contacts have the following properties

| property   | value type | default        |
| ---------- | ---------- | -------------- |
| id         | integer    | assigned by db |
| name       | string     | n/a            |
| age        | int        | n/a            |
| timestamps | date       | assigned by db |

## Set up for deployment

### Note:

Everywhere there is something for you to customize it will be wrapped in <> tags. Remove these tags.

**Example:**

```
/<my_db_name>
```

Should be changed to

```
/contacts
```

NOT

```
/<contacts>
```

1. confirm you are not already in a github repository by typing `git status`:

Good:

```
fatal: not a git repository (or any of the parent directories): .git
```

Bad/move to a different location on your computer

```
On branch master
```

### Getting Started with Github

1. Clone down this repository

- `git clone <url to this repo>`

1. cd into this repo
1. Type `git remote remove origin`
1. Go back to github, create a new repository
1. Do NOT initialize with readme
1. Do NOT initialize with .gitignore
1. You should see terminal commands, use the bottom set (copy and paste into terminal) - to get this project into your github
1. Confirm this project is on your github now

### Get This Project Up and Running

Remember, if it isn't running locally, it isn't going to work on heroku

- `ls` to confirm you are on the same level as your `package.json`
- `touch .env`

#### .env

.env is a file that is going to store variables specific to your computer that will allow you to run this backend. It should NOT be tracked by git/github. You will need to set up (some) of these variables on heroku (we'll go over the steps later)

**.env**

`.env` is NOT JavaScript. Do not use

- extra spaces
- quotes
- semi-colons

First, start with a port (it MUST be all caps)

```
PORT=3000
```

Then add your connection to MongoDB Atlas

Go to Atlas

Choose connect

![](https://i.imgur.com/3ol81mW.png)

Choose connect your application

![](https://i.imgur.com/doSsWHc.png)

Copy the path provided, it should look like this

```
mongodb+srv://<username>:<password>@ga-sei-u8fme.mongodb.net/<dbname>?retryWrites=true&w=majority
```

into your `.env` file, make a new line (no extra spaces, not quotes etc)

```
PORT=3000
MONGODB_URI=mongodb+srv://<username>:<password>@ga-sei-u8fme.mongodb.net/<dbname>?retryWrites=true&w=majority
```

Replace <username>, <password> and <dbname> with your username and password and dbname (do not include `<>`) - if you forgot your password, go ahead and make a new one

Note, you can update this URL at any time, so if you choose a different cluster/database later, it will not be a problem.

**IMPORTANT CAVEAT** - certain characters cannot readily be used in your password/username - like `%` - save yourself unexpected problems by just using alphabetical and numerical characters for your username and password (or have MongoDB Atlas generate an appropriate password for you

#### Almost there

Run the following to get this app up and running and check for it in the browser

- `npm i`
- `nodemon`

### Get this app working on Heroku

Go into your `package.json` and update the `engines` to match your computer's engines:

To find out what your versions are

```
node -v
npm -v
```

Be very careful to maintain proper JSON (double quotes, all commas correct etc. )

```js
"engines": {
  "node": "12.13.1",
  "npm": "6.14.6"
},
```

**In terminal**

- `heroku create` or `heroku create <my unique app name>`
- `git add .`
- `git commit -m 'first heroku push'`
- `git push origin master`
- `git push heroku master`
- `heroku open` => will not work yet, you must set up your MongoDB Atlas configurition on Heroku

#### Heroku Dashboard

You must add your mongodDB connection string to your app

- go to heroku in your browser
- choose your app
- choose settings
- reveal config vars
- set key to be `MONGODB_URI`
- set value to your url that is in your .env file: `mongodb+srv://<username>:<password>@ga-sei-u8fme.mongodb.net/<dbname>?retryWrites=true&w=majority`

![](https://i.imgur.com/75bI0aC.png)

##### Now try in terminal:

`heroku open` => go to the browser - check that the app is working (will most likely see just an empty array)

## To Dos (Customize this App to make it your own)

### Server.js

- Update your `app.listen` console.log to make sense for your app

**Note:** this will break your app and you will need to do a few things to get it running:

- Update controllers/routes to match your resources for your app
- Update the file name in controllers to match your resources
- Update the file name in models to match your resources

_Bonus_

- configure cors. Right now everything is white-listed, limit your connection to just localhost and your heroku (note this is usually more tricky than it seems)

### Controllers : `<my_resource_name_controller>.js`

There are 12 todos - be sure to update each one

### Models : `<my_resource_name>.js`

There are 4 todos - be sure to update each one

### Test with Postman

- test that you can

  - create
  - read
  - update
  - delete

  **Remember**

  - be sure to select raw JSON
    ![](https://i.imgur.com/8o11CJq.png)

Find it on heroku
https://glacial-tor-47459.herokuapp.com/contacts
