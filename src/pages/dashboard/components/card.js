
import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(3),
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
    icon: {
        marginBottom: 10,
        width: theme.spacing(6),
    },
    symbol: {
        fontWeight: 'bold',
        marginBottom: 5
    },
    value: {
        fontWeight: 'bold',
        color: '#333'
    }
}))

const Card = ({ valores, titulo }) => {
    const classes = useStyles()
    return (
        <Grid item xs={12} md={3}>
            <Paper elevation={0} className={classes.root} style={{border:'1px solid #dbdbdb'}}>
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <Typography variant='h2' component='h4'>
                        {valores}
                    </Typography>
                </div>
                <Typography variant='subtitle2' style={{ opacity: .7 }}>
                    {titulo}
                </Typography>
            </Paper>
        </Grid>
    )
}
export default Card