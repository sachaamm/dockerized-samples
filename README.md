# dockerized Samples
Some samples to share my training on Docker to deploy fastest as possible Websites environnement.

## LAMP MySQL ( Php7.2 + Apache2 + MySql + PhpMyAdmin )
A basic dockerized Lamp project for php 7.2 + MySQL + PhPMy@dmin. It's  thought as an easy way to dockerize my old-style Php  Websites :-)

```shell
/etc/init.d/mysql stop   # you must stop your MySql service running on port 3306 to let docker run MySql
sh stopAndRemoveContainers.sh  # we clean containers by stopping them and removing all containers. 
cd LAMP-MySQL/ && docker-compose up # we build containers with docker-compose file. 
```

Now, your website folder is reachable here :<br/>
http://localhost:8080/  <br/>
  <br/>
And your phpMyAdmin interface is reachable here **( password is defined in your docker-compose.yml file )** :  <br/>
http://localhost:4002/  ( Credentials: User >> root / Password >> example ) <br/> 
<br/>


## NodeJS + Express ( NodeJS10 + Express4.16 )
A basic NodeJS app running in a Docker container. In this sample, I show you 2 ways to launch your container, from cli, and from docker-compose. Thanks to theses relevant articles. <br/>
https://nodejs.org/de/docs/guides/nodejs-docker-webapp/  <br/>
https://medium.com/@nbanzyme/easy-way-to-install-nvm-on-ubuntu-18-04-2cfb19ee5391 <br/>

Using Docker cli & Dockerfile

```shell
cd NodeJS-Express
sh launchNodeContainer.sh  # we clean containers by stopping them and removing all containers. 
```
Result : http://localhost:8081/  <br/>

Using Docker-compose

```shell
cd NodeJS-Express
docker-compose up
```
Result : http://localhost:8082/  <br/>

I'm passing env argument with ***node*** to specify if the container is built from docker-compose or from docker-cli with a Dockerfile.
There are also bunch of useful commands you can use : 

```shell
# Get container ID
$ docker ps

# Print app output
$ docker logs <container id>

# Output expected : Running on http://localhost:8080

# Get container ID
$ docker ps

# Print app output
$ docker logs <container id>

# Example
Running on http://localhost:8080
```

