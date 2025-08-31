function filterLongNames(names) {
  return names.filter(name => name.length > 5);
}

let nameList = ["Simran", "Aman", "Jonathan", "Ria", "Kaur"];
console.log(filterLongNames(nameList))