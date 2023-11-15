import { IMovie } from "./data";

export const movies: IMovie[] = [
  {
    total: 100,
    totalPages: 5,
    items: [
      {
        kinopoiskId: 361,
        imdbId: "tt0137523",
        nameRu: "Бойцовский клуб",
        nameEn: "Fight Club",
        nameOriginal: "Fight Club",
        countries: [
          {
            country: "США",
          }
        ],
        genres: [
          {
            genre: "триллер",
          }
        ],
        ratingKinopoisk: 8.7,
        ratingImdb: 8.8,
        year: 1999,
        type: "FILM",
        posterUrl:
          "https://kinopoiskapiunofficial.tech/images/posters/kp/361.jpg",
        posterUrlPreview:
          "https://kinopoiskapiunofficial.tech/images/posters/kp_small/361.jpg",
      },
    ],
  },
];
