# POKEDECK

## Link To Live App

https://pokedeck-game.herokuapp.com/

## Description

How would you like to have all your Pokemon cards and carry them with you everywhere? Here at Squirtle Squad we’ve created Pokedeck, THE Pokemon trading card app of the future, where anyone from 6 and up can virtually collect any iconic Pokemon card that they've ever dreamed of. When you first start off, you get a booster pack of 10 cards. And every day that you log in, you get a free card to add to your collection. As a collector, you will compete against other collectors to create the highest value deck, so put those cards down and step into the future with Pokedeck.


## Configuration
```
$ git clone

$ cd pokedeck_capstone_app

$ bundle

$ yarn
```
## Database Creation
```
$ rails db:create

$ rails db:migrate
```
## Database Initialization
```
$ rails db:seed
```
## Start Server
```
$ rails s
```
## Troubleshooting

> For: "can't find react-howler module"

Recommendation is to run the following in terminal:
```
$ yarn upgrade
```

## Testing
For Backend
```
$ rspec spec
```
For Frontend
```
$ yarn test
```
