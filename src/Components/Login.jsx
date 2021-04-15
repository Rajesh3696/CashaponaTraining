import React from 'react'
import *  as yup from 'yup'
import {  useFormik } from 'formik'
import { TextField, Button, Grid, InputAdornment, Paper, Typography } from '@material-ui/core'
import { AccountCircle, LockRounded } from '@material-ui/icons'
import SignUp from './SignUp'
import {Router,Route,Link} from 'react-router-dom'

const paperstyle = { width: 400, height: 400, paddingTop: 30 }

const validationSchema = yup.object({
        email:yup
        .string("enter email")
        .email("enter valid email")
        .required('email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required')

})
const Login = () => {

    const formik = useFormik({
        initialValues: {
            email:'',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values,onSubmitProps) => {
            console.log(values)
            // alert(JSON.stringify(values))
            onSubmitProps.resetForm()
        },
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Grid container alignContent="center" style={{ padding: 100, display: 'flex', flexDirection: "column" }} >
                    <Paper elevation={10} style={paperstyle} >
                        <Grid align="center">
                            <h1>Login</h1>
                        </Grid>
                        <Grid item sm={12} xs={12} align="center" >
                            <TextField
                                id="email"
                                name="email"
                                label="UserName/Email"
                                variant="outlined"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                               
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item sm={12} xs={12} align="center" style={{ paddingTop: 30 }}>
                            <TextField
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                variant="outlined"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockRounded />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item sm={12} xs={12} align="center" style={{ paddingTop: 20 }}>
                            <Button color="primary" variant="contained" type="submit"   >
                                Continue
                            </Button>
                        </Grid>
                        <Grid item sm={12} xs={12} align="center" style={{ paddingTop: 10 }}>
                        <Typography>
                                Don't  have an account with us ?
                   <Link to="/signup">
                                    Sign Up
                   </Link>
                            </Typography>
                            </Grid>
                    </Paper>
                </Grid>
            </form>
        </div>
    )
}

export default Login
