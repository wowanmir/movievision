export type TMovie = {
  kinopoiskId: number;
  imdbId: string;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  countries: [
    {
      country: string;
    }
  ];
  genres: [
    {
      genre: string;
    }
  ];
  ratingKinopoisk: number;
  ratingImdb: number;
  year: number;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
};

export type TMovieResponseData = {
  total: number;
  totalPages: number;
  items: TMovie[];
};

export type TFilm = {
  kinopoiskId: number;
  kinopoiskHDId: string | number;
  imdbId: string;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string;
  logoUrl: string;
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait: number | null;
  ratingAwaitCount: number;
  ratingRfCritics: number;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  filmLength: number;
  slogan: string;
  description: string;
  shortDescription: string;
  editorAnnotation: number | null | string;
  isTicketsAvailable: boolean;
  productionStatus: string;
  type: string;
  ratingMpaa: string;
  ratingAgeLimits: string;
  countries: [
    {
      country: string;
    },
    {
      country: string;
    }
  ];
  genres: [
    {
      genre: string;
    },
    {
      genre: string;
    }
  ];
  startYear: number | null;
  endYear: number | null;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
  hasImax: boolean;
  has3D: boolean;
  lastSync: string;
};

export type TMovieTrailer = {
  url: string;
  name: string;
  site: string;
};

export type TMovieTrailerResponseData = {
  total: number;
  totalPages: number;
  items: TMovieTrailer[];
};
