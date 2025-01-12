
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
// import Button from "@mui/material/Button";

const From = () => {
  const countries = ["Bangladesh", "India", "USA", "Canada"];
  const districts = ["Thakurgaon", "Dhaka", "Chattogram"];
  const documentTypes = ["Passport", "National ID", "Driving License"];

  return (
    <div className="max-w-4xl p-6 mx-auto rounded-lg shadow-md bg-gray-50 font-gilroy">
        <p>Are you already our customer? <span className="text-red-600 underline">Click here to access</span> </p>
      <h2 className="my-4 text-2xl font-bold">Billing Details</h2>

      <form className="space-y-6">
        {/* Document Type */}
        <TextField
          select
          label="Document Type"
          fullWidth
          variant="outlined"
          required
        >
          {documentTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>

        {/* First and Last Name */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <TextField
            label="First Name"
            fullWidth
            variant="outlined"
            required
          />
          <TextField
            label="Last Name"
            fullWidth
            variant="outlined"
            required
          />
        </div>

        {/* Company Name */}
        <TextField
          label="Company Name (Optional)"
          fullWidth
          variant="outlined"
        />

        {/* Country/Region */}
        <TextField
          select
          label="Country/Region"
          fullWidth
          variant="outlined"
          required
          defaultValue="Bangladesh"
        >
          {countries.map((country) => (
            <MenuItem key={country} value={country}>
              {country}
            </MenuItem>
          ))}
        </TextField>

        {/* Address */}
        <TextField
          label="Street and Number"
          fullWidth
          variant="outlined"
          required
        />
        <TextField
          label="Apartment, suite, unit, etc. (Optional)"
          fullWidth
          variant="outlined"
        />

        {/* City and District */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <TextField
            label="City"
            fullWidth
            variant="outlined"
            required
          />
          <TextField
            select
            label="District"
            fullWidth
            variant="outlined"
            required
          >
            {districts.map((district) => (
              <MenuItem key={district} value={district}>
                {district}
              </MenuItem>
            ))}
          </TextField>
        </div>

        {/* Zip and Phone */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <TextField
            label="Zip Code (Optional)"
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Phone"
            fullWidth
            variant="outlined"
            required
          />
        </div>

        {/* Email Address */}
        <TextField
          label="Email Address"
          fullWidth
          variant="outlined"
          required
        />

        {/* Checkboxes */}
        <div className="flex ">
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Create an account?"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Ship to a different address?"
          />
        </div>

        {/* Order Notes */}
        <TextField
          label="Order Notes (Optional)"
          fullWidth
          variant="outlined"
          multiline
          rows={3}
        />

        {/* Submit Button */}
        {/* <Button
          variant="contained"
          color="primary"
          className="w-full py-2 text-lg"
        >
          Submit
        </Button> */}
      </form>
    </div>
  );
};

export default From;
