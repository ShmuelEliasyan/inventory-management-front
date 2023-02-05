import {FC, useEffect, useState} from "react";
import ShoesAmountPageComponent from "./ShoesAmountPageComponent";
import {useLocation} from "react-router-dom";
import {SHOES_AMOUNT_API, SHOES_API} from "../../../API/InventoryManagement/ShoesAPI";
import {setErrorAlertMessage, setSuccessAlertMessage} from "../../../Services/Redux/applicationSlice";
import {useDispatch} from "react-redux";
import {Shoes, ShoesAmount} from "../../../Types/Shoes";

const ShoesAmountPageContainer: FC = () => {
    const dispatch = useDispatch();

    const [imageUrl, setImageUrl] = useState('');
    const [name, setName] = useState('');
    const [sizes, setSizes] = useState('');
    const [shoesAmount, setShoesAmount] = useState<ShoesAmount[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const location = useLocation();
    let barcode = location.state.barcode;

    const sortShoesAmount = (shoesAmount: ShoesAmount[]) => {
        return shoesAmount.sort((a, b) => a.size > b.size ? 1 : -1);
    }

    useEffect(() => {
        SHOES_API.get(`get-shoes-with-shoes-amount?barcode=${barcode}`)
            .then(response => {
                const shoesWithShoesAmount = response.data;
                const shoes: Shoes = shoesWithShoesAmount.shoes;
                const shoesAmount: ShoesAmount[] = shoesWithShoesAmount.shoesAmount;
                setImageUrl(shoes.imageUrl);
                setName(shoes.name);
                setSizes(shoes.sizes);
                const newShoesAmount = sortShoesAmount(shoesAmount);
                setShoesAmount(newShoesAmount);
                setIsLoading(false);
            }).catch(error => {
            dispatch(setErrorAlertMessage('Error while trying to get shoes details, please try again later'));
            console.error(error);
        });

    }, []);

    const updateShoesAmount = async (shoesAmount: ShoesAmount) => {
        await SHOES_AMOUNT_API.put('update-shoes-amount', shoesAmount).catch(error => {
            dispatch(setErrorAlertMessage('Error while trying to update shoes amount, please try again later'));
            console.error(error);
        });
    }

    const deleteShoesAmount = async (shoesAmount: ShoesAmount) => {
        await SHOES_AMOUNT_API.delete(`delete-shoes-amount?barcode=${shoesAmount.barcode}&size=${shoesAmount.size}`).then(() => {
            dispatch(setSuccessAlertMessage('Row has been successfully deleted.'))
        }).catch(error => {
            dispatch(setErrorAlertMessage('Error while trying to delete shoes amount, please try again later'));
            console.error(error);
        });
    }

    const addShoesAmount = async (shoesAmountToAdd: ShoesAmount[]) => {
        await SHOES_AMOUNT_API.post(`add-shoes-amount/${barcode}`, shoesAmountToAdd).then(() => {
            const newShoesAmount = sortShoesAmount(shoesAmount.concat(shoesAmountToAdd));
            setShoesAmount(newShoesAmount);
            dispatch(setSuccessAlertMessage('Rows has been successfully added.'))
        }).catch(error => {
            dispatch(setErrorAlertMessage('Error while trying to add shoes amount, please try again later'));
        });
    }

    return <>
        {!isLoading &&
            <ShoesAmountPageComponent imageUrl={imageUrl} name={name} sizes={sizes} shoesAmount={shoesAmount}
                                      setShoesAmount={setShoesAmount}
                                      updateShoesAmount={updateShoesAmount} deleteShoesAmount={deleteShoesAmount}
                                      addShoesAmount={addShoesAmount} barcode={barcode}/>}

    </>;
}

export default ShoesAmountPageContainer;