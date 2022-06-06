Project folder structure
============================

├── src
    ├── core                 # Application core folder
    │   ├── config           # Application configuration by environment
    │   ├── libs             # Libraries
    │   ├── models           # All DAO models
    │   ├── services         # Services
    │   └── utils            # Utilities functions or classes
    ├── plugins              # Plugins of fastify
    ├── routes               # Each api routes groups
    │    ├── dto             # DTO schema and type for fastify schema  
    │    └── name.routes.ts  # Name of routes for fastify routes
    └── ...