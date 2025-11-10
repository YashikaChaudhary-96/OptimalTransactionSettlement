Optimal Transaction Settlement

Optimal Transaction Settlement is a web-based project that visualizes cash flows between multiple people and calculates the optimal transactions to settle debts efficiently. The project uses JavaScript, Vis Network for visualization, and a custom Binary Heap implementation for calculation.

##Features

*Generate random cash flow problems with multiple people.
*Visualize the network of debts in an interactive graph.
*Solve and display the optimal transaction solution to minimize the number of payments.
*Responsive design for desktop and mobile screens.



##Project Structure
OptimalTransactionSettlement/
│
├─ index.html         # Main HTML file
├─ index.php          # PHP wrapper (includes index.html)
├─ script.js          # Main JavaScript logic
├─ heap.js            # BinaryHeap class for calculations
├─ style.css          # Project styles
├─ cash-flow.png      # Project logo / icon
└─ README.md          # Project documentation

##Dependencies

This project uses the following external libraries:

*Bootstrap 4 - For styling and responsive layout

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">


*Font Awesome - For node icons in the network

<script src="https://kit.fontawesome.com/5548f5ed00.js"></script>


Vis Network - For interactive network visualization

<script src="https://unpkg.com/vis-network/standalone/umd/vis-network.min.js"></script>

##How to Run Locally

1.Download or clone the repository to your local system:

git clone <your-repo-link>


2.Open XAMPP and start the Apache server. (MySQL is not required for this project.)

3.Place the project folder inside C:\xampp\htdocs\ (or your XAMPP htdocs directory).

Example path:

C:\xampp\htdocs\OptimalTransactionSettlement


4.Open the project in your browser using:

http://localhost/OptimalTransactionSettlement/index.php


5.Click Generate Problem to create a random cash flow network.

6.Click Solve Problem to get the optimal transaction settlement.

##Usage

*Generate Problem: Creates a random network of people with debts.

*Solve Problem: Calculates the minimum number of transactions required to settle all debts.

The interactive network allows you to visualize who owes whom and how much.

Credits

* Cash icon by [Eucalyp - Flaticon](https://www.flaticon.com/free-icons/cash)
* [Vis Network library](https://visjs.org/)
* [Bootstrap](https://getbootstrap.com/)
