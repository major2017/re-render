import { Country } from "./types";
import { useTheme } from "./theme";

type ItemProps = {
  country: Country;
  savedCountry: Country;
  onItemClick: () => void;
};

const Item = ({ country, savedCountry, onItemClick }: ItemProps) => {
  const { mode } = useTheme();
  const className = `country-item ${
    savedCountry.id === country.id ? "saved" : ""
  } ${mode === "dark" ? "dark" : ""}`;

  console.log("render");

  return (
    <button className={className} onClick={onItemClick}>
      <img
        src={country.flagUrl}
        width={50}
        style={{ marginRight: "8px" }}
        alt={country.name}
      />
      <div>{country.name}</div>
    </button>
  );
};

type CountriesListProps = {
  countries: Country[];
  onCountryChanged: (country: Country) => void;
  savedCountry: Country;
};

export const CountriesList = ({
  countries,
  onCountryChanged,
  savedCountry
}: CountriesListProps) => {
  return (
    <div className="countries-list">
      {countries.map((country) => (
        <Item
          country={country}
          key={country.id}
          savedCountry={savedCountry}
          countries={countries}
          onItemClick={() => onCountryChanged(country)}
        />
      ))}
    </div>
  );
};
