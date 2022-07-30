import { Badge, Container, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Skel from "./Skel";
const Cards = ({ infoCopy, info }) => {
    return (
        <>
            <Container style={{ padding: "40px 20px" }}>
                <Grid container spacing={2}>
                    {infoCopy && infoCopy.length !== 0 ? (
                        infoCopy.map((element, index) => {
                            return (
                                <Grid item xs={12} md={3} sm={4} key={index}>
                                    <Card sx={{ boxShadow: "0 5px 10px 0 rgb(0 0 0 / 8%)", margin: "0 auto", borderRadius: "20px", backgroundColor: "#2D364E" }}>
                                        <CardActionArea>
                                            <CardMedia image={element?.photo} title={element?.title} style={{ height: "260px", objectFit: "cover", margin: " 0 auto", borderRadius: "20px 20px 0px 0px" }} />
                                            <CardContent>
                                                <Typography gutterBottom variant="h1" fontSize="1.2rem" fontWeight="600" style={{ textTransform: "capitalize" }} sx={{ color: "inherit" }}>
                                                    {element?.title || "No Title.."}
                                                </Typography>
                                                <Typography gutterBottom variant="p" fontSize="1rem" sx={{ display: "block" }}>
                                                    {element.description || "No Date.."}
                                                </Typography>
                                                <Badge className="card-badge" badgeContent={element.rating} color={element.rating > 4 ? "primary" : "secondary"}></Badge>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            );
                        })
                    ) : (
                        <Skel info={info} />
                    )}
                </Grid>
            </Container>
        </>
    );
};

export default Cards;
