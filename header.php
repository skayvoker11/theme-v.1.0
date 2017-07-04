<?php
wp_head();

?>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
	<div class="overlay-all"></div>
	<div class="preloader-2" id="page-preloader">
		<div class="logo">
			<a href="" class="logo-light"><img src="<?php echo get_template_directory_uri(); ?>/img/xone-logo-light.png" alt="logo"></a>
		</div>
		<div class="loader">
			<span id="lol">0%</span>
		</div>
	</div>

	<div class="page-content">
		<!--Header -->
		<header class="header-abs">
			<div class="header-inner wrapper clear">
				<div class="logo">
					<a href="" class="logo-light"><img src="<?php echo get_template_directory_uri(); ?>/img/xone-logo-light.png" alt="logo"></a>
					<a href="" class="logo-dark"><img src="<?php echo get_template_directory_uri(); ?>/img/xone-logo.png" alt="logo"></a>
				</div>
				<nav>
					<?php 
					wp_nav_menu( array(
						'menu_class'=>'menu',
						'theme_location'=>'top',
						'after'=>' /'
						) );
						?>
					</nav>
				</div>
			</header>
			<!--End Header -->
			<!--Page Body -->
			<div class="page-body">
