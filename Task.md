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
11.Make Volume Read Only(So Docker Can't Write On Outer Location)
12.Add ENV Variable
13.Create ENV File To Use Use ENV
14.Create Docker Compose So We don't have to Write All Command 
 

Docker File
-FROM: Get Image From Docker (Node).

-WORKDIR: Defining Working Dir(/app) Where All Commands Will Run.

-COPY: Copy File Into Docker and Second Argument Where We Want To Add The File, We Can Define Path Or Can Use "." For Use Working Dir(package.json). 

-RUN: To Run Command On Docker(npm install) for install dependencies defined in package.json file,

-COPY: Copy All The Remaining File Into Docker Image(. ./), Docker Works As Layers And Also Create Cache After Each Command, So After Building First Image If Files had Change Then It Will Build Image Bit Faster because Docker Don't Have To Check package.json steps it can use cache.

-EXPOSE: To Tell Docker Which Port(3000) To Expose

-CMD: To Run Command(["node", "index.js"]), For Run Time When We Run Container



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

Issues: 
-Nodemon Not Working Inside Container







