//Base url:

const base_url = "https://api.rawg.io/api/";

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentDay = getCurrentDay();
const currentMonth = getCurrentMonth();
const currentYear = new Date().getFullYear();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular games are
const popular_games = `games?key=4c66ee0033de4c6ca592de77fdea61fa&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=4c66ee0033de4c6ca592de77fdea61fa&dates=${currentDate},${nextYear}&ordering=-rating&page_size=10`;
const newGames = `games?key=4c66ee0033de4c6ca592de77fdea61fa&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;



export const popularGamesURL = () => {
  return `${base_url}${popular_games}`;
};

export const upcomingGamesURL =  () =>{
  return `${base_url}${upcoming_games}`
}

export const newGamesURL =  () =>{
  return `${base_url}${newGames}`
}



/* get the game details */

export const gameDetailsURL = (game_id) =>{
  return `${base_url}games/${game_id}?key=4c66ee0033de4c6ca592de77fdea61fa`
}