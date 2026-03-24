<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Descripción

API REST para la gestión de un e-commerce llamado Teslo-Shop con [Nest](https://github.com/nestjs/nest), basado en el curso de "Nest Desarrollo Backend escalable con Node" de [DevTalles](https://cursos.devtalles.com/) en Udemy.

Como base de datos se utiliza [Postgres](https://www.mongodb.com/) en un contenedor [Docker](https://www.docker.com/).

# Preparar el proyecto

1. Instalar NestJS CLI

```bash
npm i -g @nestjs/cli
```

2. Clonar el repositorio

3. Instalar las dependencias

```bash
$ npm install
```

# Compilar y ejecutar el proyecto

```bash
# desarrollo
$ npm run start

# modo observación
$ npm run start:dev

# modo producción
$ npm run build
$ npm run start:prod
```

# Aspectos analizados

En este proyecto se genera una API REST con Nest y se analizan los siguientes puntos:

- TypeORM
- Postgres
- CRUD
- Constrains
- Validaciones
- Búsquedas
- Paginaciones
- DTOs
- Entities
- Decoradores de TypeORM para entidades
- Métodos BeforeInsert, BeforeUpdate
- Relaciones en TyeORM
- Carga de archivos
- Autenticación y autorización
- JSON Web Tokens
- Hash de contraseñas
- Nest Passport
- Módulos asíncronos
- Protección de rutas
- Custom Method Decorators
-	Custom Class Decorators
-	Custom Property Decorators
-	Enlazar usuarios con productos
-	Bearer Tokens
- Postman documentation
- Nest Swagger
- Websockets
- Nest Gateways
- Conexiones y desconexiones
- Emitir y escuchar mensajes desde el servidor y el cliente
- Cliente con Vite y TypeScript
- Autenticar conexión mediante JWTs
- Usar el mecanismo de autenticación
- Desconectar sockets automáticamente
- Prevenir doble conexión de usuarios autenticados
- Configuración de variables de entorno
- Pruebas de aplicación
- CORS
- Generar build de aplicación

