export const productDocs = {
  "/product/": {
    post: {
      summary: "Create a new product",
      description: "This endpoint creates a new product by accepting product details from the request body.",
      tags: ["Products"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: { type: "string", example: "Haldiram" },
                description: { type: "string", example: "Chip" },
                price: { type: "number", example: 5 },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "Product successfully created",
        },
        400: {
          description: "Invalid input",
        },
        401: {
          description: "Unauthorized",
        },
        500: {
          description: "Internal server error",
        },
      },
    },

    get: {
      summary: "Get all products",
      description: "Retrieves a list of all products in the system.",
      tags: ["Products"],
      responses: {
        200: {
          description: "List of all products",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    id: { type: "string", example: "542e6bca-0f14-47ff-9dfa-11672ef4cb14" },
                    name: { type: "string", example: "Haldiram" },
                    description: { type: "string", example: "Chip" },
                    price: { type: "number", example: 5 },
                  },
                },
              },
            },
          },
        },
        401: {
          description: "Unauthorized",
        },
        500: {
          description: "Internal server error",
        },
      },
    },
  },

  "/product/{id}": {
    get: {
      summary: "Get a product by ID",
      description: "Retrieves a single product by its unique ID.",
      tags: ["Products"],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: { type: "string" },
          description: "The unique product ID",
        },
      ],
      responses: {
        200: {
          description: "Product retrieved successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id: { type: "string", example: "542e6bca-0f14-47ff-9dfa-11672ef4cb14" },
                  name: { type: "string", example: "Haldiram" },
                  description: { type: "string", example: "Chip" },
                  price: { type: "number", example: 5 },
                },
              },
            },
          },
        },
        400: {
          description: "Invalid product ID",
        },
        401: {
          description: "Unauthorized",
        },
        404: {
          description: "Product not found",
        },
        500: {
          description: "Internal server error",
        },
      },
    },

    put: {
      summary: "Update a product by ID",
      description: "This endpoint updates an existing product's details.",
      tags: ["Products"],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: { type: "string" },
          description: "The unique product ID",
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: { type: "string", example: "Haldiram" },
                description: { type: "string", example: "Chip" },
                price: { type: "number", example: 5 },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Product successfully updated",
        },
        400: {
          description: "Invalid input",
        },
        401: {
          description: "Unauthorized",
        },
        404: {
          description: "Product not found",
        },
        500: {
          description: "Internal server error",
        },
      },
    },

    delete: {
      summary: "Delete a product by ID",
      description: "Deletes a specific product using its unique ID.",
      tags: ["Products"],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: { type: "string" },
          description: "The unique product ID",
        },
      ],
      responses: {
        200: {
          description: "Product deleted successfully",
        },
        400: {
          description: "Invalid product ID",
        },
        401: {
          description: "Unauthorized",
        },
        404: {
          description: "Product not found",
        },
        500: {
          description: "Internal server error",
        },
      },
    },
  },
};
