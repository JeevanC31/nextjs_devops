DevOps
Title: Containerize and Deploy a Next.js Application using Docker, GitHub Actions, and Minikube

Objective

This project demonstrates:

Containerization of a Next.js application using Docker

Automation of build and push using GitHub Actions and GitHub Container Registry (GHCR)

Deployment of the containerized app to Kubernetes (Minikube)
------------------------------------------------------------------------------------------------------------
Clone the Repository
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

Install Dependencies
npm install

Run Locally (Development)
npm run dev
The app will be available at http://localhost:3000

Docker Setup
Build the Docker Image
docker build -t nextjs-app:latest .

Run the Container
docker run -p 3000:3000 nextjs-app:latest
Access your app at http://localhost:3000

GitHub Actions CI/CD

The workflow (.github/workflows/ci-cd.yaml) performs:

Build & Push Docker Image
Triggers on every push to main
Builds image and pushes to GitHub Container Registry (GHCR)
Uses proper tagging (latest and commit SHA)

Deploy to Minikube
Starts Minikube in GitHub Actions
Updates image tags in Kubernetes manifests
Applies the manifests using kubectl

Kubernetes Deployment (Minikube)
Start Minikube
minikube start

Apply Manifests
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

Check Status
kubectl get pods
kubectl get svc
