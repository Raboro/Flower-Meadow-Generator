.PHONY: control docker compose life cycle

up:
	docker-compose up --build -d

up-no-detach:
	docker-compose up --build

up-no-build:
	docker-compose up

down:
	docker-compose down

restart:
	docker-compose down
	docker-compose up --build -d