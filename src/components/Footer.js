import React from 'react';

class Footer extends React.Component {
    state = {  } 
    render() { 
        return (
        <footer id="footer"  class="footer">
            <div class="container">
                <div class="hm-footer-copyright text-center">
                    <div class="footer-social">
                        <a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a>	
                        <a href="https://www.instagram.com/?hl=es"><i class="fa fa-instagram"></i></a>
                        <a href="https://es.linkedin.com/"><i class="fa fa-linkedin"></i></a>
                        <a href="https://www.pinterest.es/"><i class="fa fa-pinterest"></i></a>
                        <a href="https://www.behance.net/onboarding/adobe"><i class="fa fa-behance"></i></a>	
                    </div>
                    <p>
                        &copy;copyright. designed and developed by David Hernández López
                    </p>
                </div>
            </div>

            <div id="scroll-Top">
                <div class="return-to-top">
                    <i class="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
                </div>
                
            </div>
            
        </footer>
        );
    }
}
 
export default Footer;