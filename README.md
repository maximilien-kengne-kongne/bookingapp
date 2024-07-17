

# code source frontend et backend de booking - application de reservation (HOTEL)

## Docker Compose command for run this application in container


We can easily run all the service with only a single command:
```bash
docker compose up -d
```

### build backend image
```bash
docker build -t booking-backend:1.0.0 .
```

### build frontend image
```bash
docker build -t booking-frontend:1.0.0 .
```

### delete image
```bash
docker rmi image_id
```

### run backend image
```bash
docker run -d -p 80:5000 booking-backend:1.0.0
```

### run frontend image
```bash
docker run -d -p 80:80 booking-frontend:1.0.0
```

### show all container started with status up
```bash
docker ps
```

### show all container 
```bash
docker ps -a
```

### stop a container 
```bash
docker compose stop
```

### delete specific container
```bash
docker compose rm container_name
```

### delete all container 
```bash
docker compose rm
```

### remove all stopped containers
```bash
docker container prune
```

### remove unused containers in addition to other Docker resources, such as (unused) images and networks
```bash
docker system prune
```

### go inside in a container 
```bash
docker exec -it container_id bash
```

### show log with specific container 
```bash
docker logs  container_id
```

## = start push image on docker hub = 
### example
* step one
```bash
docker login
```
then enter user name and password for Docker Hub Repository

* step 2
```bash
docker tag first-image {docker-hub-username}/{default-repo-folder-name}:first-image
```
* step 3
```bash
docker push {docker-hub-username}/{default-repo-folder-name}:first-image
```
### application

* step one
```bash
docker login
```
then enter username and password for Docker Hub Repository

* step 2
```bash
docker tag booking-backend:1.0.0 kkmdev/booking:bbv1
```
* step 3
```bash
docker push kkmdev/booking:bbv1
```
## = end push image on docker hub 

Platform of application, please visit:
> [Booking](https://www.booking.com/)

Contact me
> [maximilien kengne kongne](mailto:maximiliendenver@gmail.com)