import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";

export default function SearchBar({ HandleOnFormSubmit }) {
  const [value, setValue] = useState("");
  function handleChange(changes) {
    setValue(changes);
    // console.log(value);
    // console.log(changes);

    // HandleOnFormSubmit(event.target.value);
  }
  function handleSumit(e, value) {
    e.preventDefault();
    HandleOnFormSubmit(value);
    setValue("");
  }

  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <form onSubmit={e => handleSumit(e, value)}>
        <TextField
          fullWidth
          value={value}
          label="Search..."
          onChange={e => handleChange(e.target.value)}
        ></TextField>
      </form>
    </Paper>
  );
}
