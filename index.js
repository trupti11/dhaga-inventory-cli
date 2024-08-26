"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const XLSX = __importStar(require("xlsx"));
const Saree_1 = require("./Saree");
// Function to process the Excel file
const processExcelFile = (inputFilePath, outputFilePath) => {
    // Read the Excel file
    const workbook = XLSX.readFile(inputFilePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    // Convert the sheet to JSON
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    // Assume the necessary columns are named "Cost Price" and "Markup %"
    jsonData.forEach((row) => {
        let saree = new Saree_1.Saree(row);
        // console.log("markup %" + saree.MarkupPercent);
        // console.log("cost %" + saree.);
        // if (saree.AuroPriceRupees !== undefined && row['Markup %'] !== undefined) {
        //     saree.SellPriceUSD = calculateSellPrice(saree.AuroPriceRupees, saree.MarkupPercent);
        //     console.log(`Calculated price in USD: ${saree.SellPriceUSD}`);
        // }
    });
    // Convert JSON back to worksheet
    const newWorksheet = XLSX.utils.json_to_sheet(jsonData);
    const newWorkbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, sheetName);
    // Write the updated data to the output file
    XLSX.writeFile(newWorkbook, outputFilePath);
};
// CLI Arguments
const inputFilePath = process.argv[2];
const outputFilePath = process.argv[3];
if (!inputFilePath || !outputFilePath) {
    console.error("Please provide input and output file paths.");
    process.exit(1);
}
// Process the file
processExcelFile(inputFilePath, outputFilePath);
console.log(`Processed Excel file and written to ${outputFilePath}`);
