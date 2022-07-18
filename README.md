# Battleship

A web remake of the classic board game.

Main project in the Testing Javascript section of the NodeJS path in [The Odin Project](https://www.theodinproject.com).

You may find project specifications and other details on the [project page](https://www.theodinproject.com/lessons/node-path-javascript-battleship).

## Demo

![App demo gif](./battleship-demo.gif?raw=true)

## Features

- Click-to-place pre-game ship setup.
- Randomly attacking AI opponent.
- Straightforward coloring scheme - green is a hit, red is a miss.

## Live demo

Go to the [deployed project](https://fredrikb12.github.io/battleship/) to try it out!

## Possible improvements

### UI / UX
- Improve feedback when player and computer make attacks.
- Implement drag-and-drop for ship placement.
- Add proper responsiveness for various screen sizes.
- Develop restarting functionality without refreshing.

### Code

- Refactor multiple code sections that became difficult to deal with.
- Improve game loop significantly by reducing code inside event listener.

## Reflections

This project was built with a TDD philosophy in mind, making sure that the Ship, Gameboard, and Player objects all function as expected. Such an approach allows for simpler refactoring, as you can be sure that your code is still doing the same thing as before.

Despite the TDD approach, there eventually comes a point where the codebase is difficult to deal with. This happened toward the end, when trying to create the necessary DOM functionality, and handling edge cases for ship placement. In general, a few methods create most of the difficulty to work with the codebase, and simplifying that logic would improve the project significantly. 

As this was the first large TDD project, I'm sure many things can be improved -- however, it's clear to me that there are large benefits to testing, as it forces you to write small, testable functions that generally only have one purpose.

## Contact

Foole#9692 on Discord

## Developer Portfolio

[fredrikb12.dev](https://fredrikb12.dev)
