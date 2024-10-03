//Question 1: ES6 Features



const lowerCaseWords = (array) => {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(array) || array.length === 0) {
        reject("Error, Please provide a valid non-empty array :)");
        return;
      }
  
      const result = array
        .filter(item => typeof item === "string")
        .map(word => word.toLowerCase());
  
      resolve(result);
    });
  };
  
  lowerCaseWords(["Daniel De Mesa", "PIZZA", 1014440281, "Wings", 25])
    .then((res) => console.log("Lowercased words:", res))
    .catch((err) => console.log(err));
  