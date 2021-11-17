const selectIng = (obj) => {
  // convert object to array of arrays [[key, value], [key, value]]
  const arr = Object.entries(obj);
  const filteredIng = arr.filter(
    (item) => item[0].includes("strIngredient") && item[1] !== ""
  );
  // [ingedient1, potato]
  // [measure1, 8kg]
  // [potato, 8kg]
  const filteredMsr = arr.filter(
    (item) =>
      item[0].includes("strMeasure") && item[1] !== "" && item[1] !== " "
  );
  const ingMsr = filteredMsr.map((el, i) => (el = [filteredIng[i][1], el[1]]));

  return ingMsr;
};[]

console.log(
  selectIng({
    idMeal: "53041",
    strMeal: "Grilled Portuguese sardines",
    strDrinkAlternate: null,
    strCategory: "Seafood",
    strArea: "Portuguese",
    strInstructions:
      "STEP 1\r\n\r\nPut all of the ingredients, except the sardines, into a bowl and mix together with some seasoning. Pour into a baking dish, add the sardines and toss really well. Cover and chill for a few hours.\r\n\r\nSTEP 2\r\n\r\nHeat a BBQ or griddle pan until hot. Cook the sardines for 4-5 minutes on each side or until really caramelised and charred. Put onto a serving plate, drizzle with oil, sprinkle with a little more paprika and squeeze over the lemon wedges.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/lpd4wy1614347943.jpg",
    strTags: null,
    strYoutube: "https://www.youtube.com/watch?v=JYtMjKa6cdY",
    strIngredient1: "Sardines",
    strIngredient2: "Olive Oil",
    strIngredient3: "Garlic",
    strIngredient4: "Paprika",
    strIngredient5: "Lemon",
    strIngredient6: "Rosemary",
    strIngredient7: "Red Chilli",
    strIngredient8: "",
    strIngredient9: "",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: "",
    strIngredient17: "",
    strIngredient18: "",
    strIngredient19: "",
    strIngredient20: "",
    strMeasure1: "8",
    strMeasure2: "2 tbs",
    strMeasure3: "3 cloves",
    strMeasure4: "1 tbs",
    strMeasure5: "1/2 ",
    strMeasure6: "4 sprigs",
    strMeasure7: "1",
    strMeasure8: " ",
    strMeasure9: " ",
    strMeasure10: " ",
    strMeasure11: " ",
    strMeasure12: " ",
    strMeasure13: " ",
    strMeasure14: " ",
    strMeasure15: " ",
    strMeasure16: " ",
    strMeasure17: " ",
    strMeasure18: " ",
    strMeasure19: " ",
    strMeasure20: " ",
    strSource:
      "https://www.olivemagazine.com/recipes/fish-and-seafood/grilled-portuguese-sardines/",
    strImageSource: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null,
  })
);
