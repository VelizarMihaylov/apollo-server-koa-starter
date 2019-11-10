build:
	make clean && make up
up:
	docker-compose up -d
down:
	docker-compose down
logs:
	docker-compose logs -f
clean:
	docker-compose down -v --rmi all --remove-orphans

