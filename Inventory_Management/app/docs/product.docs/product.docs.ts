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
                  name: {
                    type: "string"
                  },
                  description: {
                    type: "string"
                  },
                  price: {
                    type: "number"
                  }
                }
              }
            }
          }
        },
        responses: {
          201: {
            description: "Product successfully created"
          },
          400: {
            description: "Invalid input"
          },
          500: {
            description: "Internal server error"
          }
        }
      },
      get: {
        summary: "Get all products",
        description: "This endpoint retrieves all products in the system.",
        tags: ["Products"],
        responses: {
          200: {
            description: "List of all products"
          },
          500: {
            description: "Internal server error"
          }
        }
      }
    },
  
    "/product/{id}": {
      put: {
        summary: "Update a product by ID",
        description: "This endpoint updates an existing product's details.",
        tags: ["Products"],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "string"
            },
            description: "The product ID"
          }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              hema: {
                type: "object",
                properties: {
                  name: {
                    type: "string"
                  },
                  description: {
                    type: "string"
                  },
                  price: {
                    type: "number"
                  }
                }
              }
            }
          }
        },
        responses: {
          200: {
            description: "Product successfully updated"
          },
          400: {
            description: "Invalid input"
          },
          404: {
            description: "Product not found"
          },
          500: {
            description: "Internal server error"
          }
        }
      },
      delete: {
        summary: "Delete a product by ID",
        description: "This endpoint deletes a product by ID.",
        tags: ["Products"],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "string"
            },
            description: "The product ID"
          }
        ],
        responses: {
          200: {
            description: "Product successfully deleted"
          },
          404: {
            description: "Product not found"
          },
          500: {
            description: "Internal server error"
          }
        }
      },
      get: {
        summary: "Get a product by ID",
        description: "This endpoint retrieves a product by its ID.",
        tags: ["Products"],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "string"
            },
            description: "The product ID"
          }
        ],
        responses: {
          200: {
            description: "Product found"
          },
          404: {
            description: "Product not found"
          },
          500: {
            description: "Internal server error"
          }
        }
      }
    },
  };
  