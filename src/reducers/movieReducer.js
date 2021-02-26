import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "../const/actionTypes";

export const initialState = {
    listMovie :[

        {
          Title: "Iron Man",
          Year: "2008",
          Rate: 4,
          Type: "Science faction",
          Poster: "https://i.egycdn.com/pic/WmFwZndlY21FbWptVFRhY21vTmJ4bG1ZWXY.jpg",
          Discription:
            "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
          trailer: "https://www.youtube.com/embed/8hYlB38asDY",
        },
        {
          Title: "John Wick 3",
          Year: "2019",
          Rate: 3,
          Type: "Action",
          Poster:
            "https://i.egycdn.com/pic/WmFwZndlY21MY212bWptdm1FbWFjbUdrTkVtb3dQbWc.jpg",
          Discription:
            "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
          trailer: "https://www.youtube.com/embed/pU8-7BX9uxs",
        },
        {
          Title: "Avengers: Endgame",
          Year: "2019",
          Rate: 5,
          Type: "Drama",
          Poster:
            "https://i.egycdn.com/pic/WmFwZndlY21MY212bWptdm12bWpFY21ibUVtSGNtRW1FY3dQ.jpg",
          Discription:
            "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          trailer: "https://www.youtube.com/embed/6ZfuNTqbHE8",
        },
        {
          Title: "Harry Potter",
          Year: "2001",
          Rate: 2,
          Type: "Family",
          Poster: "https://i.egycdn.com/pic/WmFwZndlY21idnRjdk5IUmN4Y05wSE5ZWWc.jpg",
          Discription:
            "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
          trailer: "https://www.youtube.com/embed/PbdM1db3JbY",
        },
        {
          Title: "Avatar",
          Year: "2009",
          Rate: 4,
          Type: "Science faction",
          Poster:
            "https://i.egycdn.com/pic/WmFwZndlY21URW12dk5FbUhjRWNsYWF2Y2x3Zk5q.jpg",
          Discription:
            "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
          trailer: "https://www.youtube.com/embed/6ziBFh3V1aM",
        },
      
]};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MOVIE:
      return { ...state, listMovie: [payload, ...state.listMovie] };
    case DELETE_MOVIE:
      return {
        ...state,
        listMovie: state.listMovie.filter((movie) => movie.id !== payload),
      };
    case EDIT_MOVIE:
      return {
        ...state,
        listMovie: state.listMovie.map((movie) =>
          movie.id === payload.id ? { ...movie, ...payload } : movie
        ),
      };
    default:
      return state;
  }
};

export default movieReducer;
