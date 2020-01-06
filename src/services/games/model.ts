export interface GameServiceRequestModel {
  search: string,
  platforms: string | null,
  publishers: string | null,
  genres: string | null,
  dates: string | null,
  ordering: string | null
}

export interface GamesServiceResponseModel {
  "count": number,
  "next": string,
  "previous": string,
  "results": GameServiceResponseCardModel[]
}

export interface GameServiceResponseCardModel  {
  "id": number,
  "slug": string,
  "name": string,
  "released": string,
  "tba": boolean,
  "background_image": string,
  "rating": number,
  "rating_top": number,
  "ratings":  {
    "id": number,
    "title": string,
    "count": number,
    "percent": number
  },
  "ratings_count": number,
  "reviews_text_count": string,
  "added": number,
  "added_by_status": {
    "yet": number,
    "owned": number,
    "beaten": number,
    "toplay": number,
    "dropped": number,
    "playing": number
  },
  "metacritic": number,
  "playtime": number,
  "suggestions_count": number,
  "user_game": string,
  "reviews_count": number,
  "saturated_color": string,
  "dominant_color": string,
  "platforms": [{
    "platform": {
      "id": number,
      "name": string,
      "slug": string,
      "image": string,
      "year_end": string,
      "year_start": string,
      "games_count": number,
      "image_background": string
    },
    "released_at": string,
    "requirements_en": {
      "minimum": string,
      "recommended": string
    },
    "requirements_ru": string
  }],
  "parent_platforms": [{
    "platform": {
      "id": number,
      "name": string,
      "slug": string
    }
  }],
  "genres": [{
    "id": number,
    "name": string,
    "slug": string,
    "games_count": number,
    "image_background": string
  }],
  "stores": [{
    "id": number,
    "store": {
      "id": string,
      "name": string,
      "slug": string,
      "domain": string,
      "games_count": number,
      "image_background": string
    },
    "url_en": string,
    "url_ru": string
  }]
  "clip": {
    "clip": string,
    "clips": {
      "320": string,
      "640": string,
      "full": string
    },
    "video": string,
    "preview": string
  },
  "short_screenshots": [{
    "id": number,
    "image": string
  }]
}
