export interface IMovie {
  total: number;
  totalPages: number;
  items: [
    {
      kinopoiskId: number;
      imdbId: string | number;
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
    }
  ];
}
