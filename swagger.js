export const swaggerDoc = {
  openapi: "3.0.3",
  info: {
    title: "Movies Homework API",
    description:
      "This is a sample Movies list API for Homework Rakamin Week 9\n\nSome useful links:\n- [The Movies List Api repository](https://github.com/yumanuralfath/homeworkWeek9)\n",
    contact: {
      email: "yumanuralfath1@gmail.com",
    },
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:2070",
    },
  ],
  tags: [
    {
      name: "Authentication",
      description: "Endpoints for user authentication",
    },
    {
      name: "Movies",
      description: "Endpoints for managing movies",
    },
    {
      name: "Users",
      description: "Endpoints for managing users",
    },
  ],
  paths: {
    "/api/users/me": {
      get: {
        tags: ["Authentication"],
        summary: "Get current user",
        responses: {
          200: {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User",
                },
              },
            },
          },
        },
      },
    },
    "/api/users/login": {
      post: {
        tags: ["Authentication"],
        summary: "Login user",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/LoginRequest",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/LoginResponse",
                },
              },
            },
          },
        },
      },
    },
    "/api/users/logout": {
      delete: {
        tags: ["Authentication"],
        summary: "Logout user",
        responses: {
          200: {
            description: "Successful operation",
          },
        },
      },
    },
    "/api/movies": {
      get: {
        tags: ["Movies"],
        summary: "Get all movies",
        responses: {
          200: {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Movie",
                  },
                },
              },
            },
          },
        },
      },
      post: {
        tags: ["Movies"],
        summary: "Create a new movie",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Movie",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Successful operation",
          },
        },
      },
    },
    "/api/movies/{id}": {
      get: {
        tags: ["Movies"],
        summary: "Get movie by ID",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID of the movie to retrieve",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Movie",
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["Movies"],
        summary: "Update movie",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID of the movie to update",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Movie",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Successful operation",
          },
        },
      },
      delete: {
        tags: ["Movies"],
        summary: "Delete movie",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID of the movie to delete",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Successful operation",
          },
        },
      },
    },
    "/api/users": {
      get: {
        tags: ["Users"],
        summary: "Get all users",
        responses: {
          200: {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/User",
                  },
                },
              },
            },
          },
        },
      },
      post: {
        tags: ["Users"],
        summary: "Create user",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Successful operation",
          },
        },
      },
    },
    "/api/users/{id}": {
      get: {
        tags: ["Users"],
        summary: "Get user by ID",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID of the user to retrieve",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User",
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["Users"],
        summary: "Update user",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID of the user to update",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Successful operation",
          },
        },
      },
      delete: {
        tags: ["Users"],
        summary: "Delete user",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID of the user to delete",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Successful operation",
          },
        },
      },
    },
  },
  components: {
    schemas: {
      User: {
        type: "object",
        properties: {
          id: {
            type: "string",
            format: "id",
            example: "12",
          },
          email: {
            type: "string",
            example: "johndoe@example.com",
          },
          gender: {
            type: "string",
            example: "male",
          },
          password: {
            type: "string",
            example: "password",
          },
          role: {
            type: "string",
            example: "admin",
          },
        },
      },
      Movie: {
        type: "object",
        properties: {
          id: {
            type: "string",
            format: "id",
            example: "12",
          },
          title: {
            type: "string",
            example: "Inception",
          },
          genres: {
            type: "string",
            example: "comedy",
          },
          year: {
            type: "integer",
            example: 2010,
            minimum: 1900,
            maximum: 2100,
          },
        },
        required: ["title", "genres", "year"],
      },
      LoginRequest: {
        type: "object",
        properties: {
          email: {
            type: "string",
            format: "email",
          },
          password: {
            type: "string",
          },
        },
        required: ["email", "password"],
      },
      LoginResponse: {
        type: "object",
        properties: {
          token: {
            type: "string",
            example:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
          },
        },
      },
    },
  },
};

export default swaggerDoc;
