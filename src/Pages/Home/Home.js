import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import RequireAuth from '../Shared/Login/RequireAuth';
import Banner from './Banner';

const Home = () => {
    const [user ,loading]=useAuthState(auth);
    if(loading){
        return<Loading/>
    }
    return (
        <div>
            {user? <RequireAuth>
                    <Banner/>
            </RequireAuth>
            :
            <Banner/>
            }
          
          

         
           
        </div>

    );
};

export default Home;