import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/system";
import Link from "next/link";

const Section = ({
  id,
  title,
  text,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  reverse,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const sectionImage = (
    <Box flex="1" padding="0 2rem">
      <img
        src={imageSrc}
        alt={imageAlt}
        style={{
          width: "100%",
          borderRadius: "5px",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );

  const sectionText = (
    <Box flex="1" padding="0 2rem" display="flex" alignItems="center">
      <Card
        variant="outlined"
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(rgba(128, 128, 128, 0.1), rgba(128, 128, 128, 0.1))",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          style={{ width: "100%", height: "100%" }}
        >
          <CardContent>
            <Box textAlign="center">
              <Typography variant="h4" paragraph>
                {title}
              </Typography>
            </Box>
            <Typography paragraph>{text}</Typography>
            <Box textAlign="center">
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                href={buttonLink}
              >
                {buttonText}
              </Button>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );

  const sectionOrder = isMobile ? (
    <>
      {sectionImage}
      {sectionText}
    </>
  ) : reverse ? (
    <>
      {sectionText}
      {sectionImage}
    </>
  ) : (
        <>
          {sectionImage}
          {sectionText}
        </>
      );

  return (
    <Box
      id={id}
      display="flex"
      justifyContent="space-between"
      alignItems="stretch"
      flexDirection={isMobile ? "column" : "row"}
      marginBottom={4}
    >
      {sectionOrder}
    </Box>
  );
};

export default Section;
