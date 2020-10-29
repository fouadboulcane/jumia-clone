import { Breadcrumbs, Button, LinearProgress, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './product-page.css'

function ProductPage() {
    return (
        <div className="product-page">
            <div className="container">
                <Breadcrumbs aria-label="breadcrumb" className="pt-2 pb-2">
                    <Link color="inherit" href="/">
                        <Typography variant="caption">Material-UI</Typography>
                    </Link>
                    <Link color="inherit" href="/getting-started/installation/">
                        <Typography variant="caption">Core</Typography>
                    </Link>
                    <Typography color="textPrimary" variant="caption">Breadcrumb</Typography>
                </Breadcrumbs>
                <Grid container spacing={3}>
                    <Grid item xs={9}>
                        <Paper className="p-0">
                            <div className="d-flex">
                                <div className="col-4 p-3">
                                    <img src="https://picsum.photos/300/300" width="100%" />
                                    <p className="mt-2">Partagez ce Produit</p>
                                    <span><i className="fab fa-facebook"></i><i class="fab fa-twitter ml-2"></i></span>
                                </div>
                                <div className="col-8 p-2 pt-3 product-infos pr-3">
                                    <div className="product-infos_title-box d-flex">
                                        <div className="col-9 p-0">
                                            <h5>Nespresso Lot De 50 Capsules Originales - Références Mixtes</h5>
                                            <Typography variant="subtitle2">Marque: Nespresso | Produits similaires par Nespresso</Typography>
                                            <div className="mt-2 orange">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                            </div>
                                        </div>
                                        <div className="col-3 text-right product-like">
                                            <div><i class="far fa-heart"></i></div>
                                        </div>
                                    </div>
                                    <hr className="mt-3 mb-2" />
                                    <div className="product-infos_price-box">
                                        <h4><strong>4 990 DA</strong></h4>
                                    </div>
                                    <hr className="mt-2 mb-3" />
                                    <h6>SELECTIONNEZ UNE OPTION</h6>
                                    <Button
                                        variant="contained"
                                        className="login-button login-basic"
                                        color="primary"
                                        startIcon={<i class="fas fa-cart-plus"></i>}
                                    >J'ACHETE</Button>
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper>xs=3</Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper>
                            <div className="product-about">
                                <div className="product-about_header">
                                    <Typography variant="h6" className="p-2 pl-3">Détails</Typography>
                                    <hr className="m-0" />
                                    <div className="p-3">
                                        <Typography variant="subtitle2" className="mt-3">Les Arabicas du Brésil et de Colombie qui composent le mixte de café proviennent de petites plantations produisant un café de très haute qualité. Les cultures se font dans le respect de l'environnement et des traditions.  </Typography>
                                        <Typography variant="subtitle2" className="mt-4">Achetez ces capsules sur notre site JUMIA Algérie et recevez ce produit  chez vous dans les plus brefs délais !</Typography>
                                        <ul className="mt-4 ml-3">
                                            <li>Capsules Nespresso originales</li>
                                            <li>5 reférences mixtes</li>
                                            <li>5 boites de 10 capsules</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper>
                            <div className="product-fiche">
                                <div className="product-about_header">
                                    <Typography variant="h6" className="p-2 pl-3">Fiche Technique</Typography>
                                    <hr className="m-0" />
                                    <div className="pt-3 pb-3 d-flex">
                                        <div className="col-6">
                                            <ul className="list-group">
                                                <li className="list-group-item">
                                                    <Typography variant="subtitle2">PRINCIPALES CARACTERISTIQUES</Typography>
                                                </li>
                                                <li className="list-group-item">
                                                    <ul className="pl-2 pr-2 mh-100">
                                                        <li>Capsules Nespresso originales</li>
                                                        <li>5 références mixtes</li>
                                                        <li>5 boites de 10 capsules</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-6">
                                            <ul className="list-group">
                                                <li className="list-group-item">
                                                    <Typography variant="subtitle2">DESCRIPTIF TECHNIQUE</Typography>
                                                </li>
                                                <li className="list-group-item">
                                                    <ul className="pl-2 pr-2">
                                                        <li><strong>SKU:</strong> NE255OT15BHGKNAFAMZ</li>
                                                        <li><strong>Modéle:</strong> Mixte</li>
                                                        <li><strong>Pays de production:</strong> Switzerland</li>
                                                        <li><strong>Poids (kg)</strong> 0.2</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper>
                            <div className="product-about">
                                <div className="product-about_header">
                                    <Typography variant="h6" className="p-2 pl-3">Avis des utilisateurs</Typography>
                                    <hr className="m-0" />
                                    <div className="p-3 d-flex">
                                        <div className="col-3">
                                            <Typography variant="subtitle2">EVALUATIONS (17)</Typography>
                                            <div className="text-center mt-2 p-4 bg-light">
                                                <h2>4.3/5</h2>
                                                <div className="mt-2 orange">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="far fa-star"></i>
                                                    <i class="far fa-star"></i>
                                                </div>
                                                <span>17 avis</span>
                                            </div>
                                            <div>
                                                <div className="d-flex">
                                                    <div>5 <i class="fas fa-star ml-2 mr-2"></i> (11)</div>
                                                    <LinearProgress className="bg-danger" variant="determinate" value={50} />

                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-9">
                                            <Typography variant="subtitle2">COMMENTAIRES (2)</Typography>
                                            <div className="mt-2">
                                                {[1, 2, 3].map(comment => (
                                                    <div>
                                                        <div className="orange">
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="far fa-star"></i>
                                                            <i class="far fa-star"></i>
                                                        </div>
                                                        <Typography variant="subtitle2" className="mt-2">je n'aime plus</Typography>
                                                        <br />
                                                        <Typography variant="subtitle2" className="mt-2">ce ne sont pas les gouts que j 'ai commandé que vous m 'avez envoyés.Donc c 'est regretable que vous ne respectiez pas ma demande</Typography>
                                                        <br />
                                                        <Typography variant="caption" className="mt-2">17-10-2020 par nadia</Typography>
                                                        <hr />
                                                    </div>
                                                ))}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper>
                            s
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div >
    )
}

export default ProductPage
