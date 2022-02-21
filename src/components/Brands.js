import React from 'react';

class Brands extends React.Component {
    state = {  } 
    render() { 
        return (
            <section id="clients"  class="clients">
                <div class="container">
                    <div class="owl-carousel owl-theme" id="client">
                            <div class="item">
                                <a href="#">
                                    <img src="assets/images/clients/c1.png" alt="brand-image" />
                                </a>
                            </div>
                            <div class="item">
                                <a href="#">
                                    <img src="assets/images/clients/c2.png" alt="brand-image" />
                                </a>
                            </div>
                            <div class="item">
                                <a href="#">
                                    <img src="assets/images/clients/c3.png" alt="brand-image" />
                                </a>
                            </div>
                            <div class="item">
                                <a href="#">
                                    <img src="assets/images/clients/c4.png" alt="brand-image" class=""/>
                                </a>
                            </div>
                            <div class="item">
                                <a href="#">
                                    <img src="assets/images/clients/c5.png" alt="brand-image" />
                                </a>
                            </div>
                            <div class="item">
                                <a href="#">
                                    <img src="assets/images/clients/c6.png" alt="brand-image" />
                                </a>
                            </div>
                        </div>
                </div>
            </section>
        );
    }
}
 
export default Brands;




