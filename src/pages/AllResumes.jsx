import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";

import { FaSearch } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { deleteResume, getResume } from "../services/AllAPIs";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const AllResumes = () => {
  const [resumeDatas, setResumeDatas] = useState([]);
  const [duplicateDatas, setDuplicateDatas] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    getResumeDatas();
  }, []);

  const getResumeDatas = async () => {
    try {
      let apiResponse = await getResume();
      console.log(apiResponse);
      setResumeDatas(apiResponse.data);
      setDuplicateDatas(apiResponse.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to get Resume Datas");
    }
  };

  const onDeleteClick = async (id) => {
    try {
      let apiResponse = await deleteResume(id);
      if (apiResponse.status == 200) {
        toast.success("Successfully Deleted");
      } else {
        toast.error("Failed to delete Resume");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete Resume");
    }
  };

  const onSearchClick = useMemo(() => {
    let filteredData = duplicateDatas.filter((eachData) =>
      eachData.jobTitle.toLowerCase().includes(searchVal.toLowerCase()),
    );
    setResumeDatas(filteredData);
  }, [searchVal]);

  return (
    <Box sx={{ maxWidth: 1400, mx: "auto", px: 5, py: 3 }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          mb: 6,
          mt: 4,
        }}
      >
        All Saved Resumes
      </Typography>

      <Typography
        sx={{
          textAlign: "justify",
          marginRight: 16,
          marginLeft: 16,
          lineHeight: 1.4,
          fontSize: 17,
          mb: 5,
        }}
      >
        All resumes submitted to the platform in one place, allowing
        administrators or recruiters to efficiently view, search, filter, and
        manage candidate profiles. It provides a quick overview of available
        candidates and their key details, making the recruitment and
        candidate-selection process more organized and efficient.
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
        <TextField
          onChange={(e) => setSearchVal(e.target.value)}
          fullWidth
          placeholder="Search Candidate by their Job Roles"
          variant="outlined"
          size="small"
          sx={{
            maxWidth: 600,
            "& .MuiOutlinedInput-root": {
              height: 42,
              borderRadius: 2,
              fontSize: 16,
            },
          }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <FaSearch color="black" />
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 1090,
          mx: "auto",
          overflowX: "auto",
          borderRadius: 0,
          borderBottom: "1px solid #dee2e6",
        }}
      >
        <Table sx={{ minWidth: 600 }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#212529" }}>
              <TableCell
                sx={{
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: 17,
                  width: "6%",
                  py: 1,
                }}
              >
                #
              </TableCell>

              <TableCell
                sx={{
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: 17,
                  width: "34%",
                  py: 1,
                }}
              >
                Resume
              </TableCell>

              <TableCell
                sx={{
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: 17,
                  width: "40%",
                  py: 1,
                }}
              >
                Job Role
              </TableCell>

              <TableCell
                align="center"
                sx={{
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: 17,
                  width: "20%",
                  py: 1,
                }}
              >
                ...
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {resumeDatas?.map((eachData, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>

                <TableCell>{eachData?.fullName}</TableCell>

                <TableCell>{eachData?.jobTitle}</TableCell>

                <TableCell align="center">
                  <Button onClick={() => onDeleteClick(eachData.id)}>
                    <FaTrash
                      color="red"
                      size={17}
                      style={{ cursor: "pointer" }}
                    />
                  </Button>

                  <Button as={Link} to={`/resumes/${eachData.id}`}> Show</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllResumes;
