import * as XLSX from 'xlsx';
import { Saree } from './Saree';

// Function to process the Excel file
const processExcelFile = (inputFilePath: string, outputFilePath: string) => {
    // Read the Excel file
    const workbook = XLSX.readFile(inputFilePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // Convert the sheet to JSON
    const jsonData: any[] = XLSX.utils.sheet_to_json(worksheet);

    // Assume the necessary columns are named "Cost Price" and "Markup %"
    jsonData.forEach((row) => {
        let saree: Saree = new Saree(row);
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