// Bank object representing the banking system
const bank = {
  customers: [],
  loans: [],

  createAccount() {
    const customer = {
      id: this.customers.length + 1,
      checkingBalance: 0,
      savingsBalance: 0,
      loans: [],
    };

    this.customers.push(customer);
    return customer;
  },

  deposit(customer, accountType, amount) {
    if (accountType === 'checking') {
      customer.checkingBalance += amount;
    } else if (accountType === 'savings') {
      customer.savingsBalance += amount;
    }
  },

  withdraw(customer, accountType, amount) {
    if (accountType === 'checking') {
      if (customer.checkingBalance >= amount) {
        customer.checkingBalance -= amount;
      } else {
        console.log('Insufficient funds');
      }
    } else if (accountType === 'savings') {
      if (customer.savingsBalance >= amount) {
        customer.savingsBalance -= amount;
      } else {
        console.log('Insufficient funds');
      }
    }
  },

  applyForLoan(customer, amount) {
    const loan = {
      id: this.loans.length + 1,
      customer: customer,
      amount: amount,
      status: 'pending',
    };

    this.loans.push(loan);
    customer.loans.push(loan);
    return loan;
  },

  processLoanApplications() {
    for (const loan of this.loans) {
      if (loan.status === 'pending') {
        if (loan.customer.income / loan.customer.expenditure <= 0.36) {
          loan.status = 'approved';
        } else {
          loan.status = 'rejected';
        }
      }
    }
  },
};

// Example usage
const customer1 = bank.createAccount();
const customer2 = bank.createAccount();

bank.deposit(customer1, 'checking', 1000);
bank.deposit(customer2, 'savings', 500);

console.log(customer1);
console.log(customer2);

bank.withdraw(customer1, 'checking', 500);
bank.withdraw(customer2, 'savings', 200);

console.log(customer1);
console.log(customer2);

const loan1 = bank.applyForLoan(customer1, 5000);
const loan2 = bank.applyForLoan(customer2, 3000);

console.log(loan1);
console.log(loan2);

bank.processLoanApplications();

console.log(loan1);
console.log(loan2);

// In this example, the bank object represents the banking system. It keeps track of customers, loans, and provides functions to perform various banking operations. Customers can create accounts, make deposits and withdrawals, and apply for loans. The processLoanApplications function is responsible for determining the approval status of loan applications based on a simple income-to-expenditure ratio check.

// Please note that this code is a basic implementation to demonstrate the interactions between customers and the bank. In a real-world scenario, you would need to consider additional security measures, data persistence, and more complex business logic.
