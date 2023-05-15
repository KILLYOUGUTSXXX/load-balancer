# Simple Load Balancing

A simple implementing of Load Balancing using Nginx + Node JS + Docker.

## Installation
Make sure you already install the docker & docker-compose,
and clone the repository.


```bash
# 1. build the images.
  docker-compose build

# 2. create & start the containers, and run it in the backround
  docker-compose up -d

# 3. make sure the containers is ready.
  docker container ls --filter="name=my-*"
```

## Usage

_Round Robin Load Balancing :
[http://127.0.0.1](http://127.0.0.1)_

_Cache Request :
[http://127.0.0.1/cache](http://127.0.0.1/cache)_


## Tech Stack

[![My Skills](https://skillicons.dev/icons?i=nginx,nodejs,docker,bash,javascript,vscode,html,vim)](https://skillicons.dev)

## License

[MIT](https://choosealicense.com/licenses/mit/)