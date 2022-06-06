## How to:
1. Node >= 14
2. ``npm i && npm run start``
3. http://127.0.0.1:8080/api/v1/api-docs # Auto generated documentation
### Demo fastify project structure:
```
├── jest.config.ts
├── package-lock.json
├── package.json
├── readme.md
├── src
│   ├── app.spec.ts
│   ├── app.ts
│   ├── core
│   │   ├── config
│   │   │   ├── envs  #Configuration file per environment
│   │   │   │   ├── development.ts
│   │   │   │   ├── production.ts
│   │   │   │   └── test.ts
│   │   │   └── index.ts
│   │   ├── libs      #Libs
│   │   │   ├── rabitmq.ts
│   │   │   └── readme.md
│   │   ├── models
│   │   │   └── user.model.ts
│   │   ├── services
│   │   │   ├── auth.service.ts
│   │   │   ├── readme.md
│   │   │   └── users.service.ts
│   │   └── utils
│   ├── main.ts
│   ├── plugins
│   │   ├── readme.md
│   │   └── swagger
│   │       └── index.ts
│   └── routes
│       ├── auth
│       │   ├── auth.routes.ts
│       │   └── dto
│       │       └── auth.input.ts
│       ├── index.ts
│       ├── readme.md
│       └── user
│           ├── dto
│           │   └── user.input.ts
│           ├── user.handlers.ts
│           └── users.routes.ts
└── tsconfig.json
```