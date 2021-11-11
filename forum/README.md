
```bash
mvn package
docker build -t springio/gs-spring-boot-docker .
docker run -d --restart unless-stopped -p 8080:8080 springio/gs-spring-boot-docker
```