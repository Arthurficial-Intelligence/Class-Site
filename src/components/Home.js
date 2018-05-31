import React from 'react';
// import './Home.css';
import '../App.css'
import Unicorn from '../images/unicorn.svg';
import MeetUs from './MeetUs';
import Technologies from './Technologies';


function HomeBody() {
    return (
        <div>
        <main>
            {/* <h1>hello world<span className="amp-h2">!</span></h1> */}
            <img src={Unicorn} alt="A Silhouette of An Awesome Unicorn" className="unicorn"/>
            <h2>design + development = unicorn</h2>
            <p className="small-caps-p">nashville software school cohort <span className="amp-p">24</span>
            </p>

        </main>

        <MeetUs />
        <Technologies />
        </div>
    )
}

export default HomeBody;