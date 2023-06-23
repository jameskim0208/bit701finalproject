import React from 'react';
import { Home, Menu } from './components';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './member/LoginForm';
import BoardForm from './board/BoardForm';
import BoardList from './board/BoardList';
import errorimage from './image/wrong.png';
import MemberForm from './member/MemberForm';
import Memberlist from './member/Memberlist';
function RouteMain(props) {
    return (
        <div>
            <Menu/>
            <br style={{clear:'both'}}/><br/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<LoginForm/>}/>
                <Route path='/member'>
                    <Route path='form' element={<MemberForm/>}/>
                    <Route path='list' element={<Memberlist/>}/>
                </Route>
                <Route path='/board'>
                    <Route path='form' element={<BoardForm/>}/>
                    <Route path='list' element={<BoardList/>}/>
                    <Route path='list:currentPage' element={<BoardList/>}/>
                </Route>

                <Route path='*' element={
                    <div>
                        <h1>잘못된 URL 주소입니다.</h1>
                        <br/><br/>
                        <img alt='' src={errorimage}/>
                    </div>
                }/>
            </Routes>
        </div>
    );
}

export default RouteMain;