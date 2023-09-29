let items = [];
let amounts = [];
let chart1;
let chart2;
let chart3;
let chart4; // Polar Area Chart

document.addEventListener("DOMContentLoaded", () => {
  const formitems = document.querySelector(".add-items");
  const itemList = document.querySelector(".expense");

  function addExpense(e) {
    e.preventDefault();

    const item = this.querySelector("[name=item]").value;
    const amount = parseFloat(this.querySelector("[name=amount]").value);

    if (item && !isNaN(amount)) {
      items.push(item);
      amounts.push(amount);

      this.reset();
      updateCharts();
    }
  }

  function clearAll() {
    items = [];
    amounts = [];
    updateCharts();
  }

  function updateCharts() {
    if (chart1) {
      chart1.destroy();
    }

    if (chart2) {
      chart2.destroy();
    }

    if (chart3) {
      chart3.destroy();
    }

    if (chart4) {
      chart4.destroy();
    }

    const ctx1 = document.getElementById("chartCanvas1").getContext("2d");

    chart1 = new Chart(ctx1, {
      type: "bar",
      data: {
        labels: items,
        datasets: [
          {
            label: "Amount (₹)",
            data: amounts,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },

      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    const ctx2 = document.getElementById("chartCanvas2").getContext("2d");

    chart2 = new Chart(ctx2, {
      type: "line",
      data: {
        labels: items,
        datasets: [
          {
            label: "Amount (₹)",
            data: amounts,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },

      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    const ctx3 = document.getElementById("chartCanvas3").getContext("2d");

    chart3 = new Chart(ctx3, {
      type: "doughnut",
      data: {
        labels: items,
        datasets: [
          {
            label: "Amount (₹)",
            data: amounts,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    });

    const ctx4 = document.getElementById("chartCanvas4").getContext("2d");

    chart4 = new Chart(ctx4, {
      type: "polarArea",
      data: {
        labels: items,
        datasets: [
          {
            label: "Amount (₹)",
            data: amounts,
            backgroundColor: [
              "rgba(255, 99, 132, 0.7)",
              "rgba(54, 162, 235, 0.7)",
              "rgba(255, 206, 86, 0.7)",
              "rgba(75, 192, 192, 0.7)",
              "rgba(153, 102, 255, 0.7)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    });
  }

  formitems.addEventListener("submit", addExpense);
  document.querySelector(".clear").addEventListener("click", clearAll);
});
