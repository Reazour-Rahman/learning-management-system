import React from "react";
import { Grid, Box, Typography, useTheme, Rating } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FaBook, FaComment } from "react-icons/fa";
import { BsStopwatch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

//course card style start

const CourseImage = {
  width: "100%",
  minHeight: "213px",
  height: "100%",
  borderRadius: "4px",
  position: "relative",
};

const CategoryName = {
  background: "#1EC902",
  position: "absolute",
  left: "20px",
  top: "15px",
  color: "white",
  // fontWeight: "600",
  // fontSize: "12px",
  borderRadius: "2px",
  padding: "5px 3px",
};

const StarColor = {
  background: " rgba(0, 0, 0, 0.16)",
  position: "absolute",
  right: "20px",
  top: "18px",
  color: "white",
  fontWeight: "600",
  fontSize: "30px",
  borderRadius: "2px",
  padding: "5px 3px",
};

const CardContainerStyle = styled("section")(({ theme }) => ({
  position: "relative",
  width: "370px",
  boxShadow: "0px 4px 34px rgba(0, 0, 0, 0.07)",
  margin: "0 auto",
  minHeight: "420px",
  borderRadius: "5px",
  background: "#FFFFFF",
}));

const LineThroughStyle = styled("section")(({ theme }) => ({
  textDecorationLine: "line-through",
}));

const CardDataContainerStyle = styled("section")(({ theme }) => ({
  padding: "0px 22px",
}));

export const FlexHandle = styled("section")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const RatingNumber = {
  marginLeft: "5px",
  fontWeight: "600",
  fontSize: "15px",
  color: "#6D6E75",
};

const UserImageParent = {
  width: "35px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "35px",
  borderRadius: "100%",
  background: "#FFFFFF",
  boxShadow: "0px 4px 13px rgba(0, 0, 0, 0.08)",
};

const UserImage = {
  width: "30px",
  height: "30px",
  borderRadius: "100%",
};

const FontMargin = {
  margin: "0px 5px",
  color: "#53545B",
};

//course card style finished

const CourseCard = () => {
  const theme = useTheme();
  return (
    <>
      <div>
        <CardContainerStyle>
          {" "}
          <FlexHandle
            style={{
              padding: "10px 14px",
            }}
            className="flex items-center justify-center rounded-lg p-3 bg-[#EAECF0]"
          >
            <img
              src={
                "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              }
              className=""
              style={CourseImage}
              alt=""
            />

            <Typography sx={CategoryName} variant="body1">
              Trending Course
            </Typography>

            <AiOutlineHeart style={StarColor} />
          </FlexHandle>
          <CardDataContainerStyle>
            <FlexHandle
              sx={{
                margin: "10px 0px",
              }}
            >
              <FlexHandle
                sx={{
                  marginRight: "100px",
                }}
              >
                <FaBook
                  style={{
                    color: "#5F2DED",
                    fontSize: "18px",
                  }}
                />
                <Typography variant="body1" sx={FontMargin}>
                  21 lessons
                </Typography>
              </FlexHandle>
              <FlexHandle>
                <BsStopwatch
                  style={{
                    color: "#5F2DED",
                    fontSize: "18px",
                  }}
                />
                <Typography variant="body1" sx={FontMargin}>
                  1hr 30 min
                </Typography>
              </FlexHandle>
            </FlexHandle>

            <Typography
              variant="h3"
              sx={{
                color: theme.palette.common.black,
              }}
            >
              Lorem ipsum dolor sit amet consectetur
            </Typography>

            <FlexHandle
              sx={{
                fontSize: "18px",
                color: "#5F2DED",
                fontWeight: "600",
                marginTop: "10px",
              }}
            >
              $32.00{" "}
              <span
                style={{
                  color: "#C4C4C4",
                }}
              >
                /
              </span>
              <LineThroughStyle
                sx={{
                  color: "#C4C4C4",
                  fontSize: "16px",
                }}
              >
                $67.00
              </LineThroughStyle>
              <LineThroughStyle
                sx={{
                  color: "red",
                  marginLeft: "20px",
                }}
              >
                Free
              </LineThroughStyle>
            </FlexHandle>

            <hr />

            <FlexHandle
              sx={{
                justifyContent: "space-between",
              }}
              className="flex justify-between items-center  "
            >
              <FlexHandle
                sx={{
                  marginRight: "30px",
                  padding: "10px 0px",
                }}
              >
                <Box sx={UserImageParent}>
                  <img
                    src={
                      "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    }
                    className=""
                    style={UserImage}
                    alt=""
                  />
                </Box>

                <Typography variant="subtitle2">Mehedii .H</Typography>
              </FlexHandle>
              <FlexHandle>
                <Rating
                  className={`mr-2`}
                  name="read-only"
                  value={5}
                  size="small"
                  readOnly
                />
                <Typography sx={RatingNumber} variant="subtitle1">
                  (2)
                </Typography>
              </FlexHandle>
            </FlexHandle>
          </CardDataContainerStyle>
        </CardContainerStyle>
      </div>
    </>
  );
};

export default CourseCard;
