import PDFDocument from 'pdfkit';  // Importing pdfkit using ESM syntax
import fs from 'fs';  // Import fs module
import asyncHandler from "express-async-handler";
import { type Request, type Response } from 'express';
import * as dbServices from '../prisma/prisma.service'
import { createResponse } from '../commom/helper/response.helper';
import { decodeToken } from '../commom/services/passport-jwt.service';


export const generatereport = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const token = req.cookies['refreshToken'];
    const user = decodeToken(token);
    const data = await dbServices.generatereport(id);
    const warehouse = await dbServices.findWarehouse(id,user.id);
    console.log(warehouse);
    const doc = new PDFDocument();

    // Set the response header to indicate a downloadable file
    res.setHeader('Content-Disposition', 'attachment; filename="warehouse_report.pdf"');
    res.setHeader('Content-Type', 'application/pdf');

    // Pipe the PDF output to the response stream
    doc.pipe(res);

    // Add warehouse details at the top
    doc.fontSize(16).text('Warehouse Report', { align: 'center' });
    doc.moveDown();

    doc.fontSize(12).text(`Warehouse: "default"`, { align: 'left' });
    doc.text(`Location: "546375"}`, { align: 'left' });
    doc.moveDown(2); // Add some space before the table

    // Add table header
    const tableHeaders = ['Inventory ID', 'Product ID', 'Name', 'Price', 'Quantity', 'MinStock'];
    const columnWidth = [100, 100, 150, 80, 80, 80]; // Define width for each column

    doc.fontSize(12).text(
        `${tableHeaders[0].padEnd(columnWidth[0])}${tableHeaders[1].padEnd(columnWidth[1])}${tableHeaders[2].padEnd(columnWidth[2])}${tableHeaders[3].padEnd(columnWidth[3])}${tableHeaders[4].padEnd(columnWidth[4])}${tableHeaders[5].padEnd(columnWidth[5])}`,
        50,
        doc.y
    );

    doc.moveDown(1); // Move down after header

    // Add inventory data rows
    data.forEach(item => {
        doc.text(
            `${item.inventory_id.padEnd(columnWidth[0])}${item.product_id.padEnd(columnWidth[1])}${item.name.padEnd(columnWidth[2])}${item.price.toString().padEnd(columnWidth[3])}${item.quantity.toString().padEnd(columnWidth[4])}${item.minstack.toString().padEnd(columnWidth[5])}`,
            50,
            doc.y
        );
        doc.moveDown(1);
    });

    // Finalize and send the PDF to the client
    doc.end();
})