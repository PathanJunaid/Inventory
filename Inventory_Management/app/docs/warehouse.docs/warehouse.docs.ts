
export const warehouseDocs = 
{
    "/warehouse/": {
      "post": {
        "summary": "Create a new warehouse",
        "description": "This endpoint creates a new warehouse by accepting warehouse details from the request body.",
        "tags": ["Warehouse"],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "name": { "type": "string" },
                  "location": { "type": "number"}
                }
              }
            }
          }
        },
        "responses": {
          "201": { "description": "Warehouse successfully created" },
          "400": { "description": "Invalid input" },
          "500": { "description": "Internal server error" }
        }
      },
      "get": {
        "summary": "Get all warehouses",
        "description": "This endpoint retrieves all warehouses in the system.",
        "tags": ["Warehouse"],
        "responses": {
          "200": { "description": "List of all warehouses" },
          "500": { "description": "Internal server error" }
        }
      }
    },
    "/warehouse/{id}": {
      "delete": {
        "summary": "Delete a warehouse by ID",
        "description": "This endpoint deletes a warehouse by its ID.",
        "tags": ["Warehouse"],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": { "type": "string" },
            "description": "The warehouse ID"
          }
        ],
        "responses": {
          "200": { "description": "Warehouse successfully deleted" },
          "404": { "description": "Warehouse not found" },
          "500": { "description": "Internal server error" }
        }
      },
      "get": {
        "summary": "Get a warehouse by ID",
        "description": "This endpoint retrieves a warehouse by its ID.",
        "tags": ["Warehouse"],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": { "type": "string" },
            "description": "The warehouse ID"
          }
        ],
        "responses": {
          "200": { "description": "Warehouse found" },
          "404": { "description": "Warehouse not found" },
          "500": { "description": "Internal server error" }
        }
      }
    },
    "/warehouse/generatereport/{id}": {
      "get": {
        "summary": "Generate a report for a specific warehouse",
        "description": "This endpoint generates a report for the specified warehouse by ID.",
        "tags": ["Warehouse"],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": { "type": "string" },
            "description": "The warehouse ID"
          }
        ],
        "responses": {
          "200": { "description": "Warehouse report generated successfully" },
          "404": { "description": "Warehouse not found" },
          "500": { "description": "Internal server error" }
        }
      }
    }
  }
  