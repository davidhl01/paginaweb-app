import React from 'react';

class Popular extends React.Component {
    state = {  } 
    render() { 
        return (
			<section id="populer-products" class="populer-products">
			<div class="container">
				<div class="populer-products-content">
					<div class="row">
						<div class="col-md-3">
							<div class="single-populer-products">
								<div class="single-populer-product-img mt40">
									<img src="assets/images/populer-products/p1.png" alt="populer-products images"/>
								</div>
								<h2><a href="#">Nike Air Force 1 Low</a></h2>
								<div class="single-populer-products-para">
									<p>Top off your outfits with an iconic look with these Air Force 1 Low trainers.</p>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="single-populer-products">
								<div class="single-inner-populer-products">
									<div class="row">
										<div class="col-md-4 col-sm-12">
											<div class="single-inner-populer-product-img">
												<img src="assets/images/populer-products/p2.png" alt="populer-products images"/>
											</div>
										</div>
										<div class="col-md-8 col-sm-12">
											<div class="single-inner-populer-product-txt">
												<h2>
													<a href="#">
													adidas <span>Originals</span> Superstar
													</a>
												</h2>
												<p>
												The adidas Superstar has been an urban icon for decades. Its iconic toe cap continues to provide the ultimate in style and protection.
												</p>
												<div class="populer-products-price">
													<h4>Buy them for <span>$100.00</span></h4>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-3">
							<div class="single-populer-products">
								<div class="single-populer-products">
									<div class="single-populer-product-img">
										<img src="assets/images/populer-products/p3.png" alt="populer-products images"/>
									</div>
									<h2><a href="#">Jordan AJ Max Aura 3</a></h2>
									<div class="single-populer-products-para">
										<p>Update your crep collection with these AJ Max Aura 3 men's trainers.</p>
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
 
export default Popular;