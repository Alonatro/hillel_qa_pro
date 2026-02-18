var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн",

  price: function () {
    let total = 0;

    for (let key in this) {
      if (typeof this[key] === "string") {
        let value = parseFloat(this[key]);
        total += value;
      }
    }

    return total;
  },

  minPrice: function () {
    let min = null;

    for (let key in this) {
      if (typeof this[key] === "string") {
        let value = parseFloat(this[key]);

        if (min === null || value < min) {
          min = value;
        }
      }
    }

    return min;
  },

  maxPrice: function () {
    let max = null;

    for (let key in this) {
      if (typeof this[key] === "string") {
        let value = parseFloat(this[key]);

        if (max === null || value > max) {
          max = value;
        }
      }
    }

    return max;
  }
};

services["Розбити скло"] = "200 грн";

console.log("Загальна вартість:", services.price());
console.log("Мінімальна ціна:", services.minPrice());
console.log("Максимальна ціна:", services.maxPrice());
