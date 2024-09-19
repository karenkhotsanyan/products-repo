import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import Item from "../Card/Item";
export default function Input() {
  function AddInput() {
    return (
      setProducts([...products, { name, imageUrl, price, category }]),
      setName(""),
      setimageUrl(""),
      setPrice(""),
      setCategory("")
    );
  }
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );
  console.log(products);

  const [name, setName] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <Box display="flex" justifyContent="space-around">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { Width: "100%" },
          display: "flex",
          flexDirection: "column",
          maxHeight: "100vh",
          gap: "15px",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          type="number"
          label="Price"
          variant="outlined"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Category"
          variant="outlined"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="imageUrl"
          variant="outlined"
          value={imageUrl}
          onChange={(e) => setimageUrl(e.target.value)}
        />

        <Stack direction="row" marginTop={"20px"}>
          <Button
            variant="contained"
            size="large"
            endIcon={<SendIcon />}
            onClick={() => AddInput()}
          >
            Send
          </Button>
        </Stack>
      </Box>
      <Item product={{ name, imageUrl, price, category }} />
    </Box>
  );
}
