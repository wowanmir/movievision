export interface IFilm {
  keyword: string,
  pagesCount: number,
  searchFilmsCountResult: number,
  films: [
    {
      filmId: number,
      nameRu: string,
      nameEn: string,
      type: string,
      year: string,
      description: string,
      filmLength: string,
      countries: [
        {
          country: string
        }
      ],
      genres: [
        {
          genre: string
        }
      ],
      rating: string,
      ratingVoteCount: number,
      posterUrl: string,
      posterUrlPreview: string,
    }
  ]
}
