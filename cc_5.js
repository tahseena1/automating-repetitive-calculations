let employees = [
    {name: "Micheal Scott", hourlyRate: 35, hoursWorked: 45},
    {name: "Jim Halpert", hourlyRate: 25, hoursWorked: 40},
    {name: "Robert California", hourlyRate: 85, hoursWorked: 15},
    {name: "Dwight Schrute", hourlyRate: 25, hoursWorked: 60},
];

function calculateBasePay (rate, hours) {
    const baseHours = Math.min(hours, 40);
    return baseHours * rate;
};

function calculateOvertimePay (rate, hours) {
    const overtimeHours = Math.max(0, hours - 40);
    return overtimeHours * rate * 1.5;
};

function calculateTaxes (grossPay) {
    return (.85 * grossPay)
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

employees.forEach(employee => {
    const payroll = processPayroll(employee);
    console.log(
        `Name: ${payroll.name}
        \nBase Pay: $${payroll.basePay}
        \nOvertime Pay: $${payroll.overtimePay}
        \nGross Pay: $${payroll.grossPay}
        \nNet Pay: $${payroll.netPay}\n`
    );
});