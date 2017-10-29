# Tibia Character API
> API Rest to consult informations about tibia characters

## How it works
Unfortunally, [Cipsoft](https://www.cipsoft.com/index.php/en/) doens't provide an API to get any information about **Tibia Chararacters**. So, I've created this API which receives a character name and scrapps tibia website bringing general informations about the character.

## Tecnhologies used
The first version was wrote using a simple POST. But now, I refactored to use GraphQL. You can use the panel to check it out the informations and make queries or you can consume it by a HTTP POST. Following the explanation to use both methods.

## API

### GraphQL Panel

- URL: [https://api-tibia.herokuapp.com/graphql/player](https://api-tibia.herokuapp.com/graphql/player)

To consult a player informations using this panel, you must write a query passing the character name and which informations you'd like to receive, for example:

```graphql
query{
  character(characterName: "mad dentist") {
    name
    sex
    vocation
    level
    achievmentPoint
    world
    residence
    lastLogin
    accountStatus
  }
}
```
And you'll receive a JSON like this:
![Imgur](https://i.imgur.com/vYhsU2o.png)


### REST: Post
- URL: [https://api-tibia.herokuapp.com/graphql/player](https://api-tibia.herokuapp.com/graphql/player)

To consume this API using HTTP POST, you must send a **header** requiring an 'application/json' and send a JSON with one key (query) and the same query made on GraphQL panel. 

```json
{
	"query": "{ character(characterName: \"mad dentist\") {name sex vocation level achievmentPoint world residence lastLogin } }"
}
```

How we can see, it's the same query, but just in one line.

## Response 
### Character Info
```json
{
    "data": {
        "character": {
            "name": "String",
            "sex": "String",
            "vocation": "String",
            "level": "String",
            "achievmentPoint": "String",
            "world": "String",
            "residence": "String",
            "lastLogin": "String"
        }
    }
}
```

## Contributing
Want to contribute? [Follow these recommendations.](https://github.com/raulfdm/tibia-api/blob/master/CONTRIBUTING.md)

## LICENCE
[MIT License](https://github.com/raulfdm/tibia-api/blob/master/LICENSE) © [Raul F. de Melo](https://rauldemelo.com.br/)