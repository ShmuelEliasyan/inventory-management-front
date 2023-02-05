import React from "react";
import {Provider} from "react-redux";
import store from "./Services/Redux/store";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomeComponent from "./Components/Home/HomeComponent";
import LayoutComponent from "./Components/Layout/LayoutComponent";
import InventoryManagementComponent from "./Components/InventoryManagement/InventoryManagementComponent";
import ShoesAmountPageContainer from "./Components/InventoryManagement/ShoesAmountPage/ShoesAmountPageContainer";
import NewShoesPageContainer from "./Components/InventoryManagement/NewShoesPage/NewShoesPageContainer";
import ShoesCatalogComponent from "./Components/ShoesCatalog/ShoesCatalogComponent";
import ShoesCatalogContainer from "./Components/ShoesCatalog/ShoesCatalogContainer";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <LayoutComponent>
                    <Routes>
                        <Route path="/" element={<HomeComponent/>}/>
                        <Route path="/new-shoes" element={<NewShoesPageContainer/>}/>
                        <Route path="/inventory-management" element={<InventoryManagementComponent/>}/>
                        <Route path="/shoes-amount" element={<ShoesAmountPageContainer/>}/>
                        <Route path="/shoes-catalog" element={<ShoesCatalogContainer/>}/>
                    </Routes>
                </LayoutComponent>
            </Router>
        </Provider>
    );
}

export default App;
