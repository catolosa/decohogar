import { Button, CardMedia, Container, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../theme/useStyles';

const OrdenCompra = (props) => {
    const {id} = props.match.params;
    const mensajeEnvio = "No Entregado";
    const mensajePago = "Pagado en 2020-12-23";
    const classes = useStyles();
    return (
        <Container className={classes.containermt}>
            <Typography variant="h5" className={classes.text_title}>
                ORDEN DE COMPRA: {id.toUpperCase()}
            </Typography>
            <Grid container spacing={2} className={classes.papperPadding}>
                <Grid item md={8} xs={12}>
                    <Typography variant="h6" className={classes.text_title}>
                        ENVIO
                    </Typography>
                    <Typography variant="body2" className={classes.text_envio}>
                        Nombres: 
                    </Typography>
                    <Typography variant="body2" className={classes.text_envio}>
                        Email: nestor@gmail.com
                    </Typography>
                    <Typography variant="body2" className={classes.text_envio}>
                        Direccion:
                    </Typography>
                    <div className={classes.alertNotDelivered}>
                        <Typography variant="body2" className={classes.text_title}>
                            {mensajeEnvio}
                        </Typography>
                    </div>
                    <Divider className={classes.divider}/>
                    <Typography variant="h6" className={classes.text_title}>
                        METODO DE PAGO
                    </Typography>
                    <Typography>
                        Metodo: Tarjeta
                    </Typography>
                    <div className={classes.alertDelivered}>
                        <Typography variant="body2" className={classes.text_title}>
                            {mensajePago}
                        </Typography>
                    </div>
                    <Divider className={classes.divider}/>
                    <Typography variant="h6" className={classes.text_title}>
                        PRODUCTOS
                    </Typography>
                    <TableContainer className={classes.gridmb}>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <CardMedia 
                                        className={classes.imgProductoPC}
                                        image="https://tottope.vteximg.com.br/arquivos/ids/167188-1000-1000/PILIGRAM-H-1810-V07_A.png?v=636723781789170000"
                                        title="imagen en proceso compra"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Typography className={classes.text_detalle}>
                                            Sofá esquinero Mónaco
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography className={classes.text_detalle}>
                                            12 x $9166.67 = $110.000
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item md={4} xs={12}>
                    <TableContainer component={Paper} square>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell colSpan={2}>
                                        <Typography variant="h6" className={classes.text_title}>
                                            RESUMEN DEL PEDIDO
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography className={classes.text_title}>
                                            Productos
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography className={classes.text_title}>
                                            $110.000
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography className={classes.text_title}>
                                            Envio
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography className={classes.text_title}>
                                            $700
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography className={classes.text_title}>
                                            IVA
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography className={classes.text_title}>
                                            $23.100
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography className={classes.text_title}>
                                            Total
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography className={classes.text_title}>
                                            $133.800
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>
                                        {/* boton para el usuario */}
                                        {/* <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        fullWidth
                                        className={classes.gridmb}>
                                            Paypal
                                        </Button>
                                        <Button
                                        variant="contained"
                                        size="large"
                                        fullWidth>
                                            Tarjeta de Credito o Debito
                                        </Button> */}
                                        {/* boton para el admin */}
                                        <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        fullWidth>
                                            MARCAR COMO ENTREGADO
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Container>
    );
};

export default OrdenCompra;