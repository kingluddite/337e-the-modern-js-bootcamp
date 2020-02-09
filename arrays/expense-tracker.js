const account = {
  name: 'John Doe',
  expenses: [],
  incomes: [],
  addExpense: function(description, amount) {
    this.expenses.push({
      description,
      amount,
    });
  },
  addIncome: function(description, amount) {
    this.incomes.push({
      description,
      amount,
    });
  },
  getAccountSummary: function() {
    let totalExpenses = 0;
    let totalIncomes = 0;
    let accountBalance = 0;
    this.expenses.forEach(function(expense) {
      totalExpenses += expense.amount;
    });
    this.incomes.forEach(function(income) {
      totalIncomes += income.amount;
    });
    accountBalance = totalIncomes - totalExpenses;
    return `${this.name} has a balance of $${accountBalance}. Total expenses are $${totalExpenses}. Total income is $${totalIncomes}.`;
  },
};

// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> "John Doe has $1200 in expenses"

account.addExpense('Rent', 960);
account.addExpense('Coffee', 2);
account.addExpense('Car', 200);
account.addExpense('Car Wash', 20);
account.addIncome('Job', 1000);
console.log(account.getAccountSummary());
