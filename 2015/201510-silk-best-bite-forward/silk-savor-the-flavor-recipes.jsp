<!DOCTYPE html>
<%@ include file="/WEB-INF/jsp_v_2013/includes/include.jsp" %>
<%@ include file="/WEB-INF/jsp_v_2013/includes/include_no_cache_header.jsp" %>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<%@ include file="/WEB-INF/jsp_v_2013/includes/include_head.jsp" %>
<fmt:bundle basename="${bundleName}">

<c:set var="includeLeaderboard"	>false</c:set>
<c:set var="includeTrailerboard">false</c:set>
<c:set var="pagePath"	>silk-savor-the-flavor-recipes</c:set>
<c:set var="pageUrl"	>http://www.purewow.com/${pagePath}</c:set>
<c:set var="pageMetaDesc">Start your morning with a recipe from Silk</c:set>
<c:set var="pageFbImage"><fmt:message key="static.url1"/>${pageContext.request.contextPath}/static/2014_01_silk_pinterest/img/200x200.jpg</c:set>
<c:set var="pageFbTitle">Best Bite Forward</c:set>
<c:set var="pageFbDesc"	>Start your morning with a recipe from Silk</c:set>
<c:set var="pageTweet"	>French Toast. Pancakes. Chocolate Hazelnut Crepes. Discover all the @lovemysilk recipes here: http://pwow.me/1eeuKBk via @PureWow</c:set>

<meta name="description"	content="${pageMetaDesc}" />
<%@ include file="/WEB-INF/jsp_v_2013/includes/include_fb_og.jsp" %>
<meta property="og:url" 		content="${pageUrl}" />
<meta property="og:image" 		content="${pageFbImage}" />
<meta property="og:title" 		content="${pageFbTitle}" />
<meta property="og:description" content="${pageFbDesc}" />
<link rel="canonical" href="${pageUrl}" />

<!-- 
 ######################################################################################################################################
 # McNote: BEGIN: Insert page specific <head> stuff here
 ######################################################################################################################################
-->
	<title>Breakfast Recipes | PureWow | Pinterest</title>
	<link rel="stylesheet" type="text/css" href="//cloud.typography.com/6567052/700964/css/fonts.css" />
	<!-- <link href="<fmt:message key="static.url2"/>${pageContext.request.contextPath}/static/2014_01_silk_pinterest/css/bootstrap.css" rel="stylesheet">  -->
	<link href="cloud.typography.com/6567052/647844/css/fonts.css" rel="stylesheet">
	<link href="${pageContext.request.contextPath}/static/2014_01_silk_pinterest/css/silk.css" rel="stylesheet">
	<%-- We are just using the new targeted ads for this page --%>
	<c:set var="dfp_edition" 		value="national" />
	<c:set var="dfp_page_type" 		value="custom" />
	<c:set var="dfp_article_id" 	value="${pagePath}" />
	<%@ include file="/WEB-INF/jsp_v_2013/includes/include_google_ads_common_targeted.jsp" %>
	
<!-- 
 ######################################################################################################################################
 # McNote: END: Insert page specific <head> stuff here
 ######################################################################################################################################
-->
	<style>
		.crystal_holder {width:1218px;background:#f6f6f6;margin:auto;padding: 15px 0 20px 0;}
		@media (max-width: 1218px) 
		{
			.crystal_holder {width:100%;}
		}
		@media (max-width: 767px)
		{
			.crystal_holder {display:none;}
		}
		.fb-comments-holder {text-align:center;margin:auto;}
	/*
		#wrapper {overflow:visible;}
		
		.w1 {left:0;}
		.w2 {left:0;}
	*/
	
		.photo_credit
		{
			margin-top: -30px !important;
			text-align: center;
		}
		/* ExtraWow add-on */
		.extra-wow {
			border-top: 2px solid #000;
			padding: 10px 0 40px;
			margin-top: 45px;
			text-align: center;
		}
		.extra-wow ul {
			padding: 0;
			margin: 0 auto;
			list-style: none;
			overflow: hidden;
			width: 915px;
		}
		.extra-wow a {
			color: #000;
			text-decoration: none;
		}
		.extra-wow ul li 
		{
			float: left;
			overflow: hidden;
			margin: 30px 12px 0;
			width: 280px;
			text-align: left;
			font: 12px/15px 'Trebuchet MS', Arial, Helvetica, sans-serif;
		}
		.extra-wow h4 
		{
			font: bold 16px/14px 'Trebuchet MS', Arial, Helvetica, sans-serif;
		}
		.extra-wow ul li img {
			float: left;
			margin-right: 10px;
		}
		.extra-wow h2 
		{
			margin: 0 0 0 0;
			font-family: 'BrandonGrotesque-Light';
			font-weight: normal;
			font-size: 18px;
			letter-spacing: 1px;
			line-height: 1.5em;
			text-transform: uppercase;
			text-align: center;
		}
		@media (max-width: 767px)
		{
			.extra-wow ul {width:100%;}
		}			
		@media (max-width: 480px)
		{
			.photo_credit
			{
				margin-top: auto !important;
			}
		}					
		.social-module {
			display: block;
			width: 280px;
			margin: 0 auto;
			margin-top: 1em;
		}
	</style>
	
</fmt:bundle>

	<%@ include file="/WEB-INF/jsp_v_2013/includes/include_head_before_close_tag.jsp" %>
</head>
<body>
<fmt:bundle basename="${bundleName}">
	<div ${div1Attribute}>
		<div ${div2Attribute}>
			<div ${div3Attribute}>
				<%@ include file="/WEB-INF/jsp_v_2013/includes/include_header.jsp" %>
				<!--main-->
<!-- 
 ######################################################################################################################################
 # McNote: BEGIN: Insert page specific <body> stuff here
 ######################################################################################################################################
-->
				<div id="main" class="silk">
					<!-- Body Wrapper -->
					<div class="body-wrapper">
					<div class="section-area title">
						
						<h1>Best Bite Forward</h1> 
<p style="margin-bottom: 0;">Wake up and smell the flavor...the guilt-free flavor, that is. Follow the instructions below and get your day off to a great start.</p>
<p style="text-align: left;width: 662px;margin-top: 15px;">1. Pin your favorite dish from Silk<br>2. Click on the image in Pinterest to get the recipe<br>3. Enjoy your healthy breakfast!</p>
						<div class="sponsor">
						<span>Brought to you by</span>
						<a target="_blank" href="http://silk.com"><img class="img-responsive" src="<fmt:message key="static.url1"/>${pageContext.request.contextPath}/static/2014_01_silk_pinterest/img/silk-logo.png"></a>
						</div>
						</div>
						
					
<div class="row bm">
  <div class="col-md-4 col-xs-6">
  <div class="item">
  <c:set var="my_image"><fmt:message key="static.url1"/>${pageContext.request.contextPath}/static/2014_01_silk_pinterest/img/ApplesauceOatmealPancakes.jpg</c:set>
  <img class="img-responsive " src="${my_image}">
 <h2>Applesauce Oatmeal Pancakes</h2> 
<div class="curalate-super-pin" 
data-campaign-id="UrdvqugFfx"
data-url="http://silk.com/recipes/applesauce-oatmeal-pancakes"
data-image-url="${my_image}"
data-description="Applesauce Oatmeal Pancakes made with Silk @LoveMySilk via @PureWow"
></div>
</div></div>
  <div class="col-md-4 col-xs-6">
  <div class="item">
  <c:set var="my_image"><fmt:message key="static.url2"/>${pageContext.request.contextPath}/static/2014_01_silk_pinterest/img/SausageandPepperCrustlessQuiche.jpg</c:set>
  <img class="img-responsive " src="${my_image}">
 <h2>Sausage and Pepper Crustless Quiche</h2>
 <div class="curalate-super-pin" 
data-campaign-id="UrdvqugFfx"
data-url="http://silk.com/recipes/sausage-and-pepper-crustless-quiche"
data-image-url="${my_image}"
data-description="Sausage and Pepper Crustless Quiche made with Silk @LoveMySilk via @PureWow">	
</div>  
  </div></div>
    <div class="col-md-4 col-xs-6">
  <div class="item">
  <c:set var="my_image"><fmt:message key="static.url3"/>${pageContext.request.contextPath}/static/2014_01_silk_pinterest/img/DarkChocolateHazelnutCinnamonRolls.jpg</c:set>
  <img class="img-responsive " src="${my_image}">
  <h2>Dark Chocolate Hazelnut Cinnamon Rolls</h2>
 <div class="curalate-super-pin" 
data-campaign-id="UrdvqugFfx"
data-url="http://silk.com/recipes/dark-chocolate-hazelnut-cinnamon-rolls"
data-image-url="${my_image}"
data-description="Dark Chocolate Hazelnut Cinnamon Rolls made with Silk @LoveMySilk via @PureWow">	
</div>  
  </div>
		</div>
  <div class="col-md-4 col-xs-6">
  <div class="item">
  <c:set var="my_image"><fmt:message key="static.url4"/>${pageContext.request.contextPath}/static/2014_01_silk_pinterest/img/BakedBranOatmeal.jpg</c:set>
  <img class="img-responsive " src="${my_image}">
  <h2 class="short">Baked Bran Oatmeal</h2> 
<div class="curalate-super-pin" 
data-campaign-id="UrdvqugFfx"
data-url="http://silk.com/recipes/baked-bran-oatmeal"
data-image-url="${my_image}"
data-description="Baked Bran Oatmeal made with Silk @LoveMySilk via @PureWow">	
</div>  
</div></div>
  <div class="col-md-4 col-xs-6">
  <div class="item">
  <c:set var="my_image"><fmt:message key="static.url1"/>${pageContext.request.contextPath}/static/2014_01_silk_pinterest/img/FrenchToast.jpg</c:set>
  <img class="img-responsive " src="${my_image}">
  <h2 class="short">French Toast</h2>
 <div class="curalate-super-pin" 
data-campaign-id="UrdvqugFfx"
data-url="http://silk.com/recipes/french-toast"
data-image-url="${my_image}"
data-description="French Toast made with Silk @LoveMySilk via @PureWow">	
</div>  
  </div></div>
    <div class="col-md-4 col-xs-6">
  <div class="item">
  <c:set var="my_image"><fmt:message key="static.url2"/>${pageContext.request.contextPath}/static/2014_01_silk_pinterest/img/MiniAmaranthCornMuffins.jpg</c:set>
  <img class="img-responsive " src="${my_image}">
   <h2 class="short">Mini Amaranth Corn Muffin</h2>
 <div class="curalate-super-pin" 
data-campaign-id="UrdvqugFfx"
data-url="http://silk.com/recipes/mini-amaranth-corn-muffins"
data-image-url="${my_image}"
data-description="Mini Amaranth Corn Muffin made with Silk @LoveMySilk via @PureWow">	
</div>  
  </div>
		</div>		
<div class="col-md-4 col-xs-6">
  <div class="item">
  <c:set var="my_image"><fmt:message key="static.url3"/>${pageContext.request.contextPath}/static/2014_01_silk_pinterest/img/ChocolateHazelnutCrepes.jpg</c:set>
  <img class="img-responsive " src="${my_image}">
  <h2 class="short">Chocolate Hazelnut Crepes</h2> 
<div class="curalate-super-pin" 
data-campaign-id="UrdvqugFfx"
data-url="http://silk.com/recipes/chocolate-hazelnut-crepes"
data-image-url="${my_image}"
data-description="Chocolate Hazelnut Crepes made with Silk @LoveMySilk via @PureWow">	
</div>  
</div></div>
  <div class="col-md-4 col-xs-6">
  <div class="item">
  <c:set var="my_image"><fmt:message key="static.url4"/>${pageContext.request.contextPath}/static/2014_01_silk_pinterest/img/TofuRancheros.jpg</c:set>
  <img class="img-responsive " src="${my_image}">
  <h2 class="short">Tofu Rancheros</h2>
 <div class="curalate-super-pin" 
data-campaign-id="UrdvqugFfx"
data-url="http://silk.com/recipes/tofu-rancheros"
data-image-url="${my_image}"
data-description="Tofu Rancheros made with Silk @LoveMySilk via @PureWow">	
</div>  
  </div></div>
    <div class="col-md-4 col-xs-6">
  <div class="item">
  <c:set var="my_image"><fmt:message key="static.url1"/>${pageContext.request.contextPath}/static/2014_01_silk_pinterest/img/PearCranberryScones.jpg</c:set>
  <img class="img-responsive " src="${my_image}">
   <h2 class="short">Pear Cranberry Scones</h2>
 <div class="curalate-super-pin" 
data-campaign-id="UrdvqugFfx"
data-url="http://silk.com/recipes/pear-cranberry-scones"
data-image-url="${my_image}"
data-description="Pear Cranberry Scones made with Silk @LoveMySilk via @PureWow">	
</div>  
  </div>
		</div>		
<div class="col-md-4 col-xs-6">
  <div class="item">
  <c:set var="my_image"><fmt:message key="static.url2"/>${pageContext.request.contextPath}/static/2014_01_silk_pinterest/img/ChocolateBananaBreakfastShake.jpg</c:set>
  <img class="img-responsive " src="${my_image}">
 <h2>Chocolate Banana<br>Breakfast Shake</h2> 
<div class="curalate-super-pin" 
data-campaign-id="UrdvqugFfx"
data-url="http://silk.com/recipes/chocolate-banana-breakfast-shake"
data-image-url="${my_image}"
data-description="Chocolate Banana Breakfast Shake made with Silk @LoveMySilk via @PureWow">	
</div>  
</div></div>
  <div class="col-md-4 col-xs-6">
  <div class="item">
  <c:set var="my_image"><fmt:message key="static.url3"/>${pageContext.request.contextPath}/static/2014_01_silk_pinterest/img/SilkQuinoaPudding.jpg</c:set>
  <img class="img-responsive " src="${my_image}">
 <h2 class="short">Silk Quinoa Pudding</h2>
 <div class="curalate-super-pin" 
data-campaign-id="UrdvqugFfx"
data-url="http://silk.com/recipes/silk-quinoa-pudding"
data-image-url="${my_image}"
data-description="Silk Quinoa Pudding made with Silk @LoveMySilk via @PureWow">	
</div>  
  </div></div>
    <div class="col-md-4 col-xs-6">
  <div class="item">
  <c:set var="my_image"><fmt:message key="static.url4"/>${pageContext.request.contextPath}/static/2014_01_silk_pinterest/img/PoppySeedCake.jpg</c:set>
  <img class="img-responsive " src="${my_image}">
  <h2 class="short">Poppy Seed Cake</h2>
 <div class="curalate-super-pin" 
data-campaign-id="UrdvqugFfx"
data-url="http://silk.com/recipes/poppy-seed-cake"
data-image-url="${my_image}"
data-description="Poppy Seed Cake made with Silk @LoveMySilk via @PureWow">	
</div>  
  </div>
		</div>		

   </div> <!-- end of row -->

</div> <!-- end of body wrapper -->
</div> <!-- end of main -->
				
				
	<div class="row comments" style="text-align:center; margin-top:50px; margin-bottom:10px;">
		<!-- Facebook Comments Box -->
		<div id="comments" 
			 class="fb-comments" 
			 data-href="${pageUrl}" 
			 data-width="970"
			 data-num_posts="12">
		</div>
	</div>
   
   
				
<script type="text/javascript" 
  src="//api.curalate.com/js/curalate.min.js">
</script>

<script type="text/javascript">
  Curalate.canvas.init();
</script>

	<script type="text/javascript">
		$(document).ready(function()
		{
			$('body').css('font-family', '"museo_sans100", Helvetica');
		});
	</script>
	
<!-- 
 ######################################################################################################################################
 # McNote: END: Insert page specific <body> stuff here
 ######################################################################################################################################
-->

				<%@ include file="/WEB-INF/jsp_v_2013/includes/include_footer.jsp" %>
			</div>
		</div>
	</div>
	<%@ include file="/WEB-INF/jsp_v_2013/includes/include_page_bottom.jsp" %>
</fmt:bundle>

</body>
</html>

