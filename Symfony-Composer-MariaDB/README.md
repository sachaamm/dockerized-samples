#  Symfony + MariaDB Docker sample
## About 
This is an helloWorld Question&Answer API sample using Symfony and MariaDB via Docker 

## Installation 
```shell
cd my app && composer install
docker-compose up
```

## Create a question via API
You can send REST Requests via Postman to create Questions entities

```json
{
	"title": "What is the sense of life ?",
	"promoted": true
	
}
```
