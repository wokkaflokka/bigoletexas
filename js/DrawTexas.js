var canvas = document.getElementById('canvas');

if (canvas.width < 800) {
    canvas.width = 860;
}
if (canvas.height < 820) {
    canvas.height = 880;
}

var texas  = canvas.getContext('2d');
texas.strokeStyle = "blue";
texas.beginPath();

var xPoints = new Array("572.451626", "576.531354", "585.339268", "587.368351", "589.799861", "589.402470", "585.037533", "582.858177", "579.941287", "578.555557", "577.169826", "574.565436", "572.768023", "569.500000", "569.515649", "571.342642", "572.347489", "574.910190", "577.037533", "581.729778", "583.000000", "583.000000", "583.000000", "585.468072", "587.560484", "589.296967", "589.397931", "587.852978", "586.010395", "588.084528", "595.399938", "603.908790", "606.433284", "605.667251", "605.355621", "605.415504", "605.800325", "606.198085", "608.873289", "612.000000", "616.325006", "618.152710", "620.555255", "622.235645", "626.110941", "629.167024", "637.996729", "643.268110", "649.761924", "660.321466", "661.379491", "667.316799", "670.609537", "675.514877", "678.621349", "683.443661", "684.904572", "690.669202", "694.277258", "699.138931", "701.472921", "705.726864", "705.890344", "713.982184", "717.608450", "718.810678", "716.715974", "715.129552", "715.140706", "716.956810", "719.085905", "722.000000", "722.000000", "722.000000", "727.040397", "729.985508", "732.642157", "735.000000", "735.000000", "735.000000", "736.237500", "737.750000", "740.171911", "741.278050", "747.021514", "752.110769", "754.994430", "760.151704", "763.786476", "767.319596", "768.003082", "768.806611", "769.379604", "769.624449", "770.003114", "768.535519", "766.885489", "767.515310", "771.784356", "773.723941", "774.378149", "774.954345", "775.454411", "776.508198", "778.340188", "779.803085", "781.000000", "781.000000", "781.000000", "779.783911", "778.297580", "775.862931", "775.583117", "775.473618", "775.364819", "775.069209", "772.653903", "771.169908", "768.615690", "766.977865", "765.340039", "763.994893", "763.988650", "763.982408", "762.744908", "761.238650", "759.191581", "757.443917", "754.317926", "750.906774", "749.862186", "748.651272", "747.166692", "744.937645", "744.432269", "744.154313", "743.268318", "742.463392", "741.658467", "740.625726", "740.168412", "739.402305", "739.087828", "736.168467", "734.425810", "733.000000", "733.000000", "733.000000", "729.077009", "725.750000", "723.962500", "720.092817", "717.150703", "714.208590", "710.952548", "709.915055", "708.877561", "706.076027", "703.689424", "700.038411", "698.822171", "696.021435", "691.542585", "689.086869", "686.253608", "684.400741", "682.956943", "679.689157", "673.290620", "666.079243", "660.000000", "655.314578", "653.698442", "649.087914", "643.675829", "639.877752", "635.098672", "633.314954", "629.225830", "625.124242", "622.200425", "619.000000", "615.775408", "610.907452", "606.774170", "603.276479", "598.516062", "597.500000", "596.468631", "591.702784", "588.080180", "585.570672", "583.840457", "581.580180", "578.254170", "575.805548", "560.500000", "553.164033", "549.397031", "546.359776", "543.231320", "541.720041", "540.175517", "537.004365", "534.234645", "529.475227", "526.776347", "522.868522", "519.297157", "515.967845", "511.786229", "509.474220", "505.555368", "505.292761", "499.587157", "494.176625", "493.265046", "487.733572", "483.358276", "480.150921", "475.847750", "469.246749", "466.751264", "460.689599", "449.626595", "450.451097", "445.835517", "443.450983", "439.025000", "436.000000", "432.975000", "429.916705", "429.203788", "427.907577", "427.132572", "424.541457", "273.229150", "264.126025", "262.593345", "86.182253", "83.969410", "82.183360", "81.898227", "82.491050", "82.895016", "83.160347", "83.080674", "82.935814", "99.320029", "102.664270", "105.098791", "106.547517", "107.989965", "109.079765", "110.415622", "110.958535", "111.501448", "112.444092", "113.053298", "114.418219", "121.795280", "127.689055", "132.507032", "138.103507", "141.596595", "143.352285", "146.137357", "151.754584", "159.493682", "161.238905", "163.752822", "164.448832", "163.226675", "162.640418", "161.861187", "161.495050", "160.849292", "160.996523", "166.409206", "171.077961", "172.154417", "173.001725", "174.406980", "178.046850", "184.769050", "187.921073", "192.165361", "194.200802", "196.236243", "199.386243", "201.200802", "209.570720", "215.660814", "218.936157", "221.084707", "227.565178", "232.000000", "233.375000", "236.339536", "238.587858", "240.836179", "243.895166", "245.385606", "248.421891", "252.705405", "253.628216", "253.947188", "255.703009", "257.530041", "261.176207", "266.000000", "266.000000", "266.000000", "268.770360", "274.113410", "279.516292", "283.942277", "299.404696", "304.302279", "310.347375", "312.838243", "318.190797", "325.600197", "331.022837", "332.935277", "336.411718", "338.748263", "349.140874", "356.000000", "356.000000", "356.000000", "357.061259", "358.358353", "359.655447", "360.986922", "361.317187", "361.647453", "363.273866", "364.931438", "369.388747", "377.222052", "378.552653", "379.440880", "380.585820", "383.600716", "385.745322", "388.946467", "390.714371", "394.966581", "395.605388", "396.396878", "397.144576", "398.799091", "404.000000", "409.866092", "413.782419", "414.519803", "415.331595", "421.052541", "426.123789", "428.710161", "430.236023", "431.453756", "433.756293", "436.515281", "442.713033", "446.817733", "448.049897", "448.508500", "450.401459", "451.016777", "460.765117", "470.500000", "472.243411", "473.350502", "473.989227", "473.993411", "473.998114", "474.691428", "476.415809", "478.149321", "479.020926", "479.501900", "480.083337", "480.648837", "483.768324", "487.670152", "493.197522", "496.619861", "499.004742", "510.979904", "515.183930", "520.401474", "525.784517", "531.842166", "536.001432", "538.756934", "542.477906", "545.240058", "550.200000", "553.500000", "556.800000", "561.728232", "564.451626", "567.175020", "570.775020", "572.451626");

var yPoints = new Array("781.990231", "781.977157", "777.781414", "774.884492", "771.413026", "769.610277", "764.31082", "761.664869", "758.097524", "756.383388", "754.669251", "750.169251", "746.383388", "739.5", "692.5", "689.135641", "687.285243", "683.883003", "681.575107", "676.484623", "673.378947", "666.996953", "661.355881", "649.929315", "645.883036", "642.525049", "638.967469", "635.576667", "631.532637", "630.0", "630.0", "630.0", "628.177804", "622.588987", "620.315393", "617.951443", "617.335766", "616.699388", "616.277551", "616.358177", "616.469702", "616.009904", "614.205923", "612.944181", "611.258893", "610.460838", "608.155082", "605.418158", "599.767875", "590.579993", "589.743562", "585.889701", "583.752409", "581.619709", "580.974808", "579.9737", "579.027027", "573.167778", "569.5005", "563.35", "559.5", "552.482969", "552.360702", "550.144264", "549.150992", "544.923221", "540.530582", "537.203819", "536.995064", "536.023115", "534.883658", "536.961562", "539.619177", "541.972469", "546.0", "546.0", "546.0", "542.955666", "539.525527", "538.766325", "537.167861", "535.973384", "534.060712", "533.877634", "534.438842", "534.936125", "534.627783", "533.034863", "531.912196", "530.319837", "529.496287", "528.528094", "523.327278", "514.779844", "501.560765", "495.832182", "489.391485", "486.279274", "479.778302", "476.824672", "474.141787", "466.778302", "460.387717", "455.452564", "450.921539", "447.303386", "443.727574", "442.97529", "442.223006", "439.852684", "437.707908", "434.194708", "432.882959", "424.469364", "416.109479", "414.702973", "411.053199", "408.81073", "405.782003", "404.322694", "402.863384", "401.181288", "400.584702", "399.988116", "397.025", "394.0", "389.888894", "387.922358", "386.212546", "384.34676", "383.056383", "379.212546", "374.5", "329.5", "324.5", "321.75", "317.471309", "314.991797", "312.512286", "305.087286", "298.491797", "287.442798", "286.111161", "281.554219", "278.83404", "276.02154", "275.304219", "272.875642", "270.000231", "269.990231", "269.984858", "268.859858", "267.490231", "266.120604", "265.0", "265.0", "265.0", "264.477739", "263.83942", "262.862923", "262.942229", "264.33942", "266.573765", "266.430238", "263.768527", "262.027848", "261.613882", "261.886366", "262.419907", "262.28496", "261.517921", "260.926746", "261.198029", "263.349618", "265.875268", "263.937634", "261.499529", "261.510598", "264.003738", "266.504477", "266.503408", "264.0", "261.477687", "261.476199", "263.996262", "266.128805", "266.644022", "265.0", "263.331209", "263.883852", "266.092313", "267.622194", "267.993616", "267.487656", "266.743132", "266.732852", "267.399155", "267.718514", "267.431906", "266.32331", "265.181426", "265.079462", "265.906066", "267.603215", "267.221819", "264.432614", "262.850965", "261.645619", "261.293247", "260.964758", "259.731834", "258.397013", "256.134494", "256.113414", "257.603354", "259.01624", "258.995908", "257.338971", "256.028363", "254.124951", "250.285305", "244.395344", "243.436477", "244.460927", "246.330626", "246.449797", "242.31397", "240.177289", "237.345941", "236.022085", "234.698229", "233.102315", "232.475611", "231.336148", "115.678026", "113.089013", "108.679941", "389.302546", "390.835227", "388.177098", "390.532561", "392.433725", "393.525653", "396.194013", "398.012306", "402.446815", "406.048477", "412.596954", "426.249579", "427.172968", "427.845172", "429.152897", "431.98033", "434.116515", "436.138834", "436.474373", "436.809912", "438.977944", "441.292222", "446.477346", "454.464801", "457.138977", "459.325031", "465.398567", "472.232036", "475.666664", "478.545507", "482.732036", "488.5", "490.5", "493.380911", "496.847698", "500.400967", "502.105435", "505.405652", "507.734781", "511.842685", "512.144829", "517.819462", "522.714164", "524.541258", "529.009096", "536.418977", "542.13255", "547.480493", "549.988129", "553.387692", "555.035076", "556.682461", "558.323124", "558.680995", "560.331727", "564.655776", "571.273338", "575.614309", "581.188492", "582.510216", "582.920011", "584.322857", "585.627649", "586.932442", "588.0", "588.0", "588.0", "584.021943", "580.34517", "579.074283", "577.110601", "575.981434", "573.727979", "566.357494", "563.039811", "558.110002", "554.150059", "551.442531", "548.704683", "547.742527", "545.944509", "545.375002", "543.980634", "542.845912", "540.407542", "540.633937", "543.401543", "544.377613", "545.767292", "546.489717", "549.702962", "556.589884", "563.811366", "565.193471", "568.163821", "570.412142", "572.660464", "575.629534", "577.010076", "578.390617", "580.321276", "581.300428", "583.933425", "594.650667", "599.936475", "603.464957", "605.116242", "607.217023", "608.711386", "610.220959", "610.57163", "611.415073", "612.414037", "619.457914", "626.112062", "628.56636", "630.736341", "633.183857", "636.721272", "640.238333", "644.110299", "650.42205", "653.04067", "654.376185", "656.141176", "659.205936", "665.000902", "667.777356", "670.536491", "672.363833", "673.457093", "675.678623", "684.848344", "685.820226", "695.037721", "704.242492", "706.871246", "708.540543", "711.442427", "714.82193", "718.620672", "721.339664", "724.32193", "727.319986", "730.759442", "736.5", "743.439628", "745.207504", "749.83778", "755.629289", "760.0", "760.0", "760.0", "765.281195", "768.186985", "771.793311", "773.061535", "772.111602", "771.459365", "771.6098", "772.692251", "773.495777", "774.832055", "775.661759", "776.491463", "778.256992", "779.585156", "780.91332", "781.995604", "781.990231");

texas.moveTo(xPoints[0],yPoints[0]);
texas.bezierCurveTo(xPoints[1],yPoints[1],xPoints[2],yPoints[2],xPoints[3],yPoints[3]);
texas.bezierCurveTo(xPoints[4],yPoints[4],xPoints[5],yPoints[5],xPoints[6],yPoints[6]);
texas.bezierCurveTo(xPoints[7],yPoints[7],xPoints[8],yPoints[8],xPoints[9],yPoints[9]);
texas.bezierCurveTo(xPoints[10],yPoints[10],xPoints[11],yPoints[11],xPoints[12],yPoints[12]);
texas.lineTo(xPoints[13],yPoints[13]);
texas.lineTo(xPoints[14],yPoints[14]);
texas.lineTo(xPoints[15],yPoints[15]);
texas.bezierCurveTo(xPoints[16],yPoints[16],xPoints[17],yPoints[17],xPoints[18],yPoints[18]);
texas.bezierCurveTo(xPoints[19],yPoints[19],xPoints[20],yPoints[20],xPoints[21],yPoints[21]);
texas.bezierCurveTo(xPoints[22],yPoints[22],xPoints[23],yPoints[23],xPoints[24],yPoints[24]);
texas.bezierCurveTo(xPoints[25],yPoints[25],xPoints[26],yPoints[26],xPoints[27],yPoints[27]);
texas.bezierCurveTo(xPoints[28],yPoints[28],xPoints[29],yPoints[29],xPoints[30],yPoints[30]);
texas.bezierCurveTo(xPoints[31],yPoints[31],xPoints[32],yPoints[32],xPoints[33],yPoints[33]);
texas.bezierCurveTo(xPoints[34],yPoints[34],xPoints[35],yPoints[35],xPoints[36],yPoints[36]);
texas.bezierCurveTo(xPoints[37],yPoints[37],xPoints[38],yPoints[38],xPoints[39],yPoints[39]);
texas.bezierCurveTo(xPoints[40],yPoints[40],xPoints[41],yPoints[41],xPoints[42],yPoints[42]);
texas.bezierCurveTo(xPoints[43],yPoints[43],xPoints[44],yPoints[44],xPoints[45],yPoints[45]);
texas.bezierCurveTo(xPoints[46],yPoints[46],xPoints[47],yPoints[47],xPoints[48],yPoints[48]);
texas.bezierCurveTo(xPoints[49],yPoints[49],xPoints[50],yPoints[50],xPoints[51],yPoints[51]);
texas.bezierCurveTo(xPoints[52],yPoints[52],xPoints[53],yPoints[53],xPoints[54],yPoints[54]);
texas.bezierCurveTo(xPoints[55],yPoints[55],xPoints[56],yPoints[56],xPoints[57],yPoints[57]);
texas.bezierCurveTo(xPoints[58],yPoints[58],xPoints[59],yPoints[59],xPoints[60],yPoints[60]);
texas.bezierCurveTo(xPoints[61],yPoints[61],xPoints[62],yPoints[62],xPoints[63],yPoints[63]);
texas.bezierCurveTo(xPoints[64],yPoints[64],xPoints[65],yPoints[65],xPoints[66],yPoints[66]);
texas.bezierCurveTo(xPoints[67],yPoints[67],xPoints[68],yPoints[68],xPoints[69],yPoints[69]);
texas.bezierCurveTo(xPoints[70],yPoints[70],xPoints[71],yPoints[71],xPoints[72],yPoints[72]);
texas.bezierCurveTo(xPoints[73],yPoints[73],xPoints[74],yPoints[74],xPoints[75],yPoints[75]);
texas.bezierCurveTo(xPoints[76],yPoints[76],xPoints[77],yPoints[77],xPoints[78],yPoints[78]);
texas.bezierCurveTo(xPoints[79],yPoints[79],xPoints[80],yPoints[80],xPoints[81],yPoints[81]);
texas.bezierCurveTo(xPoints[82],yPoints[82],xPoints[83],yPoints[83],xPoints[84],yPoints[84]);
texas.bezierCurveTo(xPoints[85],yPoints[85],xPoints[86],yPoints[86],xPoints[87],yPoints[87]);
texas.bezierCurveTo(xPoints[88],yPoints[88],xPoints[89],yPoints[89],xPoints[90],yPoints[90]);
texas.bezierCurveTo(xPoints[91],yPoints[91],xPoints[92],yPoints[92],xPoints[93],yPoints[93]);
texas.lineTo(xPoints[94],yPoints[94]);
texas.lineTo(xPoints[95],yPoints[95]);
texas.bezierCurveTo(xPoints[96],yPoints[96],xPoints[97],yPoints[97],xPoints[98],yPoints[98]);
texas.bezierCurveTo(xPoints[99],yPoints[99],xPoints[100],yPoints[100],xPoints[101],yPoints[101]);
texas.bezierCurveTo(xPoints[102],yPoints[102],xPoints[103],yPoints[103],xPoints[104],yPoints[104]);
texas.bezierCurveTo(xPoints[105],yPoints[105],xPoints[106],yPoints[106],xPoints[107],yPoints[107]);
texas.bezierCurveTo(xPoints[108],yPoints[108],xPoints[109],yPoints[109],xPoints[110],yPoints[110]);
texas.bezierCurveTo(xPoints[111],yPoints[111],xPoints[112],yPoints[112],xPoints[113],yPoints[113]);
texas.bezierCurveTo(xPoints[114],yPoints[114],xPoints[115],yPoints[115],xPoints[116],yPoints[116]);
texas.bezierCurveTo(xPoints[117],yPoints[117],xPoints[118],yPoints[118],xPoints[119],yPoints[119]);
texas.bezierCurveTo(xPoints[120],yPoints[120],xPoints[121],yPoints[121],xPoints[122],yPoints[122]);
texas.bezierCurveTo(xPoints[123],yPoints[123],xPoints[124],yPoints[124],xPoints[125],yPoints[125]);
texas.bezierCurveTo(xPoints[126],yPoints[126],xPoints[127],yPoints[127],xPoints[128],yPoints[128]);
texas.bezierCurveTo(xPoints[129],yPoints[129],xPoints[130],yPoints[130],xPoints[131],yPoints[131]);
texas.lineTo(xPoints[132],yPoints[132]);
texas.lineTo(xPoints[133],yPoints[133]);
texas.lineTo(xPoints[134],yPoints[134]);
texas.bezierCurveTo(xPoints[135],yPoints[135],xPoints[136],yPoints[136],xPoints[137],yPoints[137]);
texas.bezierCurveTo(xPoints[138],yPoints[138],xPoints[139],yPoints[139],xPoints[140],yPoints[140]);
texas.bezierCurveTo(xPoints[141],yPoints[141],xPoints[142],yPoints[142],xPoints[143],yPoints[143]);
texas.bezierCurveTo(xPoints[144],yPoints[144],xPoints[145],yPoints[145],xPoints[146],yPoints[146]);
texas.bezierCurveTo(xPoints[147],yPoints[147],xPoints[148],yPoints[148],xPoints[149],yPoints[149]);
texas.bezierCurveTo(xPoints[150],yPoints[150],xPoints[151],yPoints[151],xPoints[152],yPoints[152]);
texas.bezierCurveTo(xPoints[153],yPoints[153],xPoints[154],yPoints[154],xPoints[155],yPoints[155]);
texas.bezierCurveTo(xPoints[156],yPoints[156],xPoints[157],yPoints[157],xPoints[158],yPoints[158]);
texas.bezierCurveTo(xPoints[159],yPoints[159],xPoints[160],yPoints[160],xPoints[161],yPoints[161]);
texas.bezierCurveTo(xPoints[162],yPoints[162],xPoints[163],yPoints[163],xPoints[164],yPoints[164]);
texas.bezierCurveTo(xPoints[165],yPoints[165],xPoints[166],yPoints[166],xPoints[167],yPoints[167]);
texas.bezierCurveTo(xPoints[168],yPoints[168],xPoints[169],yPoints[169],xPoints[170],yPoints[170]);
texas.bezierCurveTo(xPoints[171],yPoints[171],xPoints[172],yPoints[172],xPoints[173],yPoints[173]);
texas.lineTo(xPoints[174],yPoints[174]);
texas.lineTo(xPoints[175],yPoints[175]);
texas.bezierCurveTo(xPoints[176],yPoints[176],xPoints[177],yPoints[177],xPoints[178],yPoints[178]);
texas.bezierCurveTo(xPoints[179],yPoints[179],xPoints[180],yPoints[180],xPoints[181],yPoints[181]);
texas.bezierCurveTo(xPoints[182],yPoints[182],xPoints[183],yPoints[183],xPoints[184],yPoints[184]);
texas.bezierCurveTo(xPoints[185],yPoints[185],xPoints[186],yPoints[186],xPoints[187],yPoints[187]);
texas.bezierCurveTo(xPoints[188],yPoints[188],xPoints[189],yPoints[189],xPoints[190],yPoints[190]);
texas.bezierCurveTo(xPoints[191],yPoints[191],xPoints[192],yPoints[192],xPoints[193],yPoints[193]);
texas.bezierCurveTo(xPoints[194],yPoints[194],xPoints[195],yPoints[195],xPoints[196],yPoints[196]);
texas.bezierCurveTo(xPoints[197],yPoints[197],xPoints[198],yPoints[198],xPoints[199],yPoints[199]);
texas.bezierCurveTo(xPoints[200],yPoints[200],xPoints[201],yPoints[201],xPoints[202],yPoints[202]);
texas.bezierCurveTo(xPoints[203],yPoints[203],xPoints[204],yPoints[204],xPoints[205],yPoints[205]);
texas.bezierCurveTo(xPoints[206],yPoints[206],xPoints[207],yPoints[207],xPoints[208],yPoints[208]);
texas.bezierCurveTo(xPoints[209],yPoints[209],xPoints[210],yPoints[210],xPoints[211],yPoints[211]);
texas.bezierCurveTo(xPoints[212],yPoints[212],xPoints[213],yPoints[213],xPoints[214],yPoints[214]);
texas.bezierCurveTo(xPoints[215],yPoints[215],xPoints[216],yPoints[216],xPoints[217],yPoints[217]);
texas.bezierCurveTo(xPoints[218],yPoints[218],xPoints[219],yPoints[219],xPoints[220],yPoints[220]);
texas.bezierCurveTo(xPoints[221],yPoints[221],xPoints[222],yPoints[222],xPoints[223],yPoints[223]);
texas.bezierCurveTo(xPoints[224],yPoints[224],xPoints[225],yPoints[225],xPoints[226],yPoints[226]);
texas.bezierCurveTo(xPoints[227],yPoints[227],xPoints[228],yPoints[228],xPoints[229],yPoints[229]);
texas.bezierCurveTo(xPoints[230],yPoints[230],xPoints[231],yPoints[231],xPoints[232],yPoints[232]);
texas.lineTo(xPoints[233],yPoints[233]);
texas.lineTo(xPoints[234],yPoints[234]);
texas.lineTo(xPoints[235],yPoints[235]);
texas.lineTo(xPoints[236],yPoints[236]);
texas.lineTo(xPoints[237],yPoints[237]);
texas.lineTo(xPoints[238],yPoints[238]);
texas.lineTo(xPoints[239],yPoints[239]);
texas.lineTo(xPoints[240],yPoints[240]);
texas.bezierCurveTo(xPoints[241],yPoints[241],xPoints[242],yPoints[242],xPoints[243],yPoints[243]);
texas.bezierCurveTo(xPoints[244],yPoints[244],xPoints[245],yPoints[245],xPoints[246],yPoints[246]);
texas.lineTo(xPoints[247],yPoints[247]);
texas.lineTo(xPoints[248],yPoints[248]);
texas.lineTo(xPoints[249],yPoints[249]);
texas.bezierCurveTo(xPoints[250],yPoints[250],xPoints[251],yPoints[251],xPoints[252],yPoints[252]);
texas.bezierCurveTo(xPoints[253],yPoints[253],xPoints[254],yPoints[254],xPoints[255],yPoints[255]);
texas.bezierCurveTo(xPoints[256],yPoints[256],xPoints[257],yPoints[257],xPoints[258],yPoints[258]);
texas.bezierCurveTo(xPoints[259],yPoints[259],xPoints[260],yPoints[260],xPoints[261],yPoints[261]);
texas.bezierCurveTo(xPoints[262],yPoints[262],xPoints[263],yPoints[263],xPoints[264],yPoints[264]);
texas.bezierCurveTo(xPoints[265],yPoints[265],xPoints[266],yPoints[266],xPoints[267],yPoints[267]);
texas.lineTo(xPoints[268],yPoints[268]);
texas.lineTo(xPoints[269],yPoints[269]);
texas.bezierCurveTo(xPoints[270],yPoints[270],xPoints[271],yPoints[271],xPoints[272],yPoints[272]);
texas.bezierCurveTo(xPoints[273],yPoints[273],xPoints[274],yPoints[274],xPoints[275],yPoints[275]);
texas.bezierCurveTo(xPoints[276],yPoints[276],xPoints[277],yPoints[277],xPoints[278],yPoints[278]);
texas.bezierCurveTo(xPoints[279],yPoints[279],xPoints[280],yPoints[280],xPoints[281],yPoints[281]);
texas.bezierCurveTo(xPoints[282],yPoints[282],xPoints[283],yPoints[283],xPoints[284],yPoints[284]);
texas.bezierCurveTo(xPoints[285],yPoints[285],xPoints[286],yPoints[286],xPoints[287],yPoints[287]);
texas.bezierCurveTo(xPoints[288],yPoints[288],xPoints[289],yPoints[289],xPoints[290],yPoints[290]);
texas.bezierCurveTo(xPoints[291],yPoints[291],xPoints[292],yPoints[292],xPoints[293],yPoints[293]);
texas.bezierCurveTo(xPoints[294],yPoints[294],xPoints[295],yPoints[295],xPoints[296],yPoints[296]);
texas.bezierCurveTo(xPoints[297],yPoints[297],xPoints[298],yPoints[298],xPoints[299],yPoints[299]);
texas.bezierCurveTo(xPoints[300],yPoints[300],xPoints[301],yPoints[301],xPoints[302],yPoints[302]);
texas.bezierCurveTo(xPoints[303],yPoints[303],xPoints[304],yPoints[304],xPoints[305],yPoints[305]);
texas.bezierCurveTo(xPoints[306],yPoints[306],xPoints[307],yPoints[307],xPoints[308],yPoints[308]);
texas.bezierCurveTo(xPoints[309],yPoints[309],xPoints[310],yPoints[310],xPoints[311],yPoints[311]);
texas.bezierCurveTo(xPoints[312],yPoints[312],xPoints[313],yPoints[313],xPoints[314],yPoints[314]);
texas.bezierCurveTo(xPoints[315],yPoints[315],xPoints[316],yPoints[316],xPoints[317],yPoints[317]);
texas.bezierCurveTo(xPoints[318],yPoints[318],xPoints[319],yPoints[319],xPoints[320],yPoints[320]);
texas.bezierCurveTo(xPoints[321],yPoints[321],xPoints[322],yPoints[322],xPoints[323],yPoints[323]);
texas.bezierCurveTo(xPoints[324],yPoints[324],xPoints[325],yPoints[325],xPoints[326],yPoints[326]);
texas.bezierCurveTo(xPoints[327],yPoints[327],xPoints[328],yPoints[328],xPoints[329],yPoints[329]);
texas.bezierCurveTo(xPoints[330],yPoints[330],xPoints[331],yPoints[331],xPoints[332],yPoints[332]);
texas.bezierCurveTo(xPoints[333],yPoints[333],xPoints[334],yPoints[334],xPoints[335],yPoints[335]);
texas.bezierCurveTo(xPoints[336],yPoints[336],xPoints[337],yPoints[337],xPoints[338],yPoints[338]);
texas.bezierCurveTo(xPoints[339],yPoints[339],xPoints[340],yPoints[340],xPoints[341],yPoints[341]);
texas.bezierCurveTo(xPoints[342],yPoints[342],xPoints[343],yPoints[343],xPoints[344],yPoints[344]);
texas.bezierCurveTo(xPoints[345],yPoints[345],xPoints[346],yPoints[346],xPoints[347],yPoints[347]);
texas.bezierCurveTo(xPoints[348],yPoints[348],xPoints[349],yPoints[349],xPoints[350],yPoints[350]);
texas.bezierCurveTo(xPoints[351],yPoints[351],xPoints[352],yPoints[352],xPoints[353],yPoints[353]);
texas.bezierCurveTo(xPoints[354],yPoints[354],xPoints[355],yPoints[355],xPoints[356],yPoints[356]);
texas.bezierCurveTo(xPoints[357],yPoints[357],xPoints[358],yPoints[358],xPoints[359],yPoints[359]);
texas.bezierCurveTo(xPoints[360],yPoints[360],xPoints[361],yPoints[361],xPoints[362],yPoints[362]);
texas.bezierCurveTo(xPoints[363],yPoints[363],xPoints[364],yPoints[364],xPoints[365],yPoints[365]);
texas.bezierCurveTo(xPoints[366],yPoints[366],xPoints[367],yPoints[367],xPoints[368],yPoints[368]);
texas.bezierCurveTo(xPoints[369],yPoints[369],xPoints[370],yPoints[370],xPoints[371],yPoints[371]);
texas.lineTo(xPoints[372],yPoints[372]);
texas.lineTo(xPoints[373],yPoints[373]);
texas.bezierCurveTo(xPoints[374],yPoints[374],xPoints[375],yPoints[375],xPoints[376],yPoints[376]);
texas.bezierCurveTo(xPoints[377],yPoints[377],xPoints[378],yPoints[378],xPoints[379],yPoints[379]);
texas.bezierCurveTo(xPoints[380],yPoints[380],xPoints[381],yPoints[381],xPoints[382],yPoints[382]);
texas.bezierCurveTo(xPoints[383],yPoints[383],xPoints[384],yPoints[384],xPoints[385],yPoints[385]);
texas.bezierCurveTo(xPoints[386],yPoints[386],xPoints[387],yPoints[387],xPoints[388],yPoints[388]);
texas.bezierCurveTo(xPoints[389],yPoints[389],xPoints[390],yPoints[390],xPoints[391],yPoints[391]);
texas.bezierCurveTo(xPoints[392],yPoints[392],xPoints[393],yPoints[393],xPoints[394],yPoints[394]);
texas.bezierCurveTo(xPoints[395],yPoints[395],xPoints[396],yPoints[396],xPoints[397],yPoints[397]);
texas.bezierCurveTo(xPoints[398],yPoints[398],xPoints[399],yPoints[399],xPoints[400],yPoints[400]);
texas.bezierCurveTo(xPoints[401],yPoints[401],xPoints[402],yPoints[402],xPoints[403],yPoints[403]);
texas.bezierCurveTo(xPoints[404],yPoints[404],xPoints[405],yPoints[405],xPoints[406],yPoints[406]);
texas.stroke();