import {
  Button,
  CircularProgress,
  FormHelperText,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";
import { countries } from "countries-list";
import { Recipe } from "../../services/interface";
import { createOneRecipe } from "../../services/api";

type PickRecipe = Omit<Recipe, "id">;

export default function AddRecipe({ onBack }: { onBack: () => void }) {
  const [newRecipe, setNewRecipe] = useState<PickRecipe>({
    name: "",
    origin: "",
    description: "",
    difficulty: 0,
    protein: "",
    produce: "",
    spice: "",
    cookingOil: "",
    volume: 0,
    serves: 0,
    authenticity: "",
    stock: "",
  } as PickRecipe);
  const [errors, setErrors] = useState<Record<string, boolean> | null>();
  const [result, setResult] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setErrors(null);
    setResult(null);

    if (["serves", "volume", "difficulty"].includes(name)) {
      setNewRecipe({
        ...newRecipe,
        [name]: Math.max(0, +value),
      });
      return;
    }

    setNewRecipe({
      ...newRecipe,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeSelect = (e: SelectChangeEvent) => {
    setErrors(null);
    setResult(null);
    setNewRecipe({
      ...newRecipe,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: Record<string, boolean> = {};
    Object.entries(newRecipe).forEach(([key, value]) => {
      if (["serves", "volume", "difficulty"].includes(key)) {
        errors[key] = value === undefined;
      } else {
        errors[key] = !value;
      }
    });
    if ((newRecipe.description?.length ?? 0) > 200) {
      errors["description"] = true;
    }

    if (Object.values(errors).some((v) => v)) {
      setErrors(errors);
      return;
    }

    setLoading(true);
    createOneRecipe(newRecipe)
      .then((res) => {
        handleRefresh();
        setResult(true);
      })
      .catch((err) => {
        setResult(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleRefresh = () => {
    setNewRecipe({
      name: "",
      origin: "",
      description: "",
      difficulty: 0,
      protein: "",
      produce: "",
      spice: "",
      cookingOil: "",
      volume: 0,
      serves: 0,
      authenticity: "",
      stock: "",
    });
    setErrors(null);
  };

  return (
    <Stack spacing={3}>
      <Stack
        direction="row"
        spacing="10px"
        borderBottom="1px solid #2E3347"
        pb={2}
      >
        <KeyboardArrowLeftIcon
          sx={{ color: "#6B7280", cursor: "pointer" }}
          onClick={() => {
            handleRefresh();
            onBack();
            setResult(null);
          }}
        />
        <Typography variant="caption">Add new recipe</Typography>
      </Stack>
      <Grid
        component="form"
        onSubmit={handleSubmit}
        container
        rowGap="24px"
        columnSpacing="12px"
        ml="-12px !important"
      >
        <Grid item mobile={6}>
          <Typography variant="body1" fontSize={16} mb="10px">
            Name
          </Typography>
          <TextField
            fullWidth
            value={newRecipe.name}
            name="name"
            onChange={handleChange}
            helperText={errors?.name && "This field is required"}
          />
        </Grid>
        <Grid item mobile={6}>
          <Typography variant="body1" fontSize={16} mb="10px">
            Origin
          </Typography>
          <Select
            value={newRecipe.origin}
            name="origin"
            onChange={handleChangeSelect}
            fullWidth
          >
            {Object.entries(countries).map(([key, value]) => (
              <MenuItem key={key} value={key}>
                {value.name}
              </MenuItem>
            ))}
          </Select>
          {errors?.origin && (
            <FormHelperText>This field is required</FormHelperText>
          )}
        </Grid>
        <Grid item mobile={12}>
          <Typography variant="body1" fontSize={16} mb="10px">
            Description
          </Typography>
          <TextField
            value={newRecipe.description}
            name="description"
            multiline
            fullWidth
            maxRows={4}
            sx={{
              height: "72px",
              "& .MuiInputBase-root": { height: "72px !important" },
              "& textarea": { height: "72px !important" },
            }}
            onChange={handleChange}
          />
          <Typography
            variant="body1"
            fontWeight={400}
            color="#43495E !important"
            mt="10px"
          >
            {newRecipe.description?.length ?? 0}/200 Characters
          </Typography>
          {errors?.description && (
            <FormHelperText>
              This field is required and must be less than 200 characters
            </FormHelperText>
          )}
        </Grid>
        <Grid item mobile={6}>
          <Typography variant="body1" fontSize={16} mb="10px">
            Difficulty
          </Typography>
          <Select
            value={newRecipe.difficulty?.toString()}
            name="difficulty"
            onChange={handleChangeSelect}
            fullWidth
          >
            <MenuItem value={"0"}>Easy</MenuItem>
            <MenuItem value={"1"}>Medium</MenuItem>
            <MenuItem value={"2"}>Hard</MenuItem>
          </Select>
          {errors?.difficulty && (
            <FormHelperText>This field is required</FormHelperText>
          )}
        </Grid>
        <Grid item mobile={6}>
          <Typography variant="body1" fontSize={16} mb="10px">
            Protein
          </Typography>
          <TextField
            fullWidth
            value={newRecipe.protein}
            name="protein"
            helperText={errors?.protein && "This field is required"}
            onChange={handleChange}
          />
        </Grid>
        <Grid item mobile={6}>
          <Typography variant="body1" fontSize={16} mb="10px">
            Produce
          </Typography>
          <TextField
            fullWidth
            value={newRecipe.produce}
            name="produce"
            helperText={errors?.produce && "This field is required"}
            onChange={handleChange}
          />
        </Grid>
        <Grid item mobile={6}>
          <Typography variant="body1" fontSize={16} mb="10px">
            Spice
          </Typography>
          <TextField
            fullWidth
            value={newRecipe.spice}
            name="spice"
            helperText={errors?.spice && "This field is required"}
            onChange={handleChange}
          />
        </Grid>
        <Grid item mobile={6}>
          <Typography variant="body1" fontSize={16} mb="10px">
            Cooking Oil?
          </Typography>
          <TextField
            fullWidth
            value={newRecipe.cookingOil}
            name="cookingOil"
            helperText={errors?.cookingOil && "This field is required"}
            onChange={handleChange}
          />
        </Grid>
        <Grid item mobile={6}>
          <Typography variant="body1" fontSize={16} mb="10px">
            Volume
          </Typography>
          <TextField
            type="number"
            fullWidth
            value={newRecipe.volume}
            name="volume"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Typography>grams</Typography>
                </InputAdornment>
              ),
            }}
            helperText={errors?.volume && "This field is required"}
            onChange={handleChange}
          />
        </Grid>
        <Grid item mobile={6}>
          <Typography variant="body1" fontSize={16} mb="10px">
            Serves
          </Typography>
          <TextField
            type="number"
            fullWidth
            value={newRecipe.serves}
            name="serves"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Typography>people</Typography>
                </InputAdornment>
              ),
            }}
            helperText={errors?.serves && "This field is required"}
            onChange={handleChange}
          />
        </Grid>
        <Grid item mobile={6}>
          <Typography variant="body1" fontSize={16} mb="10px">
            Authenticity
          </Typography>
          <Select
            value={newRecipe.authenticity}
            name="authenticity"
            onChange={handleChangeSelect}
            fullWidth
          >
            <MenuItem value={"Unverified"}>Unverified</MenuItem>
            <MenuItem value={"Verified"}>Verified</MenuItem>
          </Select>
          {errors?.authenticity && (
            <FormHelperText>This field is required</FormHelperText>
          )}
        </Grid>
        <Grid item mobile={12}>
          <Typography variant="body1" fontSize={16} mb="10px">
            Stock
          </Typography>
          <TextField
            value={newRecipe.stock}
            name="stock"
            fullWidth
            helperText={errors?.stock && "This field is required"}
            onChange={handleChange}
          />
        </Grid>

        <Grid item mobile={12}>
          <Button
            type="submit"
            sx={{ height: 40, bgcolor: "#764AF4" }}
            fullWidth
          >
            {loading ? <CircularProgress size={20} /> : "Add Recipe"}
          </Button>
        </Grid>
        <Grid item mobile={12}>
          {result ? (
            <Typography variant="body1" color="#6CF600">
              Added successfully!
            </Typography>
          ) : result === false ? (
            <Typography variant="body1" color="#FF003D">
              Failed to add!
            </Typography>
          ) : null}
        </Grid>
      </Grid>
    </Stack>
  );
}
