// @ts-nocheck
import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import TwitterIcon from "../../assets/Twitter.svg";
import TelegramIcon from "../../assets/Telegram.svg";
import MediumIcon from "../../assets/Medium.svg";
import { Recipe } from "../../services/interface";
import { retrieveAllRecipes } from "../../services/api";
import SearchBar from "../../components/SearchBar";
import { DIFFICULT_MAPPING } from "../../services/constants";

const DETAIL_MAPPING = {
  Protein: "protein",
  Produce: "produce",
  Spices: "spice",
  "Cooking Oil": "cookingOil",
  "Volume/Weight": "volume",
  Serves: "serves",
  Authenticity: "authenticity",
  Stock: "stock",
};

export default function RecipeSearch({ goToAdd }: { goToAdd: () => void }) {
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>();

  useEffect(() => {
    retrieveAllRecipes().then((res) => {
      setAllRecipes(res.map((r, _i) => ({ ...r, id: _i.toString() })));
    });
  }, []);

  const onSelectRecipe = (re: Recipe) => {
    setSelectedRecipe(re);
  };

  const renderDetail = (key, value) => {
    if (["protein", "volume", "serves"].includes(key)) {
      return (
        <Typography variant="body2" fontWeight={500}>
          {value}
          {value && key === "volume" ? "g" : ""}
        </Typography>
      );
    }

    if (key === "produce") {
      return (
        <Typography variant="body2" fontWeight={500} color="#FB2047">
          {value}
        </Typography>
      );
    }

    return (
      <Typography
        variant="body2"
        fontWeight={500}
        sx={{
          backgroundClip: "text",
          textFillColor: "transparent",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          backgroundImage:
            "linear-gradient(136.39deg, #FFBF43 3.18%, #FF4869 102.04%)",
        }}
      >
        {value}
      </Typography>
    );
  };

  return (
    <Stack spacing={3}>
      <SearchBar onConfirm={onSelectRecipe} recipes={allRecipes} />
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" alignItems="center" spacing="10px">
          <Typography variant="body1">{selectedRecipe?.name}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing="5px">
          {[TwitterIcon, TelegramIcon, MediumIcon].map((icon, _i) => (
            <IconButton
              sx={{ bgcolor: "#171F2F", width: 24, height: 24 }}
              key={`social_icon_${_i}`}
            >
              <img src={icon} alt="social link" />
            </IconButton>
          ))}
          <Button onClick={goToAdd}>+ Add recipe</Button>
        </Stack>
      </Stack>
      {selectedRecipe ? (
        <>
          <Stack borderRadius="6px" bgcolor="#131823" p="10px">
            <Stack
              borderRadius="6px"
              p="10px 20px"
              spacing={2}
              bgcolor={
                DIFFICULT_MAPPING[selectedRecipe?.difficulty]?.bgColor ??
                "#17CFC4"
              }
              color={selectedRecipe?.difficulty === 2 ? "#fff" : "#0D1119"}
            >
              <Typography
                variant="caption"
                fontFamily="Helvetica Neue"
                color="inherit"
              >
                Difficulty:{" "}
                {DIFFICULT_MAPPING[selectedRecipe?.difficulty]?.text}
              </Typography>
              <Typography
                variant="body2"
                fontFamily="Helvetica Neue"
                color="inherit"
              >
                {selectedRecipe?.description}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            pb="12px"
            pr="24px"
            bgcolor="#131823"
            boxShadow="0px 2px 6px 0px rgba(5, 16, 55, 0.10)"
            borderRadius="6px"
          >
            <Grid container>
              {Object.entries(DETAIL_MAPPING).map(([key, value]) => (
                <Grid item mobile={6} key={key} pt={1.5} pl={3}>
                  <Stack>
                    <Typography variant="body2" fontSize={13} color="#7185AA">
                      {key}
                    </Typography>
                    {renderDetail(value, selectedRecipe?.[value])}
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </>
      ) : (
        <Typography variant="body1" textAlign="center" fontStyle="italic">
          Select a recipe
        </Typography>
      )}
    </Stack>
  );
}
