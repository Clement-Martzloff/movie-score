# MovieScore

The company MovieScore wishes to give a voice to Internet users in their allowing them to choose the movie they prefer. Each user can choose up to 3 movies, but they cannot vote twice for the same movie.

## Purpose

The purpose of this application is to practice code to develop different standard functionalities. Please note that this is a project under development :pray:

## Back-end targeted features

- [x] Create an user
- [x] Authenticate an user
- [x] Search movies from the omdbApi
- [x] Upvote for a movie
- [ ] Downvote for a movie
- [x] Get the top 3 voted movies
- [x] Get a user's movie choices
- [ ] Get the users who have chosen a movie

## Front-end targeted features

- [x] Sign in
- [x] Sign up
- [ ] Log out
- [x] Search movies from the omdbApi
- [x] Display the number of votes per movie
- [x] Upvote for a movie
- [ ] Downvote for a movie
- [ ] Show the detail of a movie
- [ ] List the top 3 voted movies
- [ ] list a user's movie choices
- [ ] list the users who have chosen a movie

## Technical goals

Create an event-driven architecture that uses events to trigger and communicate between decoupled services as in modern applications built with microservices. Use the latest version of the Relay client, in particular to update the UI via server notifications ! :fire:

## Installation

- Use the package manager [yarn](https://yarnpkg.com/) to install all the dependencies of MovieScore.
- Use the container solution [Docker](https://www.docker.com/) to connect to your database. Please, find the required images in the [docker-compose.yaml](back/docker-compose.yml).

### back-end

```bash
cd back/
yarn install
```

### front-end

```front
cd front/
yarn install
```

## Run the project

Use the package manager [yarn](https://yarnpkg.com/) to run MovieScore.

### back-end

```bash
cd back/
yarn start:dev:local
```

### front-end

```bash
cd front/
yarn start
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
