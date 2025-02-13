import express from "express";
import userRoutes from './user/user.routes'
import Auth_router from './auth/auth.routes'
import product_routes from "./product/product.routes";
import warehouseRoutes from "./warehouse/warehouse.routes";
import inventory_Routes from "./Inventory/inventory.routes";
// routes
const router = express.Router();

router.use("/users", [userRoutes, Auth_router]);
router.use('/product', product_routes);
router.use('/warehouse',warehouseRoutes)
router.use('/inventory',inventory_Routes)

export default router;