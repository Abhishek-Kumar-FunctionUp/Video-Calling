import React from "react"
import { Routes, Route } from "react-router-dom"
import SignUp from "../Pages/SignUp/SignUp"
import SignIn from "../Pages/SignIn/SignIn"
import SignUpForm from "../Pages/SignUpForm/SignUpForm"
import Home from "../Pages/Home/Home"
import LobbyScreen from "../Pages/Screens/Lobby"
import RoomPage from "../Pages/Screens/Room"

export default function Router(){

    return(
        <Routes>
            <Route path="/" element={<SignIn/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/signupform" element={<SignUpForm/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/lobbyscreen" element={<LobbyScreen />}/>
            <Route path="/room/:roomId" element={<RoomPage/>}/>
        </Routes>
    )
}