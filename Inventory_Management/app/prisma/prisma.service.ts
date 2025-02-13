import { PrismaClient } from "@prisma/client";
import { IUser } from "../user/user.dto";
import { IProduct } from "../product/product.dto";
import { IWarehouse } from "../warehouse/warehouse.dto";
import { IInventory } from "../Inventory/inventory.dto";

const prisma = new PrismaClient();

export const get_userby_Email = async (email: string) => {
    try {
        const result = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        return result;

    } catch (e) {
        console.log('error while getting user by  email')
        return null
    }
}

// create user function 
export const createUser = async (data: IUser) => {
    try {
        const result = await prisma.user.create({
            data: {
                ...data
            }
        });
        return result;

    } catch (e) {
        console.log("unable to create user");
        return;
    }
}

// updated user 

export const updateUser = async (name: string, id: string) => {
    try {
        // const result = await prisma.user.update({
        //     where: {
        //         id: id
        //     },
        //     data: {
        //         name: name
        //     }

        // })
        // return result;

    } catch (e) {
        console.log('Erorr in updating name');
        return null;

    }
}


// product services start

// get all products ;

export const getallProducts = async () => {
    try {
        const result = await prisma.product.findMany({})
        return result;
    } catch (e) {
        console.log('unable to fetch all product', e);
        return false;
    }
}

// get product by id 
export const getProductbyId = async (id: string) => {
    try {
        const result = await prisma.product.findUnique({
            where: {
                id: id
            }
        })
        return result;
    } catch (e) {
        console.log('error while getting product by id');
        return null;
    }
}

// get product by name and price 
export const getProductby_nameAndprice = async (name: string, price: Number) => {
    try {
        const result = await prisma.product.findMany({
            where: {
                name: name,
                price: Number(price),
            }
        })
        return result;

    } catch (e) {
        console.log('Error in fetching product data');
        return null
    }

}

// Add product 
export const addProduct = async (data: IProduct) => {
    try {
        const result = await prisma.product.create({
            data: {
                ...data
            }
        })
        return result

    } catch (e) {
        console.log('unable to add product', e);
        return false

    }
}

// update product 
export const updateProduct = async (data: IProduct, id: string) => {
    try {
        const result = await prisma.product.update({
            where: {
                id: id,
            },
            data: {
                name: data.name,
                description: data?.description,
                price: Number(data.price),
            }
        })
        return result;

    } catch (e) {
        console.log('error in updating product');
        return null
    }
}

// delete product

export const deleteProduct = async (id: string) => {
    try {
        const result = await prisma.product.delete({
            where: {
                id: id,
            }
        })

    } catch (e) {
        console.log('failed to delete')
        return null
    }
}



// Warehouse routes 

// create warehouse

export const addwarehouse = async (data: IWarehouse, userId: string) => {
    try {
        const result = await prisma.warehouse.create({
            data: {
                userId: userId,
                name: data.name,
                location: Number(data.location)
            }
        })
        return result
    } catch (e) {
        console.log('error while adding warehouse', e);
        return false;
    }

}

export const deleteWarehouse = async (id: string) => {
    try {
        const result = await prisma.warehouse.delete({
            where: {
                id: id
            }
        })
        return result;

    } catch (e) {
        console.log('error while deleting warehouse', e);
        return false;
    }
}

export const findWarehouse = async (warehouseid: string, userId: string) => {
    try {
        const result = await prisma.warehouse.findUnique({
            where: {
                id: warehouseid,
                userId: userId,

            }
        })
        return result;

    } catch (e) {
        console.log(`unable to get warehouse with id : ${warehouseid}`, e);
        return false;
    }
}

export const getAllWarehouse = async (warehouseid: string, userId: string) => {
    try {
        const result = await prisma.warehouse.findMany({
            where: {
                id: warehouseid,
                userId: userId
            }
        })
        return result;

    } catch (e) {
        console.log('error while deleting warehouse', e);
        return false;
    }
}


// Inventory Routes 

export const addInventory = async (data: IInventory, prodId: string, wareId: string) => {
    const result = await prisma.inventory.create({
        data: {
            quantity: Number(data.quantity),
            minStock: Number(data.minStock),
            product: {
                connect: {
                    id: prodId, // Use productId to connect existing product
                },
            },
            warehouse: {
                connect: {
                    id: wareId, // Use warehouseId to connect existing warehouse
                },
            },
        },
    });
    return result;
}

export const updateInventory = async (data: IInventory, id: string) => {
    const result = await prisma.inventory.update({
        where: {
            id: id,
        },
        data: {
            minStock: Number(data.minStock),
            quantity: Number(data.quantity)
        }
    })
    return result;
}

export const deleteInventory = async (id: string) => {
    const result = await prisma.inventory.delete({
        where: {
            id: id,
        }
    })
}

export const getInventory = async (id: string) => {
    const result = await prisma.inventory.findUnique({
        where: {
            id: id,
        }
    })
    return result;
}
// get inventory with warehouseID 
export const getWarehouseInventory = async (id: string) => {
    const result = await prisma.inventory.findMany({
        where: {
            warehouseId: id,
        }
    })
    return result;
}



// report details query 

export const generatereport = async (id: string) => {
    const result = await prisma.inventory.findMany({
        where: {
            warehouseId: id,  // Filtering by warehouseId
        },
        select: {
            id: true,  // inventory_id from the Inventory model
            quantity: true,
            minStock: true,  // min_stack from the Inventory model
            product: {
                select: {
                    id: true,    // product_id from the Product model
                    name: true,
                    price: true, // price from the Product model
                }
            }
        }
    });
    console.log(result);
    const formattedResult = result.map(item => ({
        inventory_id: item.id,
        product_id: item.product.id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
        minstack: item.minStock
    }));

    console.log(formattedResult);

    return formattedResult;

}



