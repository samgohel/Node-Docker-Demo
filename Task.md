1. Node init
2. Add Express
3. Create Simple Node App
4. Add Dockerfile(For Instruction To Create Docker File)
5. Add Docker Ignore File (For Define Which Files Not Need To Copy)
6. Add Local Volume With Container So After Every Change We Don't Have To Build Image Again And Again
7. Add Nodemon Dependencies 
8. Change Run Command On Docker File 
9. Protect Volume For Override Data Which Don't Needed To Overwrite While Copy(Using Anno.)
10.Add Anonymous 
1.Make Volume Read Only(So Docker Can't Write On Outer Location)
12.Add ENV Variable
13.Create ENV File To Use Use ENV
14.Create Docker Compose So We don't have to Write All Command 
15.Create Dev And Prod Docker Compose File For Different Env
16.Configure To Switch Between Different Env In Compose File
17.Add Compose Files into Docker Ignore
18.We Can Use If Condition TO Run Npm In Production Mode Or Dev Mode Depending On Compose File 
19.Set Args And ENV In Docker-Compose
20.Change npm run dev command nodemon --legacy-watch index.js So Nodemon Work in Docker
21.Add Mongo Image Into Docker Compose File
22.Go Into Mongo DB And Add Data Into It From Docker CLI
23.For Prevent Data Of Database We have To Create A Volume Using Docker Compose File 
24.We Also Have To Provide Volume So Its  Don't Give Any Error 
25.After Adding Named Volume We Don't Have To Run using -V Tag Else It Will Delete The Data
26.Add Mongoose Dependencies 
27.Get Ip From Container For DB Connection
**.If There Is Error While DB Connection See(https://www.youtube.com/watch?v=bZhlX90m1cw&ab_channel=YogendraTamang) 
** Use For Authentication Issue (use admin;
db.grantRolesToUser('admin', [{ role: 'root', db: 'admin' }])) 
28.We Can Also Connect Using Name Of Container And Container Can Communicate With Each Others, So at the place of ip we can also place the ip 
29.Export Config For Use From ENV, And Pass That Into Docker Compose
30.Set Up Start Order Which Container Should Start First Using Depends On In Compose File
31.Try To Reconnect After Some Seconds Using Function
32.We Can Use Tag --no-deps To Start Only One Mentioned Container/Service
33.Create Express Application
34. Add Redis In Docker 

 

Docker File
-FROM: Get Image From Docker (Node).

-WORKDIR: Defining Working Dir(/app) Where All Commands Will Run.

-COPY: Copy File Into Docker and Second Argument Where We Want To Add The File, We Can Define Path Or Can Use "." For Use Working Dir(package.json). 

-RUN: To Run Command On Docker(npm install) for install dependencies defined in package.json file,

-RUN if[ "$NODE_ENV"="development" ]; \
         then npm install; \
         else npm install --only=production; \
         fi      
         This Will Check ARG From Compose File And Run The Command Accordingly

-COPY: Copy All The Remaining File Into Docker Image(. ./), Docker Works As Layers And Also Create Cache After Each Command, So After Building First Image If Files had Change Then It Will Build Image Bit Faster because Docker Don't Have To Check package.json steps it can use cache.

-EXPOSE: To Tell Docker Which Port(3000) To Expose

-CMD: To Run Command(["node", "index.js"]), For Run Time When We Run Container

-Add Mongo As The Name Of Service And In Environment Add Username And Password 

-volume: - mongo-db:/data/db/ (Mongo Db Is Name Of Volume)

If Container Is Up And We Add New Image And Then We Again Use Up Command It Will Take Our Changes From Compose File, We Don't Have To Down And Then Again Up 



Commands:

-Docker Build: For Build Docker Image(Define Path For Dockerfile)

-Docker image ls: show the list of image

-Docker image rm (image name): for delete docker image(docker image rm 556122c96abe)

-docker build -t node-app-image .: For Build Image With Name(Add Tag -t And Give Name)

-docker run node-app-image: For Run Docker Image(docker run Then Image Name node-app-image)

-docker run -d --name node-app node-app-image: To Run Docker Image (docker run --name node-app node-app-image name is the name of container, -d for run in detach mode)

-docker run -p 3000:3000 -d --name node-app node-app-image: Here We Define The -p Tag With Where Docker Is Listening And Where Sending Data. 

-docker rm node-app -f: Remove Docker Container -f Tag For Force Remove Without Stop The Container

-docker exec -it node-app bash: Access The Dir From Docker Container(We Can See File System Of Docker Container)

-docker run -v pathOfFolderOnLocation:pathOfFolderOnContainer -p 3000:3000 -d --name node-app node-app-image, Here We Define Path Of Local Folder And Container Folder Which Need To Stay Sync(docker run -v C:\Users\Shambhu Gohel\Downloads\VS CODE Workspace\nodeDocker\:/app  -p 3000:3000 -d --name node-app node-app-image)
Instead Of Full Path We Can Use The Variable For CMD(%cd%) For PowerShell (${pwd})
(docker run -v ${pwd}:/app -p 3000:3000 -d --name node-app node-app-image)

-ENV PORT 3000: Here We Can Define Default Port In Docker File, While Running Run Command We Can Use This To Change Default Values using --env PORT=4000 Tag Here 4000 Is New Value For The PORT, We Also Have To Change Part Of Port 3000:4000 

-EXPOSE $PORT: Here We Are Using The Port Defined In ENV File

- --env-file ./.env : For Add local ENV To Docker ENV 

- docker rm node-app -fv: Delete The Container And Volume Related With That Container(node-app Is Container Name, 

-f tag For Force Remove/Delete And v tag For Volume)

-docker volume prune: For Delete Docker Volume

-docker-compose up -d: For Run Docker Using Compose File

-docker-compose down: Stop Container

-docker-compose down: Stop Container And Remove Volume

-docker-compose up -d --build: For Force Rebuild The Docker Image

-docker inspect nodedocker_node-app_1 (Last Is Name Of Container For Get The Details Of Container)

Docker Ignore File
node_module
Dockerfile
.dockerignore
.git
.gitignore
We Can Add All The Files Which We Don't Need To Copy in Container

Docker Compose
version: For Define Docker Compose Version(3)
services: Define All The Services Which Are Different Container We Have Created
build: Path Of The Container
ports: List Of Port We Needed For Application
volumes: For Defines All The volumes
environment: For Define ENV Variables
env_file: For Define Env File

Name Of Generated File Will Be Folder Name Underscore Service(Container) Name.

Once We Run docker compose Up And After That When We Again Run Same Command It Will Not Build Image Again

So If We Have Made Any Change In Build Process We Have To Rebuild The Docker Image

In Docker Compose File Add Common Config Of Prod And Dev Env.

docker-compose -f docker-compose.yml -f docker-compose.dev.yml: Here -f Tag We Define The From Where To Load Configuration, Here Order Of File Matters.


Create Express Application
-Create PostModel
-Create Post Controller
-Create Routes
-Add Routes Into Index
-Add Middleware
-Check Postman API Is Working Or Not
-Create User Model
-Create Auth Controller
-Create User Routes
-Add Routes Into Index
-Add Bcryptjs For Store Encrypted Password
-Encrypt Password In AuthController
-Create Login In Auth Controller
-Create Login Routes
- 



Issues: 
-Nodemon Not Working Inside Container







