.PHONY: control docker compose life cycle

up:
	docker-compose up --build -d

up-no-detach:
	docker-compose up --build

up-no-build:
	docker-compose up

up-no-build-detach:
	docker-compose up -d

down:
	docker-compose down

restart:
	docker-compose down
	docker-compose up --build -d

execDB:
	docker exec -it flower-meadow-generator-db bash

execBackend:
	docker exec -it flower-meadow-generator-backend-1 bash