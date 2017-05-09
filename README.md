# Tibia Character API
> API Rest to consult informations about tibia characters

## How it works
Unfortunally, [Cipsoft](https://www.cipsoft.com/index.php/en/) doens't provide an API to get any information about **Tibia** Chararacters. So, I've create this API which recieves a POST method with a **name** in body content and make a requisition to Tibia website to consult all the informations about this character. The API read the result and return an object with all informations.

## API

> Consult Tibia character info

Requisition Body content:
```json
{
    "name": "character-name"
}
```

|   Method         |       URL                               |     Response          |
|   ---            |                       ---               |         ---           |
|   POST           |   https://api-tibia.herokuapp.com/     |     Character Info    |


### Response

#### Character Info
```json
{
  "name": "",
  "level": "",
  "sex": "",
  "vocation": "",
  "achievement_point": "",
  "world": "",
  "residence": ""
}
```
#### Error
```json
{
  "error": "Character doest not exist"
}
```

## Demo
...

## Contributing
Want to contribute? [Follow these recommendations.](https://github.com/raulfdm/tibia-api/blob/master/CONTRIBUTING.md)

## LICENCE
[MIT License](https://github.com/raulfdm/tibia-api/blob/master/LICENSE) © [Raul F. de Melo](https://rauldemelo.com.br/)