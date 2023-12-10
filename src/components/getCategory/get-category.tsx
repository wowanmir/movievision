// import { useState } from "react";
// import { getCountries, getGenres, getRatings, getYears } from "./category";

// export const GetCategory = () => {
//   const countries = getCountries();
//   const genres = getGenres();
//   const ratings = getRatings();
//   const years = getYears();
//   const [currentCategory, setCurrentCategory] = useState("");
//   const getCategory = () => {
//     return currentCategory
//       ? countries ||
//           genres ||
//           ratings ||
//           years.find((a) => a.value === currentCategory)
//       : "";
//   };
//   const onChange = (newValue: any) => {
//     setCurrentCategory(newValue.value);
//   };
//   return {
//     getCategory,
//     onChange,
//   };
// };
