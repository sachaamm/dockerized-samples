#  Symfony + MariaDB Docker sample
## About 
This is an helloWorld Question&Answer API sample using Symfony and MariaDB via Docker 

## Installation 
```shell
cd myapp && composer install
docker-compose up
```
And voilà! the symfony app is running on http://localhost:8001

## Create database schemas
```shell
root@root:/home# docker exec -it myapp /bin/bash
root@c2c86971495c:/app# cd myapp
root@c2c86971495c:/app/myapp# php bin/console doctrine:schema:update --force
```

## Create a question via API
You can send REST Requests via Postman to create Questions entities
Ex: a POST Request to http://localhost:8001/question in order to create a new question. One answer is associated in this case.

```json
{
	"title": "What is the sense of life ?",
	"promoted": true,
	"status": "draft",
	"answers": [{
		"channel": "faq",
		"body": "Being happy, 
		transmit happiness around you 
		and explore the world to discover yourself through the other"
	}]

}
```

## Export questions to csv file
You can export questions to a csv file
```shell
root@root:/home# docker exec -it myapp /bin/bash
root@c2c86971495c:/app# cd myapp
root@c2c86971495c:/app# php bin/console app:csv-export
```

