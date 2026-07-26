COMPOSE := docker compose
SERVICE := mongo

.PHONY: help up down stop restart logs ps status clean shell

help:
	@echo "MongoDB local (Docker Compose)"
	@echo ""
	@echo "  make up       Start MongoDB in background"
	@echo "  make down     Stop and remove containers"
	@echo "  make stop     Stop containers (keep them)"
	@echo "  make restart  Restart MongoDB"
	@echo "  make logs     Follow MongoDB logs"
	@echo "  make ps       Show compose status"
	@echo "  make status   Alias of ps"
	@echo "  make shell    Open mongosh inside the container"
	@echo "  make clean    Stop containers and delete the data volume"
	@echo ""
	@echo "Use in .env:"
	@echo "  MONGODB_URI=mongodb://127.0.0.1:27017/fitfocus"

up:
	$(COMPOSE) up -d $(SERVICE)
	@echo "MongoDB ready at mongodb://127.0.0.1:27017/fitfocus"

down:
	$(COMPOSE) down

stop:
	$(COMPOSE) stop $(SERVICE)

restart:
	$(COMPOSE) restart $(SERVICE)

logs:
	$(COMPOSE) logs -f $(SERVICE)

ps status:
	$(COMPOSE) ps

shell:
	$(COMPOSE) exec $(SERVICE) mongosh fitfocus

clean:
	$(COMPOSE) down -v
