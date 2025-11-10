# Optimal Transaction Settlement

A web-based project that visualizes cash flows and calculates the optimal transactions to settle debts using JavaScript, Vis Network, and a custom Binary Heap.

## Features

* Generate random cash flow problems with multiple people.
* Visualize the network of debts in an interactive graph.
* Solve and display the optimal transaction solution to minimize the number of payments.
* Responsive design for desktop and mobile screens.

## How to Run Locally

1.  Ensure you have **XAMPP** (or a similar local server) installed.
2.  Start the **Apache** server from the XAMPP Control Panel.
3.  Clone this repository into your `htdocs` directory (e.g., `C:\xampp\htdocs\`):
    ```
    git clone [https://github.com/YashikaChaudhary-96/OptimalTransactionSettlement.git](https://github.com/YashikaChaudhary-96/OptimalTransactionSettlement.git)
    ```
4.  Open the project in your browser by visiting:
    `http://localhost/OptimalTransactionSettlement/index.php`
5.  Click **Generate Problem** to create a random network.
6.  Click **Solve Problem** to get the optimal transaction settlement.

## Project Structure
OptimalTransactionSettlement/ │ ├─ index.html # Main HTML file ├─ index.php # PHP wrapper (includes index.html) ├─ script.js # Main JavaScript logic (ES Module) ├─ heap.js # BinaryHeap class (ES Module) ├─ style.css # Project styles ├─ cash-flow.png # Project logo / icon └─ README.md # Project documentation

## Dependencies

This project relies on the following external libraries loaded via CDN:

* **Bootstrap 4:** For styling and responsive layout.
* **Font Awesome:** For node icons in the network.
* **Vis Network:** For interactive network visualization.

## Credits

* Cash icon by [Eucalyp - Flaticon](https://www.flaticon.com/free-icons/cash)
* [Vis Network library](https://visjs.org/)
* [Bootstrap](https://getbootstrap.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.