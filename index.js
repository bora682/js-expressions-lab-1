//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work


const day1TempF = 32;
const day2TempC = 25;

const day3TempF = 70;
const day4TempC = 18;

const day5TempF = 80;
const day6TempC = 15;

const day7TempF = 72;
const day8TempC = 28;

const day9TempF = 68;
const day10TempC = 20;

const day11TempF = 75;
const day12TempC = 23;

const day13TempF = 82;
const day14TempC = 30;

const day15TempF = 65;
const day16TempC = 22;

const day17TempF = 77;
const day18TempC = 26;

const day19TempF = 78;
const day20TempC = 24;

const day21TempF = 73;
const day22TempC = 21;

const day23TempF = 79;
const day24TempC = 27;

const day25TempF = 71;
const day26TempC = 19;

const day27TempF = 74;
const day28TempC = 17;

const day29TempF = 76;
const day30TempC = 29;

const day1TempC = (32 - 32) * 5 / 9;

const day3TempC = (70 - 32) * 5 / 9;

const day5TempC = (80 - 32) * 5 / 9;

const day7TempC = (72 - 32) * 5 / 9;

const day9TempC = (68 - 32) * 5 / 9;

const day11TempC = (75 - 32) * 5 / 9;

const day13TempC = (82 - 32) * 5 / 9;

const day15TempC = (65 - 32) * 5 / 9;

const day17TempC = (77 - 32) * 5 / 9;

const day19TempC = (78 - 32) * 5 / 9;

const day21TempC = (73 - 32) * 5 / 9;

const day23TempC = (79 - 32) * 5 / 9;

const day25TempC = (71 - 32) * 5 / 9;

const day27TempC = (74 - 32) * 5 / 9;

const day29TempC = (76 - 32) * 5 / 9;


const tot_temperature_in_celsius =
  day1TempC + day2TempC + day3TempC + day4TempC + day5TempC + day6TempC +
  day7TempC + day8TempC + day9TempC + day10TempC + day11TempC + day12TempC +
  day13TempC + day14TempC + day15TempC + day16TempC + day17TempC + day18TempC +
  day19TempC + day20TempC + day21TempC + day22TempC + day23TempC + day24TempC +
  day25TempC + day26TempC + day27TempC + day28TempC + day29TempC + day30TempC;

  const avg_temperature_in_celsius = tot_temperature_in_celsius / 30;

const day2TempF = (25 * 9 / 5) + 32;

const day4TempF = (18 * 9 / 5) + 32;

const day6TempF = (15 * 9 / 5) + 32;

const day8TempF = (28 * 9 / 5) + 32;

const day10TempF = (20 * 9 / 5) + 32;

const day12TempF = (23 * 9 / 5) + 32;

const day14TempF = (30 * 9 / 5) + 32;

const day16TempF = (22 * 9 / 5) + 32;

const day18TempF = (26 * 9 / 5) + 32;

const day20TempF = (24 * 9 / 5) + 32;

const day22TempF = (21 * 9 / 5) + 32;

const day24TempF = (27 * 9 / 5) + 32;

const day26TempF = (19 * 9 / 5) + 32;

const day28TempF = (17 * 9 / 5) + 32;

const day30TempF = (29 * 9 / 5) + 32;

const tot_temperature_in_fahrenheit =
  day1TempF + day2TempF + day3TempF + day4TempF + day5TempF + day6TempF +
  day7TempF + day8TempF + day9TempF + day10TempF + day11TempF + day12TempF +
  day13TempF + day14TempF + day15TempF + day16TempF + day17TempF + day18TempF +
  day19TempF + day20TempF + day21TempF + day22TempF + day23TempF + day24TempF +
  day25TempF + day26TempF + day27TempF + day28TempF + day29TempF + day30TempF;

  const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;

  console.log("Total Temperature in Fahrenheit:", tot_temperature_in_fahrenheit);
  console.log("Average Temperature in Fahrenheit:", avg_temperature_in_fahrenheit);
  console.log("Total Temperature in Celsius:", tot_temperature_in_celsius);
console.log("Average Temperature in Celsius:", avg_temperature_in_celsius);

module.exports = {
  tot_temperature_in_fahrenheit,
  tot_temperature_in_celsius,
  avg_temperature_in_fahrenheit,
  avg_temperature_in_celsius 
};
