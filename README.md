# Docker Demo Application With Node & Express

## How To Run
 -Git Clone \
 -cd into project \
 -Open Terminal \
 -docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build \
 -End Points: \
    -Home \
        (GET)  http://localhost:3000/api/v1 \
    -Create User \
        (POST) http://localhost:3000/api/v1/users/signup \
        (body: username(String), password(String)) \
    -Login \
        (POST) http://localhost:3000/api/v1/users/login \
        (body: username(String), password(String)) \
    -Get All Post \
        (GET) http://localhost:3000/api/v1/posts/ \
    -Get One By Id \
        (GET) http://localhost:3000/api/v1/posts/:id \
    -Create Post \
        (POST) http://localhost:3000/api/v1/posts/ \
        (Body: title(String), body(String)) \
    -Update Post \
        (PATCH) http://localhost:3000/api/v1/posts/:id \
        (Body: title(String), body(String)) \

        


## libraries and other modules used 
  Node,
  Express,
  Express Session,
  Cors,
  Nodemon,
  Bcrypt,
  Redis,
  Mongo DB,
  Mongoose,
  Docker,
  Docker Compose,
  
## Important Tasks

### `Create Simple Node And Express Application`
 -Node init
 -Add Express

### `Create Dockerfile`
 -FROM: 
 -WORKDIR:
 -COPY:
 -ARG:
 -RUN:
 -COPY:
 -ENV:
 -EXPOSE:
 -CMD:

### `Create .dockerignore`

### `Create Docker Compose file`
 -docker-compose.yml
 -docker-compose.dev.yml
 -docker-compose.prod.yml

 ### `Setup MongoDb Image Docker`
  -Define Mongo Image
  -Define Mongo User Details
  -Add Named Volume
  -Add DB Connection In Express App 

### `Add Following Into Express App`
 -create Post Model
 -Create Post Controller
 -Create Post Routes
 -Add Routes Into Index
 -Add Middleware JSON
 -Create User Model
 -Create Auth Controller
 -Create User Routes
 -Add Routes Into Index
 -Add Bcryptjs For Store Encrypted Password
 -Encrypt Password In AuthController
 -Create Login In Auth Controller
 -Create Login Routes


### `Add Redis`
 -Add Redis Image
 -Add Redis Dependencies Into Express App
 -Add Redis ENV
 -Add Redis Config
 -Add User Details Into Session
 -Add Middleware To Store Session Details
 -Add Middleware To Protect Unauthorized Access

### `Add Nginx`
 -Add Nginx Image
 -Create default conf file
 -Add Nginx Configurations 
 -Port Setup For Nginx



## Personal Reference Note
 -Dockerfile: 
 -Docker Ignore:
 -Docker Compose:
 -Volume:
 -Named Volumes:
 -Anonymous Volumes:
 -Read Only Volumes:
 -Node Run Command:
 -ENV Variables:
 -Switching Dev And Prod Env:
 -Args Docker Command:
 -DB Access In Container:
 -Getting IP From Container:
 -Depends On:
 -Start Order, Only Build Single Container:
 -Scale Up Using nginx & Load balancing:
 -Production Env Setup:
 -Push Github:
 -Pull Into Prod Env:
 -Prod Running Cycle:
 -Docker Hub:
 -Docker Swarm:
 -Watch Tower:

## Commands And Tag Description
 -FROM:
 -WORKDIR:
 -COPY:
 -RUN(With Condition):
 -COPY(Two Steps):
 -EXPOSE:
 -CMD(Prod,Dev):
 -volume:
 -Tag(-V):
 -Tag(--no-deps):
 -Tag(--Force-recreate):
 -Tag(--Build):
 -Docker image ls:
 -Docker image rm:
 -Docker Build -t:
 -Tag(-d):
 -Tag(-f):
 -Volume prune:

## Issues You Might Face
 -Nodemon Not Working In Docker Container, Then Change Run Command 
  (--legacy-watch index.js)
 -[Mongo Connection Issue](https://www.youtube.com/watch?v=bZhlX90m1cw&ab_channel=YogendraTamang).
 -Mongo Authentication Failed, Then Run  
 (use admin; db.grantRolesToUser('admin', [{ role: 'root', db: 'admin' }]))
*admin = Your Mongo DB Username
