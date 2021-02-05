function capitalizeFirst (array) {
    return array.filter(s => s).map(s => s[0].toUpperCase() + s.slice(1));
}
  
console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']