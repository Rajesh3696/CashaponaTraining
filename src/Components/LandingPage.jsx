import { Grid, Paper, Typography, TextField, InputLabel, InputAdornment, IconButton, Button, Link } from '@material-ui/core'
import { AccountCircle, LockOpenOutlined, LockOutlined, Visibility, } from '@material-ui/icons'
import *as yup from 'yup'
import { useFormik } from 'formik'
import React from 'react'
import { number } from 'yup/lib/locale'
import { DatePicker } from 'react-formik-ui/dist/components/DatePicker/DatePicker'
import { KeyboardDatePicker } from '@material-ui/pickers'
const validationSchema = yup.object({
    accountnumber: yup
        .string("enter account number")
        .matches(/^[0-9]/, "enter valid number")
        .min(8, "not valid")
        .required("account number is required")
})
const LandingPage = () => {
    const formik = useFormik({
        initialValues: {
            accountnumber: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values, onSubmitProps) => {
            console.log(values)
            // alert(JSON.stringify(values))
            onSubmitProps.resetForm()
        },
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Grid container alignContent="center" style={{ padding: 100, display: 'auto', flexDirection: "column" }}>
                    <Paper elevation={10} style={{ width: 600, height: 900, display: "Auto" }}>
                        <Typography align="center" style={{ color: "Blue", fontSize: 50, padding: 50 }}>Quick<i style={{ fontSize: 60 }}><b>Pay</b></i></Typography>
                        <Grid item sm={12} xs={12} align="center" >

                            <InputLabel style={{ padding: 10, paddingLeft: 190, textAlign: "left" }}><b >MED-1 Account Number*</b></InputLabel>
                            <TextField
                                id="accountnumber"
                                variant="outlined"
                                size="small"
                                name="accountnumber"
                                value={formik.values.accountnumber}
                                onChange={formik.handleChange}
                                placeholder="Enter MED-1 Account"
                                error={formik.touched.accountnumber && Boolean(formik.errors.accountnumber)}
                                helperText={formik.touched.accountnumber && formik.errors.accountnumber}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start" >
                                            <LockOutlined />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                            // aria-label="toggle password visibility"
                                            // onClick={handleClickShowPassword}
                                            // onMouseDown={handleMouseDownPassword}
                                            >
                                                {/* {values.showPassword ? <Visibility /> : <VisibilityOff />} */}
                                                <Visibility />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}

                            />
                            {
                                formik.values.accountnumber.length >= 8 && (
                                    <div>

                                        <Grid container sm={8} xs={8} alignContent="center" style={{ padding: 50 }}>
                                            <fieldset style={{ padding: 30 }}>
                                                <legend style={{ textAlign: "center" }}>Enter any of the following details</legend>
                                                <Grid item xs={12} sm={12} >
                                                    <InputLabel style={{ textAlign: "inital", paddingLeft: 2 }}> <b style={{ color: "black" }}>social security number</b></InputLabel>
                                                    <TextField
                                                        variant="outlined"
                                                        size="small"
                                                        placeholder="Enter last 4 digits"
                                                        InputProps={{
                                                            endAdornment: (
                                                                <InputAdornment position="end" >
                                                                    <Visibility />
                                                                </InputAdornment>
                                                            )
                                                        }}
                                                    />
                                                    <Grid item xs={12} sm={12}>
                                                        <InputLabel style={{ textAlign: "initial", paddingLeft: 10, paddingTop: 10 }}><b style={{ color: "black" }}>Patient date of birth</b></InputLabel>
                                                        <TextField
                                                            variant="outlined"
                                                            size="small"
                                                            placeholder="MM/DD/YYYY"
                                                            InputProps={{
                                                                endAdornment: (
                                                                    <InputAdornment position="end" >
                                                                        {/* <KeyboardDatePicker/> */}
                                                                    </InputAdornment>
                                                                )
                                                            }}
                                                        />
                                                       
                                                    </Grid>
                                                    <Grid item sm={12} xs={12} allign="center">
                                                        <InputLabel style={{ textAlign: "initial", paddingLeft: 10, paddingTop: 10 }}><b style={{ color: "black" }}>Email</b></InputLabel>
                                                        <TextField
                                                            variant="outlined"
                                                            size="small"
                                                            placeholder="Enter Email Address"
                                                        />
                                                    </Grid>
                                                    <Grid item sm={12} xs={12} row>
                                                        <InputLabel style={{ textAlign: "initial", paddingLeft: 10, paddingTop: 10 }}><b style={{ color: "black" }}>Phone</b></InputLabel>
                                                        <TextField
                                                            variant="outlined"
                                                            size="small"
                                                            placeholder="Enter Phone Number"
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </fieldset>
                                        </Grid>

                                    </div>
                                )
                            }
                        </Grid>
                        <Grid item sm={12} xs={12} align="center" style={{ paddingTop: 20 }}>
                            <Button color="primary" variant="contained" type="submit"   >
                                Continue to payment
                            </Button>
                        </Grid>
                        <Grid item sm={12} xs={12} align="center" style={{ paddingTop: 10 }}>
                            <Typography>
                                Already have an account with us ?
                   <Link href="/signup">
                                    Sign in
                   </Link>
                   else <Link href="#">
                                    Sign up
                   </Link>
                   With us
                            </Typography>
                        </Grid>
                    </Paper>
                </Grid>
            </form>
        </div>
    )
}

export default LandingPage