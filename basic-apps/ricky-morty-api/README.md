# Ricky and Morty API

This is a simple API that returns information about the characters of the TV show "Ricky and Morty".

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Screenshots

![Screenshot](https://raw.githubusercontent.com/elyin/ricky-and-morty-api/master/screenshot.png)

## Endpoints

### GET /api/character

Returns a list of characters.

#### Parameters

| Name    | Type   | Description                  |
| ------- | ------ | ---------------------------- |
| name    | string | Filter by character name.    |
| status  | string | Filter by character status.  |
| species | string | Filter by character species. |

#### Example

```bash
curl -X GET "https://rickandmortyapi.com/api/character/?name=rick&status=alive"
```

### GET /api/character/{id}

Returns a single character.

#### Parameters

| Name | Type | Description              |
| ---- | ---- | ------------------------ |
| id   | int  | The id of the character. |

#### Example

```bash
curl -X GET "https://rickandmortyapi.com/api/character/1"
```

### GET /api/character/{id}/episode

Returns a list of episodes in which the character appears.

#### Parameters

| Name | Type | Description              |
| ---- | ---- | ------------------------ |
| id   | int  | The id of the character. |

#### Example

```bash
curl -X GET "https://rickandmortyapi.com/api/character/1/episode"
```

### GET /api/character/{id}/location

Returns the location in which the character was last seen.

#### Parameters

| Name | Type | Description              |
| ---- | ---- | ------------------------ |
| id   | int  | The id of the character. |

#### Example

```bash
curl -X GET "https://rickandmortyapi.com/api/character/1/location"
```

## Contributing

Feel free to contribute to this project by submitting a pull request.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments

- [Rick and Morty API](https://rickandmortyapi.com/)
- [Rick and Morty](https://www.adultswim.com/videos/rick-and-morty)

## Author

- **Adrián Arribas** - _Initial work_ - [elyin]
