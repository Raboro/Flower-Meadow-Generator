# Endpoints

## REST-Api:
- GET -  `http://localhost:8081/flower -> List<FlowerDTO>`
- POST - `FlowerDTO -> http://localhost:8081/flower -> FlowerDTO`
- DELETE - `Flower ID:long -> http://localhost:8081/flower/{id} -> Response`
- PUT - `Flower ID:long, FlowerDTO -> http://localhost:8081/flower/{id} -> FlowerDTO`

---

## Others:
- GET -  `Flower ID:long -> http://localhost:8081/flower/{id} -> ResponseEntity<FlowerDTO>`
- GET -  `category:String -> http://localhost:8081/flower/category/{category} -> List<FlowerDTO>`
- GET -  `sorting:String -> http://localhost:8081/flower/sort/{sorting} -> List<FlowerDTO>`
- GET -  `sorting:String, reverse:boolean -> http://localhost:8081/flower/sort/{sorting}/{reverse} -> List<FlowerDTO>`

---

## Meaning
1. get all flowers
2. add a flower
3. delete a flower by ID
4. change a flower by ID and updated flower
5. get flower by ID
6. get all flowers from a specific category
7. get all flowers sorted by
8. get all flowers sorted by and reverse if requested