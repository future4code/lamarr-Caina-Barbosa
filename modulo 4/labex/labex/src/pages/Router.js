import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './HomePage'
import { ListTripsPage } from './ListTripsPage'
import { ApplicationFormPage } from './ApplicationFOrmPage'
import { AdminHomePage } from './AdminHomePage'
import { CreateTripPage } from './CreateTripPage'
import { loginPage } from './loginPage'
import { TripDetailsPage } from "./TripDetailsPage"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element = {<HomePage/>}/>
                <Route path='/trips/list' element = {<ListTripsPage/>}/>
                <Route path='/trips/application' element = {<ApplicationFormPage/>}/>
                <Route path='/login' element = {<loginPage/>}/>
                <Route path='/admin/trips/list' element = {<AdminHomePage/>}/>
                <Route path='/admin/trips/create' element = {<CreateTripPage/>}/>
                <Route path='admin/trips/:id' element = {<TripDetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    )

}