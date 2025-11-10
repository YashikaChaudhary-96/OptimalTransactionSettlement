import { BinaryHeap } from './heap.js';

onload = function () {
    // Create a network
    let curr_data;
    const container = document.getElementById('mynetwork');
    const container2 = document.getElementById('mynetwork2');
    const genNew = document.getElementById('generate-graph');
    const solve = document.getElementById('solve');
    const temptext = document.getElementById('temptext');

    // Initialise graph options
    const options = {
        edges: {
            arrows: { to: true },
            labelHighlightBold: true,
            font: { size: 20 }
        },
        nodes: {
            font: '12px arial red',
            scaling: { label: true },
            shape: 'icon',
            icon: {
                face: 'FontAwesome',
                code: '\uf183',
                size: 50,
                color: '#991133'
            }
        }
    };

    // --- START OF FIX ---

// Create a copy of the original options for the solved network
const options2 = { ...options };

// Add a new rule to disable physics for the optimal graph
options2.physics = {
    enabled: false
};

// Initialize your networks
let network = new vis.Network(container);
network.setOptions(options); // Original graph uses default options (with physics)

let network2 = new vis.Network(container2);
network2.setOptions(options2); // Solved graph uses new options (NO physics)

// --- END OF FIX ---
    // Function to create random transaction data
    function createData() {
        // sz is a random number from 2 to 9
        const sz = Math.floor(Math.random() * 8) + 2;
        let nodes = [];

        // Adding people as nodes
        for (let i = 1; i <= sz; i++) {
            nodes.push({ id: i, label: "Person " + i });
        }
        nodes = new vis.DataSet(nodes);

        // Random edges (transactions)
        const edges = [];
        
        // This loop ensures every person 'i' (from 1 to sz-1)
        // gets at least one guaranteed connection.
        for (let i = 1; i < sz; i++) { 
            for (let j = i + 1; j <= sz; j++) {
                
                let createEdge = false;
                if (j === i + 1) {
                    // Force an edge for the first person 'i' can connect to (j = i + 1)
                    // This creates a "chain" (1-2, 2-3, 3-4) guaranteeing no orphans.
                    createEdge = true; 
                } else {
                    // For all other possible connections, make it random
                    createEdge = (Math.random() > 0.5);
                }
                
                if (createEdge) {
                    // Randomly decide the direction of the transaction
                    if (Math.random() > 0.5)
                        edges.push({ from: i, to: j, label: String(Math.floor(Math.random() * 100) + 1) });
                    else
                        edges.push({ from: j, to: i, label: String(Math.floor(Math.random() * 100) + 1) });
                }
            }
        }
        return { nodes: nodes, edges: edges };
    }

    // Generate new problem button
    genNew.onclick = function () {
        const data = createData();
        curr_data = data;
        network.setData(data);
        temptext.style.display = "inline";
        container2.style.display = "none";
    };

    // Solve problem button
    solve.onclick = function () {
        temptext.style.display = "none";
        container2.style.display = "inline";
        const solvedData = solveData();
        network2.setData(solvedData);
    };

    // Algorithm to minimize transactions
    function solveData() {
        let data = curr_data;
        if (!data || !data['nodes']) {
            // Handle case where 'Solve' is clicked before 'Generate'
            return { nodes: [], edges: [] };
        }
        
        const sz = data['nodes'].length;
        const vals = Array(sz).fill(0);

        // Calculate net balance for each person
        if (data['edges']) {
            for (let i = 0; i < data['edges'].length; i++) {
                const edge = data['edges'][i];
                vals[edge['to'] - 1] += parseInt(edge['label']);
                vals[edge['from'] - 1] -= parseInt(edge['label']);
            }
        }

        const pos_heap = new BinaryHeap();
        const neg_heap = new BinaryHeap();

        for (let i = 0; i < sz; i++) {
            if (vals[i] > 0) {
                pos_heap.insert([vals[i], i]);
            } else if (vals[i] < 0) {
                // Insert the debt as a positive number
                neg_heap.insert([-vals[i], i]); 
            }
        }

        const new_edges = [];
        while (!pos_heap.empty() && !neg_heap.empty()) {
            const mx = pos_heap.extractMax(); // Person who gets money [amount, id]
            const mn = neg_heap.extractMax(); // Person who owes money [amount, id]

            const amt = Math.min(mx[0], mn[0]);
            const to = mx[1];   // The person getting paid
            const from = mn[1]; // The person paying

            // Create the new optimal edge
            new_edges.push({ from: from + 1, to: to + 1, label: String(Math.abs(amt)) });
            
            // Calculate remaining balances
            const remaining_credit = mx[0] - amt;
            const remaining_debt = mn[0] - amt;

            // If the person who gets money is still owed more,
            // add them back to the positive heap.
            if (remaining_credit > 0.01) { // Use a small epsilon for float comparison
                pos_heap.insert([remaining_credit, to]);
            }

            // If the person who owes money still has debt,
            // add them back to the negative heap.
            if (remaining_debt > 0.01) { // Use a small epsilon
                neg_heap.insert([remaining_debt, from]);
            }
        }

        return { nodes: data['nodes'], edges: new_edges };
    }

    // Auto-generate a random problem on load
    genNew.click();
};