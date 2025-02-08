# Tip-Calculator-App


This project is a **Tip Calculator App** that allows users to easily calculate the tip amount and total bill per person. Users can input the total bill amount, the number of people, and either select a predefined tip percentage or input a custom tip percentage. The application then calculates the tip and total amount per person.

---

## Features
- **Predefined Tip Percentages**: Users can select one of the predefined percentages (e.g., 5%, 10%, etc.).
- **Custom Tip Percentage**: Users can enter a custom tip percentage if the predefined options are not suitable.
- **Dynamic Calculations**: The app calculates the tip amount and total amount per person dynamically.
- **Responsive Input Handling**: Handles input changes and updates values in real-time.
- **Reset Functionality**: Users can reset all fields and results with a single button.

---

## How It Works
1. Users input the **bill amount**.
2. Users input the **number of people** splitting the bill.
3. Users choose a tip percentage:
   - Select from predefined percentages (click on a percentage).
   - Or enter a custom tip percentage in the input field.
4. The app calculates and displays:
   - **Tip amount per person**
   - **Total amount per person**
5. Users can reset all fields and results using the **Reset** button.

---

## Code Overview

### Event Listeners and Promises
The app uses **JavaScript Promises** to handle user inputs and tip selection. The code listens for user interactions and resolves values to perform calculations.

### Key Functions

#### `handleTipSelection()`
This function:
- Listens for clicks on predefined percentage options.
- Listens for changes in the custom tip input field.
- Resolves the selected or entered tip percentage as a promise.

#### `getInputValue(inputElement)`
This function:
- Listens for changes in input fields (e.g., bill amount or number of people).
- Resolves the input value as a promise.

#### Calculations
Using `Promise.all`, the app waits for all required inputs:
- **Bill amount**
- **Tip percentage**
- **Number of people**

Once all inputs are provided, it calculates:
- Total tip amount: `totalBill = (bill * tipPercentage) / 100`
- Tip amount per person: `tipAmount = totalBill / people`
- Total amount per person: `total = (bill + totalBill) / people`

### Reset Functionality
The `resetBtn` event listener resets all input fields and calculated outputs to their default values.

---



## Setup and Usage

### Prerequisites
- Basic understanding of HTML, CSS, and JavaScript.
- A browser to run the application.

### Steps to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/7osny13/Tip-Calculator-App.git
   ```
2. Open the `index.html` file in your browser.
3. Enter the required values and select a tip percentage.
4. View the calculated tip and total amounts per person.

---

## Contributing
Contributions are welcome! If you find any bugs or have suggestions for improvement:
- Fork the repository.
- Create a new branch for your feature or bugfix.
- Submit a pull request.

---


## Contact
For questions or feedback, feel free to contact:
- **Name**: Omar Hosny
- **Email**: ohosny829@gmail.com
- **GitHub**: (https://github.com/7osny13)

---

Thank you for using the Tip Calculator Web Application!

