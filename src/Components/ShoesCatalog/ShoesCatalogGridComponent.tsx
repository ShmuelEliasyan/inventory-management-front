import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography, Box,
} from '@mui/material';
import {FC, useState} from "react";
import {Shoes} from "../../Types/Shoes";
import {useStyles} from "./ShoesCatalogGridStyles";
import {useNavigate} from "react-router-dom";


const ShoesCatalogGridComponent: FC<ShoesCatalogGridComponentProps> = (props: ShoesCatalogGridComponentProps) => {
    const {shoesList} = props;

    const [hoveredCardIndex, setHoveredCardIndex] = useState(-1);

    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <Grid container spacing={2} sx={{mt: 1.5, mb: 3}}>
            {shoesList.map((record, index) => (
                <Grid
                    key={record.barcode}
                    xs={14}
                    sm={7}
                    md={5}
                    lg={4}
                    xl={3}
                    item
                >
                    <Card onMouseOver={() => setHoveredCardIndex(index)}
                          onMouseOut={() => setHoveredCardIndex(-1)}
                          onClick={() => navigate("/shoes-amount", {
                              state: {
                                  barcode: record.barcode
                              }
                          })}
                          sx={{
                              boxShadow: hoveredCardIndex === index ? 10 : 1,
                              cursor: 'pointer',
                              height: '100%'
                          }}>
                        <CardMedia
                            image={record.imageUrl}
                            sx={{height: 160}}
                        />
                        <CardContent sx={{paddingBottom: '0.5em'}}>
                            <Typography
                                variant="h5"
                                align="center"
                                fontWeight="bold"
                            >
                                {record.name}
                            </Typography>

                            <Box sx={{mt: 0.5}} className={classes.secondRow}>
                                <Typography
                                    variant="h6"
                                    fontSize="1rem"
                                >
                                    Barcode: {record.barcode}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    fontSize="1rem"
                                >
                                    Cost: {record.cost}₪
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

interface ShoesCatalogGridComponentProps {
    shoesList: Shoes[];
}

export default ShoesCatalogGridComponent;