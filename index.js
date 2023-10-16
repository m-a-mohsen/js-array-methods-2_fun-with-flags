import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;

  // ------ Part 1 -------------------------

  // const foundCountry = countries.find((item) =>
  // item.name.toLowerCase().startsWith(searchString.toLowerCase())
  // );

  // if (foundCountry) {
  //   const countryElement = Country(foundCountry);
  //   container.append(countryElement);
  // }

  // ------ Part 2 -------------------------
  const foundCountries = countries.filter(
    (item) => item.name.toLowerCase()[0] === searchString.toLowerCase()[0]
  );
  console.log(foundCountries);

  //----------------------------------------
  if (foundCountries) {
    foundCountries.forEach((item) => {
      const countryElement = Country(item);
      container.append(countryElement);
    });
  }
});
