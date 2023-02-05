import ShoesCatalogComponent from "./ShoesCatalogComponent";
import {useEffect, useState} from "react";
import {SHOES_API} from "../../API/InventoryManagement/ShoesAPI";
import {Shoes} from "../../Types/Shoes";
import {setErrorAlertMessage, setIsLoading} from "../../Services/Redux/applicationSlice";
import {useDispatch} from "react-redux";
import {ShoesCriteria} from "../../Types/Criterias/ShoesCriteria";
import {ShoesCatalogDTO} from "../../Types/DTO/ShoesCatalog";

const ShoesCatalogContainer = () => {
    const dispatch = useDispatch();

    const [shoesCatalog, setShoesCatalog] = useState<ShoesCatalogDTO>({
        sizes: [],
        shoes: [],
        totalPagesCount: 0,
        totalShoesAmount: 0
    });

    const getShoesList = (shoesCriteria: ShoesCriteria) => {
        dispatch(setIsLoading(true));
        SHOES_API.get(`get-shoes-catalog`, {params: shoesCriteria})
            .then(response => {
                let tempShoesCatalog: ShoesCatalogDTO = response.data;
                setShoesCatalog(tempShoesCatalog);
                dispatch(setIsLoading(false));
            }).catch(error => {
            dispatch(setErrorAlertMessage('Error while trying to get shoes list'));
            console.error(error);
            dispatch(setIsLoading(false));
        });
    }

    useEffect(() => {
        getShoesList({});
    }, []);

    return <ShoesCatalogComponent shoesCatalog={shoesCatalog} getShoesList={getShoesList}/>
};


export default ShoesCatalogContainer;