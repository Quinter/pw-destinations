//Namespacing for global variable
cgV2 = {};
cgV1 = {};

//V2.0 Phase Structure (all of the phases here are structurally identical):
cgV2.context = {
	"phases": [
		//Phase 9
		{
			//Video Row
			"video-row" : {					
				"charContainer": {
					"name": "Gretta Monahan",
					"title": "Self-Made Style Maven",
				},
				"id": "p9-video",
				"videoLink": "https:\/\/player.vimeo.com/video/191882145?api=1&portrait=0&autoplay=1",
				"prefix": "video"
			},

			//Product Row
			"product-row": {
				"hed": "Gretta&rsquo;s Of&ndash;the&ndash;Moment Obsessions",
				"shop-items": [
					{
						"imageUrl": "./images/phase-9/desktop/product-1.jpg",
						"hed": "A Morning Boost",
						"copy": "Gretta swears by this smoothie combo: kale, carrots, apple slices, chia seeds and a touch of coconut oil. Her son calls it &ldquo;Spartacus Juice&ndash;the breakfast of gladiators.&rdquo;"
					},
					{
						"imageUrl": "./images/phase-9/desktop/product-2.jpg",
						"hed": "Dueling Apps",
						"copy": "For Monahan, it&rsquo;s a tie between motivational (she loves the keynotes by social psychologist Amy Cuddy) and meditation (it keeps her entrepreneurial spirit&ndash;and the headaches that come from juggling three business ventures&ndash;from getting the best of her)."
					},
					{
						"imageUrl": "./images/phase-9/desktop/product-3.jpg",
						"hed": "Blanket Scarves",
						"copy": "Monahan believes you need to dress in clothing that feels good. Her current go-to? Oversize scarves. She styles them with dresses and jeans."
					}					
				]
			},

			//Split Row w/ BG
			"split-row-bg": {
				"backgroundImage": "./images/phase-6/desktop/split-row-bg-img-desktop.jpg",
				"backgroundImageAlt": "",
				"imageColumn": {
					"imageLink": "https:\/\/www.target.com/p/covergirl-simply-ageless-foundation/-/A-13691736",
					"imageLinkGATags": 'data-gae-track=\"event\" data-gae-category=\"destination\" data-gae-action=\"click\" data-gae-label=\"p9_outboundLink_01_img_ageless_foundation\"',
					"images": {
						"desktop": "./images/phase-9/desktop/gretta-monahan-desktop.jpg",
						"mobile": "./images/phase-9/mobile/gretta-monahan-mobile.jpg"
					},
					"imageAlt": "Gretta Monahan"
				},
				"textColumn": {
					"hed": "Look on the Bright Side",
					"sponsored": "Sponsored",
					"copy": "Busy women like Monahan demand a lot from their beauty regimen. <a class=\"split-row-bg-link\" href=\"https:\/\/www.target.com/p/covergirl-simply-ageless-foundation/-/A-13691736\" target=\"_blank\" data-gae-track=\"event\" data-gae-category=\"destination\" data-gae-action=\"click\" data-gae-label=\"p9_outboundLink_02_txt_ageless_foundation\">CoverGirl &#43; Olay Simply Ageless Instant Wrinkle Defying Foundation<\/a> gives her complexion care and coverage all in one, so she never has to think twice about reapplying.",
					"shopLink": "https:\/\/www.target.com/p/covergirl-simply-ageless-foundation/-/A-13691736",
					"shopLinkGATags": 'data-gae-track=\"event\" data-gae-category=\"destination\" data-gae-action=\"click\" data-gae-label=\"p9_outboundLink_03_shop_target\"',
					"shopLinkText": "Get the Look at Target"
				}
			}
		},
		//Phase 8
		{
			//Video Row
			"video-row" : {
				"video-overlay": {
					"selector": "p8-video-overlay",
					"ga-tags": 'data-gae-track="event" data-gae-category="destination" data-gae-action="click" data-gae-label="p8_vidplay_alicia_quarles"'
				},					
				"charContainer": {
					"name": "Alicia Quarles",
					"title": "TV Journalist Who Rules the Red Carpet",
				},
				"id": "p8-video",
				"videoLink": "https:\/\/player.vimeo.com/video/184762353?api=1&portrait=0",
				"prefix": "video"
			},

			//Product Row
			"product-row": {
				"hed": "How She Finds Her Zen",
				"shop-items": [
					{
						"imageUrl": "./images/phase-8/desktop/product-1.jpg",
						"hed": "Forget the Coffee",
						"copy": "In the morning, Quarles avoids the coffee machine in lieu of warm water with honey and lemon to boost her metabolism. If she wants to mix it up, she&rsquo;ll drink coconut water or add fruit to give it a fresh taste."
					},
					{
						"imageUrl": "./images/phase-8/desktop/product-2.jpg",
						"hed": "Staying Grounded",
						"copy": "&ldquo;I love sky-high heels as much as the next woman. The only difference is that since I live in New York City, I am walking a ton, so those heels are not always practical,&rdquo; Quarles explains. To compromise, she stashes her flats in her tote and slides them on in-between meetings and shoots to save her poor feet."
					},
					{
						"imageUrl": "./images/phase-8/desktop/product-3.jpg",
						"hed": "Daily Affirmations",
						"copy": "&ldquo;No one will hustle for you like you.&rdquo; Quarles believes in the power of positive affirmations to build self-esteem, and repeats this quote on a regular basis."
					}					
				]
			},

			//Split Row w/ BG
			"split-row-bg": {
				"backgroundImage": "./images/phase-6/desktop/split-row-bg-img-desktop.jpg",
				"backgroundImageAlt": "",
				"imageColumn": {
					"imageLink": "https:\/\/www.target.com/p/covergirl-olay-the-depuffer/-/A-15336637",
					"imageLinkGATags": 'data-gae-track=\"event\" data-gae-category=\"destination\" data-gae-action=\"click\" data-gae-label=\"p8_outboundLink_01_img_ageless_depuffer\"',
					"images": {
						"desktop": "./images/phase-8/desktop/alicia-quarles-desktop.jpg",
						"mobile": "./images/phase-8/mobile/alicia-quarles-mobile.jpg"
					},
					"imageAlt": "Alicia Quarles"
				},
				"textColumn": {
					"hed": "Look on the Bright Side",
					"sponsored": "Sponsored",
					"copy": "Hard work shows up (sadly) on your face. Quarles wears <a class=\"split-row-bg-link\" href=\"https:\/\/www.target.com/p/covergirl-olay-the-depuffer/-/A-15336637\" target=\"_blank\" data-gae-track=\"event\" data-gae-category=\"destination\" data-gae-action=\"click\" data-gae-label=\"p8_outboundLink_02_txt_ageless_depuffer\">CoverGirl &#43; Olay Simply Ageless Depuffer<\/a> under her eyes to to reduce the appearance of fatigue, on and off the camera.",
					"shopLink": "https:\/\/www.target.com/p/covergirl-olay-the-depuffer/-/A-15336637",
					"shopLinkGATags": 'data-gae-track=\"event\" data-gae-category=\"destination\" data-gae-action=\"click\" data-gae-label=\"p8_outboundLink_03_shop_target\"',
					"shopLinkText": "Get the Look at Target"
				}
			}
		},
		//Phase 7
		{
			//Video Row
			"video-row" : {
				"video-overlay": {
					"selector": "p7-video-overlay",
					"ga-tags": 'data-gae-track="event" data-gae-category="destination" data-gae-action="click" data-gae-label="p7_vidplay_lauren_maillian"'
				},				
				"charContainer": {
					"name": "Lauren Maillian",
					"title": "Award-Winning Serial Entrepreneur"
				},
				"id": "p7-video",
				//update this
				"videoLink": "https:\/\/player.vimeo.com/video/188178355?api=1&portrait=0",
				"prefix": "video"
				//include the quote only if it's not the 1st video
				//"quote": ""
			},

			//Product Row
			"product-row": {
				"hed": "To Help Her Day Run Smoothly",
				"shop-items": [
					{
						"imageUrl": "./images/phase-7/desktop/product-1.jpg",
						"hed": "Green Caffeine",
						"copy": "Maillian pushes those double-espressos aside in favor of starting her day with a matcha green tea latte. Just one cup of matcha is the equivalent to ten cups of green tea (with none of those coffee jitters)."
					},
					{
						"imageUrl": "./images/phase-7/desktop/product-2.jpg",
						"hed": "Sunrise Salutations",
						"copy": "Experts say that people who work out in the A.M. are more likely to continue with a fitness routine than their night owl counterparts. Maillian works with a personal trainer first thing so she can spend the rest of her day thinking about everything <em>but</em> the gym."
					},
					{
						"imageUrl": "./images/phase-7/desktop/product-3.jpg",
						"hed": "A Back-Up Plan",
						"copy": "There&rsquo;s nothing sadder than the little red battery in your phone&rsquo;s upper corner blinking at six percent, especially in the middle of a client call. It&rsquo;s why Maillian carries a portable charger with her everywhere she goes."
					}					
				]
			},

			//Split Row w/ BG
			"split-row-bg": {
				"backgroundImage": "./images/phase-7/desktop/split-row-bg-img-desktop.jpg",
				"backgroundImageAlt": "",
				"imageColumn": {
					"imageLink": "https:\/\/www.target.com/p/covergirl-olay-simply-ageless-serum-primer-1-oz/-/A-12348215",
					"imageLinkGATags": 'data-gae-track=\"event\" data-gae-category=\"destination\" data-gae-action=\"click\" data-gae-label=\"p7_outboundLink_02_img_ageless_primer\"',
					"images": {
						"desktop": "./images/phase-7/desktop/lauren-maillian-desktop.png",
						"mobile": "./images/phase-7/mobile/lauren-maillian-mobile.jpg"
					},
					"imageAlt": "Lauren Maillian"
				},
				"textColumn": {
					"hed": "It&rsquo;s Prime Time",
					"sponsored": "Sponsored",
					"copy": "As Maillian touts, primer is the &ldquo;foundation before the foundation.&rdquo; <a class=\"split-row-bg-link\" href=\"https:\/\/www.target.com/p/covergirl-olay-simply-ageless-serum-primer-1-oz/-/A-12348215\" target=\"_blank\" data-gae-track=\"event\" data-gae-category=\"destination\" data-gae-action=\"click\" data-gae-label=\"p7_outboundLink_02_txt_ageless_primer\">CoverGirl &#43; Olay Simply Ageless Primer<\/a> helps renew skin's surface over time, creating a canvas for an ageless finish.",
					"shopLink": "https:\/\/www.target.com/p/covergirl-olay-simply-ageless-serum-primer-1-oz/-/A-12348215",
					"shopLinkGATags": 'data-gae-track=\"event\" data-gae-category=\"destination\" data-gae-action=\"click\" data-gae-label=\"p7_outboundLink_03_shop_target\"',
					"shopLinkText": "Get the Look at Target"
				}
			}
		},
		//Phase 6
		{
			//Video Row
			"video-row" : {
				"video-overlay": {
					"selector": "p6-video-overlay",
					"ga-tags": 'data-gae-track="event" data-gae-category="destination" data-gae-action="click" data-gae-label="p6_vidplay_candice_kumai"'
				},
				"charContainer": {
					"name": "Candice Kumai",
					"title": "The Golden Girl of the Wellness World"
				},
				"id": "p6-video",
				"videoLink": "https:\/\/player.vimeo.com/video/181093867?api=1&portrait=0",
				"prefix": "video"
			},

			//Product Row
			"product-row": {
				"hed": "What a Top Chef Snacks On",
				"shop-items": [
					{
						"imageUrl": "./images/phase-6/desktop/product-1.jpg",
						"imageAlt": "An avocado cut in half",
						"hed": "An Avocado A Day",
						"copy": "Kumai&rsquo;s daily mantra? &ldquo;An avocado a day keeps the doctor away.&rdquo; In case you&rsquo;re not on the avo-train, these fruits contain more potassium than bananas and are loaded with heart-healthy fatty acids. Which means, they&rsquo;re good for your body, skin <em>and</em> hair."
					},
					{
						"imageUrl": "./images/phase-6/desktop/product-2.jpg",
						"hed": "Recipes for Success",
						"copy": "Featuring more than 100 recipes, Kumai&rsquo;s very own cookbook <a class=\"cg-shop-item-link-txt\" href=\"http:\/\/amzn.to/2axhRZ7\" target=\"_blank\" data-gae-track=\"event\" data-gae-category=\"destination\" data-gae-action=\"click\" data-gae-label=\"outboundLink_01_clean_green_eats\">Clean Green Eats</a> is the gluten-free gal&rsquo;s bible. The meals are also wildly simple, which means you won&rsquo;t be scouring the shelves to find her ingredients for Chili Lime Shrimp Tostadas or Banana Chocolate Chip Cookie Dough Ice Cream (is your mouth watering yet?)."
					},
					{
						"imageUrl": "./images/phase-6/desktop/product-3.jpg",
						"hed": "The Foolproof Smoothie",
						"copy": "Kumai lives for her <a class=\"cg-shop-item-link-txt\" href=\"http:\/\/www.candicekumai.com/blog/how-to-make-a-clean-green-smoothie-the-right-way/\" target=\"_blank\" data-gae-track=\"event\" data-gae-category=\"destination\" data-gae-action=\"click\" data-gae-label=\"outboundLink_02_clean_green_smoothie\">Clean Green Berry Smoothie</a>. Start with an avocado as your base, then toss in a handful of frozen berries, spinach and unsweetened almond milk. Stick to berries like blueberries and raspberries, which are packed with fiber and naturally help your digestive system."
					}					
				]
			},

			//Split Row w/ BG
			"split-row-bg": {
				"backgroundImage": "./images/phase-6/desktop/split-row-bg-img-desktop.jpg",
				"backgroundImageAlt": "",
				"imageColumn": {
					"imageLink": "https:\/\/www.target.com/p/covergirl-olay-simply-ageless-3-in-1-foundation/-/A-50912663",
					"imageLinkGATags": 'data-gae-track=\"event\" data-gae-category=\"destination\" data-gae-action=\"click\" data-gae-label=\"outboundLink_04_img_liquid_foundation\"',
					"images": {
						"desktop": "./images/phase-6/desktop/candice-kumai-desktop.jpg",
						"mobile": "./images/phase-6/mobile/candice-kumai-mobile.jpg"
					},
					"imageAlt": "Candice Kumai"
				},
				"textColumn": {
					"hed": "Setting the Foundation",
					"sponsored": "Sponsored",
					"copy": "<span class=\"bold-me\">If you look amazing, you&rsquo;ll feel amazing, right?<\/span> Kumai wears <a class=\"split-row-bg-link\" href=\"https:\/\/www.target.com/p/covergirl-olay-simply-ageless-3-in-1-foundation/-/A-50912663\" target=\"_blank\" data-gae-track=\"event\" data-gae-category=\"destination\" data-gae-action=\"click\" data-gae-label=\"outboundLink_05_txt_liquid_foundation\">COVERGIRL + Olay Simply Ageless 3-in-1 Liquid Foundation<\/a>, which she boasts is full of conditioning ingredients and glides right on her skin, keeping wrinkles at bay.",
					"shopLink": "https:\/\/www.target.com/p/covergirl-olay-simply-ageless-3-in-1-foundation/-/A-50912663",
					"shopLinkGATags": 'data-gae-track=\"event\" data-gae-category=\"destination\" data-gae-action=\"click\" data-gae-label=\"outboundLink_03_makeup_tips\"',
					"shopLinkText": "Get the Look at Target"
				}
			}
		}
	]
}

//V1.0 Phase Structure (the phases here are structurally different depending on which row types are being used):
cgV1.context = {
	//Phase 5
	"phase5": {
		//Video Row - Dr. Doris Day
		"video-row" :{
			"video-overlay": {
				"selector": "p5-video-overlay",
				"ga-tags": 'data-gae-track="event" data-gae-category="incontent" data-gae-action="click" data-gae-label="vidplay_05_doris_day"'
			},
			"charContainer": {
				"name": "Dr. Doris Day",
				"title": "Dermatologist"
			},
			"quote": "&ldquo;Ageless, to me, means that you can be your best at any age. I don&rsquo;t say &lsquo;50 is the new 30,&rsquo; I say &lsquo;50 is the new 50.&rsquo;&rdquo;",
			"id": "p5-video",
			"videoLink": "https://player.vimeo.com/video/171992666?api=1&portrait=0",
			"prefix": "video"
		},
		//Vertical Text Row - Gloria Steinem
		"vertical-text-row-1": {
			"charContainer": {
				"name": "Gloria Steinem",
				"title": "Journalist, Social Activist"
			},
			"imageContainer": {
				"images": {
					"desktop": "./images/gsteinem.jpg",
					"mobile": "./images/gsteinem-mobile.jpg"
				},
			},
			"textContainer": {
				"hed": "On finding respect",
				"copy": "&ldquo;Once we give up searching for approval we often find it easier to earn respect.&rdquo;"
			},
			"sharesContainer": {
				"twitter": {
					"class": {
						"desktop": "twitter",
						"mobile": "twitter"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="tweet_15_gsteinem"',
					"popupLink": 'https://twitter.com/share?url=/&counturl=http://www.purewow.com/feature/The-Age-of-Elegance&text=%E2%80%9COnly%20when%20you%20learn%20about%20yourself%20do%20you%20realize%20how%20to%20bring%20out%20the%20best%E2%80%A6%E2%80%9D%20%40GloriaSteinem%20via%20%40PureWow%3A%20http%3A%2F%2Fpwow.me%2F1XBM6kj'
				},
				"pinterest": {
					"class": {
						"desktop": "pinterest",
						"mobile": "pinterest"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="pin_it_15_gsteinem"',
					"popupLink": 'http://www.pinterest.com/pin/create/button/?url=http://www.purewow.com/feature/The-Age-of-Elegance&amp;media=http://staticazcdn12.purewow.com/static/2016/02_18_covergirl/images/pins/gsteinem-pin.jpg&description=Life%20advice%20from%20women%20who%20run%20the%20world%2C%20via%20%40PureWow%20x%20%40CoverGirl'
				}
			},
			"prefix": "vertical"
		},
		//Split Row - Trudie Styler
		"split-row": {
			"charContainer": {
				"name": "Trudie Styler",
				"title": "Actress, Producer, Yogi"
			},
			"imageContainer": {
				"image": "./images/tstyler.jpg",
				"credit": "Michael Loccisano/Getty Images"
			},
			"textContainer": {
				"hed": "On Self Care",
				"copy": "&ldquo;I&rsquo;m in the fortunate position to be able to do whatever I want to enhance my body, my face, myself. Women should really feel empowered&hellip;about whatever they do for themselves.&rdquo;"
			},
			"sharesContainer": {
				"twitter": {
					"class": {
						"desktop": "twitter",
						"mobile": "twitter"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="tweet_16_tstyler"',
					"popupLink": 'https://twitter.com/share?url=/&counturl=http://www.purewow.com/feature/The-Age-of-Elegance&text=%E2%80%9CWomen%20should%20really%20feel%20empowered...about%20whatever%20they%20do%20for%20themselves.%E2%80%9D%20Trudie%20Styler%20via%20%40PureWow%3A%20http%3A%2F%2Fpwow.me%2F1XBM6kj'
				},
				"pinterest": {
					"class": {
						"desktop": "pinterest",
						"mobile": "pinterest"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="pin_it_16_tstyler"',
					"popupLink": 'http://www.pinterest.com/pin/create/button/?url=http://www.purewow.com/feature/The-Age-of-Elegance&amp;media=http://staticazcdn12.purewow.com/static/2016/02_18_covergirl/images/pins/tstyler-pin.jpg&description=Life%20advice%20from%20women%20who%20run%20the%20world%2C%20via%20%40PureWow%20x%20%40CoverGirl'
				}
			},
			"prefix": "split"
		},		
		//Diagonal Text Row - Naomi Wolf
		"diagonal-text-row": {
			"charContainer": {
				"name": "Naomi Wolf",
				"title": "Journalist"
			},
			"imageContainer": {
				"images": {
					"desktop": "./images/nwolf.jpg",
					"mobile" :"./images/nwolf-mobile.jpg"
				},
				"credit": "he Washington Post/Getty Images"
			},
			"textContainer": {
				"hed": "On Growth",
				"copy": "&ldquo;The maturing of a woman who has continued to grow is a beautiful thing to behold.&rdquo;"
			},
			"sharesContainer": {
				"twitter": {
					"class": {
						"desktop": "twitter-white",
						"mobile": "twitter"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="tweet_17_nwolf"',
					"popupLink": 'https://twitter.com/share?url=/&counturl=http://www.purewow.com/feature/The-Age-of-Elegance&text=%E2%80%9CThe%20maturing%20of%20a%20woman%20who%20has%20continued%20to%20grow%20is%20a%20beautiful%20thing%20to%20behold.%E2%80%9D%20%40naomirwolf%20via%20%40PureWow%3A%20http%3A%2F%2Fpwow.me%2F1XBM6kj'
				},
				"pinterest": {
					"class": {
						"desktop": "pinterest-white",
						"mobile": "pinterest"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="pin_it_17_nwolf"',
					"popupLink": 'http://www.pinterest.com/pin/create/button/?url=http://www.purewow.com/feature/The-Age-of-Elegance&amp;media=http://staticazcdn12.purewow.com/static/2016/02_18_covergirl/images/pins/nwolf-pin.jpg&description=Life%20advice%20from%20women%20who%20run%20the%20world%2C%20via%20%40PureWow%20x%20%40CoverGirl'
				}
			},
			"prefix": "diagonal"
		},				
		//Vertical Text Row - Anne Lamott	
		"vertical-text-row-2": {
			"charContainer": {
				"name": "Anne Lamott",
				"title": "Novelist, Teacher, Grandmother"
			},
			"imageContainer": {
				"images": {
					//same watercolor background as the Gloria Steinem row
					"desktop": "./images/gsteinem.jpg",
					"mobile": "./images/gsteinem-mobile.jpg"
				},
			},
			"textContainer": {
				"hed": "On the very best gift",
				"copy": "&ldquo;Age has given me what I was looking for my entire life--it has given me me.&rdquo;"
			},
			"sharesContainer": {
				"twitter": {
					"class": {
						"desktop": "twitter",
						"mobile": "twitter"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="tweet_18_alamott"',
					"popupLink": 'https://twitter.com/share?url=/&counturl=http://www.purewow.com/feature/The-Age-of-Elegance&text=%E2%80%9CAge%20has%20given%20me%20what%20I%20was%20looking%20for%20me%20entire%20life...%E2%80%9D%20%40ANNELAMOTT%20via%20%40PureWow%3A%20http%3A%2F%2Fpwow.me%2F1XBM6kj'
				},
				"pinterest": {
					"class": {
						"desktop": "pinterest",
						"mobile": "pinterest"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="pin_it_18_alamott"',
					"popupLink": 'http://www.pinterest.com/pin/create/button/?url=http://www.purewow.com/feature/The-Age-of-Elegance&amp;media=http://staticazcdn12.purewow.com/static/2016/02_18_covergirl/images/pins/alamott-pin.jpg&description=Life%20advice%20from%20women%20who%20run%20the%20world%2C%20via%20%40PureWow%20x%20%40CoverGirl'
				}
			},
			"prefix": "vertical"
		}			
	},

	//Phase 4
	"phase4": {
		//Video Row - Nicole Feliciano
		"video-row" :{
			"video-overlay": {
				"selector": "p4-video-overlay",
				"ga-tags": 'data-gae-track="event" data-gae-category="incontent" data-gae-action="click" data-gae-label="vidplay_04_nicole_feliciano"'
			},
			"charContainer": {
				"name": "Nicole Feliciano",
				"title": "Blogger, Momtrends"
			},
			"quote": "&ldquo;There&rsquo;s such powerful beauty in being a mother, being in the moment and not worrying about what you look like.&rdquo;",
			"id": "p4-video",
			"videoLink": "https://player.vimeo.com/video/167769127?api=1&portrait=0",
			"prefix": "video"
		},
		//Split Row - Angela Ahrendts
		"split-row": {
			"charContainer": {
				"name": "Angela Ahrendts",
				"title": "Senior V.P., Apple"
			},
			"imageContainer": {
				"image": "./images/angela-ahrendts.jpg",
				"credit": "Simon Dawson, Bloomberg, Getty Images"
			},
			"textContainer": {
				"hed": "On Learning Who You Are",
				"copy": "&ldquo;I learned in University that I am half left-brained and I am half right-brained. Only when you learn about yourself do you realize then how to bring out the best and how to use that throughout your life.&rdquo;"
			},
			"sharesContainer": {
				"twitter": {
					"class": {
						"desktop": "twitter",
						"mobile": "twitter"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="tweet_12_aahrendts"',
					"popupLink": 'https://twitter.com/share?url=/&counturl=http://www.purewow.com/feature/The-Age-of-Elegance&text=%E2%80%9COnly%20when%20you%20learn%20about%20yourself%20do%20you%20realize%20how%20to%20bring%20out%20the%20best%E2%80%A6%E2%80%9D%20%40AngelaAhrendts%20via%20%40PureWow%3A%20http%3A%2F%2Fpwow.me%2F1XBM6kj'
				},
				"pinterest": {
					"class": {
						"desktop": "pinterest",
						"mobile": "pinterest"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="pin_it_12_aahrendts"',
					"popupLink": 'http://www.pinterest.com/pin/create/button/?url=http://www.purewow.com/feature/The-Age-of-Elegance&amp;media=http://staticazcdn12.purewow.com/static/2016/02_18_covergirl/images/pins/angela-ahrendts-pin.jpg&description=Life%20advice%20from%20women%20who%20run%20the%20world%2C%20via%20%40PureWow%20x%20%40CoverGirl'
				}
			},
			"prefix": "split"
		},
		//Diagonal Text Row - Mary Karr
		"diagonal-text-row": {
			"charContainer": {
				"name": "Mary Karr",
				"title": "Poet, Memoirist"
			},
			"imageContainer": {
				"images": {
					"desktop": "./images/mary-karr.jpg",
					"mobile" :"./images/mary-karr-mobile.jpg"
				},
				"credit": "Deborah Feingold, HarperCollins"
			},
			"textContainer": {
				"hed": "On Success",
				"copy": "&ldquo;I was 40 years old before I became an overnight success, and I&rsquo;d been publishing for 20 years.&rdquo;"
			},
			"sharesContainer": {
				"twitter": {
					"class": {
						"desktop": "twitter-white",
						"mobile": "twitter"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="tweet_13_mkarr"',
					"popupLink": 'https://twitter.com/share?url=/&counturl=http://www.purewow.com/feature/The-Age-of-Elegance&text=%E2%80%9CI%20was%2040%20years%20old%20before%20I%20became%20an%20overnight%20success%E2%80%A6%E2%80%9D%20%40marykarrlit%20via%20%40PureWow%3A%20http%3A%2F%2Fpwow.me%2F1XBM6kj'
				},
				"pinterest": {
					"class": {
						"desktop": "pinterest-white",
						"mobile": "pinterest"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="pin_it_13_mkarr"',
					"popupLink": 'http://www.pinterest.com/pin/create/button/?url=http://www.purewow.com/feature/The-Age-of-Elegance&amp;media=http://staticazcdn12.purewow.com/static/2016/02_18_covergirl/images/pins/mary-karr-pin.jpg&description=Life%20advice%20from%20women%20who%20run%20the%20world%2C%20via%20%40PureWow%20x%20%40CoverGirl'
				}
			},
			"prefix": "diagonal"
		},			
		//Vertical Text Row - J. K. Rowling
		"vertical-text-row": {
			"charContainer": {
				"name": "J. K. Rowling",
				"title": "Author"
			},
			"imageContainer": {
				"images": {
					"desktop": "./images/jk-rowling.jpg",
					"mobile": "./images/jk-rowling-mobile.jpg"
				},
			},
			"textContainer": {
				"hed": "On not taking yourself too seriously",
				"copy": "&ldquo;Secretly we&rsquo;re all a little more absurd than we make ourselves out to be.&rdquo;"
			},
			"sharesContainer": {
				"twitter": {
					"class": {
						"desktop": "twitter",
						"mobile": "twitter"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="tweet_14_jkrowling"',
					"popupLink": 'https://twitter.com/share?url=/&counturl=http://www.purewow.com/feature/The-Age-of-Elegance&text=%E2%80%9CSecretly%20we%E2%80%99re%20all%20a%20little%20more%20absurd%20than%20we%20make%20ourselves%20out%20to%20be.%E2%80%9D%20%40jk_rowling%20via%20%40PureWow%3A%20%20http%3A%2F%2Fpwow.me%2F1XBM6kj'
				},
				"pinterest": {
					"class": {
						"desktop": "pinterest",
						"mobile": "pinterest"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="pin_it_14_jkrowling"',
					"popupLink": 'http://www.pinterest.com/pin/create/button/?url=http://www.purewow.com/feature/The-Age-of-Elegance&amp;media=http://staticazcdn12.purewow.com/static/2016/02_18_covergirl/images/pins/jk-rowling-pin.jpg&description=Life%20advice%20from%20women%20who%20run%20the%20world%2C%20via%20%40PureWow%20x%20%40CoverGirl'
				}
			},
			"prefix": "vertical"
		}								
	},

	//Phase 3
	"phase3": {
		//Video Row - Jenna Crandall and Lisa Allen
		"video-row" :{
			"video-overlay": {
				"selector": "p3-video-overlay",
				"ga-tags": 'data-gae-track="event" data-gae-category="incontent" data-gae-action="click" data-gae-label="vidplay_03_crandall_allen"'
			},
			"charContainer": {
				"name": "Jenna Crandall and Lisa Allen",
				"title": "Lifestyle Bloggers, Lunchpails and Lipstick"
			},
			"quote": "&ldquo;Remember that you are worth something to yourself, but you are worth everything to your children.&rdquo;",
			"id": "p3-video",
			"videoLink": "https://player.vimeo.com/video/162971311?api=1&portrait=0",
			"prefix": "video"
		},		
		//Split Row - Indra Nooyi
		"split-row-1": {
			"charContainer": {
				"name": "Indra Nooyi",
				"title": "CEO, Pepsi Co."
			},
			"imageContainer": {
				"image": "./images/indra-nooyi.jpg",
				"credit": "CNBC/Getty Images"
			},
			"textContainer": {
				"hed": "On Remembering Who We Are",
				"copy": "&ldquo;At the end of the day, don&rsquo;t forget that you&rsquo;re a person, don&rsquo;t forget you&rsquo;re a mother, don&rsquo;t forget you&rsquo;re a wife, don&rsquo;t forget you&rsquo;re a daughter.&rdquo;"
			},
			"sharesContainer": {
				"twitter": {
					"class": {
						"desktop": "twitter",
						"mobile": "twitter"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="tweet_09_inooyi"',
					"popupLink": 'https://twitter.com/share?url=/&counturl=http://www.purewow.com/feature/The-Age-of-Elegance&text=%E2%80%9CDon%E2%80%99t%20forget%20that%20you%E2%80%99re%20a%20person...a%20mother...a%20wife.%E2%80%9D%20Advice%20from%20%40IndraNooyi%20via%20%40PureWow%3A%20http%3A%2F%2Fpwow.me%2F1XBM6kj'
				},
				"pinterest": {
					"class": {
						"desktop": "pinterest",
						"mobile": "pinterest"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="pin_it_09_inooyi"',
					"popupLink": 'http://www.pinterest.com/pin/create/button/?url=http://www.purewow.com/feature/The-Age-of-Elegance&amp;media=http://staticazcdn12.purewow.com/static/2016/02_18_covergirl/images/pins/Indra Nooyi.jpg&description=Life%20advice%20from%20women%20who%20run%20the%20world%2C%20via%20%40PureWow%20x%20%40CoverGirl'
				}
			},
			"prefix": "split"
		},
		//Vertical Text Row - Kris Carr
		"vertical-text-row": {
			"charContainer": {
				"name": "Kris Carr",
				"title": "Cancer Survivor, Author"
			},
			"imageContainer": {
				"images": {
					"desktop": "./images/kris-carr.jpg",
					"mobile": "./images/kris-carr-mobile.jpg"
				},
			},
			"textContainer": {
				"hed": "On Treating Yo&rsquo;self",
				"copy": "&ldquo;Your self-worth has nothing to do with your craft or calling, and everything to do with how you treat yourself.&rdquo;"
			},
			"sharesContainer": {
				"twitter": {
					"class": {
						"desktop": "twitter",
						"mobile": "twitter"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="tweet_10_kcarr"',
					"popupLink": 'https://twitter.com/share?url=/&counturl=http://www.purewow.com/feature/The-Age-of-Elegance&text=%E2%80%9CYour%20self%20worth%20has%20everything%20to%20do%20with%20how%20you%20treat%20yourself.%E2%80%9D%20Advice%20from%20%40Kris_Carr%20via%20%40PureWow%3A%20http%3A%2F%2Fpwow.me%2F1XBM6kj'
				},
				"pinterest": {
					"class": {
						"desktop": "pinterest",
						"mobile": "pinterest"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="pin_it_10_kcarr"',
					"popupLink": 'http://www.pinterest.com/pin/create/button/?url=http://www.purewow.com/feature/The-Age-of-Elegance&amp;media=http://staticazcdn12.purewow.com/static/2016/02_18_covergirl/images/pins/Kris Carr.jpg&description=Life%20advice%20from%20women%20who%20run%20the%20world%2C%20via%20%40PureWow%20x%20%40CoverGirl'
				}
			},
			"prefix": "vertical"
		},	
		//Split Row - Alexis Maybank
		"split-row-2": {
			"charContainer": {
				"name": "Alexis Maybank",
				"title": "Co-Founder, Gilt Groupe"
			},
			"imageContainer": {
				"image": "./images/alexis-maybank.jpg",
				"credit": "Jennifer S. Altman/Bloomberg/Getty Images"
			},
			"textContainer": {
				"hed": "On Starting Your Own Company",
				"copy": "&ldquo;While you might have had a bad day or even a bad week&hellip;these are all just experiences along a career path that is a lot longer than you might realize.&rdquo;"
			},
			"sharesContainer": {
				"twitter": {
					"class": {
						"desktop": "twitter",
						"mobile": "twitter"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="tweet_11_amaybank"',
					"popupLink": 'https://twitter.com/share?url=/&counturl=http://www.purewow.com/feature/The-Age-of-Elegance&text=%E2%80%9CWhile%20you%20might%20have%20had%20a%20bad%20day...%E2%80%9D%20Advice%20from%20%40giltfounder%20via%20%40PureWow%3A%20http%3A%2F%2Fpwow.me%2F1XBM6kj'
				},
				"pinterest": {
					"class": {
						"desktop": "pinterest",
						"mobile": "pinterest"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="pin_it_11_amaybank"',
					"popupLink": 'http://www.pinterest.com/pin/create/button/?url=http://www.purewow.com/feature/The-Age-of-Elegance&amp;media=http://staticazcdn12.purewow.com/static/2016/02_18_covergirl/images/pins/alexis maybank.jpg&description=Life%20advice%20from%20women%20who%20run%20the%20world%2C%20via%20%40PureWow%20x%20%40CoverGirl'
				}
			},
			"prefix": "split"
		}			
	},

	//Phase 2
	"phase2": {
		//Video Row - Olivia Trewatha
		"video-row" :{
			"video-overlay": {
				"selector": "ot-video-overlay",
				"ga-tags": 'data-gae-track="event" data-gae-category="incontent" data-gae-action="click" data-gae-label="vidplay_01_otrewatha"'
			},
			"charContainer": {
				"name": "Olivia Trewatha",
				"title": "Lifestyle Blogger, Corporate Catwalk"
			},
			"quote": "&ldquo;Working with a lot of men, even growing up with a lot of boys, I just became more confident over time because I knew that I had to stick up for myself one way or the other.&rdquo;",
			"id": "ot-video",
			"videoLink": "https://player.vimeo.com/video/160916771?api=1&portrait=0",
			"prefix": "video"
		},
		//Vertical Row - Sheryl Sandberg
		"vertical-text-row": {
			"charContainer": {
				"name": "Diane von Furstenberg",
				"title": "Fashion Designer"
			},
			"imageContainer": {
				"images": {
					"desktop": "./images/dvf.jpg",
					"mobile": "./images/dvf-mobile.png"
				},
			},
			"textContainer": {
				"hed": "On the greatest journey",
				"copy": "&ldquo;Your wrinkles reflect the roads you have taken; they form the map of your life. My face reflects the wind and sun and rain and dust from the trips I've taken. My face carries all my memories.&rdquo;"
			},
			"sharesContainer": {
				"twitter": {
					"class": {
						"desktop": "twitter",
						"mobile": "twitter"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="tweet_05_dvf"',
					"popupLink": 'https://twitter.com/share?url=/&counturl=http://www.purewow.com/feature/The-Age-of-Elegance&text=%E2%80%9CYour%20wrinkles%20reflect%20the%20roads%20you%20have%20taken...%E2%80%9D%20Smart%20advice%20from%20%40DVF%20via%20%40PureWow%3A%20http%3A%2F%2Fpwow.me%2F1XBM6kj'
				},
				"pinterest": {
					"class": {
						"desktop": "pinterest",
						"mobile": "pinterest"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="pin_it_05_dvf"',
					"popupLink": 'http://www.pinterest.com/pin/create/button/?url=http://www.purewow.com/feature/The-Age-of-Elegance&amp;media=http://staticazcdn12.purewow.com/static/2016/02_18_covergirl/images/pins/dvf.jpg&description=Life%20advice%20from%20women%20who%20run%20the%20world%2C%20via%20%40PureWow%20x%20%40CoverGirl'
				}
			},
			"prefix": "vertical"
		},
		//Diagonal Text Row - Mae Jemison
		"diagonal-text-row-1": {
			"charContainer": {
				"name": "Mae Jemison",
				"title": "Astronaut"
			},
			"imageContainer": {
				"images": {
					//the desktop image was (in)conveniently misnamed...
					"desktop": "./images/mae-jamison.jpg",
					"mobile" :"./images/mae-jemison-mobile.jpg"
				},
				"credit": "Brendan Hoffman, Getty Images"
			},
			"textContainer": {
				"hed": "On thinking for yourself",
				"copy": "&ldquo;You can hear other people&rsquo;s wisdom, but you&rsquo;ve got to reevaluate the world for yourself.&rdquo;"
			},
			"sharesContainer": {
				"twitter": {
					"class": {
						"desktop": "twitter-white",
						"mobile": "twitter"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="tweet_06_mjemison"',
					"popupLink": 'https://twitter.com/share?url=/&counturl=http://www.purewow.com/feature/The-Age-of-Elegance&text=%E2%80%9C...You%E2%80%99ve%20got%20to%20reevaluate%20the%20world%20for%20yourself.%E2%80%9D%20Smart%20advice%20from%20%40maejemison%20via%20%40PureWow%3A%20http%3A%2F%2Fpwow.me%2F1XBM6kj'
				},
				"pinterest": {
					"class": {
						"desktop": "pinterest-white",
						"mobile": "pinterest"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="pin_it_06_mjemison"',
					"popupLink": 'http://www.pinterest.com/pin/create/button/?url=http://www.purewow.com/feature/The-Age-of-Elegance&media=http://staticazcdn12.purewow.com/static/2016/02_18_covergirl/images/pins/Mae-Jemison.jpg&description=Life%20advice%20from%20women%20who%20run%20the%20world%2C%20via%20%40PureWow%20x%20%40CoverGirl'
				}
			},
			"prefix": "diagonal"
		},		
		//Split Row - Marissa Meyer
		"split-row": {
			"charContainer": {
				"name": "Marissa Mayer",
				"title": "CEO, Yahoo!"
			},
			"imageContainer": {
				"image": "./images/marissa-mayer.jpg",
				"credit": "BC NewsWire, Getty Images"
			},
			"textContainer": {
				"hed": "On taking risks",
				"copy": "&ldquo;I always did something I was a little not ready to do. I think that&rsquo;s how you grow. When you push through those moments, that&rsquo;s when you have a breakthrough.&rdquo;"
			},
			"sharesContainer": {
				"twitter": {
					"class": {
						"desktop": "twitter",
						"mobile": "twitter"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="tweet_07_mmayer"',
					"popupLink": 'https://twitter.com/share?url=/&counturl=http://www.purewow.com/feature/The-Age-of-Elegance&text=%E2%80%9CI%20always%20did%20something%20I%20was%20a%20little%20not%20ready%20to%20do...%E2%80%9D%20Smart%20advice%20from%20%40marissamayer%20via%20%40PureWow%3A%20http%3A%2F%2Fpwow.me%2F1XBM6kj'
				},
				"pinterest": {
					"class": {
						"desktop": "pinterest",
						"mobile": "pinterest"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="pin_it_07_mmayer"',
					"popupLink": 'http://www.pinterest.com/pin/create/button/?url=http://www.purewow.com/feature/The-Age-of-Elegance&amp;media=http://staticazcdn12.purewow.com/static/2016/02_18_covergirl/images/pins/Marissa-Mayer.jpg&description=Life%20advice%20from%20women%20who%20run%20the%20world%2C%20via%20%40PureWow%20x%20%40CoverGirl'
				}
			},
			"prefix": "split"
		},		
		//Diagonal Text Row - Arianna Huffington
		"diagonal-text-row-2": {
			"charContainer": {
				"name": "Arianna Huffington",
				"title": "<span class=\"hidden-sm\">Editor-in-Chief, </span><br class=\"hidden-sm hidden-md hidden-lg\">The Huffington Post"
			},
			"imageContainer": {
				"images": {
					"desktop": "./images/arianna-huffington.jpg",
					"mobile" :"./images/arianna-huffington-mobile.jpg"
				},
				"credit": "Ari Perilstein, Getty Images"
			},
			"textContainer": {
				"hed": "On fearlessness",
				"copy": "&ldquo;Fearlessness is like a muscle. I know from my own life that the more I exercise it the more natural it becomes to not let my fears run me.&rdquo;"
			},
			"sharesContainer": {
				"twitter": {
					"class": {
						"desktop": "twitter-white",
						"mobile": "twitter"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="tweet_08_ahuffington"',
					"popupLink": 'https://twitter.com/share?url=/&counturl=http://www.purewow.com/feature/The-Age-of-Elegance&text=%E2%80%9CFearlessness%20is%20like%20a%20muscle%E2%80%A6%E2%80%9D%20Smart%20advice%20from%20%40ariannahuff%20via%20%40PureWow%3A%20http%3A%2F%2Fpwow.me%2F1XBM6kj'
				},
				"pinterest": {
					"class": {
						"desktop": "pinterest-white",
						"mobile": "pinterest"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="pin_it_08_ahuffington"',
					"popupLink": 'http://www.pinterest.com/pin/create/button/?url=http://www.purewow.com/feature/The-Age-of-Elegance&amp;media=http://staticazcdn12.purewow.com/static/2016/02_18_covergirl/images/pins/arianna-huffington.jpg&description=Life%20advice%20from%20women%20who%20run%20the%20world%2C%20via%20%40PureWow%20x%20%40CoverGirl'
				}
			},
			"prefix": "diagonal"
		}
	},

	//Phase 1
	"phase1": {
		//Video Row - Mary Kate McGrath
		"video-row" :{
			"video-overlay": {
				"selector": "mk-video-overlay",
				"ga-tags": 'data-gae-track="event" data-gae-category="incontent" data-gae-action="click" data-gae-label="vidplay_01_mkmcgrath"'
			},
			"charContainer": {
				"name": "Mary Kate McGrath",
				"title": "Editor-In-Chief, PureWow"
			},
			"quote": "&ldquo;Being &lsquo;ageless&rsquo; means you are of no era, of no time, and that you&rsquo;re really confident in yourself. It&rsquo;s empowering.&rdquo;",
			"id": "mk-video",
			"videoLink": "https://player.vimeo.com/video/155681395?api=1&portrait=0",
			"prefix": "video"
		},
		//Split Row - Abbi Jacobson
		"split-row-1": {
			"charContainer": {
				"name": "Abbi Jacobson",
				"title": "Comedian, Writer, Actress"
			},
			"imageContainer": {
				"image": "./images/abbi-jacobson.jpg",
				"credit": "Valery Hache, Getty Images"
			},
			"textContainer": {
				"hed": "On Life as a twenty-something",
				"copy": "&ldquo;That time [in your 20s] when you&rsquo;re really, really trying to figure shit out&hellip;and not being precious with it. And in that, you&rsquo;ll find your voice.&rdquo;"
			},
			"sharesContainer": {
				"twitter": {
					"class": {
						"desktop": "twitter",
						"mobile": "twitter"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="tweet_01_ajacobson"',
					"popupLink": 'https://twitter.com/share?url=/&counturl=http://www.purewow.com/feature/The-Age-of-Elegance&text=%22That%20time%20when%20you%27re%20really%2C%20really%20trying%20to%20figure%20shit%20out...%22%20Life%20advice%20from%20Abbi%20Jacobson%20via%20%40PureWow%20http%3A%2F%2Fpwow.me%2F1XBM6kj'
				},
				"pinterest": {
					"class": {
						"desktop": "pinterest",
						"mobile": "pinterest"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="pin_it_01_ajacobson"',
					"popupLink": 'http://www.pinterest.com/pin/create/button/?url=http://www.purewow.com/feature/The-Age-of-Elegance&amp;media=http://staticazcdn12.purewow.com/static/2016/02_18_covergirl/images/pins/abbi-jacobson.jpg&description=Life%20advice%20from%20women%20who%20run%20the%20world%2C%20via%20%40PureWow%20x%20%40CoverGirl'
				}
			},
			"prefix": "split"
		},
		//Diagonal Text Row - Elizabeth Holmes
		"diagonal-text-row": {
			"charContainer": {
				"name": "Elizabeth Holmes",
				"title": "CEO, Theranos"
			},
			"imageContainer": {
				"images": {
					"desktop": "./images/elizabeth-holmes.png",
					"mobile" :"./images/elizabeth-holmes-mobile.png"
				},
				"credit": "JP Yim, Getty Images"
			},
			"textContainer": {
				"hed": "On pursuing passion",
				"copy": "&ldquo;A lot of young people have incredible insights, but sometimes they wait before they go give their life to something. What I did was just to start a little earlier.&rdquo;"
			},
			"sharesContainer": {
				"twitter": {
					"class": {
						"desktop": "twitter-white",
						"mobile": "twitter"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="tweet_02_eholmes"',
					"popupLink": 'https://twitter.com/share?url=/&counturl=http://www.purewow.com/feature/The-Age-of-Elegance&text=%22A%20lot%20of%20young%20people%20have%20incredible%20insights...%22%20Ageless%20wisdom%20from%20Elizabeth%20Holmes%20via%20%40PureWow%20http%3A%2F%2Fpwow.me%2F1XBM6kj'
				},
				"pinterest": {
					"class": {
						"desktop": "pinterest-white",
						"mobile": "pinterest"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="pin_it_02_eholmes"',
					"popupLink": 'http://www.pinterest.com/pin/create/button/?url=http://www.purewow.com/feature/The-Age-of-Elegance&amp;media=http://staticazcdn12.purewow.com/static/2016/02_18_covergirl/images/pins/elizabeth-holmes.jpg&description=Life%20advice%20from%20women%20who%20run%20the%20world%2C%20via%20%40PureWow%20x%20%40CoverGirl'
				}
			},
			"prefix": "diagonal"
		},
		//Vertical Row - Sheryl Sandberg
		"vertical-text-row": {
			"charContainer": {
				"name": "Sheryl Sandberg",
				"title": "COO, Facebook"
			},
			"imageContainer": {
				"images": {
					"desktop": "./images/watercolor.jpg",
					"mobile": "./images/watercolor-mobile.png"
				},
			},
			"textContainer": {
				"hed": "On positive thinking",
				"copy": "&ldquo;Women need to shift from thinking &lsquo;I&rsquo;m not ready to do that&rsquo; to thinking &lsquo;I want to do that &ndash; and I&rsquo;ll learn by doing it.&rsquo;&rdquo;"
			},
			"sharesContainer": {
				"twitter": {
					"class": {
						"desktop": "twitter",
						"mobile": "twitter"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="tweet_03_ssandberg"',
					"popupLink": 'https://twitter.com/share?url=/&counturl=http://www.purewow.com/feature/The-Age-of-Elegance&text=%E2%80%9CWe%20need%20to%20shift%20from%20%E2%80%98I%E2%80%99m%20not%20ready%20to%20do%20that%E2%80%99%20to%20%E2%80%98I%20want%20to%20do%20that.%E2%80%99%E2%80%9D%20Sheryl%20Sandberg%E2%80%99s%20advice%20via%20%40PureWow%20http%3A%2F%2Fpwow.me%2F1XBM6kj'
				},
				"pinterest": {
					"class": {
						"desktop": "pinterest",
						"mobile": "pinterest"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="pin_it_03_ssandberg"',
					"popupLink": 'http://www.pinterest.com/pin/create/button/?url=http://www.purewow.com/feature/The-Age-of-Elegance&amp;media=http://staticazcdn12.purewow.com/static/2016/02_18_covergirl/images/pins/sheryl-sandberg.jpg&description=Life%20advice%20from%20women%20who%20run%20the%20world%2C%20via%20%40PureWow%20x%20%40CoverGirl'
				}
			},
			"prefix": "vertical"
		},
		//Split Row - Ava DuVernay
		"split-row-2": {
			"charContainer": {
				"name": "Ava DuVernay",
				"title": "Director"
			},
			"imageContainer": {
				"image": "./images/ava-duvernay.jpg",
				"credit": "Muses &amp; Visionaries",
				"creditLink": "http://magazinemv.com/culture/selma-director-ava-duvernay",
				"creditGATags": 'data-gae-track="event" data-gae-category="incontent" data-gae-action="click" data-gae-label="photo_cred_01_aduvernay"'
			},
			"textContainer": {
				"hed": "On limitations",
				"copy": "&ldquo;Ignore the glass ceiling and do your work. If you&rsquo;re focusing on what you don&rsquo;t have, focusing on the limitations, then you will be limited.&rdquo;"
			},
			"sharesContainer": {
				"twitter": {
					"class": {
						"desktop": "twitter",
						"mobile": "twitter"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="tweet_04_aduvernay"',
					"popupLink": 'https://twitter.com/share?url=/&counturl=http://www.purewow.com/feature/The-Age-of-Elegance&text=%E2%80%9CIgnore%20the%20glass%20ceiling%20and%20do%20your%20work%E2%80%A6%E2%80%9D%20Life%20advice%20from%20Ava%20DuVernay%20%26%20other%20women%20via%20%40PureWow%20http%3A%2F%2Fpwow.me%2F1XBM6kj'
				},
				"pinterest": {
					"class": {
						"desktop": "pinterest",
						"mobile": "pinterest"
					},
					"shareGATags": 'data-gae-track="social" data-gae-category="incontent" data-gae-action="social" data-gae-label="pin_it_04_aduvernay"',
					"popupLink": 'http://www.pinterest.com/pin/create/button/?url=http://www.purewow.com/feature/The-Age-of-Elegance&amp;media=http://staticazcdn12.purewow.com/static/2016/02_18_covergirl/images/pins/Ava-DuVernay.jpg&description=Life%20advice%20from%20women%20who%20run%20the%20world%2C%20via%20%40PureWow%20x%20%40CoverGirl'
				}
			},
			"prefix": "split"
		}
	}
}