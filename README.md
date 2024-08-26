# Dhaga Inventory CLI

A Command-Line Interface (CLI) application built with TypeScript for processing saree inventory data. This application reads a JSON file containing saree details, converts each entry into a structured `Saree` object, performs necessary calculations, and outputs the processed data to a new JSON file.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [Running the Application](#running-the-application)
  - [Example](#example)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Read JSON Data:** Parses input JSON files containing saree inventory details.
- **Data Conversion:** Converts raw JSON entries into structured `Saree` objects.
- **Price Calculations:** Computes the sell price in USD based on provided markup percentages.
- **Write Output:** Outputs the processed data to a specified JSON file.
- **TypeScript:** Leveraging TypeScript for type safety and better code maintainability.
- **CLI Interface:** Easy-to-use command-line interface for processing files.

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js:** JavaScript runtime environment.
- **npm:** Node package manager (comes bundled with Node.js).
- **Git:** Version control system (optional but recommended).

### Installing Node.js and npm

#### Windows and macOS

1. **Download Installer:**
   - Visit the [official Node.js website](https://nodejs.org/en/download/) and download the appropriate installer for your operating system.
2. **Run Installer:**
   - Execute the downloaded installer and follow the on-screen instructions.
3. **Verify Installation:**
   - Open a terminal or command prompt and run:
     ```bash
     node -v
     npm -v
     ```
     You should see the installed versions of Node.js and npm.

#### Linux (Debian and Ubuntu-based distributions)

1. **Update Package Index:**
   ```bash
   sudo apt update
   ```
2. **Install Node.js and npm:**
   ```bash
   sudo apt install nodejs npm -y
   ```
3. **Verify Installation:**
   ```bash
   node -v
   npm -v
   ```

_For other Linux distributions, refer to the [official Node.js documentation](https://nodejs.org/en/download/package-manager/)._

### Installing Git (Optional)

If you plan to clone the repository using Git:

#### Windows

- **Download Installer:**
  - Visit the [official Git website](https://git-scm.com/download/win) and download the installer.
- **Run Installer:**
  - Execute the installer and follow the setup instructions.

#### macOS

- **Using Homebrew:**
  ```bash
  brew install git
  ```
  _Ensure Homebrew is installed. If not, visit [Homebrew's official site](https://brew.sh/) for installation instructions._

#### Linux

- **Debian and Ubuntu-based distributions:**
  ```bash
  sudo apt install git -y
  ```

- **Fedora:**
  ```bash
  sudo dnf install git -y
  ```

- **Arch Linux:**
  ```bash
  sudo pacman -S git
  ```

---

## Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository

**Using Git:**
```bash
git clone https://github.com/yourusername/dhaga-inventory-cli.git
```

**Or download the ZIP:**
- Click on the "Code" button at the top right of the repository page and select "Download ZIP".
- Extract the downloaded ZIP file to your desired location.

### 2. Navigate to the Project Directory

```bash
cd dhaga-inventory-cli
```

### 3. Install Dependencies

Install all required packages using npm:

```bash
npm install
```

This command installs both production and development dependencies specified in the `package.json` file.

---

## Usage

The application processes an input JSON file containing saree inventory data and outputs a new JSON file with calculated fields.

### Command Syntax

```bash
npm run start -- --input <input_file_path> --output <output_file_path>
```

**Parameters:**
- `--input` (required): Path to the input JSON file.
- `--output` (required): Path where the output JSON file will be saved.

### Running the Application

#### Step-by-Step

1. **Prepare Input JSON File**

   Ensure you have an input JSON file structured appropriately. Example structure:

   ```json
   [
     {
       "No": 21,
       "Name": "PEACH BANARASI HANDLOOM KORA SILK SAREE",
       "Status": "Not Available",
       "Type": "Kora Silk",
       "AuroPriceRupees": 14000,
       "AuraPriceUSD": 168.6746988,
       "My Price with discount paid to Aura": 11200,
       "USD": 134.939759,
       "SixYardsByKekaPrice": 250,
       "SellPriceRs": 18900,
       "LaunchSpecial10DiscountFinal": 0,
       "MarkupPercent": 35
     }
     // ... more entries
   ]
   ```

2. **Run Build Script**

   Compile TypeScript code to JavaScript:

   ```bash
   npm run build
   ```

   This command generates a `dist` directory containing the compiled JavaScript files.

3. **Execute the Application**

   Run the application using the start script:

   ```bash
   npm run start -- --input ./data/input.json --output ./data/output.json
   ```

   **Example:**
   ```bash
   npm run start -- --input ./sample-data/sarees.json --output ./output/processed-sarees.json
   ```

   **Explanation:**
   - `./sample-data/sarees.json`: Path to your input JSON file.
   - `./output/processed-sarees.json`: Desired path for the output JSON file.

4. **Check Output**

   After execution, check the specified output path for the processed JSON file. The output file will contain all original data along with any calculated fields performed by the application.

### Example

**Given Input File (`./data/input.json`):**
```json
[
  {
    "No": 21,
    "Name": "PEACH BANARASI HANDLOOM KORA SILK SAREE",
    "Status": "Available",
    "Type": "Kora Silk",
    "AuroPriceRupees": 14000,
    "AuraPriceUSD": 168.67,
    "My Price with discount paid to Aura": 11200,
    "USD": 134.94,
    "SixYardsByKekaPrice": 250,
    "SellPriceRs": 18900,
    "LaunchSpecial10DiscountFinal": 0,
    "MarkupPercent": 35
  }
]
```

**Run Command:**
```bash
npm run start -- --input ./data/input.json --output ./data/output.json
```

**Expected Output File (`./data/output.json`):**
```json
[
  {
    "No": 21,
    "Name": "PEACH BANARASI HANDLOOM KORA SILK SAREE",
    "Status": "Available",
    "Type": "Kora Silk",
    "AuroPriceRupees": 14000,
    "AuraPriceUSD": 168.67,
    "My Price with discount paid to Aura": 11200,
    "USD": 134.94,
    "SixYardsByKekaPrice": 250,
    "SellPriceRs": 18900,
    "LaunchSpecial10DiscountFinal": 0,
    "MarkupPercent": 35,
    "MySellPriceUSD": 15120
  }
]
```

**Explanation:**
- The application calculates `MySellPriceUSD` using the formula:
  ```
  MySellPriceUSD = MyPriceWithDiscountPaidToAura + (MyPriceWithDiscountPaidToAura * MarkupPercent / 100)
                 = 11200 + (11200 * 35 / 100)
                 = 11200 + 3920
                 = 15120
  ```

---

## Project Structure

```
dhaga-inventory-cli/
├── data/
│   ├── input.json
│   └── output.json
├── src/
│   └── index.ts
├── dist/
│   └── index.js
├── package.json
├── tsconfig.json
└── README.md
```

**Description:**
- `data/`: Directory containing input and output JSON files.
- `src/`: Source directory containing TypeScript code.
- `dist/`: Compiled JavaScript code generated after building the project.
- `package.json`: Project metadata and dependency definitions.
- `tsconfig.json`: TypeScript configuration file.
- `README.md`: Project documentation.

---

## Scripts

Defined in `package.json`:

- **Build the project:**
  ```bash
  npm run build
  ```
  Compiles TypeScript files in the `src` directory to JavaScript in the `dist` directory.

- **Run the application:**
  ```bash
  npm run start -- --input <input_file> --output <output_file>
  ```
  Executes the compiled application with specified input and output files.

- **Clean the build:**
  ```bash
  npm run clean
  ```
  Removes the `dist` directory to clean previous builds.

---

## Dependencies

**Production Dependencies:**
- [**fs-extra**](https://www.npmjs.com/package/fs-extra): Extended native Node.js file system methods.
- [**commander**](https://www.npmjs.com/package/commander): For building CLI interfaces.
  
**Dev Dependencies:**
- [**typescript**](https://www.npmjs.com/package/typescript): TypeScript compiler.
- [**@types/node**](https://www.npmjs.com/package/@types/node): Type definitions for Node.js.

---

## Development

### Setting Up Development Environment

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/dhaga-inventory-cli.git
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Start Development Server:**
   For live reloading during development, you can use tools like `ts-node` and `nodemon`.

   **Install Development Tools:**
   ```bash
   npm install --save-dev ts-node nodemon
   ```

   **Update `package.json` Scripts:**
   ```json
   "scripts": {
     "dev": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts -- --input ./data/input.json --output ./data/output.json",
     "build": "tsc",
     "start": "node dist/index.js",
     "clean": "rm -rf dist"
   }
   ```

   **Run Development Server:**
   ```bash
   npm run dev
   ```

### Coding Guidelines

- **Code Style:** Follow consistent code formatting. You can use tools like Prettier and ESLint.
- **Type Safety:** Leverage TypeScript's type system to catch errors early.
- **Error Handling:** Ensure all possible errors are gracefully handled and informative messages are provided.
- **Testing:** Write unit tests for critical functions using frameworks like Jest.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**
2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit Your Changes**
   ```bash
   git commit -m "Add your message here"
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request**

Please ensure your code adheres to the project's coding standards and passes all tests.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

**Author:** Your Name

**Email:** your.email@example.com

**GitHub:** [yourusername](https://github.com/yourusername)

Feel free to reach out for any questions or suggestions!

---

**Happy Coding!**