/***********************************************************************
*   LOCATION FUNCTION
*   PM Sep 2017
*   HN For LabRequisition Feb 2019
************************************************************************/

function setLabLocation(i) {
  var address="";	/* address = lab address */
  var lh="";		/* lh = lab hours */
  
  switch(i) {
    default:
		address="";
		lh="";
		break;
	  
	/* Hospitals */
	case "Sardis":
		address = 'Satellite Lab Sardis \n5-6014 Vedder Rd \nChilliwack, BC \n(604) 824-9627 Fax: (604) 824-9348';
		lh = 'Mon-Fri 8:00-1:00 \nCall lab to confirm tests and availability';
		break;
	case "ChilliwackGeneralHospital":
		address = 'Chilliwack General Hospital \n45600 Menholm Road \nChilliwack, BC \n(604) 795-4141 ext 614108 Fax: (604) 702-2866';
		lh = 'Mon-Fri 8:00-2:00 \nCall lab to confirm tests and availability';
		break;
	case "BurnabyHospital":
		address = 'Burnaby Hospital \n3935 Kincaid St \nBurnaby, BC \n(604) 412-6245 Fax: (604) 431-2806';
		lh = 'Mon-Fri 8:00-1:00 \nCall lab to confirm tests and availability';
		break;
	case "DeltaHospital":
		address = 'Delta Hospital \n5800 Mountain View Blvd \nDelta, BC \n(604) 940-3431 Fax: (604) 946-3903';
		lh = 'Mon-Fri 8:00-1:00 \nCall lab to confirm tests and availability';
		break;
	case "FraserCanyonHospital":
		address = 'Fraser Canyon Hospital \n1275 7 Ave \nHope, BC \n(604) 860-7702 Fax: (604) 860-7715';
		lh = 'Mon-Fri 8:00-1:00 \nCall lab to confirm tests and availability';
		break;
	case "LangleyMemorialHospital":
		address = 'Langley Memorial Hospital \n22051 Fraser Hwy \nLangley, BC \n(604) 533-6403 Fax: (604) 533-6455';
		lh = 'Mon-Fri 8:00-1:00 \nCall lab to confirm tests and availability';
		break;
	case "RidgeMeadowsHospital":
		address = 'Ridge Meadows Hospital \n11666 Laity St \nMaple Ridge, BC \n(604) 463-4111';
		lh = 'Mon-Fri 8:00-1:00 \nCall lab to confirm tests and availability';
		break;
	case "MissionMemorialHospital":
		address = 'Mission Memorial Hospital \n7324 Hurd St \nMission, BC \n(604) 814-5115 Fax: (604) 814-5128';
		lh = 'Mon-Fri 8:00-1:00 \nCall lab to confirm tests and availability';
		break;
	case "RoyalColumbianHospital":
		address = 'Royal Columbian Hospital \n330 E. Columbia St \nNew Westminster, BC \n(604) 520-4300 Fax: (604) 520-4864';
		lh = 'Mon-Fri 7:30-3:00 \nCall lab to confirm tests and availability';
		break;
	case "EagleRidgeHospital":
		address = 'Eagle Ridge Hospital \n475 Guildford Way \nPort Moody, BC \n(604) 469-3143 Fax: (604) 469-5131';
		lh = 'Mon-Fri 8:00-1:00 \nCall lab to confirm tests and availability';
		break;
	case "JimPattisonOutpatient":
		address = 'Jim Pattison Outpatient \n9750 140 St \nSurrey, BC \n(604) 582-4555 Fax: (604) 582-3746';
		lh = 'Mon-Fri 8:00-2:00 \nCall lab to confirm tests and availability';
		break;
	case "SurreyMemorialHospital":
		address = 'Surrey Memorial Hospital \n13750 96 Ave \nSurrey, BC \n(604) 588-3324 Fax: (604) 585-5918';
		lh = 'Mon-Fri 7:30-3:00 \nCall lab to confirm tests and availability';
		break;
	case "PeaceArchHospital":
		address = 'Peace Arch Hospital \n15521 Russell Ave \nWhite Rock, BC \n(604) 535-4500 ext 757623 Fax: (604) 535-4533';
		lh = 'Mon-Fri 8:00-1:00 \nCall lab to confirm tests and availability';
		break;
	case "StPaulsHospital":
		address = 'St. Pauls Hospital \n2nd Fl, Providence Bldg, 1081 Burrard St \nVancouver, BC \n(877) 747-2522 Fax: (604) 806-8342';
		lh = 'Mon-Fri 7:00-6:00, Sat-Sun 10:00-3:00 \nCall lab to confirm tests and availability';
		break;
	case "MtStJosephHospital":
		address = 'Mt St. Joseph Hospital \nGround Fl, 3080 Prince Edward St \nVancouver, BC \n(604) 877-8302 Fax: (604) 877-8108';
		lh = 'Mon-Fri 8:00-6:00, Sat-Sun Closed \nCall lab to confirm tests and availability';
		break;
	case "LionsGateHospital":
		address = 'Lions Gate Hospital \n2nd Fl, 231 15 St E. \nNorth Vancouver, BC \n(604) 984-5755 Fax: (604) 984-5984';
		lh = 'Mon-Fri 9:00-3:00, Sat Closed \nMon-Fri 7:00-9:00am for ChemoRx pt only \nSun 8:00-12:00 for C/S and surgery pt only';
		break;
	case "AbbotsfordRegionalHospital":
		address = 'Abbotsford Regional Hospital \n32900 Marshal Rd \nAbbotsford, BC \n(604) 851-4700 ext 644851';
		lh = 'Mon-Fri 7:30-3:00, Sat-Sun Closed \nCall lab to confirm tests and availability';
		break;

	/* Mobile Lab Services */
	case "LowerMainlandMob":
		address = 'MOBILE LAB: LifeLabs \nLower Mainland \n(604) 939-7352 Fax: (604) 939-4257'; 
		lh = 'Fax request: "Attention Mobile Lab Service"';
		break;
	case "KamloopsMob": 
		address = 'MOBILE LAB: LifeLabs \nKamloops \n(250) 374-1644 ext 3 Fax: (250) 374-5638';
		lh = 'Fax request: "Attention Mobile Lab Service"';
		break;
	case "PrinceGeorgeMob": 
		address = 'MOBILE LAB: LifeLabs \nPrince George \n(250) 562-4191 Fax: (250) 562-7358';
		lh = 'Fax request: "Attention Mobile Lab Service"';
		break;
	case "VictoriaSookeMob": 
		address = 'MOBILE LAB: LifeLabs \nVictoria, Sooke \n(250) 881-3113 Fax: (250) 881-3116';
		lh = 'Fax request: "Attention Mobile Lab Service"';
		break;
	case "NanaimoLantzvilleMob": 
		address = 'MOBILE LAB: LifeLabs \nCentral Nanaimo, Lantzville \nFax: (250) 753-3242';
		lh = 'Fax request: "Attention Mobile Lab Service"';
		break;
	case "SouthNanaimoMob": 
		address = 'MOBILE LAB: LifeLabs \nSouth Nanaimo, Duncan, Mill Bay \nFax: (250) 748-3235';
		lh = 'Fax request: "Attention Mobile Lab Service"';
		break;
	case "ParksvilleEtcMob": 
		address = 'MOBILE LAB: LifeLabs \nParksville, Port Alberni, Qualicum Beach, Nanoose Bay \n(250) 248-2913 Fax: (250) 248-2652';
		lh = 'Fax request: "Attention Mobile Lab Service"';
		break;
	case "CourtenayMob": 
		address = 'MOBILE LAB: LifeLabs \nCourtenay \n(250) 334-4745 Fax: (250) 334-4637';
		lh = 'Fax request: "Attention Mobile Lab Service"';
		break;
	case "CampbellRiverMob": 
		address = 'MOBILE LAB: LifeLabs \nCampbell River \nFax: (250) 287-3202';
		lh = 'Fax request: "Attention Mobile Lab Service"';
		break;
//	case "BCBioMob_ValleyWest":
//		address = 'MOBILE LAB: LifeLabs \nAbbotsford, Aldergrove, Clearbrook, Mission\n(604) 859-5538 Fax: 1(888) 674-0370'; 
//		break;
//	case "BCBioMob_ValleyEast":
//		address = 'MOBILE LAB: LifeLabs \nAgassiz, Chilliwack, Harrison, Sardis, Yarrow\n(604) 792-4614 Fax: 1(888) 674-0370'; 
//		break;
//	case "BCBioMob_FraserSouth":
//		address = 'MOBILE LAB: LifeLabs \nDelta, Langley, Surrey, White Rock\n(604) 531-8941 Fax: 1(888) 674-0370'; 
//		break;
//	case "MDSMob": 
//		address = 'MOBILE LAB: LifeLabs \nLower Mainland \n(604) 431-7206 Fax: 1(888) 674-0370';
//		lh = 'Fax request: "Attention Mobile Lab Service"';
//		break;

	/* Abbotsford */
	case "LifeLabAbbMac":
		address = 'LifeLabs, 103-2151 McCallum Road (Abbotsford) \nAbbotsford, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 6:30-5:30 \nSat-Sun 7:00-12:00 \nHolter available \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabAbbCle":
		address = 'LifeLabs, 207-2825 Clearbrook Rd (Clearbrook) \nAbbotsford, BC\n(604) 431-7206\nFax: 1(888) 674-0370';
//		lh = 'Mon-Fri 7:00-3:00 \nSat-Sun Closed \nhttp://booking.lifelabs.com';
//		lh = 'Temporarily CLOSED';
		lh = 'Check http://booking.lifelabs.com for booking availability';
		break;
	case "LifeLabAbbSim":
		address = 'LifeLabs, 201-32475 Simon Ave (Simon) \nAbbotsford, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:00-5:00 \nSat-Sun 7:00-12:00 \nhttp://booking.lifelabs.com';
		break;

	/* Agassiz */
	case "LifeLabAgassiz":
		address = 'LifeLabs, 1-7069 Cheam Ave (Agassiz) \nAgassiz, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 8:00-12:00 Sat-Sun Closed \nHolter available \nhttp://booking.lifelabs.com';
		break;

	/* Aldergrove */
	case "LifeLabAldergrove":
		address = 'LifeLabs, 610-26310 Fraser Hwy (Aldergrove) \nAldergrove, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:00-3:30 \nSat-Sun Closed \nhttp://booking.lifelabs.com';
		break;

	/* Burnaby */
	case "LifeLabBbySquare":
		address = 'LifeLabs, 104-7885 Sixth St (Burnaby Square) \nBurnaby, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
//		lh = 'Mon-Fri 7:30-4:00 \nSat-Sun Closed \nhttp://booking.lifelabs.com';
//		lh = 'Temporarily CLOSED';
		lh = 'Check http://booking.lifelabs.com for booking availability';
		break;
	case "LifeLabBbyCentralPark":
		address = 'LifeLabs, 210-4250 Kingsway (Central Park)\nBurnaby, BC\n(604) 431-7206\nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:00-5:00 \nSat 7:00-12:00 \nHolter, ECG available \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabBbyHastings":
		address = 'LifeLabs, 324 Gilmore Ave (Hastings) \nBurnaby, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
//		lh = 'Mon-Fri 7:00-6:00 \nSat 7:00-3:00, Sun 8:00-12:00  \nhttp://booking.lifelabs.com';
//		lh = 'Temporarily CLOSED';
		lh = 'Check http://booking.lifelabs.com for booking availability';
		break;
	case "LifeLabBbyKensington":
		address = 'LifeLabs, 203-6542 E. Hastings St (Kensington) \nBurnaby, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:30-4:00 \nSat 7:00-12:00 \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabBbyMetrotown":
		address = 'LifeLabs, 201-4980 Kingsway (Metrotown) \nBurnaby, BC\n(604) 431-7206\nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 6:30-6:00\nSat 7:00-2:00, Sun 7:00-12:00 \nHolter available \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabBbyNorburn":
		address = 'LifeLabs, 103-4012 Hastings St (Norburn)\nBurnaby, BC\n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:30-4:00 \nSat 7:00-12:00 \nhttp://booking.lifelabs.com';
		break;
//	case "BCBioBbyNel":
//		address = 'LifeLabs, 206-6411 Nelson Ave \nBurnaby, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
//		lh = 'Mon-Fri 6:30-3:00 \nSat-Sun Closed \nhttp://booking.lifelabs.com';
//		break;

	/* Chilliwack */
	case "LifeLabChill":
		address = 'LifeLabs, 608-8236 Eagle Landing Parkway \nChilliwack, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 8:00-4:00, Sat 8:00-12:00, Sun Closed \nHolter, ECG available \nhttp://booking.lifelabs.com';
		break;

	/* Coquitlam */
	case "LifeLabCoqAustin": 
		address = 'LifeLabs, 106-1015 Austin Ave (Austin) \nCoquitlam, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
//		lh = 'Mon-Fri 7:00-5:00 \nSat 7:00-2:00, Sun Closed \nHolter available \nhttp://booking.lifelabs.com';
//		lh = 'Temporarily CLOSED';
		lh = 'Check http://booking.lifelabs.com for booking availability';
		break;
	case "LifeLabCoqLansdowne":
		address = 'LifeLabs, 313-1194 Lansdowne Dr (Eagle Ridge) \nCoquitlam, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:00-5:00 \nSat-Sun 7:00-12:00 \nHolter available \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabCoqGordon":
		address = 'LifeLabs, 208-3001 Gordon Ave (Gordon) \nCoquitlam, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:00-5:00 \nSat 7:00-3:00, Sun 8:00-12:00 \nHolter available \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabCoqNorthRd":
		address = 'LifeLabs, Suite R-435 North Rd (Cariboo Centre) \nCoquitlam, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:00-4:30 \nSat-Sun 7:00-12:00 \nHolter available \nhttp://booking.lifelabs.com';
		break;
//	case "LifeLabCoqBur":
//		address = 'LifeLabs, 536 Clarke Road \nCoquitlam, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
//		lh = 'Mon-Fri 7:30-5:00\nSat 7:30-1:00 \nhttp://booking.lifelabs.com';
//		break;

	/* Delta */
	case "LifeLabDel84":
		address = 'LifeLabs, 201-8425 - 120 St (Delta) \nDelta, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 6:30-6:00 \nSat 7:00-2:00, Sun 7:00-12:00 \nHolter available \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabDelHarvest":
		address = 'LifeLabs, 104-4515 Harvest Dr (Ladner) \nDelta, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:00-4:00 \nSat 7:00-1:00, Sun Closed \nHolter available \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabDel63":
		address = 'LifeLabs, 122-6345 - 120 St (Sunwood) \nDelta, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 8:00-4:00 \nSat-Sun Closed \nABPM available \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabDel56":
		address = 'LifeLabs, 114-1077 - 56 St (Tsawwassen) \nDelta, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:00-4:00 \nSat-Sun Closed \nhttp://booking.lifelabs.com';
		break;

	/* Langley */
	case "LifeLabLanBrookswood":
		address = 'LifeLabs, 105-20103 - 40 Ave (Brookswood) \nLangley, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
//		lh = 'Mon-Fri 7:00-3:30 \nSat-Sun Closed \nhttp://booking.lifelabs.com';
//		lh = 'Temporarily CLOSED';
		lh = 'Check http://booking.lifelabs.com for booking availability';
		break;
	case "LifeLabLanDouglas":
		address = 'LifeLabs, 209-5503 - 206 St (Douglas Cres) \nLangley, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 6:30-5:30 \nSat 7:00-12:00, Sun Closed \nHolter available \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabLanWalnutGrove":
		address = 'LifeLabs, 102B-20999 - 88 Ave (Walnut Grove) \nLangley, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:00-5:00 \nSat 7:00-12:00, Sun Closed \nHolter available \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabLanWillowbrook":
		address = 'LifeLabs, 130-19653 Willowbrook Dr (Willowbrook) \nLangley, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:00-3:30 \nSat-Sun 7:00-12:00 \nhttp://booking.lifelabs.com';
		break;

	/* Maple Ridge */
	case "LifeLabMapleRidge":
		address = 'LifeLabs, 101-11743 - 224 St (Maple Ridge)\nMaple Ridge, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 6:30-5:00 \nSat 7:00-12:00 \nHolter available \nhttp://booking.lifelabs.com';
		break;

	/* Mission */
	case "LifeLabMission":
		address = 'LifeLabs, 103-7343 Hurd St (Mission) \nMission, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:30-4:00 \nSat-Sun Closed \nHolter available \nhttp://booking.lifelabs.com';
		break;

	/* New Westminster */
	case "LifeLabNW5Ave":
		address = 'LifeLabs, 508-625 Fifth Ave (Royal City) \nNew Westminster, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 6:30-5:00 \nSat 7:00-2:00, Sun Closed \nHolter available \nhttp://booking.lifelabs.com';
 		break;
	case "LifeLabNWSapperton":
		address = "LifeLabs, 227 Nelson's Crescent (Sapperton) \nNew Westminster, BC \n(604) 431-7206 \nFax: 1(888) 674-0370";
		lh = 'Mon-Fri 8:00-4:00 \nSat-Sun Closed \nHolter available \nhttp://booking.lifelabs.com';
 		break;

	/* North Vancouver */
	case "LifeLabNVanLonsdale":
		address = 'LifeLabs, 215-1916 Lonsdale Ave (Lonsdale) \nNorth Vancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 6:30-5:00 \nSat 6:30-3:00, Sun Closed \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabNVanLynnValley":
		address = 'LifeLabs, 209-1200 Lynn Valley Rd (Lynn Valley) \nNorth Vancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
//		lh = 'Mon-Fri 7:00-3:30 \nSat-Sun Closed \nhttp://booking.lifelabs.com';
//		lh = 'Temporarily CLOSED';
		lh = 'Check http://booking.lifelabs.com for booking availability';
		break;
	case "LifeLabNVanMarineDr":
		address = 'LifeLabs, 102-845 Marine Dr (Marine Drive) \nNorth Vancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 6:30-5:00 \nSat 6:30-2:30, Sun 7:30-11:30 \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabNVanParkgate":
		address = 'LifeLabs, 201-3650 Mt. Seymour Pkwy (Parkgate) \nNorth Vancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:00-3:30 \nSat 7:00-12:30, Sun Closed \nhttp://booking.lifelabs.com';
		break;

	/* Pitt Meadows */
	case "LifeLabPittMeadows":
		address = 'LifeLabs, 102-12195 Harris Rd (Pitt Meadows) \nPitt Meadows, BC \n(604) 431-7206\nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 8:00-4:00 \nSat-Sun Closed \nhttp://booking.lifelabs.com';
		break;

	/* Port Coquitlam */
	case "LifeLabPocoSalisbury":
		address = 'LifeLabs, 115-1465 Salisbury Ave (PoCo) \nPort Coquitlam, BC\n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 8:00-4:00 \nSat-Sun Closed \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabPocoWilson":
		address = 'LifeLabs, 7-2185 Wilson Ave (Wilson) \nPort Coquitlam, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 6:30-5:00 \nSat-Sun 7:00-12:00 \nHolter available \nhttp://booking.lifelabs.com';
		break;

	/* Port Moody */
	case "LifeLabPtMoodyStJohns":
		address = 'LifeLabs, 101-2624 St. Johns St (Port Moody) \nPort Moody, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
//		lh = 'Mon-Fri 7:30-3:30 \nSat-Sun Closed \nhttp://booking.lifelabs.com';
//		lh = 'Temporarily CLOSED';
		lh = 'Check http://booking.lifelabs.com for booking availability';
		break;

	/* Richmond */
	case "LifeLabRichAberdeen":
		address = 'LifeLabs, 1150-4151 Hazelbridge Way (Aberdeen) \nRichmond, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
//		lh = 'Mon-Fri 7:30-3:30 \nSat 7:00-12:00, Sun Closed \nHolter available \nhttp://booking.lifelabs.com';
//		lh = 'Temporarily CLOSED';
		lh = 'Check http://booking.lifelabs.com for booking availability';
		break;
	case "LifeLabRichBuswell":
		address = 'LifeLabs, 170-6451 Buswell St (Buswell) \nRichmond, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:00-5:00 \nSat 7:00-3:00, Sun Closed \nHolter available \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabRichCrestwood":
		address = 'LifeLabs, 107-6051 Gilbert Rd (Crestwood) \nRichmond, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 8:00-3:30 \nSat-Sun Closed \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabRichCessna":
		address = 'LifeLabs, 3688 Cessna Dr (Goodlife Fitness) \nRichmond, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Tue only 8:00-4:00 \nSat-Sun Closed \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabRich2Rd":
		address = 'LifeLabs, 172-6180 Blundell Rd (No. 2 Rd) \nRichmond, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:00-5:00 \nSat 7:00-1:00, Sun Closed \nHolter available \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabRich3Rd":
		address = 'LifeLabs, 200-5791 No. 3 Rd (No. 3 Rd) \nRichmond, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 6:00-5:00 \nSat 6:00-3:00; Sun 7:00-12:00 \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabRichSteveston":
		address = 'LifeLabs, 104-3811 Chatham Rd (Steveston) \nRichmond, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:00-4:00 \nSat-Sun Closed \nhttp://booking.lifelabs.com';
		break;

	/* Surrey */
	case "LifeLabCloverdale":
		address = 'LifeLabs, 102-17760 - 56 Ave (Cloverdale) \nSurrey, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 6:30-5:00 \nSat 7:00-2:00, Sun 7:00-12:00 \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabSurFleetwood":
		address = 'LifeLabs, 204-9014 - 152 St (Fleetwood) \nSurrey, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 6:30-5:00 \nSat 7:00-2:00, Sun 7:00-12:00 \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabSurGuildford":
		address = 'LifeLabs, 19-15300 - 105 Ave (Guildford) \nSurrey, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 6:30-5:00 \nSat 7:00-12:00, Sun Closed \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabSurHazelwood":
		address = 'LifeLabs, 202-16088 - 84 Ave (Hazelwood) \nSurrey, BC\n(604) 431-7206\nFax: 1(888) 674-0370';
//		lh = 'Mon-Fri 7:30-4:00 \nSat-Sun Closed \nHolter available \nhttp://booking.lifelabs.com';
//		lh = 'Temporarily CLOSED';
		lh = 'Check http://booking.lifelabs.com for booking availability';
		break;
	case "LifeLabSurMorganCreek":
		address = 'LifeLabs, 112-15252 - 32 Ave (Morgan Creek) \nSurrey, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:30-4:00 \nSat 7:00-12:00, Sun Closed \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabSurNewton":
		address = 'LifeLabs, 140-7404 King George Blvd (Newton) \nSurrey, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 6:30-5:00 \nSat 7:00-2:00; Sun 7:00-12:00 \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabSurSatnam":
		address = 'LifeLabs, 113-7130 120 St (Satnam) \nSurrey, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:00-4:00 \nSat 7:00-1:00, Sun 8:00-12:00 \nHolter available \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabSurNordel":
		address = 'LifeLabs, 201-12080 Nordel Way (Scott Rd) \nSurrey, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:00-4:30 \nSat 6:00-3:00, Sun Closed \nHolter available \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabSurCentral":
		address = 'LifeLabs, 101-10166 King George Blvd (Surrey Central) \nSurrey, BC \n(604) 431-7206 Fax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:30-4:00 \nSat 6:30-12:00, Sun Closed \nHolter available \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabSurCityCentre":
		address = 'LifeLabs, 103-9639 - 137A Ave (City Centre 2) \nSurrey, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 8:00-3:00 \nSat-Sun Closed \nHolter available \nhttp://booking.lifelabs.com';
		break;
//	case "LifeLabSurCed":
//		address = 'LifeLabs, 103-9648 128 St\nSurrey, BC\n(604) 431-7206\nFax: 1(888) 674-0370';
//		lh = 'Mon-Fri 8:00-4:00\nSat-Sun Closed \nhttp://booking.lifelabs.com';
//		break;
//	case "BCBioSurKG":
//		address = 'LifeLabs, 101-9656 King George Blvd \nSurrey, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
//		lh = 'Mon-Fri 6:30-5:30\nHolter available\nhttp://booking.lifelabs.com';
//		break;

	/* Vancouver */
	case "LifeLabVanWestBroadway":
		address = 'LifeLabs, 200-943 W. Broadway (Broadway) \nVancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 9:00-4:00 \nSat-Sun Closed \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabVanBurrard":
		address = 'LifeLabs, 208-1200 Burrard St (Burrard, St. Pauls) \nVancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 8:00-4:00 \nSat 8:00-1:00, Sun Closed \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabVanChamplainSq":
		address = 'LifeLabs, 340-3150 E. 54 Ave (Champlain Square) \nVancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 8:00-4:00 \nSat-Sun Closed \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabVanCityCentre":
		address = 'LifeLabs, 206-1160 Burrard St (City Centre) \nVancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 9:00-5:00 \nSat-Sun Closed \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabVanCityView":
		address = 'LifeLabs, 2-1530 W. 7 Ave (Cityview) \nVancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 8:00-4:00 \nSat 8:00-1:00, Sun Closed \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabVanCommercial":
		address = 'LifeLabs, 306-1750 E. 10 Ave (Commercial Drive) \nVancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:00-5:00 \nSat 7:00-12:00, Sun Closed \nHolter available \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabVanDiscovery":
		address = 'LifeLabs, 4366 W. 10 Ave (Discovery) \nVancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 8:30-4:30 \nSat 8:00-12:30, Sun Closed \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabVanDunbar":
		address = 'LifeLabs, 112-3540 W. 41 Ave (Dunbar) \nVancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
//		lh = 'Mon-Fri 8:30-5:00 \nSat-Sun Closed \nhttp://booking.lifelabs.com';
//		lh = 'Temporarily CLOSED';
		lh = 'Check http://booking.lifelabs.com for booking availability';
		break;
	case "LifeLabVanEHastings":
		address = 'LifeLabs, 1506 E. Hastings St (East Hastings) \nVancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:30-4:00 \nSat-Sun Closed \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabVanFairmont":
		address = 'LifeLabs, 701-750 W. Broadway (Fairmont) \nVancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:00-5:00 \nSat 7:00-3:00, Sun Closed \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabVanWGeorgia":
		address = 'LifeLabs, 835-777 Hornby St (Georgia) \nVancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:00-3:00 \nSat-Sun Closed \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabVanKerrisdale":
		address = 'LifeLabs, 2061 W. 42 Ave (Kerrisdale) \nVancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 8:00-4:00 \nSat 8:00-1:00, Sun Closed \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabVanKingEdward":
		address = 'LifeLabs, 972 W. King Edward Ave \nVancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:30-3:30 \nSat-Sun Closed \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabVanLaurel":
		address = 'LifeLabs, 104-888 W. 8 Ave (Laurel) \nVancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
//		lh = 'Mon-Fri 8:30-4:00 \nSat-Sun Closed \nhttp://booking.lifelabs.com';
//		lh = 'Temporarily CLOSED';
		lh = 'Check http://booking.lifelabs.com for booking availability';
		break;
	case "LifeLabVanLittleMountain":
		address = 'LifeLabs, 4527 Main St (Little Mountain) \nVancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
//		lh = 'Mon-Fri 8:00-3:30 \nSat-Sun Closed \nhttp://booking.lifelabs.com';
//		lh = 'Temporarily CLOSED';
		lh = 'Check http://booking.lifelabs.com for booking availability';
		break;
	case "LifeLabVanKeefer":
		address = 'LifeLabs, 204-180 Keefer St (Main & Keefer) \nVancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:00-4:00 \nSat 7:00-12:00, Sun Closed \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabVanMarpole":
		address = 'LifeLabs, 8677 Granville St (Marpole) \nVancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 8:00-4:00 \nSat-Sun Closed \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabVanRegent":
		address = 'LifeLabs, 290-2184 W. Broadway (Regent) \nVancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:30-5:00 \nSat-Sun Closed \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabVanSouthill":
		address = 'LifeLabs, 6540 Fraser St (Southill) \nVancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:30-4:30 \nSat 7:30-3:30, Sun Closed \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabVanSunset":
		address = 'LifeLabs, 8207 Ontario St (Sunset) \nVancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:30-3:30 \nSat 7:00-12:00, Sun Closed \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabVan3Pillars":
		address = 'LifeLabs, 407 Gore Ave (3 Pillars) \nVancouver, BC \n(604) 431-7206\nFax: 1(888) 674-0370';
//		lh = 'Mon-Fri 8:00-3:30 \nSat-Sun Closed \nhttp://booking.lifelabs.com';
//		lh = 'Temporarily CLOSED';
		lh = 'Check http://booking.lifelabs.com for booking availability';
		break;
	case "LifeLabVanVictoriaDr":
		address = 'LifeLabs, 5786 Victoria Dr (Victoria Drive) \nVancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 6:00-4:30 \nSat 7:00-3:00; Sun 7:00-12:00 \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabVanWoodridge":
		address = 'LifeLabs, 215-650 W. 41 Ave (Woodridge) \nVancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 6:30-4:30 \nSat 6:30-3:30, Closed Sun \nhttp://booking.lifelabs.com';
		break;
	case "LifeLabVanYaletown":
		address = 'LifeLabs, 136 Davie St (Yaletown) \nVancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:00-3:30 \nSat-Sun Closed \nhttp://booking.lifelabs.com';
		break;
//	case "LifeLabVanBroadwayPlaza":
//		address = 'LifeLabs, 410-1338 W. Broadway\nVancouver, BC\n(604) 431-7206\nFax: 1(888) 674-0370';
//		lh = 'Mon-Fri 8:00-12:00, 1:00-4:00\nSat-Sun Closed\nhttp://booking.lifelabs.com';
//		break;
//	case "LifeLabVanWillow":
//		address = 'LifeLabs, 50-809 W. 41 Ave \nVancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
//		lh = 'Mon-Fri 8:00-1:00\nSat-Sun Closed\nhttp://booking.lifelabs.com';
//		break;
//	case "LifeLabVanHycroft":
//		address = 'LifeLabs, 108-3195 Granville St\nVancouver, BC\n(604) 431-7206\nFax: 1(888) 674-0370';
//		lh = 'Mon-Fri 9:00-12:30/1:30-4:30 \nSat-Sun Closed \nhttp://booking.lifelabs.com';
//		break;

	/* West Vancouver */
	case "LifeLabWVanDundarave":
		address = 'LifeLabs, 115-2419 Bellevue Ave (Dundarave) \nWest Vancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
//		lh = 'Mon-Fri 7:00-3:30 \nSat-Sun Closed \nhttp://booking.lifelabs.com';
//		lh = 'Temporarily CLOSED';
		lh = 'Check http://booking.lifelabs.com for booking availability';
		break;
	case "LifeLabWVanHollyburn":
		address = 'LifeLabs, 109-575 - 16 St (Hollyburn) \nWest Vancouver, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:30-5:00 \nSat 7:00-2:30, Sun Closed \nhttp://booking.lifelabs.com';
		break;

	/* White Rock */
	case "LifeLabWRPeaceArch":
		address = 'LifeLabs, 120-15331 - 16 Ave (Peace Arch) \nWhite Rock, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 7:00-5:00 \nSat 7:00-12:00, Sun Closed \nHolter available \nhttp://booking.lifelabs.com';
		break;
	case "LifelabWhiteRockMartin":
		address = 'LifeLabs, 105-1656 Martin Dr (White Rock) \nWhite Rock, BC \n(604) 431-7206 \nFax: 1(888) 674-0370';
		lh = 'Mon-Fri 6:30-5:00 \nSat 7:00-1:00, Sun Closed \nhttp://booking.lifelabs.com';
		break;
	}

  document.FormName.LabLocation.value = address; 
  document.FormName.LabHours.value = lh; 
}


					