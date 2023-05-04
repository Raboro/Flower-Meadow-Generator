````bash
#    ______ _                          __  __                _                
#   |  ____| |                        |  \/  |              | |               
#   | |__  | | _____      _____ _ __  | \  / | ___  __ _  __| | _____      __ 
#   |  __| | |/ _ \ \ /\ / / _ \ '__| | |\/| |/ _ \/ _` |/ _` |/ _ \ \ /\ / / 
#   | |    | | (_) \ V  V /  __/ |    | |  | |  __/ (_| | (_| | (_) \ V  V /  
#   |_|    |_|\___/ \_/\_/ \___|_|    |_|  |_|\___|\__,_|\__,_|\___/ \_/\_/                                        
#
#    _____                           _             
#   / ____|                         | |            
#  | |  __  ___ _ __   ___ _ __ __ _| |_ ___  _ __ 
#  | | |_ |/ _ | '_ \ / _ | '__/ _` | __/ _ \| '__|
#  | |__| |  __| | | |  __| | | (_| | || (_) | |   
#   \_____|\___|_| |_|\___|_|  \__,_|\__\___/|_|                                                      
````
    
                                                                                                                                                                                                                                                      

[![GNU GPL 3.0 License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/Raboro/Flower-Meadow-Generator/blob/main/LICENSE)
[![Issues](https://img.shields.io/github/issues/Raboro/Flower-Meadow-Generator.svg)](https://github.com/Raboro/Flower-Meadow-Generator/issues)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/y/Raboro/Flower-Meadow-Generator)](https://github.com/Raboro/Flower-Meadow-Generator)
[![GitHub last commit](https://img.shields.io/github/last-commit/Raboro/Flower-Meadow-Generator)](https://github.com/Raboro/Flower-Meadow-Generator)

[![Powered by](https://img.shields.io/badge/powered%20by%20java-orange.svg?logo=OpenJDK&logoColor=white)]()
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=raboro_Flower-Meadow-Generator_Backend&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=raboro_Flower-Meadow-Generator_Backend)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=raboro_Flower-Meadow-Generator_Backend&metric=bugs)](https://sonarcloud.io/summary/new_code?id=raboro_Flower-Meadow-Generator_Backend)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=raboro_Flower-Meadow-Generator_Backend&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=raboro_Flower-Meadow-Generator_Backend)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=raboro_Flower-Meadow-Generator_Backend&metric=coverage)](https://sonarcloud.io/summary/new_code?id=raboro_Flower-Meadow-Generator_Backend)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=raboro_Flower-Meadow-Generator_Backend&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=raboro_Flower-Meadow-Generator_Backend)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=raboro_Flower-Meadow-Generator_Backend&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=raboro_Flower-Meadow-Generator_Backend)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=raboro_Flower-Meadow-Generator_Backend&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=raboro_Flower-Meadow-Generator_Backend)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=raboro_Flower-Meadow-Generator_Backend&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=raboro_Flower-Meadow-Generator_Backend)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=raboro_Flower-Meadow-Generator_Backend&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=raboro_Flower-Meadow-Generator_Backend)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=raboro_Flower-Meadow-Generator_Backend&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=raboro_Flower-Meadow-Generator_Backend)

---
## Run the application

Just run the following command to start the two docker container: One for the Java Spring Boot backend and the other for the Postgresql database:
````bash
$ docker compose up
````

## Reach the application

After the starting process you can reach the container/services: <br>

Get **frontend** in the browser (uses port ``8082``):
````
http://localhost:8082/flowermeadowgenerator
````

Make calls to the **backend** flower endpoint (uses port ``8081``):
````
http://localhost:8081/flower
````
