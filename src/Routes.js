import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/components/Login/Login';
import Registration from './pages/components/Login/Registration';
import ProtectedRoutes from './protectedRoutes';
import ChangePassword from './pages/components/Login/ChangePassword';
import AddCategory from './pages/components/Admin/ManageCategory/AddCategory';
import AddItem from './pages/components/Admin/ManageItem/AddItem';
import ProtectedStudentRoutes from './protectedStudentRoutes';
import AddStudent from './pages/components/Admin/ManageStudent/AddStudent';
import ViewStudent from './pages/components/Admin/ManageStudent/ViewStudent';
import ViewItem from './pages/components/Admin/ManageItem/ViewItem';
import ViewCategory from './pages/components/Admin/ManageCategory/ViewCategory';
import ViewRecharge from './pages/components/Admin/ManageRecharge/ViewRecharge';
import ViewOrders from './pages/components/Admin/ManageOrders/ViewOrders';
import ViewDetailOrder from './pages/components/Admin/ManageOrders/ViewDetailOrder';
import ViewPayment from './pages/components/Admin/ManagePayment/ViewPayment';
import Home from './pages/components/Main/pages/Home';
import Cart from './pages/components/Main/pages/Cart';
import ProductInfo from './pages/components/Main/pages/ProductInfo';
import Feedback from './pages/components/Main/pages/Feedback';
import Payment from './pages/components/Main/pages/Payment';
import Service from './pages/components/Main/pages/Service';
import Checkout from './pages/components/Main/pages/Checkout';
import ProductList from './pages/components/Main/pages/ProductList';
import HomeStudent from './pages/components/Home/HomeStudent';
import HomeAdmin from './pages/components/Home/HomeAdmin';
import Change from './pages/components/Main/pages/Change';
import ForgotPassword from './pages/components/Login/ForgotPassword';
import Home1 from './pages/components/Template/User/Home';
import HomeUser from './pages/components/Template/User/HomeUser';


const MainRoutes = () => {
    return (
        <Routes>
          <Route path="/login" element={ <Login />} />
          <Route path="/Registration" element={ <Registration />} /> 
          <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path="/" element={<HomeAdmin/>}> 
              <Route path="/AddCategory" element={<AddCategory/>}/>
               <Route path="/AddItem" element={<AddItem/>}/> 
               <Route path="/AddStudent" element={<AddStudent/>}/>
               <Route path="/ViewStudent" element={<ViewStudent/>}/>
               <Route path="/ViewItem" element={<ViewItem/>}/>
               <Route path="/ViewCategory" element={<ViewCategory/>}/>
               <Route path="/ViewRecharge" element={<ViewRecharge/>}/>
               <Route path="/ViewOrders" element={<ViewOrders/>}/>
               <Route path="/ViewDetailOrder" element={<ViewDetailOrder/>}/>
              <Route path="/ViewPayment" element={<ViewPayment/>}/>
              <Route path="/ChangePassword" element={<ChangePassword/>}/>
            </Route>
          </Route>
          <Route element={<ProtectedStudentRoutes/>}>
          <Route path="/" element={<Home1/>}>
                  <Route path="/CustHome" element={<HomeUser />} />
                  <Route path="/Cart" element={<Cart />} />
                  <Route path="/Product" element={<ProductInfo />} />
                  <Route path="/ProductList" element={<ProductList />} />
                  <Route path="/Feedback" element={<Feedback />} />
                  <Route path="/Payment" element={<Payment />} />
                  <Route path="/Service" element={<Service/>}/>
                  <Route path="/Checkout" element={<Checkout/>}/>
                  <Route path="/Change" element={<Change/>}/>
                  </Route>
        </Route>
          

        </Routes>
    ); 
}

export default MainRoutes;
