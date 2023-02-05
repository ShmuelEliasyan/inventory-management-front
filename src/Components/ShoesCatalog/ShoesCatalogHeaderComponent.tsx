import {
    Box, Checkbox, FormControl, Grid, InputLabel, ListItemText, MenuItem, OutlinedInput,
    Pagination, Select, SelectChangeEvent,
    Typography,
} from '@mui/material';
import {ChangeEvent, FC, useState} from "react";
import {MenuProps, useStyles} from "./ShoesCatalogHeaderStyles";
import SortIcon from '@mui/icons-material/Sort';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import {ShoesCriteria, SORT_DIRECTION_TYPES} from "../../Types/Criterias/ShoesCriteria";
import {SORT_BY, SORT_DIRECTION, SORT_OPTION_TYPES} from "./ShoesCatalogConstants";
import {ShoesCatalogDTO} from "../../Types/DTO/ShoesCatalog";

const ShoesCatalogHeaderComponent: FC<ShoesCatalogHeaderComponentProps> = (props: ShoesCatalogHeaderComponentProps) => {
    const {getShoesList, shoesCatalog} = props;

    const classes = useStyles();

    const [sortOptions, setSortOptions] = useState('');
    const [shoesCriteria, setShoesCriteria] = useState<ShoesCriteria>({});
    const [page, setPage] = useState(1);
    const [availableIn, setAvailableIn] = useState<string[]>([]);

    const handleAvailableIn = async (event: SelectChangeEvent<typeof availableIn>) => {
        const {target: {value}} = event;

        const shoesSizesArray = typeof value === 'string' ? value.split(',') : value;
        const shoesSizesStr = shoesSizesArray.join();
        const newShoesCriteria: ShoesCriteria = {...shoesCriteria, shoesSizes: shoesSizesStr, page: 0};

        await getShoesList(newShoesCriteria);

        setPage(1);
        setAvailableIn(shoesSizesArray);
        setShoesCriteria(newShoesCriteria);
    };

    const handlePagination = async (event: ChangeEvent<unknown>, page: number) => {
        const newShoesCriteria: ShoesCriteria = {...shoesCriteria, page: page - 1};

        await getShoesList(newShoesCriteria);

        setPage(page);
        setShoesCriteria(newShoesCriteria);
    };

    const handleSortOptions = async (event: SelectChangeEvent) => {
        const sortOption: SORT_OPTION_TYPES = event.target.value as SORT_OPTION_TYPES;
        const sortDirection: SORT_DIRECTION_TYPES = SORT_DIRECTION[sortOption] as SORT_DIRECTION_TYPES;
        const sortBy = SORT_BY[sortOption];
        const newShoesCriteria: ShoesCriteria = {...shoesCriteria, sortDirection, sortBy};

        await getShoesList(newShoesCriteria);

        setSortOptions(sortOption);
        setShoesCriteria(newShoesCriteria);
    };

    return (
        <>
            <Box className={classes.titleContainer}>
                <Box className={classes.title}>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{mr: 1}}
                        className={classes.titleLeft}
                    >
                        Shoes Catalog
                    </Typography>
                    <Typography
                        variant="h5"
                        color="grey"
                        className={classes.titleRight}
                    >
                        {shoesCatalog.totalShoesAmount} shoes
                    </Typography>
                </Box>
            </Box>

            <Box sx={{mt: 1}} className={classes.spaceBetween}>
                <Pagination sx={{mt: 1}} size="large" count={shoesCatalog.totalPagesCount} page={page}
                            onChange={handlePagination}
                            color="primary"/>
                <Box sx={{width: 1 / 2}}>
                    <FormControl sx={{width: 10 / 21}}>
                        <InputLabel>
                            <Box className={classes.spaceBetween}>
                                <SortIcon sx={{mr: 1}}/>
                                Sort Options
                            </Box>
                        </InputLabel>
                        <Select
                            value={sortOptions}
                            label="Sort Options......"
                            onChange={handleSortOptions}
                        >
                            <MenuItem value={"newToOld"}>New to old</MenuItem>
                            <MenuItem value={"oldToNew"}>Old to new</MenuItem>
                            <MenuItem value={"cheapToExpensive"}>Cheap to expensive</MenuItem>
                            <MenuItem value={"expensiveToCheap"}>Expensive to cheap</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{width: 10 / 21, float: 'right'}}>
                        <InputLabel>
                            <Box className={classes.spaceBetween}>
                                <TaskAltIcon sx={{mr: 1}}/>
                                Available in
                            </Box>
                        </InputLabel>
                        <Select
                            multiple
                            value={availableIn}
                            onChange={handleAvailableIn}
                            input={<OutlinedInput label="Available In......"/>}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {shoesCatalog.sizes.map((name) => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={availableIn.indexOf(name) > -1}/>
                                    <ListItemText primary={name}/>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </Box>
        </>
    );
};

interface ShoesCatalogHeaderComponentProps {
    getShoesList: (shoesCriteria: ShoesCriteria) => void;
    shoesCatalog: ShoesCatalogDTO;
}

export default ShoesCatalogHeaderComponent;