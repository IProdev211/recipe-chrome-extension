import {
  Autocomplete,
  Box,
  Divider,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Recipe } from "../services/interface";
import { DifficultySVG } from "../assets/Difficulty";
import { DIFFICULT_MAPPING } from "../services/constants";

interface SearchBarProps {
  onConfirm: (arg: Recipe | null) => void;
  recipes: Recipe[];
}

export default function SearchBar({ recipes, onConfirm }: SearchBarProps) {
  const onChangeQuery = (_: any, newValue: Recipe | null) => {
    onConfirm(newValue);
  };

  return (
    <Autocomplete
      options={recipes}
      autoHighlight
      disableClearable
      getOptionLabel={(option) => option.name}
      onChange={onChangeQuery}
      renderOption={(props, option) => (
        <Box
          component="li"
          display="flex"
          padding="6px 8px"
          marginBottom="5px"
          {...props}
          key={option.id}
        >
          <Typography
            variant="body2"
            fontWeight={500}
            fontFamily="Bai Jamjuree"
          >
            {option.name}
          </Typography>
          <Stack direction="row" alignItems="center" spacing="10px" ml="auto">
            <DifficultySVG
              color={DIFFICULT_MAPPING[option.difficulty.toString()]?.color}
            />
            <Typography variant="body1" fontWeight={700}>
              {DIFFICULT_MAPPING[option.difficulty.toString()]?.text}
            </Typography>
            <Divider orientation="vertical" flexItem variant="fullWidth" />
            <Typography variant="body1">30min</Typography>
          </Stack>
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search cuisine"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
      sx={{
        "& .MuiInputAdornment-root path": {
          fill: "#fff",
        },
        "& .MuiAutocomplete-endAdornment": {
          display: "none",
        },
      }}
    />
  );
}
