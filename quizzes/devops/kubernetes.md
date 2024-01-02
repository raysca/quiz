# Kubernetes

These are review questions for the Kubernetes module.

## What is Kubernetes?

- [ ] A containerization platform
- [ ] A container orchestration platform
- [ ] A container management platform
- [x] All of the above

## What are pods?

- [ ] A group of containers
- [ ] A group of nodes
- [x] A group of containers that share resources
- [ ] A group of nodes that share resources

## What is a node?

- [ ] A group of containers
- [ ] A group of pods
- [ ] A group of containers that share resources
- [x] A group of pods that share resources


## What is the primary purpose of Kubernetes?

- [ ] Containerization
- [ ] Orchestration
- [ ] Management
- [x] All of the above

## Which component of Kubernetes is responsible for managing containerized applications?

- [ ] Pods
- [ ] Nodes
- [ ] Services
- [x] Controllers

## What is the recommended way to deploy applications in Kubernetes?

- [ ] Using Docker Compose
- [x] Using Kubernetes YAML files
- [x] Using Helm charts
- [ ] Using Kubernetes API calls

## How does Kubernetes ensure high availability of applications?

- [ ] By automatically scaling the number of pods
- [ ] By distributing pods across multiple nodes
- [ ] By automatically restarting failed pods
- [x] All of the above

## What is the purpose of a Kubernetes Service?

- [x] Load balancing incoming traffic to pods
- [ ] Exposing pods to external networks
- [ ] Providing a stable network identity for pods
- [ ] None of the above

## How does Kubernetes handle storage for applications?

- [ ] By using persistent volumes and persistent volume claims
- [x] By automatically provisioning and attaching storage volumes to pods
- [ ] By storing data directly in the container file system
- [ ] By relying on external storage solutions

## What is the purpose of a Kubernetes Ingress?

- [ ] To expose services externally using a load balancer
- [x] To route incoming traffic to different services based on rules
- [ ] To secure communication between pods within a cluster
- [ ] To monitor and log network traffic in Kubernetes

## How can you scale a Kubernetes Deployment?

- [ ] By manually increasing the number of replicas
- [ ] By setting up horizontal pod autoscaling based on CPU utilization
- [ ] By using a Kubernetes API call to adjust the desired replica count
- [x] All of the above

## What is the purpose of a Kubernetes ConfigMap?

- [ ] To store sensitive configuration data securely
- [x] To provide environment variables to containers
- [ ] To define resource limits for pods
- [ ] To manage secrets and credentials in Kubernetes

## What is the purpose of a Kubernetes PersistentVolume?

- [ ] To store sensitive configuration data securely
- [ ] To provide environment variables to containers
- [x] To provide persistent storage for pods
- [ ] To manage secrets and credentials in Kubernetes

## Why would you use a PersistentVolumeClaim?

- [ ] To store sensitive configuration data securely
- [ ] To provide environment variables to containers
- [ ] To provide persistent storage for pods
- [x] To request storage resources for pods
