export const inventoryDocs = {
    "/inventory/": {
      "post": {
        "summary": "Create a new inventory entry",
        "description": "This endpoint creates a new inventory entry by accepting inventory details from the request body.",
        "tags": ["Inventory"],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "quantity": { "type": "number" },
                  "minStock": { "type": "number" },
                  "productId": { "type": "string" },
                  "warehouseId": { "type": "string" }
                }
              }
            }
          }
        },
        "responses": {
          "201": { "description": "Inventory successfully created" },
          "400": { "description": "Invalid input" },
          "500": { "description": "Internal server error" }
        }
      },
      "get": {
        "summary": "Get all inventory entries for a specific product",
        "description": "This endpoint retrieves all inventory entries based on a specific product ID.",
        "tags": ["Inventory"],
        "parameters": [
          {
            "in": "query",
            "name": "warehouseId",
            "required": true,
            "schema": { "type": "string" },
            "description": "The warehouseId to filter the inventory"
          }
        ],
        "responses": {
          "200": { "description": "Inventory data retrieved successfully" },
          "400": { "description": "Invalid input" },
          "500": { "description": "Internal server error" }
        }
      }
    },
    "/inventory/{id}": {
      "get": {
        "summary": "Get inventory by ID",
        "description": "This endpoint retrieves a specific inventory entry by its ID.",
        "tags": ["Inventory"],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": { "type": "string" },
            "description": "The inventory ID"
          }
        ],
        "responses": {
          "200": { "description": "Inventory found" },
          "404": { "description": "Inventory not found" },
          "500": { "description": "Internal server error" }
        }
      },
      "put": {
        "summary": "Update an inventory entry",
        "description": "This endpoint updates an existing inventory entry by ID.",
        "tags": ["Inventory"],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": { "type": "string" },
            "description": "The inventory ID"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "quantity": { "type": "number" },
                  "minStock": { "type": "number" },
                  "productId": { "type": "string" },
                  "warehouseId": { "type": "string" }
                }
              }
            }
          }
        },
        "responses": {
          "200": { "description": "Inventory successfully updated" },
          "400": { "description": "Invalid input" },
          "404": { "description": "Inventory not found" },
          "500": { "description": "Internal server error" }
        }
      },
      "delete": {
        "summary": "Delete an inventory entry by ID",
        "description": "This endpoint deletes an inventory entry by its ID.",
        "tags": ["Inventory"],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": { "type": "string" },
            "description": "The inventory ID"
          }
        ],
        "responses": {
          "200": { "description": "Inventory successfully deleted" },
          "404": { "description": "Inventory not found" },
          "500": { "description": "Internal server error" }
        }
      }
    },
  }
  