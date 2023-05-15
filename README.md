# Simple Load Balancing

A simple project to implementing Load Balancing using Nginx + Node JS + Docker.

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

## FYI
The service is running for **6 ports (3300 - 3305)**, which whole of the services is connect to the _proxy_, and the api only can be accessed throught the proxy servers with the specific custom header that already define in the container of _API Service_.

Check the results :

- [http://127.0.0.1:3300](http://127.0.0.1:3300) 
- [http://127.0.0.1:3301](http://127.0.0.1:3301) 
- [http://127.0.0.1:3302](http://127.0.0.1:3302) 
- [http://127.0.0.1:3303](http://127.0.0.1:3303) 
- [http://127.0.0.1:3304](http://127.0.0.1:3304) 
- [http://127.0.0.1:3305](http://127.0.0.1:3305) 

## Authors
- [@KILLYOURGUTS](https://github.com/KILLYOUGUTSXXX)

## Tech Stack

[![My Skills](https://skillicons.dev/icons?i=nginx,nodejs,docker,bash,javascript,vscode,html,vim)](https://skillicons.dev)



## License

[MIT](https://choosealicense.com/licenses/mit/)