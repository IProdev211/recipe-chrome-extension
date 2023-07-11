// @ts-nocheck
import {
  Button,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import SpainFlag from "../../assets/spain.svg";
import TwitterIcon from "../../assets/Twitter.svg";
import TelegramIcon from "../../assets/Telegram.svg";
import MediumIcon from "../../assets/Medium.svg";

const dummyData = {
  Protein: "Jumbo Shrimp",
  "Spice Level": "Hot",
  Spices: "Saffron",
  "Cooking Oil": "Spanish Olive Oil",
  "Volume/Weight": "700g",
  Serves: "4",
  Authenticity: "Unverified",
  Stock: "Chicken",
};

export default function RecipeSearch() {
  const [query, setQuery] = useState<string>("");

  const onChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <Stack spacing={3}>
      <TextField
        value={query}
        onChange={onChangeQuery}
        placeholder="Search cuisine"
      />
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" alignItems="center" spacing="10px">
          <img src={SpainFlag} alt="spain flag" />
          <Typography variant="body1" fontFamily="Bai Jamjuree">
            Spanish Paella
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing="5px">
          {[TwitterIcon, TelegramIcon, MediumIcon].map((icon) => (
            <IconButton sx={{ bgcolor: "#171F2F", width: 24, height: 24 }}>
              <img src={icon} alt="social link" />
            </IconButton>
          ))}
          <Button>+ Add recipe</Button>
        </Stack>
      </Stack>
      <Stack borderRadius="6px" bgcolor="#131823" p="10px">
        <Stack
          borderRadius="6px"
          p="10px 20px"
          spacing={2}
          bgcolor="#17CFC4"
          color="#0D1119"
        >
          <Typography variant="caption">Difficulty: Medium</Typography>
          <Typography variant="body2">
            Spanish paella is a traditional rice dish that originated in the
            Valencia region of Spain. It was originally made with ingredients
            such as saffron, rabbit, and snails, which were common in the area.
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
          {Object.entries(dummyData).map(([key, value]) => (
            <Grid item mobile={6} key={key} pt={1.5} pl={3}>
              <Stack>
                <Typography variant="body2" fontSize={13} color="#7185AA">
                  {key}
                </Typography>
                <Typography variant="body2" fontWeight={500}>
                  {value}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
}
