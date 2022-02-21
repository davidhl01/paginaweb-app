import {Link} from 'react-router-dom';

function Header(data) {
	var final=[];
	var preciototal = 0;
	var p = 0;

	for (let producto of data.carrito) {
		let indice = p;
		final.push(
			<li class="single-cart-list">
				<a class="photo">
					<img src={producto.imagen} class="cart-thumb" alt="image" />
				</a>
				<div class="cart-list-txt">
					<p>{producto.cantidad} x {producto.nombre} <br></br> <span class="price">{producto.precio} €</span></p>
				</div>
				<div class="cart-close">
					<span class="lnr lnr-cross" onClick={()=>{
						data.borrar(indice);
						localStorage.setItem('carrito', JSON.stringify(data.carrito));
					}}></span>
				</div>
			</li>
		);
		preciototal += producto.cantidad * producto.precio;
		p++;
	}

	return (
		<header id="home" class="welcome-hero">
		<div id="header-carousel" class="carousel slide carousel-fade" data-ride="carousel">
			<ol class="carousel-indicators">
				<li data-target="#header-carousel" data-slide-to="0" class="active"><span class="small-circle"></span></li>
				<li data-target="#header-carousel" data-slide-to="1"><span class="small-circle"></span></li>
				<li data-target="#header-carousel" data-slide-to="2"><span class="small-circle"></span></li>
			</ol>
			<div class="carousel-inner" role="listbox">
				<div class="item active">
					<div class="single-slide-item slide1">
						<div class="container">
							<div class="welcome-hero-content">
								<div class="row">
									<div class="col-sm-7">
										<div class="single-welcome-hero">
											<div class="welcome-hero-txt">
												<h4>Trainers shop</h4>
												<h2>Trainers of the most famous brands</h2>
												<p>
												Nike Blazer Mid '77
												<br></br>
												Color: white and red
												</p>
												<div class="packages-price">
													<p>
														$100.00
														<del>$120.00</del>
													</p>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-5">
										<div class="single-welcome-hero">
											<div class="welcome-hero-img">
												<img src="assets/images/slider/slider1.png" alt="slider image"/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="item">
					<div class="single-slide-item slide2">
						<div class="container">
							<div class="welcome-hero-content">
								<div class="row">
									<div class="col-sm-7">
										<div class="single-welcome-hero">
											<div class="welcome-hero-txt">
												<h4>Trainers shop</h4>
												<h2>Trainers of the most famous brands</h2>
												<p>
													Nike Air Force 1 Shadow
													<br></br>
													Color: White
												</p>
												<div class="packages-price">
													<p>
														$125.00
														<del>$150.00</del>
													</p>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-5">
										<div class="single-welcome-hero">
											<div class="welcome-hero-img">
												<img src="assets/images/slider/slider2.png" alt="slider image"/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>

				<div class="item">
					<div class="single-slide-item slide3">
						<div class="container">
							<div class="welcome-hero-content">
								<div class="row">
									<div class="col-sm-7">
										<div class="single-welcome-hero">
											<div class="welcome-hero-txt">
												<h4>Trainers shop</h4>
												<h2>Trainers of the most famous brands</h2>
												<p>
													Vans Sk8-Hi Repeat 
													<br></br>
													Color: Grey
												</p>
												<div class="packages-price">
													<p>
														$90.00
														<del>$110.00</del>
													</p>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-5">
										<div class="single-welcome-hero">
											<div class="welcome-hero-img">
												<img src="assets/images/slider/slider3.png" alt="slider image"/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>

		</div>

		
		<div class="top-area">
			<div class="header-area">
				<nav class="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"  data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

					<div class="top-search">
						<div class="container">
							<div class="input-group">
								<span class="input-group-addon"><i class="fa fa-search"></i></span>
								<input type="text" class="form-control" placeholder="Search"/>
								<span class="input-group-addon close-search"><i class="fa fa-times"></i></span>
							</div>
						</div>
					</div>

					<div class="container">            
						<div class="attr-nav">
							<ul>
								<li class="search">
									<a><span class="lnr lnr-magnifier"></span></a>
								</li>
								<li class="nav-setting">
									<a><span class="lnr lnr-cog"></span></a>
								</li>
								<li class="dropdown">
									<a class="dropdown-toggle" data-toggle="dropdown" >
										<span class="lnr lnr-cart"></span>
										<span class="badge badge-bg-1">{data.carrito.length}</span>
									</a>
									<ul class="dropdown-menu cart-list s-cate">
										{final}
										<li class="total">
											<span>Total: $ {preciototal}</span>
											<br></br>
											<br></br>
											<Link to="carrito" class="view-cart">view cart</Link>
										</li>
									</ul>
								</li>
							</ul>
						</div>
						<div class="navbar-header">
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
								<i class="fa fa-bars"></i>
							</button>
							<Link to="home" class="navbar-brand">Shoes<span>mkt</span>.</Link>

						</div>
						<div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
							<ul class="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
								<li><Link to='home'>Home</Link></li>
								<li><Link to="new-products">New products</Link></li>
								<li><Link to="carrito">Cart</Link></li>
								<li><Link to="newsletter">Contact</Link></li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
			<div class="clearfix"></div>
		</div>
	</header>
	)
}

export default Header;