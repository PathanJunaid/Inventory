import PDFDocument from 'pdfkit';
import asyncHandler from "express-async-handler";
import { Request, Response } from 'express';
import * as dbServices from '../prisma/prisma.service';
import { decodeToken } from '../commom/services/passport-jwt.service';

export const generatereport = (async (req: Request, res: Response) => {
    const { id } = req.params;
    const token = req.cookies['refreshToken'];
    const user = decodeToken(token);

    const data = await dbServices.generatereport(id);
    const warehouse = await dbServices.findWarehouse(id, user.id);

    if (!warehouse) {
        return res.status(404).json({ message: "Warehouse not found" });
    }

    const doc = new PDFDocument({ margin: 50, size: 'A4' });

    res.setHeader('Content-Disposition', 'attachment; filename="warehouse_report.pdf"');
    res.setHeader('Content-Type', 'application/pdf');
    doc.pipe(res);

    // Title
    doc.fontSize(18).font('Helvetica-Bold').text('Warehouse Report', { align: 'center' });
    doc.moveDown(1);

    // Warehouse Details
    doc.fontSize(8).font('Helvetica');
    doc.text(`Warehouse: ${warehouse.name}`, { align: 'left' });
    doc.text(`Location: ${warehouse.location}`);
    doc.moveDown(2);

    // Table Header (Properly aligned)
    const tableLeft = 25;
    const tableTop = doc.y;
    const columnWidths = [180, 120, 80, 80, 80]; // Adjusted column widths
    const rowHeight = 25;

    doc.font('Helvetica-Bold');
    const headers = ['Inventory ID', 'Name', 'Price', 'Quantity', 'MinStock'];

    headers.forEach((header, i) => {
        doc.text(header, tableLeft + columnWidths.slice(0, i).reduce((a, b) => a + b, 0), tableTop, {
            width: columnWidths[i],
            align: 'center'
        });
    });

    // Draw header line
    doc.moveTo(tableLeft, tableTop + rowHeight)
        .lineTo(tableLeft + columnWidths.reduce((a, b) => a + b, 0), tableTop + rowHeight)
        .stroke();

    let y = tableTop + rowHeight + 10;
    doc.font('Helvetica');

    // Table Rows (Properly aligned)
    data.forEach(item => {
        const values = [
            item.inventory_id, // Truncate ID if too long
            item.name,
            item.price.toString(),
            item.quantity.toString(),
            item.minstack.toString()
        ];

        values.forEach((val, i) => {
            doc.text(val, tableLeft + columnWidths.slice(0, i).reduce((a, b) => a + b, 0), y, {
                width: columnWidths[i],
                align: 'center'
            });
        });

        // Draw row line
        doc.moveTo(tableLeft, y + rowHeight)
            .lineTo(tableLeft + columnWidths.reduce((a, b) => a + b, 0), y + rowHeight)
            .stroke();

        y += rowHeight + 5;
    });

    doc.end();
});
