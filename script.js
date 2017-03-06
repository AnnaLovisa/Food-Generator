//Foodie Generator - JavaScript 1

//Hämtar ut mitt id till "Ge mig något annat"-knappen
var button = document.getElementById('annanMat');

//Hämtar ut mitt id till checkboxen
var veggie = document.getElementById('checkMe');	


//Alla maträtter samlade i en array döpt till "options"
var options = [

{name: "Kryddstekt lax med avokadosalsa", url: "http://www.ica.se/recept/kryddstekt-lax-med-avokadosalsa-721366/"},
{name: "Torsk och krämig fänkål med saffran och tomat", url: "http://www.ica.se/recept/torsk-och-kramig-fankal-med-saffran-och-tomat-721324/"},
{name: "Halstrad lax med caesarsallad", url: "http://www.ica.se/recept/halstrad-lax-med-caesarsallad-721268/"},
{name: "Lyxig kalops med mormorskokta morötter", url: "http://www.ica.se/recept/lyxig-kalops-med-mormorskokta-morotter-721151/"},	
{name: "Vild kebabpizza", url: "http://www.ica.se/recept/vild-kebabpizza-721129/"},	
{name: "Kyckling- och linsgryta med ingefära och kardemumma", url: "http://www.ica.se/recept/kyckling-och-linsgryta-med-ingefara-och-kardemumma-720796/"},	
{name: "Beef chili sandwich med nachos, salsa och dip", url: "http://www.ica.se/recept/beef-chili-sandwich-med-nachos-salsa-och-dip-720699/"},
{name: "Köttbullar med citrongurka och potatis", url: "http://www.ica.se/recept/kottbullar-med-citrongurka-och-potatis-721318/"},	
{name: "Wokad kyckling med cashewnötter", url: "http://www.ica.se/recept/wokad-kyckling-med-cashewnotter-721078/"},
{name: "Beef chili i tortilla", url: "http://www.ica.se/recept/beef-chili-i-tortilla-720809/"},
{name: "Snabb Texas chili", url: "http://www.ica.se/recept/snabb-texas-chili-721275/"},
{name: "Hot tuna pasta", url: "http://www.ica.se/recept/hot-tuna-pasta-721263/"},
{name: "Flygande Jacob", url: "http://www.ica.se/recept/flygande-jacob-720361/"},
{name: "Krämig tonfiskpasta med tomat", url: "http://www.ica.se/recept/kramig-tonfiskpasta-med-tomat-720223/"},
{name: "Krämig renskavsgryta med persilja", url: "http://www.ica.se/recept/kramig-renskavsgryta-med-persilja-720255/"},
{name: "Torsk i ugn med dill- och citronsås", url: "http://www.ica.se/recept/torsk-i-ugn-med-dill-och-citronsas-719374/"},
{name: "Halstrad tonfisk med avokadohummus", url: "http://www.ica.se/recept/halstrad-tonfisk-med-avokadohummus-719975/"},
{name: "Stekt lax med palsternacksstomp och rödvinsås", url: "http://www.ica.se/recept/stekt-lax-med-palsternacksstomp-och-rodvinsas-720267/"},
{name: "Pastagratäng med rökt lax och spenat", url: "http://www.ica.se/recept/pastagratang-med-rokt-lax-och-spenat-719271/"},
{name: "Oreganostekt kyckling med tzatziki och rostad potatis", url: "http://www.ica.se/recept/oreganostekt-kyckling-med-tzatziki-och-rostad-potatis-719283/"}

];


//Alla vegetariska maträtter samlade i en array döpt till "greenOptions"
var greenOptions = [

{name: "Rödbetsrisotto med hyvlad halloumi och valnötter", url: "http://www.ica.se/recept/rodbetsrisotto-med-hyvlad-halloumi-och-valnotter-720045/"},
{name: "Zucchiniplättar med fetaost och dill", url: "http://www.ica.se/recept/zucchiniplattar-med-fetaost-och-dill-720960/"},
{name: "Veggolasagne med citron och ost", url: "http://www.ica.se/recept/veggolasagne-med-citron-och-ost-720894/"},
{name: "Green garden-pasta", url: "http://www.ica.se/recept/green-garden-pasta-720887/"},	
{name: "Broccolisoppa med fänkål", url: "http://www.ica.se/recept/broccolisoppa-med-fankal-721282/"},	
{name: "Tofuspett med chilimajo och yakitorisås", url: "http://www.ica.se/recept/tofuspett-med-chilimajo-och-yakitorisas-720323/"},	
{name: "Svamplasagne med pesto och ricotta", url: "http://www.ica.se/recept/svamplasagne-med-pesto-och-ricotta-720149/"},	
{name: "Aubergine- och böncurry", url: "http://www.ica.se/recept/aubergine-och-boncurry-719991/"},
{name: "Hoisinglacerad tofu med broccoli och chili", url: "http://www.ica.se/recept/hoisinglacerad-tofu-med-broccoli-och-chili-720171/"},
{name: "Lasagne med halloumi, spenat och pumpakärnor", url: "http://www.ica.se/recept/lasagne-med-halloumi-spenat-och-pumpakarnor-718382/"},
{name: "Pasta med zucchini, svamp, timjan och crème fraiche", url: "http://www.ica.se/recept/pasta-med-zucchini-svamp-timjan-och-creme-fraiche-720734/"},
{name: "Zucchiniplättar med fetaost och dill", url: "http://www.ica.se/recept/zucchiniplattar-med-fetaost-och-dill-720960/"},
{name: "Pumpacurry", url: "http://www.ica.se/recept/pumpacurry-721131/"},
{name: "Grönsakspaj med mozzarella och zucchinisallad", url: "http://www.ica.se/recept/gronsakspaj-med-mozzarella-och-zucchinisallad-719923/"},
{name: "Risotto med sojabönor och gremolata", url: "http://www.ica.se/recept/risotto-med-sojabonor-och-gremolata-721173/"},
{name: "Het linsgryta med kumminstekt vegetarisk pytt och honungskvarg", url: "http://www.ica.se/recept/het-linsgryta-med-kumminstekt-vegetarisk-pytt-och-honungskvarg-720783/"},
{name: "Falafel med hummus och matvetesallad", url: "http://www.ica.se/recept/falafel-med-hummus-och-matvetesallad-721017/"},
{name: "Indisk sötpotatisgryta med kikärtor och chili", url: "http://www.ica.se/recept/indisk-sotpotatisgryta-med-kikartor-och-chili-720789/"},
{name: "Morots- och halloumibiffar", url: "http://www.ica.se/recept/morots-och-halloumibiffar-720975/"}

];


//funktionen som kallas på när man trycker på knappen
function get_random_food(){

	//Om vegetariskt-knappen inte är ifylld körs första blocket:
	if(veggie.checked === false){

	//Samlar den maträtt som tas fram slumpmässigt i en variabel										
	var random = options[Math.floor(Math.random() * options.length)];

	//Ersätter den ursprungliga href till "recept" med random.url	
	document.getElementById('recept').href = random.url;

	//Ersätter den ursprungliga texten till "recept" med random.innerHTML				
	document.getElementById('recept').innerHTML = random.name;			
	}

	//Om vegetariskt-knappen är ifylld körs andra blocket:
	else{

	//Samlar den maträtt som tas fram slumpmässigt i en variabel																			
	var random2 = greenOptions[Math.floor(Math.random() * greenOptions.length)];

	//Ersätter den ursprungliga href till "recept" med random2.url	
	document.getElementById('recept').href = random2.url;

	//Ersätter den ursprungliga texten till "recept" med random2.innerHTML							
	document.getElementById('recept').innerHTML = random2.name;						

	}			
}
get_random_food();











