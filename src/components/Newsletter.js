import React from 'react';

class Newsletter extends React.Component {
    state = {  } 
    render() { 
        return (
		<section id="newsletter"  class="newsletter">
			<div class="container">
				<div class="hm-footer-details">
					<div class="row">
						<div class=" col-md-3 col-sm-6 col-xs-12">
							<div class="hm-footer-widget">
								<div class="hm-foot-title">
									<h4>information</h4>
								</div>
								<div class="hm-foot-menu">
									<ul>
										<li><a href="#">about us</a></li>
										<li><a href="#">contact us</a></li>
										<li><a href="#">news</a></li>
										<li><a href="#">store</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div class=" col-md-3 col-sm-6 col-xs-12">
							<div class="hm-footer-widget">
								<div class="hm-foot-title">
									<h4>collections</h4>
								</div>
								<div class="hm-foot-menu">
									<ul>
										<li><a href="#new-arrivals">New Arrivals</a></li>
										<li><a href="#feature">Featured products</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div class=" col-md-3 col-sm-6 col-xs-12">
							<div class="hm-footer-widget">
								<div class="hm-foot-title">
									<h4>my accounts</h4>
								</div>
								<div class="hm-foot-menu">
									<ul>
										<li><a href="#">my account</a></li>
										<li><a href="#">wishlist</a></li>
										<li><a href="#">Community</a></li>
										<li><a href="#">order history</a></li>
										<li><a href="#">my cart</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div class=" col-md-3 col-sm-6  col-xs-12">
							<div class="hm-footer-widget">
								<div class="hm-foot-title">
									<h4>newsletter</h4>
								</div>
								<div class="hm-foot-para">
									<p>
										Subscribe  to get latest news,update and information.
									</p>
								</div>
								<div class="hm-foot-email">
									<div class="foot-email-box">
										<input type="text" class="form-control" placeholder="Enter Email Here...."/>
									</div>
									<div class="foot-email-subscribe">
										<span><i class="fa fa-location-arrow"></i></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>

		</section>	

        );
    }
}
 
export default Newsletter;



