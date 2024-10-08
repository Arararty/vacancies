export interface Data {
  alternate_url: string;
  arguments: null;
  clusters: null;
  found: number;
  items: Vacancy[];
  page: number;
  pages: number;
  per_page: number;
}

export interface Vacancy {
  accept_temporary: boolean | null;
  address: Address | null;
  adv_response_url: string | null;
  alternate_url: string;
  apply_alternate_url: string;
  archived: boolean;
  area: Area;
  contacts: Contacts | null;
  created_at: string;
  department: IdName<string> | null;
  employer: Employer | null;
  employment: IdName<string>;
  experience: IdName<string>;
  has_test: boolean;
  id: string;
  insider_interview: InsiderInterview | null;
  name: string;
  premium: boolean;
  published_at: string;
  relations?: [];
  response_letter_required: string;
  response_url: string | null;
  salary: Salary;
  schedule: IdName<string>;
  snippet: Snippet;
  sort_point_distance: number | null;
  type: IdName<string>;
  url: string;
  working_days: IdName<string>[];
  working_time_modes: IdName<string>[];
  working_time_intervals: IdName<string>[];
}

interface Snippet {
  requirement: string | null;
  responsibility: string | null;
}

interface IdName<T> {
  id: T;
  name: string;
}

export interface Salary {
  from: number | null;
  currency: string;
  gross: boolean | null;
  to: number | null;
}

interface InsiderInterview {
  id: string;
  url: string;
}

interface Address {
  building: string | null;
  city: string | null;
  description: string | null;
  id: string | null;
  lat: number | null;
  lng: number | null;
  metro: MetroStations | null;
  metro_stations: MetroStations[] | null;
  raw: string | null;
  street: string | null;
}

interface MetroStations {
  lat: number | null;
  line_id: string | null;
  line_name: string | null;
  lng: number | null;
  station_id: string | null;
  station_name: string | null;
}

interface Area extends IdName<string> {
  url: string;
}

interface Contacts {
  name: string | null;
  email: string | null;
  phones: Phones[];
}

interface Phones {
  country: string;
  city: string;
  number: string;
  comment: string | null;
}

interface Employer extends IdName<string> {
  alternate_url: string;
  logo_urls: LogoUrls | null;
  trusted: boolean;
  url: string;
  vacancies_url: string;
}

interface LogoUrls {
  '90': string;
  '240': string;
  original: string;
}
