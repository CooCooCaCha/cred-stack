# CRED-stack
This is a forward-thinking web application stack. As such, it uses technologies that are extremely new but also exremely promising. Definitely not production ready yet and still a work in progress.

With that said, these technologies should enable very powerful application scalability all the way from your laptop to a small server cluster and to a large server cluster. This is enabled by using server technologies that are linear and horizontally scalable. This means that you should be able to scale your cluster by just adding cheap servers with commodity hardware and each new server should increase your scalability by the same amount. Theoretically, this allows you to scale your application as long as you have the resources to keep adding new machines.

## What's in a name?
C - CockroachDB

R - React/Redux (and eventually Relay!)

E - Express

D - Docker

## Getting Started
After installing you should be able to view a simple todo application on http://localhost:8080
![Screenshot](https://raw.githubusercontent.com/CooCooCaCha/cred-stack/master/demo.png)

### Installing:
1. Make sure docker and docker compose are installed. For OSX and Windows users the Docker Toolbox is recommended.
2. If you are using OSX or Windows you will also need a virtual machine to run Docker. Docker Machine and Vagrant should both work just fine.
3. Git clone this repository.
4. From the root directory run `docker-compose up`.

### Developing your application
The stack uses hot-reloading server-side and client-side to speed up development. This means that if you edit a file the server or client should reload automatically. This is enabled by webpack client-side and piping server-side.

## Goals
1. Treat server clusters as a single, huge computer and deploy containers.
2. Provide tools to enable local development and easy deployment to a cluster of almost any size.
3. Utilize small, simple, and composable libraries instead of monolithic frameworks.
4. Cloud-provider agnostic. A developer should be able to easily switch to AWS, Google Cloud, DigitalOcean, etc.

## Why these technologies?
####CockroachDB
SQL, ACID, and transactions are extremely useful for applications although they have proven difficult to scale. This is the origin of the NoSQL movement. However, ever since Google's Spanner paper it has become apparent that we can have our cake and eat it too. We can have the scalability of NoSQL and the features of SQL databases. CockroachDB is currently the most promising application of these ideas that I have seen.

####React
I really respect the bold departure from the status quo that the facebook team has taken. This has resulted in a small, compact library that avoids the complexity of other front-end frameworks. It also has the added benefit of easy server-side rendering, and support for mobile development through react-native.

####Redux
A flux framework that radically rethinks the traditional ideas of flux. I love the simplicity of this library. It also incorporates ideas from functional programming which is always a big plus for me :)

####Express
Not particularly new but still a nice and simple server-side library. It has a huge community and integrates very well with the webpack dev server. It is worth looking into Go eventually but Express works well for now.

####Docker
This includes Docker-Machine, Docker-Swarm, and Docker-Compose. These tools make it very easy to break your application into small components, develop them, and deploy them easily to a single machine or cluster of machines. Specifically, Docker-Swarm enables you to treat a bunch of servers as a single server. This abstraction is powerful and directly enables the first goal.

## Status
The stack is now working with the four main technologies that make up the title of this stack. It is still very rough around the edges and needs work on deployment, making it production ready, and switching to CockroachDB's SQL interface instead of the raw key-value interface.

## Future Enhancements
1. Incorporate Kubernetes. This will allow things like simple, automatic load-balancing of services and help with the problem of service discovery.
2. Switch from Redux to Relay or Falcor. I love Redux but Relay/Falcor attempts to solve some very difficult probelems that Redux does not address. In the future it would be great to use both together but that isn't really doable at the moment.
3. Use a docker networking plugin. This should allow easy networking between docker runtimes on different machines.
4. Use a docker storage plugin. This should help with managing stateful containers such as databases.
