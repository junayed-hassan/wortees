import image from "../../../src/assets/images/details/image22.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData("S", "55.3 cm", "59.5 cm", "65.5 cm"),
  createData("M", "55.3 cm", "59.5 cm", "65.5 cm"),
  createData("L", "55.3 cm", "59.5 cm", "65.5 cm"),
];

function OurVision() {
  return (
    <>
      <div className="mx-10 mb-20 border-2 rounded-lg ">
        <nav>
          <ul className="flex items-center text-xl font-bold border-b-2 font-gilroy">
            <li className="px-[82px] py-2 text-white bg-black border-r-2 rounded-tl-lg">
              Our Philosophy
            </li>
            <li className="px-[83px] py-2 border-r-2">Our T-Shirt</li>
            <li className="px-[82px] py-2 border-r-2">Washing and Care</li>
            <li className="px-[83px] py-2 rounded-tr-lg">Shipping</li>
          </ul>
        </nav>
        <div className="bg-[#FAF5E6]/50 pb-12 px-10">
          <div className="pt-12 mb-16 pe-[10%] text-xl font-normal">
            <p className="mb-3">
              We only make what is sold. We do not produce large stocks of
              ready-made t-shirts, but each garment is created for the customer
              who ordered it.
            </p>
            <p>
              We have chosen to follow a more sustainable path, avoiding excess
              clothing production and collaborating with local producers who
              operate entirely in Italy.
            </p>
          </div>
          <div className="flex justify-between p-10 bg-white rounded-lg">
            <div>
              <h2 className="text-xl font-semibold mb-9">Size Guide</h2>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Size</TableCell>
                      <TableCell>Shoulders (A)</TableCell>
                      <TableCell>Chest (B)</TableCell>
                      <TableCell>Length (C)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">{row.name}</TableCell>
                        <TableCell component="th" scope="row">{row.calories}</TableCell>
                        <TableCell component="th" scope="row">{row.fat}</TableCell>
                        <TableCell component="th" scope="row">{row.carbs}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div>
              <img src={image} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurVision;
