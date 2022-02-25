export interface Country {
  countryName: string;
  countryShortCode: string;
  regions: Regions[];
}

export interface Regions {
  name: string;
  shortCode: string;
}
