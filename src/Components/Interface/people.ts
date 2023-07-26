
export interface Person {
    adult:                boolean;
    gender:               number;
    id:                   number;
    known_for:            KnownFor[];
    known_for_department: KnownForDepartment;
    name:                 string;
    popularity:           number;
    profile_path:         string;
}

export interface KnownFor {
    adult?:            boolean;
    backdrop_path?:    string;
    genre_ids:         number[];
    id:                number;
    media_type:        MediaType;
    original_language: OriginalLanguage;
    original_title?:   string;
    overview:          string;
    poster_path?:      string;
    release_date?:     Date;
    title?:            string;
    video?:            boolean;
    vote_average:      number;
    vote_count:        number;
    first_air_date?:   Date;
    name?:             string;
    origin_country?:   string[];
    original_name?:    string;
}

export enum MediaType {
    Movie = "movie",
    Tv = "tv",
}

export enum OriginalLanguage {
    En = "en",
    Es = "es",
    Ja = "ja",
    Sv = "sv",
    Ta = "ta",
    Te = "te",
    Tl = "tl",
}

export enum KnownForDepartment {
    Acting = "Acting",
    Directing = "Directing",
}