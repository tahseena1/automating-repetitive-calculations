let employees = [
    {name: "Micheal Scott", hourlyRate: 35, hoursWorked: 45},
    {name: "Jim Halpert", hourlyRate: 25, hoursWorked: 40},
    {name: "Robert California", hourlyRate: 85, hoursWorked: 15},
    {name: "Dwight Schrute", hourlyRate: 25, hoursWorked: 60},
];

function calculateBasePay (rate, hours) {
    if (hours <= 40)
        return (rate * hours);
    else return (rate * 40);
};

function calculateOvertimePay (rate, hours) {
    if (hours > 40)
        return ((hours - 40) * (rate * 1.5));
    else return 0;
};

function calculateTaxes (grossPay) {
    return (grossPay - (.15 * grossPay))
};

function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overtimePay;
    const netPay = calculateTaxes(grossPay);
    return {
        name: employee.name,
        basePay: basePay.toFixed(2),
        overtimePay: overtimePay.toFixed(2),
        grossPay: grossPay.toFixed(2),
        netPay: netPay.toFixed(2)
}};

employees.forEach (employee => {
    console.log(processPayroll(employee))
});

