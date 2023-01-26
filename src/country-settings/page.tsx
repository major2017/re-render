/** @jsxImportSource @emotion/react */
import { useState, useMemo } from "react";
import { css } from "@emotion/react";
import { Country } from "./types";
import { SelectedCountry } from "./selected-country";
import { CountriesList } from "./list";
import { ThemeProvider, Mode } from "./theme";

const contentCss = css`
  display: flex;
  width: 100%;
`;

export const Page = ({ countries }: { countries: Country[] }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [savedCountry, setSavedCountry] = useState<Country>(countries[0]);
  const [mode, setMode] = useState<Mode>("light");

  const list = useMemo(() => {
    return (
      <CountriesList
        countries={countries}
        onCountryChanged={(c) => setSelectedCountry(c)}
        savedCountry={savedCountry}
      />
    );
  }, [savedCountry, countries]);

  const selected = useMemo(() => {
    return (
      <SelectedCountry
        country={selectedCountry}
        onCountrySaved={() => setSavedCountry(selectedCountry)}
      />
    );
  }, [selectedCountry]);

  const theme = useMemo(() => ({ mode }), [mode]);

  return (
    <ThemeProvider value={theme}>
      <h1>Country settings</h1>
      <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
        Toggle theme
      </button>
      <div css={contentCss}>
        {list}
        {selected}
      </div>
    </ThemeProvider>
  );
};
