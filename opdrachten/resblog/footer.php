<!--footer-->
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-lg-4 footer-grid-agileits-w3ls text-left">
					<h3>Over ons</h3>
					<p><?php getshortdescription("titles"); ?></p>
					<div class="read">
						<a href="about.php" class="btn btn-primary read-m">Lees meer</a>
					</div>
				</div>
				<div class="col-lg-4 footer-grid-agileits-w3ls text-left">

					
				</div>
				<!-- subscribe -->
				<div class="col-lg-4 subscribe-main footer-grid-agileits-w3ls text-left">
					<h2>Schrijf je in voor onze nieuwsbrief</h2>
					<div class="subscribe-main text-left">
							<div class="subscribe-form">
									<form action="#" method="post" class="subscribe_form">
										<input class="form-control" type="email" placeholder="Uw email" required="">
										<button type="submit" class="btn btn-primary submit">Indienen</button>
									</form>
									<div class="clearfix"> </div>
						   </div>
						<p>We respecteren uw privacy.</p>
					</div>
					<!-- //subscribe -->
				</div>
			</div>
			<!-- footer -->
			<div class="footer-cpy text-center">
				<div class="footer-social">
					<div class="copyrighttop">
						<ul>
							<li class="mx-3">
								<a class="facebook" href="<?php getlinks("links","facebook");?>">
									<i class="fab fa-facebook-f"></i>
									<span>Facebook</span>
								</a>
							</li>
							<li>
								<a class="facebook" href="<?php getlinks("links","twitter");?>">
									<i class="fab fa-twitter"></i>
									<span>Twitter</span>
								</a>
							</li>
							<li class="mx-3">
								<a class="facebook" href="<?php getlinks("links","googleplus");?>">
									<i class="fab fa-google-plus-g"></i>
									<span>Google+</span>
								</a>
							</li>
							<li>
								<a class="facebook" href="<?php getlinks("links","pinterest");?>">
									<i class="fab fa-pinterest-p"></i>
									<span>Pinterest</span>
								</a>
							</li>
						</ul>

					</div>
				</div>
				<div class="w3layouts-agile-copyrightbottom">
					<p> GLR BLOG <?php $current=date("Y"); print_r($current);?> | by
						Vatan
					</p>

				</div>
			</div>
			<!-- //footer -->
		</div>
	</footer>