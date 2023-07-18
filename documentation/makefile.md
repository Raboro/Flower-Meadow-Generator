# Makefile

Control the application life cycle with `make` via `CLI`:

---

## Start

- `up` - starts all docker container & network with a new build and in detached mode, which means that you get the terminal back and are not stuck in docker
- `up-no-build` - starts all docker container & network without new build and detach
- `up-no-build-detach` - starts all docker container & network without new build, but in detach mode

---

## Stop

- `down` stops the whole application by stopping all docker container & network

---

## Restart

- `restart` - restarts the application by stopping and then starting again with a new build and with detach enabled
- `restart-no-build` - restarts the application by stopping and then starting again without build and detach mode
- `restart-no-build-detach` - restarts the application by stopping and then starting again without build, detach mode

---

## Exec

- `execDB` - go into database container in bash
- `start-to-execDB` - start application without new build and go into database container in bash
- `execBackend` - go into backend container in bash
- `start-to-execBackend` - start application without new build and go into backend container in bash

---

## Logging

- `log-all-services` - log all docker container
- `log-DB` - log only database container
- `log-Backend` - log only backend container
- `log-Frontend` - log only frontend container
