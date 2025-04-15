// 15 values are in Fahrenheit
const day1TempF = 32;
const day3TempF = 70;
const day5TempF = 80;
const day7TempF = 72;
const day9TempF = 68;
const day11TempF = 75;
const day13TempF = 82;
const day15TempF = 65;
const day17TempF = 77;
const day19TempF = 78;
const day21TempF = 73;
const day23TempF = 79;
const day25TempF = 71;
const day27TempF = 74;
const day29TempF = 76;

// 15 values are in Celsius, we convert them to Fahrenheit
const day2TempF = (25 * 9) / 5 + 32;
const day4TempF = (18 * 9) / 5 + 32;
const day6TempF = (15 * 9) / 5 + 32;
const day8TempF = (28 * 9) / 5 + 32;
const day10TempF = (20 * 9) / 5 + 32;
const day12TempF = (23 * 9) / 5 + 32;
const day14TempF = (30 * 9) / 5 + 32;
const day16TempF = (22 * 9) / 5 + 32;
const day18TempF = (26 * 9) / 5 + 32;
const day20TempF = (24 * 9) / 5 + 32;
const day22TempF = (21 * 9) / 5 + 32;
const day24TempF = (27 * 9) / 5 + 32;
const day26TempF = (19 * 9) / 5 + 32;
const day28TempF = (17 * 9) / 5 + 32;
const day30TempF = (29 * 9) / 5 + 32;

// The total temperature in Fahrenheit
const tot_temperature_in_fahrenheit =
  day1TempF + day2TempF + day3TempF + day4TempF + day5TempF + day6TempF +
  day7TempF + day8TempF + day9TempF + day10TempF + day11TempF + day12TempF +
  day13TempF + day14TempF + day15TempF + day16TempF + day17TempF + day18TempF +
  day19TempF + day20TempF + day21TempF + day22TempF + day23TempF + day24TempF +
  day25TempF + day26TempF + day27TempF + day28TempF + day29TempF + day30TempF;

// The average temperature in Fahrenheit
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;

// The total and average temperatures in Celsius
const tot_temperature_in_celsius = (tot_temperature_in_fahrenheit - 32) * 5 / 9;
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30;

// Output the results
console.log("Total temperature in Celsius:", tot_temperature_in_celsius);
console.log("Average temperature in Celsius:", avg_temperature_in_celsius);
console.log("Total temperature in Fahrenheit:", tot_temperature_in_fahrenheit);
console.log("Average temperature in Fahrenheit:", avg_temperature_in_fahrenheit);

module.exports = {
  tot_temperature_in_fahrenheit,
  tot_temperature_in_celsius,
  avg_temperature_in_fahrenheit,
  avg_temperature_in_celsius
};