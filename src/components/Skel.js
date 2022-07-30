import { Container, Grid } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

const Skel = ({ info }) => {
    return (
        <>
            <Container style={{ padding: "40px 20px" }}>
                <Grid container spacing={2}>
                    {info?.map((element, index) => {
                        return (
                            <Grid item xs={12} md={3} sm={4} key={index}>
                                <Skeleton variant="rectangular" animation="wave" width={260} height={260} />
                                <Skeleton variant="text" animation="wave" width={250} />
                                <Skeleton variant="text" animation="wave" width={240} />
                                <Skeleton variant="circular" width={20} height={20} animation="wave" />
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </>
    );
};

export default Skel;
