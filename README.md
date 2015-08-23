# cred-stack
This will become my own personal web development stack that makes use of technologies that I enjoy and believe in. Many of these technologies are still in their early stages so it may take some time to produce a stack that is production ready.

![Screenshot](https://raw.githubusercontent.com/CooCooCaCha/cred-stack/master/demo.png)

## What does it stand for?
C - CockroachDB

R - React/Redux (and eventually Relay!)

E - Express

D - Docker

## Guiding principles
1. Treating the data center as a single computer is the future.
2. The same technologies should be useful and scalable from dev environments to small deployments to large deployments.
3. Small, composable libraries instead of large frameworks. These libraries should be focused and do their respective job well.
4. Cloud-provider agnostic. I don't want to be tied down to any specific cloud provider.

## Why these technologies?
####CockroachDB
SQL, ACID, and transactions are extremely useful for applications although they have proven difficult to scale. This is the origin of the NoSQL movement. However, ever since Google's Spanner paper it has become apparent that we can have our cake and eat it too. We can have the scalability of NoSQL and the features of SQL databases. CockroachDB is currently the most promising application of these ideas that I have seen.

####React
I really respect the bold departure from the status quo that the facebook team has taken. This has resulted in a small, compact library that avoids the complexity of other front-end frameworks. It also has the added benefit of easy server-side rendering, and support for mobile development through react-native.

####Redux
A flux framework that radically rethinks the traditional ideas of flux. I love the simplicity of this library. It also incorporates ideas from functional programming which is always a big plus for me :)

####Express
Not particularly ground-breaking but still a nice and simple server-side library. It has a huge community and integrates very well with the webpack dev server.

####Docker
This includes Docker-Machine, Docker-Swarm, and Docker-Compose. These tools make it very easy to break your application into small components, develop them, and deploy them easily to a single machine or cluster of machines. Specifically, Docker-Swarm enables you to treat a bunch of servers as a single server. This abstraction is powerful and directly enables my first guiding principle.

## Status
This project is just an idea at this point. I have a personal project that I have been using to test out some of these technologies. I would like to eventually remove the application specific code and move it to this project.

## Future Enhancements
1. Incorporate Kubernetes. This will allow things like simple, automatic load-balancing of services and help with the problem of service discovery.
2. Switch from Redux to Relay. I love Redux but Relay attempts to solve some very difficult probelems that Redux does not address. In the future it would be great to use both together but that isn't really doable at the moment.
