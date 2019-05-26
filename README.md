# dockerized Samples
Some samples to share my training on Docker to deploy fastest as possible Websites environnement.

## LAMP MySQL ( Php7.2 + Apache2 + MySql + PhpMyAdmin )
A basic dockerized Lamp project for php 7.2 + MySQL + PhPMy@dmin. It's  thought as an easy way to dockerize my old-style Php crappy Websites :-)

```shell
/etc/init.d/mysql stop   # you must stop your MySql service running on port 3306 to let docker run MySql
sh stopAndRemoveContainers.sh  # we clean containers by stopping them and removing all containers. 
cd LAMP-MySQL/ && docker-compose up # we build containers with docker-compose file. 
```

Now, your website folder is reachable here :<br/>
http://localhost:8080/  <br/>
  <br/>
And your phpMyAdmin interface is reachable here ( password is defined in your docker-compose.yml file ):  <br/>
http://localhost:4002/ <br/>
<br/>


## LAMP MariaDB ( Php7.2 + Apache2 + MariaDB + PhpMyAdmin )
TODO !

## NodeJS + MySQL
TODO !

## Symfony + MongoDB 
TODO !

## React
TODO !
