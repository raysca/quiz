# Docker

## What is the difference between a Docker image and a Docker container?

- [ ] A Docker image is a running instance of a Docker container
- [x] A Docker container is a running instance of a Docker image
- [ ] A Docker image is a snapshot of a Docker container
- [ ] A Docker container is a snapshot of a Docker image

## What is the purpose of a Dockerfile?

- [ ] To define the configuration of a Docker container
- [ ] To define the configuration of a Docker image
- [ ] To monitor and optimize the performance of containerized applications
- [x] To instruct Docker how to build a Docker image along with its dependencies and source code

## What is the purpose of a Docker registry?

- [x] A server for hosting Docker images
- [ ] A tool for managing Docker images
- [ ] A tool for managing Docker containers
- [ ] A tool for managing Docker networks

## Docker compose is used for which of the following?

- [ ] Building Docker images
- [x] Running Docker containers
- [x] Managing Docker networks
- [ ] Managing Docker images

## Networking

Which statements are true about the code below

```yaml
version: '3.8'

services:
  web:
    image: nginx
    ports:
      - '8080:80'
```

- [ ] The service `web` will be accessible on port `80` on the host machine
- [x] The service `web` will be accessible on port `8080` on the host machine
- [x] This is a docker-compose file
- [ ] The service `web` will run both on port `80` and `8080` on the host machine

## Docker volumes are used for which of the following?

- [ ] To store Docker images
- [x] To store persistent data
- [ ] To store Docker containers
- [ ] To store Docker networks

## Which of these are benefits of using Docker during development?

- [x] Reproducible development environments
- [ ] Faster development
- [ ] Easier debugging
- [ ] Easier deployment

## What is a Docker entrypoint?

- [ ] A Docker image
- [ ] A Docker container
- [x] A command that is run when a Docker container is started
- [ ] A command that is run when a Docker container is stopped

## Which of these are valid Docker commands?

- [x] `docker run`
- [ ] `docker start`
- [x] `docker stop`
- [ ] `docker restart`

## Docker commands

what is the difference between `docker run` and `docker start`?

- [ ] `docker run` creates a new container, while `docker start` starts an existing container
- [x] `docker run` creates a new container, while `docker start` starts a stopped container
- [ ] `docker run` starts a new container, while `docker start` creates a new container
- [ ] `docker run` starts a new container, while `docker start` starts a stopped container

## What is the difference between `CMD` and `ENTRYPOINT` in a Dockerfile?

- [ ] `ENTRYPOINT` and `CMD` are the same default command executed when a container is started
- [x] `ENTRYPOINT` is the default command executed when a container is started, while `CMD` is the instruction passed to the `ENTRYPOINT` command
- [ ] `ENTRYPOINT` is the instruction passed to the `CMD` command, while `CMD` is the default command executed when a container is started
- [ ] `ENTRYPOINT` and `CMD` are the same instruction passed to the default command executed when a container is started
