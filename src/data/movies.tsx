import { IMovie } from "./data";

export const movies: IMovie[] = [
  {
    total: 7,
    totalPages: 1,
    items: [
      {
        kinopoiskId: 263531,
        imdbId: "tt0050561",
        nameRu: "Мстители",
        nameEn: "The Avengers",
        nameOriginal: "The Avengers",
        countries: [
          {
            country: "США",
          },
        ],
        genres: [
          {
            genre: "фантастика",
          },
        ],
        ratingKinopoisk: 7.9,
        ratingImdb: 7.9,
        year: 2012,
        type: "FILM",
        posterUrl:
          "http://kinopoiskapiunofficial.tech/images/posters/kp/263531.jpg",
        posterUrlPreview:
          "https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg",
      },
    ],
  },
];
