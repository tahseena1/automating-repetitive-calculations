let employees = [
    {name: "Micheal Scott", hourlyRate: 35, hoursWorked: 45},
    {name: "Jim Halpert", hourlyRate: 25, hoursWorked: 40},
    {name: "Robert California", hourlyRate: 85, hoursWorked: 15},
    {name: "Dwight Schrute", hourlyRate: 25, hoursWorked: 60},
]

function calculateBasePay (rate, hours) {
    if (employees.hoursWorked <= 40)
        return (rate * hours);
    else return (rate * 40);
}

