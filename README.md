## Run Project

To run the project, do this:

```bash
cd docker-customer-management
docker-compose up
```
Please free up these ports before running the application.

* Server port: 3001

* Client port: 3000

* Database port: 27017


To access the application, go to http://localhost:3000

## Project Structure
```
|__ api
|__ ui
|.. docker-compose.yml
```

### api
api folder contains the server side of the application.

server side code has following structure:

```
|__ api
    |__ .server
    |.. .dockerignore
    |.. .gitignore
    |.. .Dockerfile
    |.. .index.js
    |.. .package-lock.json
	|.. .package.json
```

server folder contains all the routes/controllers/services/models files.

```
|__ server
    |__ .config
    |__ .controllers
    |__ .models
    |__ .routes
    |__ .services
```
### ui
ui folder contains the client side of the application.

```
|__ ui
    |__ .public
    |__ .src
    |.. .gitignore
    |.. .Dockerfile
    |.. .package-lock.json
	|.. .package.json
```

src folder contains all the pages/components files.

```
|__ src
    |__ .components
    |__ .pages
    |.. .App.css
    |.. .App.js
    |.. .index.css
	|.. .index.js
```
