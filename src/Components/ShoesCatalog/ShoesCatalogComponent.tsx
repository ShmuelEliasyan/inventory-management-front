import {FC} from "react";
import {Shoes} from "../../Types/Shoes";
import ShoesCatalogGridComponent from "./ShoesCatalogGridComponent";
import ShoesCatalogHeaderComponent from "./ShoesCatalogHeaderComponent";
import {Container} from "@mui/material";
import {ShoesCriteria} from "../../Types/Criterias/ShoesCriteria";
import {ShoesCatalogDTO} from "../../Types/DTO/ShoesCatalog";


const ShoesCatalogComponent: FC<ShoesCatalogComponentProps> = (props: ShoesCatalogComponentProps) => {
    const {shoesCatalog, getShoesList} = props;

    return (
        <Container>
            <ShoesCatalogHeaderComponent getShoesList={getShoesList} shoesCatalog={shoesCatalog}/>
            <ShoesCatalogGridComponent shoesList={shoesCatalog.shoes}/>
        </Container>
    );
};

interface ShoesCatalogComponentProps {
    shoesCatalog: ShoesCatalogDTO;
    getShoesList: (shoesCriteria: ShoesCriteria) => void;
}

export default ShoesCatalogComponent;