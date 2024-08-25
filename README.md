<div align="center">
	<img width="500" height="350" src="media/awesome_moleculer.svg" alt="logo of awesome-moleculer repository">
	<br>
	<p>
		<a href="https://moleculer.services/support.html">Moleculer is supported by the community</a>
	</p>
	<br>
</div>

# Awesome Moleculer [![Mentioned in Awesome Node.js](https://awesome.re/mentioned-badge.svg)](https://github.com/sindresorhus/awesome-nodejs)

> A list of awesome things related to Moleculer microservices framework

- [Resources](#resources)
    - [Official Resources](#official-resources)
    - [Cheatsheets](#cheatsheets)
    - [Articles and Blog Posts](#articles-and-blog-posts)
    - [Videos](#videos)
- [Examples](#examples)
    - [Repositories](#repositories)
    - [Sandboxes on Codesandbox.io](#sandboxes-on-codesandboxio)
- [Templates](#templates)
    - [Javascript](#javascript)
    - [Typescript](#typescript)
- [Services](#services)
    - [Gateway](#gateway)
    - [Databases and Stores](#databases-and-stores)
    - [Metrics and Tracing](#metrics-and-tracing)
    - [General](#general)
    - [Security, Authentication and Authorization](#security-authentication-and-authorization)
    - [Others](#others)
- [Middlewares](#middlewares)
    - [General](#general)
    - [Security](#security)
    - [Database](#database)
- [Mixins](#mixins)
    - [General](#general)
    - [Database](#database)
    - [Tasks, Queues and Jobs](#tasks-queues-and-jobs)
    - [Validation](#validation)
    - [GraphQL](#graphql)
- [Tools](#tools)
- [Polyglot Implementations](#polyglot-implementations)
    - [Java](#java)
    - [Python](#python)
    - [Go](#go)
    - [Ruby](#ruby)
- [Companies Using Moleculer](#companies-using-moleculer)

## Resources
### Official Resources
- [Website](https://moleculer.services/) 
- [Docs](https://moleculer.services/docs) 
- [Blog](https://medium.com/moleculer) 
- [Discord chat](https://discord.gg/TSEcDRP) 
- [Twitter](https://twitter.com/MoleculerJS) 
- [Stack Overflow](https://stackoverflow.com/questions/tagged/moleculer) 
- [Telegram [Russian Community]](https://t.me/moleculerchat) 
### Cheatsheets
- [Core Cheatsheets](https://github.com/moleculerjs/moleculer-cheatsheets/blob/master/moleculer.js)  - Cheatsheet for Moleculer's core functionalities.
- [Web Gateway Cheatsheets](https://github.com/moleculerjs/moleculer-cheatsheets/blob/master/moleculer-web.js)  - Cheatsheet for official gateway
- [DB Cheatsheets](https://github.com/moleculerjs/moleculer-cheatsheets/blob/master/moleculer-db.js)  - Cheatsheet for official DB adapters
- [REPL Cheatsheets](https://github.com/moleculerjs/moleculer-cheatsheets/blob/master/moleculer-repl.sh)  - Cheatsheet for official RELP tool
- [CLI Cheatsheets](https://github.com/moleculerjs/moleculer-cheatsheets/blob/master/moleculer-cli.sh)  - Cheatsheet for Moleculer's command-line interface (CLI)
### Articles and Blog Posts
- [Moleculer v0.14 — Making Microservices Accessible for Everyone](https://medium.com/moleculer/moleculer-v0-14-making-microservices-accessible-for-everyone-eadeefa5156c) 
- [Bundle your Moleculer project into an executable](https://medium.com/moleculer/bundle-your-moleculer-project-into-an-executable-4f5576be7cae) 
- [5 easy steps to create your REST microservice in NodeJS](https://medium.com/moleculer/5-easy-steps-to-create-your-rest-microservice-in-nodejs-94aede3249fc) 
- [What are microservices and how to create one with Node and Moleculer.js](https://medium.com/@r.heygate.dev/microservices-with-moleculer-js-c7e68803ec09) 
- [Moleculer — deployment thoughts](https://dankuida.com/moleculer-deployment-thoughts-8e0fc8c0fb07) 
- [Знакомимся с микросервисным фреймворком Moleculer](https://habr.com/en/post/439810/)  - [The article is in Russian]
- [Building microservices architecture with Node.js and Moleculer](https://www.merixstudio.com/blog/microservices-nodejs-moleculer) 
- [Moleculer First Project](https://medium.com/@rzvdaniel_71068/moleculer-first-project-50d60fd5bc70) 
- [Moleculer Routing](https://medium.com/@rzvdaniel_71068/moleculer-routing-3c6c7cb29ddb) 
- [Moleculer Mixins](https://medium.com/@rzvdaniel_71068/moleculer-mixins-a-short-introduction-a69f053148f5) 
- [Control as a Service - A Microservice Approach to Industry 4.0](https://ieeexplore.ieee.org/document/8792918) 
- [Scaling Electron.js application with Microservices](https://medium.com/@bushevuv/scaling-electron-js-application-with-microservices-c9d73718a882) 
- [MoleculerJS Is Your NodeJS Framework For Microservices](https://wiredelta.com/moleculerjs-framework-for-nodejs/) 
- [Get Started with Moleculer microservices framework](https://medium.com/@joesithixaydouangchak/get-started-with-moleculer-microservices-framework-eddffb1ccb2e) 
- [Develop Ecommerce features using Microservice architecture](https://medium.com/swlh/moleculer-develop-ecommerce-features-using-microservice-architecture-37a4a0d48788) 
- [Escribiendo microservicios con Moleculer](https://pablomagaz.com/blog/escribiendo-microservicios-con-moleculer)  - [The article is in Spanish]
- [How to host Moleculer in Firebase](https://medium.com/@rzvdaniel_71068/how-to-host-moleculer-in-firebase-fd36fa4e91f7) 
### Videos
- [Microservices 4 Real - Martín Acosta](https://www.youtube.com/watch?v=FrL8at9qGrQ)  - Talk _in Spanish_ from the JSDayUY 2017 about how a developer that used to work on monolithic apps started to learn and create a complete production app using a microservices architecture on top of Moleculer. [repo](https://github.com/tinchoz49/microservices-for-real)
- [An Introduction to Moleculer JS](https://www.youtube.com/watch?v=t4YR6MWrugw)  - Video tutorial explaining Moleculer's core concepts and [template project](https://moleculer.services/docs/0.13/usage.html#Create-a-Moleculer-project)
- [Обзор MoleculerJS](https://www.youtube.com/watch?v=H8gl5IpDWKA)  - The video is in Russian
- [Microsserviços - Atualizando seu legado de maneira progressiva](https://youtu.be/7jlCgFhdqP0?t=1899)  - The video is in Portuguese
- [Introdução ao MoleculerJS](https://www.youtube.com/watch?v=CMMtK98ZL70)  - The video is in Portuguese
- [Moleculer JS tutorial](https://www.youtube.com/watch?v=zILVISG8qh0) 
- [HolyJS 2021 Moscow - MoleculerJS](https://www.youtube.com/watch?v=9c11ENScAtc)  - MoleculerJS high-load, fault tolerance and distributed microservices [HolyJS conference](https://holyjs-moscow.ru/talks/moleculerjs-high-load-fault-tolerance-and-distributed-microservices/) in Russian with transcription
## Examples
### Repositories
- [Conduit](https://github.com/moleculerjs/moleculer-examples/tree/master/conduit)  - Moleculer + Moleculer Web + Moleculer-DB + MongoDB + JWT + Redis Cacher + Docker
- [Blog](https://github.com/moleculerjs/moleculer-examples/tree/master/blog)  - Moleculer + ExpressJS + Pug + Moleculer-DB + Mongoose + NATS + Redis Cacher + Traefik
- [Kantab - A Kanban board application](https://github.com/icebob/kantab)  - Moleculer + Moleculer Web + Full authentication + ACL/RBAC + VueJS + VueX + Vue-router + Much much more
- [Moleculer + Babel Example Starter](https://github.com/tinchoz49/moleculer-babel-example) 
- [moleculer-nextjs](https://github.com/davidroman0O/moleculer-nextjs)  - Server-Side Rendering with Moleculer
- [nestjs-moleculer](https://github.com/jiangzhuo/nestjs-moleculer)  - Moleculer Module For Nestjs Framework
- [moleculer-docker-development](https://github.com/funcode50/moleculer-docker-development)  - Simple development enviroment for moleculer with Docker
- [moleculer-exploration](https://github.com/simsieg/Moleculer-exploration)  - Simple microservices communicating via MoleculerJS.
- [moleculer-mysql-template](https://github.com/AGenson/moleculer-mysql-template)  - Moleculer template for creating a secure web api, with a remote MySQL database, and a default account management.
- [moleculerjs-boilerplate](https://github.com/pankod/moleculerjs-boilerplate)  - A well-structured Moleculer JS Boilerplate with Typescript, CLI, Service Helpers, Swagger, Jest support and everything you'll ever need to deploy rock solid projects.
- [StretchShop](https://github.com/Wradgio/StretchShop)  - Fast & scalable e-business REST API backend based on Moleculer framework, which makes it easy to run as monolithic or microservices application.
- [Catalyst](https://github.com/derekbar90/catalyst)  - NodeJS Microservices Boilerplate - Typescript NodeJS Microservices Boilerplate with Generator CLI - Moleculer, GraphQL, REST, OAuth2, Jaeger, Grafana, Prometheus, Ory Hydra, Ory Keto w/ Access Control middleware, Moleculer-DB GraphQL mixin, Pug, Redis, sibling client repo (login, persistance layer, react-native-web, ios, android)
- [Cards Against Formality](https://github.com/jordanpawlett/cards-against-formality-services)  - Cards Against Formality aims to be a web based clone of the popular card game "Cards against humanity". TypeScript + Kubernetes + Skaffold + authorization + scaled socket connections
- [Tailchat](https://github.com/msgbyte/tailchat)  - A Open Source and pluggable IM application which build with MiniStart and Moleculer. Inspired by Discord.
### Sandboxes on Codesandbox.io
- [Simple project](https://codesandbox.io/s/github/moleculerjs/sandbox-moleculer-project)  - Moleculer + Moleculer Web + Greeter service
- [API routing example](https://codesandbox.io/s/github/moleculerjs/sandbox-moleculer-api-routing)  - Moleculer + Moleculer Web + Routing examples
- [Moleculer DB example](https://codesandbox.io/s/github/moleculerjs/sandbox-moleculer-db)  - Moleculer + Moleculer Web + Moleculer DB
## Templates
### Javascript
- [moleculer-template-project](https://github.com/moleculerjs/moleculer-template-project)  - Project template for Javascript project.
- [moleculer-template-nano](https://github.com/moleculerjs/moleculer-template-nano)  - Minimal project template for Javascript project.
- [moleculer-template-addon](https://github.com/moleculerjs/moleculer-template-addon)  - Addon template for moleculer-addons
- [moleculer-template-module](https://github.com/moleculerjs/moleculer-template-module)  - Simple module template for [moleculer-cli](https://moleculer.services/docs/moleculer-cli.html). _Use it if you want to create a module for Moleculer_
### Typescript
- [moleculer-template-project-typescript](https://github.com/moleculerjs/moleculer-template-project-typescript)  - Project template for Typescript project.
- [moleculer-template-nano-typescript](https://github.com/moleculerjs/moleculer-template-nano-typescript)  - Minimal project template for Typescript project.
- [moleculer-template-project-ts](https://github.com/d0whc3r/moleculer-template-project-ts)  - Project template for typescript including decorators and more
- [moleculer-template-project-ts-swagger](https://github.com/ourparentcenter/moleculer-template-project-ts-swagger)  - Starter template for moleculer with swagger
## Services
### Gateway
- [moleculer-web](https://github.com/moleculerjs/moleculer-web#readme)![Official Moleculer Module][official]  - Official API Gateway service.
- [moleculer-apollo-server](https://github.com/moleculerjs/moleculer-apollo-server)![Official Moleculer Module][official]  - [Apollo GraphQL](https://www.apollographql.com/) server for Moleculer.
- [moleculer-sc](https://github.com/tiaod/moleculer-sc#readme)  - API Gateway using [SocketCluster](https://socketcluster.io)
- [moleculer-io](https://github.com/tiaod/moleculer-io)  - Socket.IO-based gateway
- [moleculer-socketio](https://github.com/davidroman0O/moleculer-socketio)  - Manage Socket.IO events like actions in services
- [hapi-moleculer](https://github.com/felipegcampos/hapi-moleculer)  - [Hapi](https://hapijs.com/) plugin for the Moleculer.
- [moleculer-grpc-api](https://github.com/brunonunes/moleculer-grpc-api)  - [gRPC](https://grpc.io/) server for Moleculer.
- [moleculer-web-uws](https://github.com/jimmielovell/moleculer-web-uws)  - A fast API gateway based on [uWebSockets.js](https://github.com/uNetworking/uWebSockets.js)
### Databases and Stores
- [moleculer-db](https://github.com/moleculerjs/moleculer-db/tree/master/packages/moleculer-db#readme)![Official Moleculer Module][official]  - A [NeDB](https://github.com/louischatriot/nedb)-based service to persist your data
- [moleculer-db-adapter-mongo](https://github.com/moleculerjs/moleculer-db/tree/master/packages/moleculer-db-adapter-mongo#readme)![Official Moleculer Module][official]  - A [MongoDB](https://mongodb.github.io/node-mongodb-native/)-based service to persist your data
- [moleculer-db-adapter-mongoose](https://github.com/moleculerjs/moleculer-db/tree/master/packages/moleculer-db-adapter-mongoose#readme)![Official Moleculer Module][official]  - A [Mongoose](https://mongoosejs.com/)-based service to persist your data
- [moleculer-db-adapter-sequelize](https://github.com/moleculerjs/moleculer-db/tree/master/packages/moleculer-db-adapter-sequelize#readme)![Official Moleculer Module][official]  - A [Sequelize](http://docs.sequelizejs.com/)-based service to persist your data
- [moleculer-db-adapter-couchdb-nano](https://github.com/moleculerjs/moleculer-db/tree/master/packages/moleculer-db-adapter-couchdb-nano#readme)![Official Moleculer Module][official]  - A [CouchDB](http://couchdb.apache.org/) adapter for Moleculer using nano.js
- [moleculer-db-adapter-typeorm](https://github.com/dkuida/moleculer-db-adapter-typeorm#readme)  - A [TypeORM](http://typeorm.io/)-based service to persist your data
- [moleculer-db-adapter-dynamodb](https://github.com/katsanva/moleculer-db-adapter-dynamodb)  - A [DynamoDB](https://aws.amazon.com/dynamodb/) adapter for Moleculer DB service
- [moleculer-gundb](https://github.com/smart-matrix/moleculer-gundb)  - A [GunDB](https://gun.eco) mixins for Moleculer DB service.
- [moleculer-db-adapter-rethinkdb](https://github.com/cantecim/moleculer-db-adapter-rethinkdb)  - A [RethinkDB](https://www.rethinkdb.com/) Moleculer service mixin.
- [moleculer-db-adapter-macrometa](https://github.com/moleculerjs/moleculer-db-adapter-macrometa)![Official Moleculer Module][official]  - [MacroMeta](https://www.macrometa.com/) adapter for Moleculer DB service.
- [moleculer-db-adapter-orientdb](https://github.com/saeedtabrizi/moleculer-db-adapter-orientdb)  - Moleculer [orientDB](https://orientdb.org/) database adapter.
- [moleculer-db-adapter-prisma](https://github.com/noluckjustskill/moleculer-db-adapter-prisma)  - SQL adapter for Moleculer DB service with Prisma.
- [moleculer-mongobubble](https://www.npmjs.com/package/moleculer-mongobubble)  - A Moleculer module for generating CRUD services using 🍃🫧 [MongoBubble](https://mongobubble.com/).
- [moleculer-db-adapter-scylla](https://github.com/azita-abdollahi/moleculer-db-adapter-scylla#readme)  - A [scyllaDb](https://www.scylladb.com/) adapter for Moleculer using [express-cassandra](https://www.npmjs.com/package/express-cassandra).
### Metrics and Tracing
- [moleculer-console-tracer](https://github.com/moleculerjs/moleculer-metrics/tree/master/packages/moleculer-console-tracer#readme)![Official Moleculer Module][official]  - Console-based service
- [moleculer-jaeger](https://github.com/moleculerjs/moleculer-metrics/tree/master/packages/moleculer-jaeger#readme)![Official Moleculer Module][official]  - [Jaeger](https://www.jaegertracing.io/)-based metrics service
- [moleculer-prometheus](https://github.com/moleculerjs/moleculer-metrics/tree/master/packages/moleculer-prometheus#readme)![Official Moleculer Module][official]  - [Prometheus](https://prometheus.io/)-based metrics service
- [moleculer-zipkin](https://github.com/moleculerjs/moleculer-metrics/tree/master/packages/moleculer-zipkin#readme)![Official Moleculer Module][official]  - [Zipkin](https://zipkin.io/)-based metrics service
- [moleculer-elastic-apm](https://github.com/intech/moleculer-elastic-apm#moleculer-elastic-apm)  - [Elastic APM](https://www.elastic.co/solutions/apm)-based metrics service
- [moleculer-sentry](https://github.com/YourSoftRun/moleculer-sentry#readme)  - [Sentry](https://sentry.io/)-based error logging
### General
- [moleculer-fake](https://github.com/moleculerjs/moleculer-addons/tree/master/packages/moleculer-fake#readme)![Official Moleculer Module][official]  - Fake data generator by [Fakerator](https://github.com/icebob/fakerator)
- [moleculer-mail](https://github.com/moleculerjs/moleculer-addons/tree/master/packages/moleculer-mail#readme)![Official Moleculer Module][official]  - Email service based on [Nodemailer](https://nodemailer.com/about/)
- [moleculer-twilio](https://github.com/moleculerjs/moleculer-addons/tree/master/packages/moleculer-twilio#readme)![Official Moleculer Module][official]  - SMS service based on [Twilio API](https://www.twilio.com/docs/usage/api)
- [moleculer-slack](https://github.com/moleculerjs/moleculer-addons/tree/master/packages/moleculer-slack#readme)![Official Moleculer Module][official]  - Send Messages to [Slack API](https://api.slack.com/)
- [moleculer-elasticsearch](https://github.com/moleculerjs/moleculer-addons/tree/master/packages/moleculer-elasticsearch)![Official Moleculer Module][official]  - [Elasticsearch](https://www.elastic.co/) service for Moleculer.
- [moleculer-flydrive](https://github.com/molobala/moleculer-flydrive#readme)  - Storage manager service with [Node Flydrive](https://github.com/Slynova-Org/node-flydrive).
- [moleculer-markdown](https://github.com/alsofronie/moleculer-markdown#readme)  - Markdown to HTML Service
- [moleculer-typetalk](https://github.com/is2ei/moleculer-typetalk#readme)  - Send Messages to [Typetalk](https://www.typetalk.com)
- [moleculer-data-provider](https://github.com/RancaguaInnova/moleculer-data-provider)  - React-Admin Data provider to interact with Moleculer Services APIs
### Security, Authentication and Authorization
- [moleculer-protect-services](https://github.com/icebob/moleculer-protect-services)![Official Moleculer Module][official]  - [JWT](https://jwt.io/) protection for service actions
- [imicros-auth](https://github.com/al66/imicros-auth)  - Authentication, Authorization and ACL services
- [moleculer-antivirus](https://github.com/designtesbrot/moleculer-antivirus)  - Service for [ClamAV](https://www.clamav.net/) Antivirus Scanning
- [moleculer-vault](https://github.com/designtesbrot/moleculer-vault)  - Service for [HashiCorp's Vault](https://www.vaultproject.io/)
- [oauth-moleculer](https://github.com/zerocowl/oauth-moleculer)  - [OAuth2](https://oauth.net/2/) Service
- [moleculer-iam](https://github.com/qmit-pro/moleculer-iam)  - Centralized IAM module for moleculer.
### Others
- [imicros-flow](https://github.com/al66/imicros-flow)  - Service for loose coupled event handling
- [serverless-moleculer](https://github.com/davidroman0O/serverless-moleculer)  - Serverless Framework handler for Moleculer
- [moleculer-state-machine](https://github.com/fugufish/moleculer-state-machine#readme)  - State Machine mixin that extends a Moleculer Service to act as a finite-state machine.
- [moleculer-minio](https://github.com/designtesbrot/moleculer-minio)  - Service providing actions for managing buckets and objects in an AWS S3 or [Minio](https://www.minio.io/) powered backend
- [moleculer-aws-s3](https://github.com/bitcomposer/moleculer-aws-s3)  - Service providing actions for managing buckets and objects in AWS S3 using the AWS S3 v3 JS client library
- [moleculer-segment](https://github.com/winoteam/moleculer-segment)  - Service for [Segment](https://segment.com/)
- [moleculer-sharp](https://github.com/designtesbrot/moleculer-sharp)  - A Moleculer Service for Image Manipulation using [sharp](http://sharp.pixelplumbing.com/en/stable/)
- [moleculer-cls](https://github.com/cupsadarius/moleculer-cls)  - Hooked Continuation-Local Storage for Moleculer
- [moleculer-insee-sirene](https://github.com/YourSoftRun/moleculer-insee-sirene)  - Service for [INSEE Sirene API](https://api.insee.fr/catalogue/). An API with info about all French companies
- [moleculer-http-client](https://github.com/AndreMaz/moleculer-http-client)  - HTTP client mixin that allows Moleculer services to communicate with remote REST APIs
- [moleculer-axios](https://github.com/adam-mccormick/moleculer-axios)  - Axios based HTTP client for Moleculer services
- [moleculer-browser](https://github.com/geut/moleculer-browser)  - Moleculer for the browser.
- [moleculer-stripe](https://github.com/YourSoftRun/moleculer-stripe)  - Service for [Stripe](https://stripe.com/)
- [node-red-contrib-moleculer](https://github.com/chameleonbr/node-red-contrib-moleculer#readme)  - Node Red client for Moleculer with events, emit, call, request and response support.
- [moleculer-pdf](https://github.com/olivmonnier/moleculer-pdf)  - A [Puppeteer](https://github.com/GoogleChrome/puppeteer)-based Moleculer service that generates PDF from HTML.
- [moleculer-discord](https://www.npmjs.com/package/moleculer-discord)  - Discord Gateway for Moleculer.js framework.
- [dns](https://github.com/FLYBYME/dns)  - DNS nameserver, DNS over HTTPS, DNS resolver
- [moleculer-i18n](https://github.com/teamcodeyard/moleculer-i18n)  - Server side i18n support based on [Polyglot](https://www.npmjs.com/package/node-polyglot)
- [moleculer-gql-client](https://github.com/kyleplump/moleculer-gql-client)  - Mixin that allows Moleculer services to perform GraphQL requests
## Middlewares
### General
- [Inter-namespace](https://gist.github.com/icebob/c0bce54436379d29c1bee8521ceb5348)  - This middleware can connect to other namespaces.
- [Saga middleware PoC](https://gist.github.com/icebob/c75d4d532c0d7783eb924a96110b9020)  - Proof of Concept of SAGA pattern.
- [Health-check middleware](https://github.com/r2d2bzh/moleculer-healthcheck-middleware)  - Health-check middleware for Moleculer (for Kubernetes liveness readiness checks)
- [Tracing Moleculer methods](https://gist.github.com/intech/503facbc5320056d8f327070557fdf31)  - Tracing Moleculer methods with context support via `async_hooks`. (App speed degradation!)
### Security
- [moleculer-middleware-permissions](https://github.com/Embraser01/moleculer-middleware-permissions)  - A middleware solution to validate permissions of a request.
- [moleculer-keto](https://github.com/derekbar90/moleculer-keto)  - [Ory Keto](https://www.ory.sh/keto/docs/) Middleware and Mixin for an extensible permissions layer. [NPM](https://www.npmjs.com/package/@thesatoshicompany/moleculer-keto)
### Database
- [moleculer-middleware-permissions](https://github.com/bytetechnology/moleculer-context-db)  - A database integrator for injecting a transaction safe database session into the context of the action.
## Mixins
### General
- [Loki logger](https://gist.github.com/icebob/228498f646822a03a1e7cc14fb0ce856)  - It sends the Moleculer log messages to a Grafana Loki server directly
### Database
- [Memoize mixin for Moleculer services methods](https://gist.github.com/icebob/40a612ec3c453347aef7a808b82ab747)  - Caching for Moleculer service [methods](https://moleculer.services/docs/0.13/services.html#Methods)
- [DB handler mixin for Moleculer DB](https://gist.github.com/icebob/a093d0011ff0fa0f29d02dc4324557be)  - Swap easily between [MongoDB](https://www.mongodb.com/) for development & production and [NeDB](https://github.com/louischatriot/nedb) for unit testing
- [Cache cleaner](https://gist.github.com/icebob/a69082b3078c8769f66de6c6dc4e56ba)  - Cache cleaner mixin for Moleculer DB service
- [Distributed locks](https://gist.github.com/intech/4c6d064bf4afa38a817df9af69da62f1)  - Moleculer implementation of the redlock algorithm for distributed Redis locks
### Tasks, Queues and Jobs
- [moleculer-bee-queue](https://github.com/moleculerjs/moleculer-addons/tree/master/packages/moleculer-bee-queue#readme)![Official Moleculer Module][official]  - Task queue mixin for [Bee-Queue](https://github.com/bee-queue/bee-queue)
- [moleculer-bull](https://github.com/moleculerjs/moleculer-addons/tree/master/packages/moleculer-bull#readme)![Official Moleculer Module][official]  - Task queue mixin for [Bull](https://github.com/OptimalBits/bull)
- [moleculer-faktory](https://github.com/YourSoftRun/moleculer-faktory#readme)  - Task queue mixin for [Faktory](https://contribsys.com/faktory/)
- [moleculer-cron](https://github.com/davidroman0O/moleculer-cron#readme)  - Moleculer mixin for [node-cron](https://github.com/kelektiv/node-cron)
- [@r2d2bzh&#x2F;moleculer-cron](https://github.com/r2d2bzh/moleculer-cron#readme)  - Another moleculer mixin for [node-cron](https://github.com/kelektiv/node-cron)
- [moleculer-amqp-queue](https://github.com/lehno/moleculer-amqp-queue#readme)  - Task queue mixin for [AMQP](https://www.amqp.org/)
- [moleculer-bullmq](https://github.com/Hugome/moleculer-bullmq#readme)  - Task queue mixin for [BullMq](https://github.com/taskforcesh/bullmq)
### Validation
- [fastest-validator](https://moleculer.services/docs/0.13/validating.html#Built-in-validator)![Official Moleculer Module][official]  - Moleculer's default validator is based on [fastest-validator](https://github.com/icebob/fastest-validator)
- [Joi](https://moleculer.services/docs/0.13/validating.html#Create-a-Joi-validator)![Official Moleculer Module][official]  - [Joi](https://github.com/hapijs/joi) based validator
- [moleculer-json-schema-validator](https://github.com/zhaoyao91/moleculer-json-schema-validator#readme)  - [JSON Schema](https://json-schema.org/) validator
- [ts-transformer-json-schema](https://github.com/ipetrovic11/ts-transformer-json-schema)  - Use Typescript Intefraces as validator.
- [moleculer-zod-validator](https://github.com/TheAppleFreak/moleculer-zod-validator)  - A validator that allows the use of [Zod](https://github.com/colinhacks/zod) for type-safe validation and type inference.
### GraphQL
- [moleculer-postgraphile](https://github.com/ltv/moleculer-postgraphile)  - [Postgraphile](https://www.graphile.org/) Create postgraphile service for automatically detects tables, columns, indexes, relationships, views, types, functions, comments, and more.
- [moleculer-db-graphql](https://github.com/derekbar90/moleculer-db-graphql)  - Complementary mixin which provides a graphql schema that matches those exposed my moleculer-db. [NPM](https://www.npmjs.com/package/@thesatoshicompany/moleculer-db-graphql)
## Tools
- [moleculer-repl](https://moleculer.services/docs/0.13/moleculer-repl.html)![Official Moleculer Module][official]  - Interactive developer console.
- [moleculer-cli](https://moleculer.services/docs/0.13/moleculer-cli.html)![Official Moleculer Module][official]  - Command-Line Tool for development & testing.
- [moleculer-decorators](https://github.com/ColonelBundy/moleculer-decorators)  - ES7/TS decorators for Service declaration.
- [moleculer-service-decorators](https://github.com/rmccallum81/moleculer-service-decorators)  - ES7/TS decorators for Service declaration.
- [moleculer-ts](https://github.com/jarvify/moleculer-ts)  - TypeScript service actions/events types generator.
- [moleculer-service-ts](https://github.com/bytetechnology/moleculer-service-ts)  - Typescript support for moleculer service actions and events.
- [moldock](https://github.com/amroessam/moldock)  - A CLI tool to deconstruct moleculer projects into their own dependant projects, to be able to dockerize them individually.
- [fastest-validator-decorators](https://github.com/tobydeh/fastest-validator-decorators)  - Typescript decorators for the fastest-validator library.
- [moleculer-snippets](https://github.com/pavittarx/moleculer-snippets)  - vscode extension for inserting moleculerjs code snippets
- [moleculer-auto-openapi](https://github.com/grinat/moleculer-auto-openapi)  - Auto generate OpenAPI (Swagger) scheme for Moleculer services.
- [@spailybot&#x2F;moleculer-auto-openapi](https://github.com/spailybot/moleculer-auto-openapi)  - Generate OpenAPI 3.1 from Moleculer actions, auto-generated using Fastest Validator parameters. Granular configurations, cache system, fully typed, and more.
- [x.moleculer](https://gist.github.com/ebrahimmfadae/1d1da46b176e7c2ffa56f0e91b801e8d)  - Pure typescript solution to infer `params` and `meta` types in `call` and `mcall`
- [moleculer-plus](https://github.com/ishfx/moleculer-plus)  - Service, validator, and api decorators for moleculer, enabling modern TypeScript syntax and features.
## Polyglot Implementations
### Java
- [moleculer-java](https://github.com/moleculer-java)  - Java implementation of the Moleculer microservices framework.
### Python
- [moleculer-python](https://github.com/ToGoBananas/moleculer-python)  - Python implementation of the Moleculer microservices framework.
- [moleculer-client](https://github.com/CaioFilus/moleculer-client)  - Simple Client to communicate with Moleculer services using NATS.
### Go
- [moleculer-go](https://github.com/moleculer-go)  - Go implementation of the Moleculer microservices framework.
### Ruby
- [moleculer-ruby](https://github.com/moleculer-ruby)  - Ruby implementation of the Moleculer framework.

## Companies Using Moleculer

- [Concierge Auctions](https://www.conciergeauctions.com/)
- [ingenious](http://www.ingsw.com/)
- [THB](https://www.thb.co.in/)
- [Zaoblako](https://zaoblako.ru/)
- [Altcoin mining pools](http://altcoinminingpools.com)
- [zebbra](https://zebbra.ch/)
- [Uiza](https://uiza.io)
- [Distopik](https://www.mixanalog.com/?utm_medium=partner&utm_source=moleculer&utm_campaign=moleculer_footer_logo&utm_content=logo)
- [Tokenplace](https://tokenplace.com)
- [Textalk](https://www.textalk.com/)
- [GetTechDone](https://www.gtechd.com/)
- [Jarvify](https://jarvify.com/)
- [Sonda](https://www.sonda.com/en/)
- [Wino](https://wino.fr)
- [YourSoft.run](https://www.yoursoft.run/)
- [Instarem](https://www.instarem.com/)
- [Ghost](https://ghost.org/)
- [Qoala](https://www.qoala.app/)
- [Koodoo](https://koodoo.io)
- [Vakavic](https://vakavic.com/)
- [HunterCo](https://www.hunterco.com.br/)
- [StretchShop](https://stretchshop.app/)
- [CodeYard](http://codeyard.eu/?locale=en)
- [Shareworks](https://www.shareworks.com/)
- [MultiRoad](https://www.multiroad.online/)
- [Innovation INCUBATOR](https://innovationincubator.com/)
- [Wiredelta](https://wiredelta.com/)
- [VITEKEY](https://vitekey.com/)
- [Hangar](https://www.thehangar.cr/)
- [Autodrop3d](https://autodrop3d.com)
- [Desarrollo e Innovacion Rancagua](https://smart.rancagua.cl/)
- [Reguity Group](https://www.reguity.com/)
- [Pankod](https://www.pankod.com/)
- [e-PlanSoft](https://eplansoft.com/)
- [Делимобиль](https://delimobil.ru)
- [Cryptonoid](https://cryptonoid.io/)
- [Workpuls](https://www.workpuls.com/)
- [Motivac](https://motivac.io)
- [TuntsCorp](http://www.tuntscorp.com/site/)
- [LALALAB](https://www.lalalab.com/en)
- [AdmitKard](https://www.admitkard.com/)
- [Integrity](https://integrity.ooo/)
- [TinkerLink](https://tinkerlink.com/)
- [eDoctor](https://edoctor.io/)
- [SmartFocus](https://www.smartfocus.com/)
- [SwissDevJobs](https://swissdevjobs.ch/)
- [Akay Tour](http://akaytour.com/)
- [Соната](https://sonatazvit.com.ua/)
- [Cards Against Formality](https://cardsagainstformality.io/)
- [TIKAJ](https://www.tikaj.com/)
- [Doubtnut](https://doubtnut.com/)
- [Prabandhak](https://reverieinc.com/prabandhak)
- [FairManager](https://fairmanager.de/)
- [FINFORT](https://finfort.ru/)
- [Gurucan](https://www.gurucan.com/)
- [Knawat](https://www.knawat.com/)
- [Q-net](https://q-net.pro/)
- [Elibot](https://elibot.info)
- [Rocketo](https://rocketo.com)
- [messagehub](https://ng.messagehub.lk/)
- [Kaan Technologies](https://www.kaantechnologies.com/)
- [codewave](https://codewave.com)
- [Substring](https://substring.ch/)
- [seabex](https://www.seabex.com/)
- [servereye](https://www.server-eye.de/)
- [hugo](https://hugoapp.com/)
- [Adscook](https://adscook.com/)
- [Qwip](https://qwip-app.com/)
- [BerarkRays](https://www.berarkrays.com/)
- [Teachoo](https://www.teachoo.com/)
- [Lumile](https://www.lumile.com.ar/)
- [Byte Technology](https://bytetechnology.co/)
- [GermanTechJobs](https://germantechjobs.de/)
- [Intelliware Development](https://www.intelliware.com/)
- [SmartfyLabs](https://smartfylabs.com/)
- [greenupp](https://cephaschapa.github.io/greenupp)
- [pianobit](https://www.pianobit.com/)
- [Doubtbuddy](https://www.doubtbuddy.com/)
- [Finanza.tech](https://www.finanza.tech/)
- [SONDERFORMAT](https://sonderformat.llc/)
- [Cia da Consulta](https://ciadaconsulta.com.br/)
- [dyte](https://www.dyte.io/)
- [Shodget](https://shodget.com/)
- [PRODLY](https://prodly.ru/)
- [startup flow](https://www.startupflow.io/)
- [YACLA](https://yacla.com/)
- [Stedos](https://www.steedos.com/)
- [Lowcode Artist](https://lcp.uuyang.cn/secur/app)
- [Mapeline](https://mapeline.co.id/)
- [ExchangeGate](https://exchange-gate.io/)
- [Smart Stop Set](https://smartstopset.com/)
- [2BuiltIT](https://2buildit.be/)
- [todo.space](https://todo.space/)
- [株式会社JIITAK (Jiitak Inc.)](https://jiitak.jp/)
- [Jobs in JS](https://jobsinjs.com/)
- [r-ulybka](https://www.r-ulybka.ru/)
- [rocket.chat](https://rocket.chat/)
- [Cybersapient](https://cybersapient.io/)
- [Eletromidia](https://www.eletromidia.com.br)
- [Finder](https://www.finder.com.au/)
- [Dazle](https://www.dazle.co/)
- [DataEnhancers](https://www.dataenhancers.io/)
- [Canid](https://canid.io)

# Contact

Copyright (c) 2016-2022 MoleculerJS

[![@moleculerjs](https://img.shields.io/badge/github-moleculerjs-green.svg)](https://github.com/moleculerjs) [![@MoleculerJS](https://img.shields.io/badge/twitter-MoleculerJS-blue.svg)](https://twitter.com/MoleculerJS)

[official]: media/moleculer-tiny.png
