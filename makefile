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

restart-no-build:
	docker-compose down
	docker-compose up

restart-no-build-detach:
	docker-compose down
	docker-compose up -d

execDB:
	docker exec -it flower-meadow-generator-db bash

start-to-execDB:
	docker-compose up
	docker exec -it flower-meadow-generator-db bash

execBackend:
	docker exec -it flower-meadow-generator-backend-1 bash

start-to-execBackend:
	docker-compose up
	docker exec -it flower-meadow-generator-backend-1 bash

log-all-services:
	docker-compose logs

log-DB:
	docker-compose logs flower-meadow-generator-db

log-Backend:
	docker-compose logs flower-meadow-generator-backend-1

log-Frontend:
	docker-compose logs flower-meadow-generator-frontend-1