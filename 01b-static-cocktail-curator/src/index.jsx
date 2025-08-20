// import { StrictMode } from 'react'
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import {createRoot} from 'react-dom/client';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
    <>
        <Header/>
        <MainContent/>
        <Footer/>
    </>
);

/*
 Components I might use for the practice exercise:
 1. LandingHeader (logo & title)
 2. MainSection page (title + list + back image)
 */


// 1:48:55 - 1:51:15
// 4:40
