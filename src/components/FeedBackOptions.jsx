import { Button, Stack } from "@mui/material";

function FeedbackOptions({ onGoodClick, onNeutralClick, onBadClick }) {
  return (
    <Stack direction="row" gap="5px">
      <Button onClick={onGoodClick} variant="contained" color="success">
        Good
      </Button>

      <Button onClick={onNeutralClick} variant="contained" color="warning">
        Neutral
      </Button>

      <Button onClick={onBadClick} variant="contained" color="error">
        Bad
      </Button>
    </Stack>
  );
}

export default FeedbackOptions;
