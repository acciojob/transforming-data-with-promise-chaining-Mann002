//your JS code here. If required.
const btn = document.getElementById("btn");
    const output = document.getElementById("output");

    btn.onclick = function () {
      output.textContent = "";

      new Promise((resolve) => {
        setTimeout(() => {
          let val = Number(document.getElementById("ip").value);
          output.textContent = `Result: ${val}`;
          resolve(val);
        }, 2000);
      })
      .then(val => new Promise(resolve => {
        setTimeout(() => {
          output.textContent = `Result: ${val * 2}`;
          resolve(val * 2);
        }, 2000);
      }))
      .then(val => new Promise(resolve => {
        setTimeout(() => {
          output.textContent = `Result: ${val - 3}`;
          resolve(val - 3);
        }, 1000);
      }))
      .then(val => new Promise(resolve => {
        setTimeout(() => {
          output.textContent = `Result: ${val / 2}`;
          resolve(val / 2);
        }, 1000);
      }))
      .then(val => new Promise(resolve => {
        setTimeout(() => {
          output.textContent = `Final Result: ${val + 10}`;
          resolve(val + 10);
        }, 1000);
      }));
    };