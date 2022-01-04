import Stack from "@mui/material/Stack";

export default function CenterField() {
  return (
    <Stack
      alignSelf={"center"}
      height={"80vh"}
      alignItems={"center"}
      justifyContent={"center"}
      flexGrow={1}
    >
      <h1>Very big number... 100 or maybe even more..?</h1>
    </Stack>
  );
}
