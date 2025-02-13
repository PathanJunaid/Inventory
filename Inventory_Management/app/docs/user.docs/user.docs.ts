export const userDocs = {
    "/users/": {
      post: {
        summary: "Create a new user",
        description: "This endpoint creates a new user by accepting user details from the request body.",
        tags: ["Users"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                  },
                  email: {
                    type: "string",
                  },
                  password: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "User successfully created",
          },
          400: {
            description: "Invalid input",
          },
          500: {
            description: "Internal server error",
          },
        },
      },
    },
    "/users/login": {
      post: {
        summary: "User login",
        description: "This endpoint allows users to log in by providing their credentials.",
        tags: ["Users"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  email: {
                    type: "string",
                  },
                  password: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "User successfully logged in",
          },
          400: {
            description: "Invalid credentials",
          },
          500: {
            description: "Internal server error",
          },
        },
      },
    },
    "/users/logout": {
      post: {
        summary: "User logout",
        description: "This endpoint logs out the currently authenticated user by invalidating their session.",
        tags: ["Users"],
        responses: {
          200: {
            description: "User successfully logged out",
          },
          400: {
            description: "Bad request",
          },
          500: {
            description: "Internal server error",
          },
        },
      },
    },
  };
  