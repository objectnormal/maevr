var Curves = {};
Curves["0"] = function(){
var Curve_v01 = [[new THREE.Vector4(-6.34923235,0.9001993022,-1.032251119,1),
new THREE.Vector4(-6.502587029,0.5432712043,-1.032251119,1),
new THREE.Vector4(-6.789718614,-0.1016597972,-1.032251119,1),
new THREE.Vector4(-7.730953028,-0.8432536158,-1.032251119,1),
new THREE.Vector4(-8.790523861,-1.075852922,-1.032251119,1),
new THREE.Vector4(-9.527741834,-1.309567347,-1.032251119,1),
new THREE.Vector4(-9.876559834,-1.411388504,-1.032251119,1),
],[new THREE.Vector4(-6.238358252,0.9001993022,-0.8402115276,1),
new THREE.Vector4(-6.315035588,0.5432712233,-0.7074024647,1),
new THREE.Vector4(-6.458601366,-0.1016597276,-0.4587392066,1),
new THREE.Vector4(-6.929218523,-0.8432535546,0.3563936557,1),
new THREE.Vector4(-7.459003978,-1.075852919,1.274008808,1),
new THREE.Vector4(-7.827612985,-1.309567341,1.912458252,1),
new THREE.Vector4(-8.002021994,-1.411388504,2.214543473,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["0"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["0"].divisions = "|PeaksFrozen|_17_5_v01";
Curves["1"] = function(){
var Curve_v01 = [[new THREE.Vector4(0.9806153683,1.006729106,-0.3447777466,1),
new THREE.Vector4(0.8272606894,0.6668400667,-0.3447777466,1),
new THREE.Vector4(0.5401291048,0.0526968275,-0.3447777466,1),
new THREE.Vector4(-0.4011053098,-0.6534947324,-0.3447777466,1),
new THREE.Vector4(-1.460676142,-0.8749901965,-0.3447777466,1),
new THREE.Vector4(-2.197894115,-1.097547545,-0.3447777466,1),
new THREE.Vector4(-2.546712115,-1.194507956,-0.3447777466,1),
],[new THREE.Vector4(1.091489466,1.006729106,-0.1527381551,1),
new THREE.Vector4(1.014812131,0.6668400849,-0.01992909224,1),
new THREE.Vector4(0.8712463526,0.05269689383,0.2287341659,1),
new THREE.Vector4(0.4006291953,-0.653494674,1.043867028,1),
new THREE.Vector4(-0.1291562591,-0.8749901934,1.96148218,1),
new THREE.Vector4(-0.4977652658,-1.09754754,2.599931625,1),
new THREE.Vector4(-0.6721742752,-1.194507956,2.902016845,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["1"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["1"].divisions = "|PeaksFrozen|_17_5_v02";
Curves["2"] = function(){
var Curve_v01 = [[new THREE.Vector4(-1.300050951,0.7405583547,-4.420768603,1),
new THREE.Vector4(-1.417855678,0.4486867802,-4.420768603,1),
new THREE.Vector4(-1.638425785,-0.07869402275,-4.420768603,1),
new THREE.Vector4(-2.361467716,-0.6851191172,-4.420768603,1),
new THREE.Vector4(-3.175413879,-0.8753230441,-4.420768603,1),
new THREE.Vector4(-3.741733489,-1.066438839,-4.420768603,1),
new THREE.Vector4(-4.00969016,-1.14970127,-4.420768603,1),
],[new THREE.Vector4(-1.214879159,0.7405583547,-4.273246716,1),
new THREE.Vector4(-1.273781519,0.4486867957,-4.171224818,1),
new THREE.Vector4(-1.384066562,-0.0786939658,-3.980205493,1),
new THREE.Vector4(-1.745587489,-0.6851190671,-3.354032853,1),
new THREE.Vector4(-2.1525606,-0.8753230414,-2.64913488,1),
new THREE.Vector4(-2.435720421,-1.066438834,-2.158687748,1),
new THREE.Vector4(-2.569698763,-1.14970127,-1.926630486,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["2"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["2"].divisions = "|PeaksFrozen|_17_5_v03";
Curves["3"] = function(){
var Curve_v01 = [[new THREE.Vector4(7.760479016,0.96921945,-5.188985371,1),
new THREE.Vector4(7.579994111,0.5919676454,-5.188985371,1),
new THREE.Vector4(7.242065609,-0.08968612625,-5.188985371,1),
new THREE.Vector4(6.134315878,-0.8735067556,-5.188985371,1),
new THREE.Vector4(4.88729464,-1.119350411,-5.188985371,1),
new THREE.Vector4(4.019654232,-1.366372679,-5.188985371,1),
new THREE.Vector4(3.60912627,-1.473991595,-5.188985371,1),
],[new THREE.Vector4(7.890968032,0.96921945,-4.962971741,1),
new THREE.Vector4(7.800725584,0.5919676655,-4.806667211,1),
new THREE.Vector4(7.631761349,-0.08968605263,-4.51401253,1),
new THREE.Vector4(7.077886543,-0.8735066909,-3.554673182,1),
new THREE.Vector4(6.454375879,-1.119350407,-2.474721236,1),
new THREE.Vector4(6.020555651,-1.366372673,-1.723322658,1),
new THREE.Vector4(5.815291659,-1.473991595,-1.367795048,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["3"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["3"].divisions = "|PeaksFrozen|_17_5_v04";
Curves["4"] = function(){
var Curve_v01 = [[new THREE.Vector4(14.21363962,-0.261138222,-9.571815686,1),
new THREE.Vector4(13.99471918,-0.5507778774,-9.571815686,1),
new THREE.Vector4(13.58482642,-1.07412584,-9.571815686,1),
new THREE.Vector4(12.24117358,-1.675913649,-9.571815686,1),
new THREE.Vector4(10.72859038,-1.864663102,-9.571815686,1),
new THREE.Vector4(9.676179827,-2.054317449,-9.571815686,1),
new THREE.Vector4(9.178227042,-2.136943179,-9.571815686,1),
],[new THREE.Vector4(14.37191719,-0.261138222,-9.297670861,1),
new THREE.Vector4(14.26245698,-0.5507778619,-9.108080178,1),
new THREE.Vector4(14.05751062,-1.074125784,-8.75310262,1),
new THREE.Vector4(13.38568427,-1.6759136,-7.589465196,1),
new THREE.Vector4(12.62939261,-1.864663099,-6.279529869,1),
new THREE.Vector4(12.10318731,-2.054317444,-5.368115667,1),
new THREE.Vector4(11.8542109,-2.136943179,-4.936875945,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["4"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["4"].divisions = "|PeaksFrozen|_17_5_v05";
Curves["5"] = function(){
var Curve_v01 = [[new THREE.Vector4(3.086967626,0.01636635083,-10.07993922,1),
new THREE.Vector4(2.861641266,-0.2644899009,-10.07993922,1),
new THREE.Vector4(2.439754464,-0.7719671905,-10.07993922,1),
new THREE.Vector4(1.056784433,-1.355505616,-10.07993922,1),
new THREE.Vector4(-0.5000590958,-1.538531188,-10.07993922,1),
new THREE.Vector4(-1.583264669,-1.722434214,-10.07993922,1),
new THREE.Vector4(-2.095788258,-1.802554296,-10.07993922,1),
],[new THREE.Vector4(3.249876624,0.01636635083,-9.797772532,1),
new THREE.Vector4(3.13721345,-0.2644898859,-9.602634157,1),
new THREE.Vector4(2.926270069,-0.7719671357,-9.237269452,1),
new THREE.Vector4(2.234785127,-1.355505568,-8.039582348,1),
new THREE.Vector4(1.456363306,-1.538531185,-6.691316458,1),
new THREE.Vector4(0.91476049,-1.72243421,-5.753232985,1),
new THREE.Vector4(0.6584986817,-1.802554296,-5.309374579,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["5"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["5"].divisions = "|PeaksFrozen|_17_5_v06";
Curves["6"] = function(){
var Curve_v01 = [[new THREE.Vector4(-5.281079831,0.3972366201,-11.45836431,1),
new THREE.Vector4(-5.478220134,0.0264408957,-11.45836431,1),
new THREE.Vector4(-5.847333147,-0.6435474276,-11.45836431,1),
new THREE.Vector4(-7.057307562,-1.413954181,-11.45836431,1),
new THREE.Vector4(-8.41940565,-1.655590603,-11.45836431,1),
new THREE.Vector4(-9.367113119,-1.898385468,-11.45836431,1),
new THREE.Vector4(-9.815525171,-2.004162653,-11.45836431,1),
],[new THREE.Vector4(-5.138549108,0.3972366201,-11.21149383,1),
new THREE.Vector4(-5.237119254,0.0264409155,-11.0407653,1),
new THREE.Vector4(-5.421675743,-0.6435473553,-10.72110404,1),
new THREE.Vector4(-6.026662886,-1.413954118,-9.673235521,1),
new THREE.Vector4(-6.707711979,-1.655590599,-8.49362411,1),
new THREE.Vector4(-7.18156574,-1.898385462,-7.672885429,1),
new THREE.Vector4(-7.405771778,-2.004162653,-7.284549237,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["6"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["6"].divisions = "|PeaksFrozen|_17_5_v07";
Curves["7"] = function(){
var Curve_v01 = [[new THREE.Vector4(0.2296227131,-0.02760448381,-16.58073278,1),
new THREE.Vector4(0.01326464345,-0.2961805143,-16.58073278,1),
new THREE.Vector4(-0.391830498,-0.7814687539,-16.58073278,1),
new THREE.Vector4(-1.71975647,-1.339492415,-16.58073278,1),
new THREE.Vector4(-3.21463554,-1.514515337,-16.58073278,1),
new THREE.Vector4(-4.25472808,-1.690377346,-16.58073278,1),
new THREE.Vector4(-4.746852544,-1.766994239,-16.58073278,1),
],[new THREE.Vector4(0.3860477144,-0.02760448381,-16.30979671,1),
new THREE.Vector4(0.2778686854,-0.2961804999,-16.1224251,1),
new THREE.Vector4(0.07532113399,-0.7814687015,-15.7716024,1),
new THREE.Vector4(-0.5886417812,-1.339492369,-14.62158485,1),
new THREE.Vector4(-1.33608137,-1.514515334,-13.32698175,1),
new THREE.Vector4(-1.856127669,-1.690377342,-12.42623525,1),
new THREE.Vector4(-2.102189914,-1.766994239,-12.000043,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["7"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["7"].divisions = "|PeaksFrozen|_17_5_v08";
Curves["8"] = function(){
var Curve_v01 = [[new THREE.Vector4(7.951168699,0.4582326618,-17.47012552,1),
new THREE.Vector4(7.73481063,0.06067396484,-17.47012552,1),
new THREE.Vector4(7.329715488,-0.6576721952,-17.47012552,1),
new THREE.Vector4(6.001789517,-1.4836847,-17.47012552,1),
new THREE.Vector4(4.506910446,-1.742761746,-17.47012552,1),
new THREE.Vector4(3.466817906,-2.003080848,-17.47012552,1),
new THREE.Vector4(2.974693443,-2.116492727,-17.47012552,1),
],[new THREE.Vector4(8.107593701,0.4582326618,-17.19918944,1),
new THREE.Vector4(7.999414672,0.06067398607,-17.01181783,1),
new THREE.Vector4(7.79686712,-0.6576721176,-16.66099513,1),
new THREE.Vector4(7.132904205,-1.483684632,-15.51097758,1),
new THREE.Vector4(6.385464616,-1.742761742,-14.21637448,1),
new THREE.Vector4(5.865418317,-2.003080842,-13.31562798,1),
new THREE.Vector4(5.619356072,-2.116492727,-12.88943574,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["8"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["8"].divisions = "|PeaksFrozen|_17_5_v09";
Curves["9"] = function(){
var Curve_v01 = [[new THREE.Vector4(-3.899278577,0.589764401,-24.63151995,1),
new THREE.Vector4(-4.259129303,0.1420670622,-24.63151995,1),
new THREE.Vector4(-4.932891003,-0.6668742758,-24.63151995,1),
new THREE.Vector4(-7.141521936,-1.597060442,-24.63151995,1),
new THREE.Vector4(-9.627832338,-1.888811333,-24.63151995,1),
new THREE.Vector4(-11.35773341,-2.181960924,-24.63151995,1),
new THREE.Vector4(-12.17624388,-2.309675893,-24.63151995,1),
],[new THREE.Vector4(-3.639109634,0.589764401,-24.18089408,1),
new THREE.Vector4(-3.819034988,0.1420670861,-23.86925417,1),
new THREE.Vector4(-4.155915805,-0.6668741885,-23.28575939,1),
new THREE.Vector4(-5.260231154,-1.597060365,-21.37302902,1),
new THREE.Vector4(-6.503386445,-1.888811329,-19.2198213,1),
new THREE.Vector4(-7.368337027,-2.181960917,-17.72168314,1),
new THREE.Vector4(-7.777592284,-2.309675893,-17.01283235,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["9"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["9"].divisions = "|PeaksFrozen|_17_5_v10";
Curves["10"] = function(){
var Curve_v01 = [[new THREE.Vector4(-15.20526998,0.1326870093,-26.91996222,1),
new THREE.Vector4(-15.56512071,-0.2456911036,-26.91996222,1),
new THREE.Vector4(-16.23888241,-0.9293799941,-26.91996222,1),
new THREE.Vector4(-18.44751334,-1.715540768,-26.91996222,1),
new THREE.Vector4(-20.93382374,-1.962118404,-26.91996222,1),
new THREE.Vector4(-22.66372481,-2.209878172,-26.91996222,1),
new THREE.Vector4(-23.48223528,-2.317818391,-26.91996222,1),
],[new THREE.Vector4(-14.94510104,0.1326870093,-26.46933635,1),
new THREE.Vector4(-15.12502639,-0.2456910834,-26.15769644,1),
new THREE.Vector4(-15.46190721,-0.9293799203,-25.57420167,1),
new THREE.Vector4(-16.56622256,-1.715540703,-23.66147129,1),
new THREE.Vector4(-17.80937785,-1.9621184,-21.50826357,1),
new THREE.Vector4(-18.67432843,-2.209878167,-20.01012541,1),
new THREE.Vector4(-19.08358369,-2.317818391,-19.30127462,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["10"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["10"].divisions = "|PeaksFrozen|_17_5_v11";
Curves["11"] = function(){
var Curve_v01 = [[new THREE.Vector4(-15.72852774,-0.6453333907,-37.49762262,1),
new THREE.Vector4(-16.08615384,-1.132427853,-37.49762262,1),
new THREE.Vector4(-16.75575029,-2.012555591,-37.49762262,1),
new THREE.Vector4(-18.9507273,-3.024597637,-37.49762262,1),
new THREE.Vector4(-21.42166713,-3.342022449,-37.49762262,1),
new THREE.Vector4(-23.14087382,-3.660969045,-37.49762262,1),
new THREE.Vector4(-23.9543242,-3.799922862,-37.49762262,1),
],[new THREE.Vector4(-15.46996718,-0.6453333907,-37.04978254,1),
new THREE.Vector4(-15.64878022,-1.132427827,-36.74006922,1),
new THREE.Vector4(-15.98357842,-2.012555496,-36.16018166,1),
new THREE.Vector4(-17.0810668,-3.024597554,-34.25927593,1),
new THREE.Vector4(-18.31653681,-3.342022444,-32.11937951,1),
new THREE.Vector4(-19.1761402,-3.660969038,-30.63050296,1),
new THREE.Vector4(-19.58286541,-3.799922862,-29.92603433,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["11"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["11"].divisions = "|PeaksFrozen|_17_5_v12";
Curves["12"] = function(){
var Curve_v01 = [[new THREE.Vector4(-16.8008077,0.4208475236,-47.26728447,1),
new THREE.Vector4(-17.1584338,-0.06747019271,-47.26728447,1),
new THREE.Vector4(-17.82803025,-0.94980822,-47.26728447,1),
new THREE.Vector4(-20.02300726,-1.964391835,-47.26728447,1),
new THREE.Vector4(-22.49394709,-2.282613804,-47.26728447,1),
new THREE.Vector4(-24.21315378,-2.60236138,-47.26728447,1),
new THREE.Vector4(-25.02660416,-2.741664155,-47.26728447,1),
],[new THREE.Vector4(-16.54224714,0.4208475236,-46.8194444,1),
new THREE.Vector4(-16.72106018,-0.06747016663,-46.50973108,1),
new THREE.Vector4(-17.05585838,-0.9498081247,-45.92984351,1),
new THREE.Vector4(-18.15334676,-1.964391751,-44.02893778,1),
new THREE.Vector4(-19.38881677,-2.2826138,-41.88904136,1),
new THREE.Vector4(-20.24842016,-2.602361372,-40.40016481,1),
new THREE.Vector4(-20.65514537,-2.741664155,-39.69569619,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["12"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["12"].divisions = "|PeaksFrozen|_17_5_v13";
Curves["13"] = function(){
var Curve_v01 = [[new THREE.Vector4(-34.2551426,-0.7714105649,-42.7398802,1),
new THREE.Vector4(-34.6127687,-1.259322577,-42.7398802,1),
new THREE.Vector4(-35.28236515,-2.140927541,-42.7398802,1),
new THREE.Vector4(-37.47734216,-3.154668221,-42.7398802,1),
new THREE.Vector4(-39.94828199,-3.472625805,-42.7398802,1),
new THREE.Vector4(-41.66748868,-3.792107729,-42.7398802,1),
new THREE.Vector4(-42.48093906,-3.931294769,-42.7398802,1),
],[new THREE.Vector4(-33.99658204,-0.7714105649,-42.29204013,1),
new THREE.Vector4(-34.17539508,-1.259322551,-41.9823268,1),
new THREE.Vector4(-34.51019328,-2.140927446,-41.40243924,1),
new THREE.Vector4(-35.60768166,-3.154668137,-39.50153351,1),
new THREE.Vector4(-36.84315167,-3.472625801,-37.36163709,1),
new THREE.Vector4(-37.70275506,-3.792107721,-35.87276054,1),
new THREE.Vector4(-38.10948027,-3.931294769,-35.16829191,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["13"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["13"].divisions = "|PeaksFrozen|_17_5_v14";
Curves["14"] = function(){
var Curve_v01 = [[new THREE.Vector4(6.551066979,0.4908121903,-37.14019596,1),
new THREE.Vector4(6.193440878,0.001271226151,-37.14019596,1),
new THREE.Vector4(5.523844425,-0.8832770795,-37.14019596,1),
new THREE.Vector4(3.328867421,-1.900402252,-37.14019596,1),
new THREE.Vector4(0.8579275842,-2.219421375,-37.14019596,1),
new THREE.Vector4(-0.8612791012,-2.539969926,-37.14019596,1),
new THREE.Vector4(-1.674729478,-2.679621658,-37.14019596,1),
],[new THREE.Vector4(6.809627537,0.4908121903,-36.69235589,1),
new THREE.Vector4(6.630814496,0.001271252292,-36.38264257,1),
new THREE.Vector4(6.296016302,-0.883276984,-35.802755,1),
new THREE.Vector4(5.198527917,-1.900402167,-33.90184928,1),
new THREE.Vector4(3.963057909,-2.21942137,-31.76195285,1),
new THREE.Vector4(3.103454519,-2.539969918,-30.2730763,1),
new THREE.Vector4(2.696729309,-2.679621658,-29.56860768,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["14"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["14"].divisions = "|PeaksFrozen|_17_5_v15";
Curves["15"] = function(){
var Curve_v01 = [[new THREE.Vector4(13.58045783,-0.8457228882,-47.32685558,1),
new THREE.Vector4(13.22283172,-1.322210059,-47.32685558,1),
new THREE.Vector4(12.55323527,-2.183171553,-47.32685558,1),
new THREE.Vector4(10.35825827,-3.173174701,-47.32685558,1),
new THREE.Vector4(7.887318431,-3.48368706,-47.32685558,1),
new THREE.Vector4(6.168111746,-3.795688064,-47.32685558,1),
new THREE.Vector4(5.35466137,-3.93161593,-47.32685558,1),
],[new THREE.Vector4(13.83901838,-0.8457228882,-46.87901551,1),
new THREE.Vector4(13.66020534,-1.322210034,-46.56930218,1),
new THREE.Vector4(13.32540715,-2.18317146,-45.98941462,1),
new THREE.Vector4(12.22791876,-3.173174619,-44.08850889,1),
new THREE.Vector4(10.99244876,-3.483687055,-41.94861247,1),
new THREE.Vector4(10.13284537,-3.795688056,-40.45973592,1),
new THREE.Vector4(9.726120156,-3.93161593,-39.75526729,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["15"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["15"].divisions = "|PeaksFrozen|_17_5_v16";
Curves["16"] = function(){
var Curve_v01 = [[new THREE.Vector4(29.60508611,0.4896152361,-44.16958681,1),
new THREE.Vector4(29.24746001,-0.008662611377,-44.16958681,1),
new THREE.Vector4(28.57786356,-0.9089975332,-44.16958681,1),
new THREE.Vector4(26.38288655,-1.944275433,-44.16958681,1),
new THREE.Vector4(23.91194672,-2.26898812,-44.16958681,1),
new THREE.Vector4(22.19274003,-2.595257531,-44.16958681,1),
new THREE.Vector4(21.37928966,-2.737401641,-44.16958681,1),
],[new THREE.Vector4(29.86364667,0.4896152361,-43.72174674,1),
new THREE.Vector4(29.68483363,-0.008662584769,-43.41203341,1),
new THREE.Vector4(29.35003544,-0.908997436,-42.83214585,1),
new THREE.Vector4(28.25254705,-1.944275347,-40.93124012,1),
new THREE.Vector4(27.01707704,-2.268988115,-38.7913437,1),
new THREE.Vector4(26.15747365,-2.595257524,-37.30246715,1),
new THREE.Vector4(25.75074844,-2.737401641,-36.59799852,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["16"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["16"].divisions = "|PeaksFrozen|_17_5_v17";
Curves["17"] = function(){
var Curve_v01 = [[new THREE.Vector4(18.79268701,-0.2099907192,-28.82714619,1),
new THREE.Vector4(18.41429413,-0.6765742568,-28.82714619,1),
new THREE.Vector4(17.70581527,-1.519640941,-28.82714619,1),
new THREE.Vector4(15.38337945,-2.489067191,-28.82714619,1),
new THREE.Vector4(12.76895607,-2.793125649,-28.82714619,1),
new THREE.Vector4(10.94991779,-3.098641812,-28.82714619,1),
new THREE.Vector4(10.08923165,-3.231744462,-28.82714619,1),
],[new THREE.Vector4(19.06626177,-0.2099907192,-28.35330076,1),
new THREE.Vector4(18.87706534,-0.6765742319,-28.02560287,1),
new THREE.Vector4(18.52282594,-1.51964085,-27.41204216,1),
new THREE.Vector4(17.36160815,-2.489067111,-25.40075387,1),
new THREE.Vector4(16.05439637,-2.793125645,-23.13659706,1),
new THREE.Vector4(15.14487718,-3.098641805,-21.56126382,1),
new THREE.Vector4(14.71453408,-3.231744462,-20.81588783,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["17"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["17"].divisions = "|PeaksFrozen|_17_5_v18";
Curves["18"] = function(){
var Curve_v01 = [[new THREE.Vector4(24.78079768,-0.1711336863,-19.75695252,1),
new THREE.Vector4(24.50623869,-0.5697960886,-19.75695252,1),
new THREE.Vector4(23.99217184,-1.290136526,-19.75695252,1),
new THREE.Vector4(22.30703011,-2.118442213,-19.75695252,1),
new THREE.Vector4(20.41002445,-2.37823851,-19.75695252,1),
new THREE.Vector4(19.09014414,-2.639280312,-19.75695252,1),
new THREE.Vector4(18.46563684,-2.753007047,-19.75695252,1),
],[new THREE.Vector4(24.97930143,-0.1711336863,-19.41313389,1),
new THREE.Vector4(24.84202195,-0.5697960673,-19.1753588,1),
new THREE.Vector4(24.58498855,-1.290136449,-18.73016383,1),
new THREE.Vector4(23.74241777,-2.118442144,-17.27078838,1),
new THREE.Vector4(22.79391487,-2.378238507,-15.62793347,1),
new THREE.Vector4(22.13397468,-2.639280306,-14.48488368,1),
new THREE.Vector4(21.82172102,-2.753007047,-13.94404454,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["18"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["18"].divisions = "|PeaksFrozen|_17_5_v19";
Curves["19"] = function(){
var Curve_v01 = [[new THREE.Vector4(-11.77129448,0.3578072151,-18.21858345,1),
new THREE.Vector4(-12.02886247,-0.03900920544,-18.21858345,1),
new THREE.Vector4(-12.51111645,-0.7560141512,-18.21858345,1),
new THREE.Vector4(-14.09197368,-1.580484419,-18.21858345,1),
new THREE.Vector4(-15.87158372,-1.839077746,-18.21858345,1),
new THREE.Vector4(-17.10978363,-2.09891081,-18.21858345,1),
new THREE.Vector4(-17.69564349,-2.21211094,-18.21858345,1),
],[new THREE.Vector4(-11.58507507,0.3578072151,-17.89604193,1),
new THREE.Vector4(-11.71385905,-0.03900918425,-17.67298149,1),
new THREE.Vector4(-11.95498602,-0.7560140738,-17.25533727,1),
new THREE.Vector4(-12.74541455,-1.580484351,-15.88627483,1),
new THREE.Vector4(-13.63521964,-1.839077742,-14.34508751,1),
new THREE.Vector4(-14.25431963,-2.098910804,-13.27277501,1),
new THREE.Vector4(-14.54724957,-2.21211094,-12.76540554,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["19"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["19"].divisions = "|PeaksFrozen|_17_5_v20";
Curves["20"] = function(){
var Curve_v01 = [[new THREE.Vector4(-24.99608065,-0.284161727,-22.32898997,1),
new THREE.Vector4(-25.25364864,-0.6901732699,-22.32898997,1),
new THREE.Vector4(-25.73590262,-1.423792821,-22.32898997,1),
new THREE.Vector4(-27.31675985,-2.267367906,-22.32898997,1),
new THREE.Vector4(-29.09636989,-2.531953417,-22.32898997,1),
new THREE.Vector4(-30.3345698,-2.797807393,-22.32898997,1),
new THREE.Vector4(-30.92042966,-2.913630623,-22.32898997,1),
],[new THREE.Vector4(-24.80986124,-0.284161727,-22.00644845,1),
new THREE.Vector4(-24.93864522,-0.6901732482,-21.783388,1),
new THREE.Vector4(-25.17977219,-1.423792742,-21.36574378,1),
new THREE.Vector4(-25.97020072,-2.267367836,-19.99668135,1),
new THREE.Vector4(-26.86000581,-2.531953413,-18.45549402,1),
new THREE.Vector4(-27.4791058,-2.797807387,-17.38318153,1),
new THREE.Vector4(-27.77203574,-2.913630623,-16.87581206,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["20"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["20"].divisions = "|PeaksFrozen|_17_5_v21";
Curves["21"] = function(){
var Curve_v01 = [[new THREE.Vector4(-16.5965543,0.2453492861,-13.33375253,1),
new THREE.Vector4(-16.85412229,-0.1612788126,-13.33375253,1),
new THREE.Vector4(-17.33637627,-0.8960124144,-13.33375253,1),
new THREE.Vector4(-18.9172335,-1.740868525,-13.33375253,1),
new THREE.Vector4(-20.69684354,-2.005855827,-13.33375253,1),
new THREE.Vector4(-21.93504345,-2.27211352,-13.33375253,1),
new THREE.Vector4(-22.5209033,-2.388112635,-13.33375253,1),
],[new THREE.Vector4(-16.41033489,0.2453492861,-13.01121101,1),
new THREE.Vector4(-16.53911887,-0.1612787909,-12.78815056,1),
new THREE.Vector4(-16.78024584,-0.896012335,-12.37050634,1),
new THREE.Vector4(-17.57067437,-1.740868455,-11.00144391,1),
new THREE.Vector4(-18.46047946,-2.005855823,-9.460256581,1),
new THREE.Vector4(-19.07957945,-2.272113514,-8.387944087,1),
new THREE.Vector4(-19.37250939,-2.388112635,-7.880574617,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["21"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["21"].divisions = "|PeaksFrozen|_17_5_v22";
Curves["22"] = function(){
var Curve_v01 = [[new THREE.Vector4(-19.82928761,-0.3696307854,-6.779704211,1),
new THREE.Vector4(-20.05664938,-0.7071284037,-6.779704211,1),
new THREE.Vector4(-20.48234714,-1.316950601,-6.779704211,1),
new THREE.Vector4(-21.87780973,-2.018173477,-6.779704211,1),
new THREE.Vector4(-23.44871643,-2.238110525,-6.779704211,1),
new THREE.Vector4(-24.54170675,-2.459101985,-6.779704211,1),
new THREE.Vector4(-25.05886003,-2.555380194,-6.779704211,1),
],[new THREE.Vector4(-19.66490704,-0.3696307854,-6.49498867,1),
new THREE.Vector4(-19.77858791,-0.7071283857,-6.298087584,1),
new THREE.Vector4(-19.99143677,-1.316950535,-5.929422491,1),
new THREE.Vector4(-20.68916799,-2.018173419,-4.720916519,1),
new THREE.Vector4(-21.4746214,-2.238110521,-3.360471561,1),
new THREE.Vector4(-22.02111659,-2.45910198,-2.413914254,1),
new THREE.Vector4(-22.27969325,-2.555380194,-1.966046415,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["22"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["22"].divisions = "|PeaksFrozen|_17_5_v23";
Curves["23"] = function(){
var Curve_v01 = [[new THREE.Vector4(-11.49703625,-0.01844645949,-6.067117821,1),
new THREE.Vector4(-11.68852812,-0.3042785076,-6.067117821,1),
new THREE.Vector4(-12.04706537,-0.8207465305,-6.067117821,1),
new THREE.Vector4(-13.22237181,-1.414623228,-6.067117821,1),
new THREE.Vector4(-14.54544331,-1.600891377,-6.067117821,1),
new THREE.Vector4(-15.46599723,-1.788052525,-6.067117821,1),
new THREE.Vector4(-15.90156146,-1.869592057,-6.067117821,1),
],[new THREE.Vector4(-11.35858929,-0.01844645949,-5.82732063,1),
new THREE.Vector4(-11.45433522,-0.3042784924,-5.661483783,1),
new THREE.Vector4(-11.63360383,-0.8207464747,-5.3509814,1),
new THREE.Vector4(-12.22125699,-1.414623179,-4.333136229,1),
new THREE.Vector4(-12.88279278,-1.600891375,-3.187322835,1),
new THREE.Vector4(-13.34306977,-1.788052521,-2.390099812,1),
new THREE.Vector4(-13.56085189,-1.869592057,-2.01289016,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["23"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["23"].divisions = "|PeaksFrozen|_17_5_v24";
Curves["24"] = function(){
var Curve_v01 = [[new THREE.Vector4(-10.72261183,0.07552148764,1.319699679,1),
new THREE.Vector4(-10.9141037,-0.2211178223,1.319699679,1),
new THREE.Vector4(-11.27264096,-0.7571134144,1.319699679,1),
new THREE.Vector4(-12.4479474,-1.37344449,1.319699679,1),
new THREE.Vector4(-13.77101889,-1.566755407,1.319699679,1),
new THREE.Vector4(-14.69157282,-1.760993087,1.319699679,1),
new THREE.Vector4(-15.12713705,-1.845615614,1.319699679,1),
],[new THREE.Vector4(-10.58416487,0.07552148764,1.55949687,1),
new THREE.Vector4(-10.6799108,-0.2211178064,1.725333717,1),
new THREE.Vector4(-10.85917941,-0.7571133565,2.0358361,1),
new THREE.Vector4(-11.44683257,-1.373444439,3.053681272,1),
new THREE.Vector4(-12.10836837,-1.566755404,4.199494666,1),
new THREE.Vector4(-12.56864535,-1.760993082,4.996717688,1),
new THREE.Vector4(-12.78642748,-1.845615614,5.37392734,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["24"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["24"].divisions = "|PeaksFrozen|_17_5_v25";
Curves["25"] = function(){
var Curve_v01 = [[new THREE.Vector4(-2.978367676,0.3662105634,2.987690728,1),
new THREE.Vector4(-3.16985955,0.08478064264,2.987690728,1),
new THREE.Vector4(-3.528396803,-0.4237332057,2.987690728,1),
new THREE.Vector4(-4.703703245,-1.00846355,2.987690728,1),
new THREE.Vector4(-6.02677474,-1.191862965,2.987690728,1),
new THREE.Vector4(-6.947328663,-1.376141626,2.987690728,1),
new THREE.Vector4(-7.382892892,-1.456425359,2.987690728,1),
],[new THREE.Vector4(-2.839920718,0.3662105634,3.227487919,1),
new THREE.Vector4(-2.93566665,0.08478065766,3.393324765,1),
new THREE.Vector4(-3.114935259,-0.4237331508,3.703827149,1),
new THREE.Vector4(-3.702588417,-1.008463502,4.72167232,1),
new THREE.Vector4(-4.364124213,-1.191862963,5.867485714,1),
new THREE.Vector4(-4.8244012,-1.376141622,6.664708736,1),
new THREE.Vector4(-5.042183326,-1.456425359,7.041918388,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["25"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["25"].divisions = "|PeaksFrozen|_17_5_v26";
Curves["26"] = function(){
var Curve_v01 = [[new THREE.Vector4(5.123303131,0.3295816243,1.26012857,1),
new THREE.Vector4(4.931811256,-0.003846209295,1.26012857,1),
new THREE.Vector4(4.573274004,-0.6063147397,1.26012857,1),
new THREE.Vector4(3.397967562,-1.299081775,1.26012857,1),
new THREE.Vector4(2.074896067,-1.516366666,1.26012857,1),
new THREE.Vector4(1.154342144,-1.734693256,1.26012857,1),
new THREE.Vector4(0.7187779146,-1.829810474,1.26012857,1),
],[new THREE.Vector4(5.261750089,0.3295816243,1.499925762,1),
new THREE.Vector4(5.166004157,-0.00384619149,1.665762608,1),
new THREE.Vector4(4.986735548,-0.6063146747,1.976264991,1),
new THREE.Vector4(4.39908239,-1.299081718,2.994110163,1),
new THREE.Vector4(3.737546594,-1.516366663,4.139923557,1),
new THREE.Vector4(3.277269607,-1.734693251,4.937146579,1),
new THREE.Vector4(3.059487481,-1.829810474,5.314356231,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["26"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["26"].divisions = "|PeaksFrozen|_17_5_v27";
Curves["27"] = function(){
var Curve_v01 = [[new THREE.Vector4(13.10583172,0.4750077063,-1.8971402,1),
new THREE.Vector4(12.91433985,0.07406215726,-1.8971402,1),
new THREE.Vector4(12.55580259,-0.6504036833,-1.8971402,1),
new THREE.Vector4(11.38049615,-1.483453092,-1.8971402,1),
new THREE.Vector4(10.05742466,-1.744737247,-1.8971402,1),
new THREE.Vector4(9.136870733,-2.00727404,-1.8971402,1),
new THREE.Vector4(8.701306504,-2.12165209,-1.8971402,1),
],[new THREE.Vector4(13.24427868,0.4750077063,-1.657343009,1),
new THREE.Vector4(13.14853275,0.07406217867,-1.491506162,1),
new THREE.Vector4(12.96926414,-0.650403605,-1.181003779,1),
new THREE.Vector4(12.38161098,-1.483453023,-0.1631586076,1),
new THREE.Vector4(11.72007518,-1.744737243,0.9826547865,1),
new THREE.Vector4(11.2597982,-2.007274034,1.779877809,1),
new THREE.Vector4(11.04201607,-2.12165209,2.157087461,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["27"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["27"].divisions = "|PeaksFrozen|_17_5_v28";
Curves["28"] = function(){
var Curve_v01 = [[new THREE.Vector4(9.185057952,-0.18117287,5.207021118,1),
new THREE.Vector4(9.001117634,-0.4773145727,5.207021118,1),
new THREE.Vector4(8.656719436,-1.012411042,5.207021118,1),
new THREE.Vector4(7.527761656,-1.627708233,5.207021118,1),
new THREE.Vector4(6.256865994,-1.820694874,5.207021118,1),
new THREE.Vector4(5.37261447,-2.014606724,5.207021118,1),
new THREE.Vector4(4.954226884,-2.099087298,5.207021118,1),
],[new THREE.Vector4(9.318045201,-0.18117287,5.437361815,1),
new THREE.Vector4(9.226075047,-0.4773145569,5.596658821,1),
new THREE.Vector4(9.053875965,-1.012410984,5.894916424,1),
new THREE.Vector4(8.489397135,-1.627708182,6.872622479,1),
new THREE.Vector4(7.853949258,-1.820694871,7.973250281,1),
new THREE.Vector4(7.411823471,-2.014606719,8.739034506,1),
new THREE.Vector4(7.202629667,-2.099087298,9.10136875,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["28"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["28"].divisions = "|PeaksFrozen|_17_5_v29";
Curves["29"] = function(){
var Curve_v01 = [[new THREE.Vector4(1.976953778,0.3101213235,6.517585513,1),
new THREE.Vector4(1.79301346,0.0001430191558,6.517585513,1),
new THREE.Vector4(1.448615262,-0.5599547132,6.517585513,1),
new THREE.Vector4(0.3196574824,-1.204000379,6.517585513,1),
new THREE.Vector4(-0.9512381792,-1.406003917,6.517585513,1),
new THREE.Vector4(-1.835489704,-1.608975892,6.517585513,1),
new THREE.Vector4(-2.25387729,-1.697403645,6.517585513,1),
],[new THREE.Vector4(2.109941028,0.3101213235,6.74792621,1),
new THREE.Vector4(2.017970873,0.0001430357083,6.907223216,1),
new THREE.Vector4(1.845771791,-0.5599546527,7.205480819,1),
new THREE.Vector4(1.281292961,-1.204000326,8.183186874,1),
new THREE.Vector4(0.6458450842,-1.406003914,9.283814676,1),
new THREE.Vector4(0.2037192977,-1.608975887,10.0495989,1),
new THREE.Vector4(-0.005474506575,-1.697403645,10.41193315,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["29"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["29"].divisions = "|PeaksFrozen|_17_5_v30";
Curves["30"] = function(){
var Curve_v01 = [[new THREE.Vector4(-5.648148157,0.6676512201,7.351581037,1),
new THREE.Vector4(-5.832088476,0.3699006129,7.351581037,1),
new THREE.Vector4(-6.176486674,-0.168102975,7.351581037,1),
new THREE.Vector4(-7.305444453,-0.7867430067,7.351581037,1),
new THREE.Vector4(-8.576340115,-0.9807781224,7.351581037,1),
new THREE.Vector4(-9.46059164,-1.175743473,7.351581037,1),
new THREE.Vector4(-9.878979226,-1.260683021,7.351581037,1),
],[new THREE.Vector4(-5.515160908,0.6676512201,7.581921734,1),
new THREE.Vector4(-5.607131062,0.3699006288,7.741218741,1),
new THREE.Vector4(-5.779330145,-0.1681029169,8.039476343,1),
new THREE.Vector4(-6.343808975,-0.7867429556,9.017182398,1),
new THREE.Vector4(-6.979256852,-0.9807781196,10.1178102,1),
new THREE.Vector4(-7.421382638,-1.175743469,10.88359443,1),
new THREE.Vector4(-7.630576442,-1.260683021,11.24592867,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["30"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["30"].divisions = "|PeaksFrozen|_17_5_v31";
Curves["31"] = function(){
var Curve_v01 = [[new THREE.Vector4(-7.196996988,0.1358309671,11.16413201,1),
new THREE.Vector4(-7.380937306,-0.1229891237,11.16413201,1),
new THREE.Vector4(-7.725335504,-0.5906494209,11.16413201,1),
new THREE.Vector4(-8.854293284,-1.128403048,11.16413201,1),
new THREE.Vector4(-10.12518895,-1.297068317,11.16413201,1),
new THREE.Vector4(-11.00944047,-1.466542194,11.16413201,1),
new THREE.Vector4(-11.42782806,-1.540376003,11.16413201,1),
],[new THREE.Vector4(-7.064009739,0.1358309671,11.3944727,1),
new THREE.Vector4(-7.155979893,-0.1229891099,11.55376971,1),
new THREE.Vector4(-7.328178975,-0.5906493704,11.85202731,1),
new THREE.Vector4(-7.892657805,-1.128403004,12.82973337,1),
new THREE.Vector4(-8.528105682,-1.297068315,13.93036117,1),
new THREE.Vector4(-8.970231469,-1.46654219,14.69614539,1),
new THREE.Vector4(-9.179425273,-1.540376003,15.05847964,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["31"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["31"].divisions = "|PeaksFrozen|_17_5_v32";
Curves["32"] = function(){
var Curve_v01 = [[new THREE.Vector4(-1.249477751,0.1452713567,9.793996501,1),
new THREE.Vector4(-1.43341807,-0.05560826193,9.793996501,1),
new THREE.Vector4(-1.777816267,-0.4185763061,9.793996501,1),
new THREE.Vector4(-2.906774047,-0.8359463151,9.793996501,1),
new THREE.Vector4(-4.177669709,-0.9668535209,9.793996501,1),
new THREE.Vector4(-5.061921234,-1.098388317,9.793996501,1),
new THREE.Vector4(-5.48030882,-1.155693402,9.793996501,1),
],[new THREE.Vector4(-1.116490502,0.1452713567,10.0243372,1),
new THREE.Vector4(-1.208460656,-0.0556082512,10.1836342,1),
new THREE.Vector4(-1.380659739,-0.4185762669,10.48189181,1),
new THREE.Vector4(-1.945138569,-0.8359462806,11.45959786,1),
new THREE.Vector4(-2.580586445,-0.966853519,12.56022566,1),
new THREE.Vector4(-3.022712232,-1.098388314,13.32600989,1),
new THREE.Vector4(-3.231906036,-1.155693402,13.68834413,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["32"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["32"].divisions = "|PeaksFrozen|_17_5_v33";
Curves["33"] = function(){
var Curve_v01 = [[new THREE.Vector4(4.73993616,0.1433768992,10.22460796,1),
new THREE.Vector4(4.555995841,-0.1065476092,10.22460796,1),
new THREE.Vector4(4.211597643,-0.5581345377,10.22460796,1),
new THREE.Vector4(3.082639864,-1.077405706,10.22460796,1),
new THREE.Vector4(1.811744202,-1.240273992,10.22460796,1),
new THREE.Vector4(0.9274926774,-1.403923094,10.22460796,1),
new THREE.Vector4(0.5091050911,-1.475219253,10.22460796,1),
],[new THREE.Vector4(4.872923409,0.1433768992,10.45494866,1),
new THREE.Vector4(4.780953255,-0.1065475958,10.61424566,1),
new THREE.Vector4(4.608754172,-0.558134489,10.91250326,1),
new THREE.Vector4(4.044275342,-1.077405663,11.89020932,1),
new THREE.Vector4(3.408827465,-1.240273989,12.99083712,1),
new THREE.Vector4(2.966701679,-1.40392309,13.75662135,1),
new THREE.Vector4(2.757507875,-1.475219253,14.11895559,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["33"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["33"].divisions = "|PeaksFrozen|_17_5_v34";
Curves["34"] = function(){
var Curve_v01 = [[new THREE.Vector4(-6.269267013,0.9001993022,-1.242214122,1),
new THREE.Vector4(-6.357652521,0.5410387367,-1.157764882,1),
new THREE.Vector4(-6.506947778,-0.09441615347,-1.015118525,1),
new THREE.Vector4(-7.063050769,-0.9748421615,-0.4837817174,1),
new THREE.Vector4(-7.779471895,-1.296092109,0.200733332,1),
new THREE.Vector4(-8.287708703,-1.559539072,0.6863356358,1),
new THREE.Vector4(-8.52459346,-1.680264862,0.9126706462,1),
],[new THREE.Vector4(-5.985701295,0.9001993022,-1.242214122,1),
new THREE.Vector4(-5.897315787,0.5410387367,-1.157764882,1),
new THREE.Vector4(-5.74802053,-0.09441615347,-1.015118525,1),
new THREE.Vector4(-5.191917539,-0.9748421615,-0.4837817174,1),
new THREE.Vector4(-4.475496413,-1.296092109,0.200733332,1),
new THREE.Vector4(-3.967259605,-1.559539072,0.6863356358,1),
new THREE.Vector4(-3.730374848,-1.680264862,0.9126706462,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["34"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["34"].divisions = "|PeaksFrozen|_17_5_v35";
Curves["35"] = function(){
var Curve_v01 = [[new THREE.Vector4(1.060580706,1.006729106,-0.5547407499,1),
new THREE.Vector4(0.9721951974,0.6647141728,-0.4702915093,1),
new THREE.Vector4(0.8228999408,0.05959467367,-0.3276451526,1),
new THREE.Vector4(0.2667969501,-0.7788014946,0.2036916551,1),
new THREE.Vector4(-0.4496241766,-1.084715589,0.8882067045,1),
new THREE.Vector4(-0.9578609841,-1.335586102,1.373809008,1),
new THREE.Vector4(-1.194745741,-1.450548676,1.600144019,1),
],[new THREE.Vector4(1.344146423,1.006729106,-0.5547407499,1),
new THREE.Vector4(1.432531932,0.6647141728,-0.4702915093,1),
new THREE.Vector4(1.581827189,0.05959467367,-0.3276451526,1),
new THREE.Vector4(2.137930179,-0.7788014946,0.2036916551,1),
new THREE.Vector4(2.854351306,-1.084715589,0.8882067045,1),
new THREE.Vector4(3.362588113,-1.335586102,1.373809008,1),
new THREE.Vector4(3.59947287,-1.450548676,1.600144019,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["35"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["35"].divisions = "|PeaksFrozen|_17_5_v36";
Curves["36"] = function(){
var Curve_v01 = [[new THREE.Vector4(-1.238622798,0.7405583547,-4.582058982,1),
new THREE.Vector4(-1.306519198,0.4468612197,-4.517186362,1),
new THREE.Vector4(-1.421205539,-0.0727706625,-4.407607605,1),
new THREE.Vector4(-1.84839538,-0.7927232992,-3.999442768,1),
new THREE.Vector4(-2.39873917,-1.055419704,-3.473608741,1),
new THREE.Vector4(-2.789158939,-1.270848751,-3.100576453,1),
new THREE.Vector4(-2.971130198,-1.369570108,-2.926709348,1),
],[new THREE.Vector4(-1.020791936,0.7405583547,-4.582058982,1),
new THREE.Vector4(-0.9528955354,0.4468612197,-4.517186362,1),
new THREE.Vector4(-0.8382091948,-0.0727706625,-4.407607605,1),
new THREE.Vector4(-0.4110193537,-0.7927232992,-3.999442768,1),
new THREE.Vector4(0.139324436,-1.055419704,-3.473608741,1),
new THREE.Vector4(0.5297442049,-1.270848751,-3.100576453,1),
new THREE.Vector4(0.7117154645,-1.369570108,-2.926709348,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["36"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["36"].divisions = "|PeaksFrozen|_17_5_v37";
Curves["37"] = function(){
var Curve_v01 = [[new THREE.Vector4(7.854591152,0.96921945,-5.436093272,1),
new THREE.Vector4(7.750569219,0.5896080597,-5.336703978,1),
new THREE.Vector4(7.574861895,-0.08203002494,-5.168821821,1),
new THREE.Vector4(6.920377817,-1.012588034,-4.543485352,1),
new THREE.Vector4(6.077213459,-1.352130152,-3.737871628,1),
new THREE.Vector4(5.479063648,-1.630577949,-3.166360628,1),
new THREE.Vector4(5.200271222,-1.75817794,-2.899984321,1),
],[new THREE.Vector4(8.188322943,0.96921945,-5.436093272,1),
new THREE.Vector4(8.292344877,0.5896080597,-5.336703978,1),
new THREE.Vector4(8.468052201,-0.08203002494,-5.168821821,1),
new THREE.Vector4(9.122536279,-1.012588034,-4.543485352,1),
new THREE.Vector4(9.965700637,-1.352130152,-3.737871628,1),
new THREE.Vector4(10.56385045,-1.630577949,-3.166360628,1),
new THREE.Vector4(10.84264287,-1.75817794,-2.899984321,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["37"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["37"].divisions = "|PeaksFrozen|_17_5_v38";
Curves["38"] = function(){
var Curve_v01 = [[new THREE.Vector4(14.3277936,-0.261138222,-9.871546956,1),
new THREE.Vector4(14.20161946,-0.5525894779,-9.750992012,1),
new THREE.Vector4(13.98849402,-1.068247776,-9.547358167,1),
new THREE.Vector4(13.19463295,-1.782694991,-8.788851888,1),
new THREE.Vector4(12.1719108,-2.043382576,-7.811677042,1),
new THREE.Vector4(11.44638077,-2.257164254,-7.118458745,1),
new THREE.Vector4(11.10821753,-2.355130697,-6.795355726,1),
],[new THREE.Vector4(14.73259593,-0.261138222,-9.871546956,1),
new THREE.Vector4(14.85877007,-0.5525894779,-9.750992012,1),
new THREE.Vector4(15.0718955,-1.068247776,-9.547358167,1),
new THREE.Vector4(15.86575658,-1.782694991,-8.788851888,1),
new THREE.Vector4(16.88847873,-2.043382576,-7.811677042,1),
new THREE.Vector4(17.61400876,-2.257164254,-7.118458745,1),
new THREE.Vector4(17.952172,-2.355130697,-6.795355726,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["38"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["38"].divisions = "|PeaksFrozen|_17_5_v39";
Curves["39"] = function(){
var Curve_v01 = [[new THREE.Vector4(3.204461912,0.01636635083,-10.38844105,1),
new THREE.Vector4(3.074595741,-0.2662465642,-10.2643585,1),
new THREE.Vector4(2.855233951,-0.7662673796,-10.05476604,1),
new THREE.Vector4(2.038143375,-1.459048783,-9.274064794,1),
new THREE.Vector4(0.9854949241,-1.711830944,-8.268296428,1),
new THREE.Vector4(0.2387348579,-1.919129633,-7.554793582,1),
new THREE.Vector4(-0.1093235159,-2.014125217,-7.222236111,1),
],[new THREE.Vector4(3.621109331,0.01636635083,-10.38844105,1),
new THREE.Vector4(3.750975502,-0.2662465642,-10.2643585,1),
new THREE.Vector4(3.970337292,-0.7662673796,-10.05476604,1),
new THREE.Vector4(4.787427868,-1.459048783,-9.274064794,1),
new THREE.Vector4(5.840076319,-1.711830944,-8.268296428,1),
new THREE.Vector4(6.586836385,-1.919129633,-7.554793582,1),
new THREE.Vector4(6.934894759,-2.014125217,-7.222236111,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["39"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["39"].divisions = "|PeaksFrozen|_17_5_v40";
Curves["40"] = function(){
var Curve_v01 = [[new THREE.Vector4(-5.178282896,0.3972366201,-11.72827567,1),
new THREE.Vector4(-5.291904118,0.0241216907,-11.61971459,1),
new THREE.Vector4(-5.483825958,-0.6360223486,-11.43634004,1),
new THREE.Vector4(-6.198706736,-1.550655299,-10.75329665,1),
new THREE.Vector4(-7.119679471,-1.88438668,-9.873339774,1),
new THREE.Vector4(-7.773027376,-2.158069274,-9.249088945,1),
new THREE.Vector4(-8.077547154,-2.283485589,-8.958131063,1),
],[new THREE.Vector4(-4.813753872,0.3972366201,-11.72827567,1),
new THREE.Vector4(-4.700132651,0.0241216907,-11.61971459,1),
new THREE.Vector4(-4.508210811,-0.6360223486,-11.43634004,1),
new THREE.Vector4(-3.793330033,-1.550655299,-10.75329665,1),
new THREE.Vector4(-2.872357298,-1.88438668,-9.873339774,1),
new THREE.Vector4(-2.219009392,-2.158069274,-9.249088945,1),
new THREE.Vector4(-1.914489614,-2.283485589,-8.958131063,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["40"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["40"].divisions = "|PeaksFrozen|_17_5_v41";
Curves["41"] = function(){
var Curve_v01 = [[new THREE.Vector4(0.3424405693,-0.02760448381,-16.87695583,1),
new THREE.Vector4(0.2177432456,-0.2978603688,-16.75781193,1),
new THREE.Vector4(0.007112348957,-0.7760181629,-16.55656153,1),
new THREE.Vector4(-0.777456928,-1.438508238,-15.80693324,1),
new THREE.Vector4(-1.78820856,-1.680237696,-14.8411958,1),
new THREE.Vector4(-2.505246575,-1.878472411,-14.15609132,1),
new THREE.Vector4(-2.839451759,-1.969314386,-13.83677009,1),
],[new THREE.Vector4(0.7425048621,-0.02760448381,-16.87695583,1),
new THREE.Vector4(0.8672021858,-0.2978603688,-16.75781193,1),
new THREE.Vector4(1.077833082,-0.7760181629,-16.55656153,1),
new THREE.Vector4(1.862402359,-1.438508238,-15.80693324,1),
new THREE.Vector4(2.873153991,-1.680237696,-14.8411958,1),
new THREE.Vector4(3.590192007,-1.878472411,-14.15609132,1),
new THREE.Vector4(3.924397191,-1.969314386,-13.83677009,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["41"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["41"].divisions = "|PeaksFrozen|_17_5_v42";
Curves["42"] = function(){
var Curve_v01 = [[new THREE.Vector4(8.063986556,0.4582326618,-17.76634856,1),
new THREE.Vector4(7.939289232,0.05818736627,-17.64720466,1),
new THREE.Vector4(7.728658335,-0.6496039775,-17.44595426,1),
new THREE.Vector4(6.944089058,-1.630252513,-16.69632597,1),
new THREE.Vector4(5.933337426,-1.988071668,-15.73058853,1),
new THREE.Vector4(5.216299411,-2.281507887,-15.04548405,1),
new THREE.Vector4(4.882094227,-2.415976392,-14.72616282,1),
],[new THREE.Vector4(8.464050848,0.4582326618,-17.76634856,1),
new THREE.Vector4(8.588748172,0.05818736627,-17.64720466,1),
new THREE.Vector4(8.799379069,-0.6496039775,-17.44595426,1),
new THREE.Vector4(9.583948346,-1.630252513,-16.69632597,1),
new THREE.Vector4(10.59469998,-1.988071668,-15.73058853,1),
new THREE.Vector4(11.31173799,-2.281507887,-15.04548405,1),
new THREE.Vector4(11.64594318,-2.415976392,-14.72616282,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["42"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["42"].divisions = "|PeaksFrozen|_17_5_v43";
Curves["43"] = function(){
var Curve_v01 = [[new THREE.Vector4(-3.711637841,0.589764401,-25.12420358,1),
new THREE.Vector4(-3.919036726,0.1392668629,-24.92604125,1),
new THREE.Vector4(-4.269361913,-0.6577885242,-24.59131787,1),
new THREE.Vector4(-5.574271984,-1.762112849,-23.34452229,1),
new THREE.Vector4(-7.255372714,-2.165058841,-21.73829,1),
new THREE.Vector4(-8.447963547,-2.495502158,-20.59881162,1),
new THREE.Vector4(-9.003819764,-2.646929337,-20.06771065,1),
],[new THREE.Vector4(-3.046243541,0.589764401,-25.12420358,1),
new THREE.Vector4(-2.838844656,0.1392668629,-24.92604125,1),
new THREE.Vector4(-2.488519469,-0.6577885242,-24.59131787,1),
new THREE.Vector4(-1.183609398,-1.762112849,-23.34452229,1),
new THREE.Vector4(0.4974913321,-2.165058841,-21.73829,1),
new THREE.Vector4(1.690082165,-2.495502158,-20.59881162,1),
new THREE.Vector4(2.245938382,-2.646929337,-20.06771065,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["43"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["43"].divisions = "|PeaksFrozen|_17_5_v44";
Curves["44"] = function(){
var Curve_v01 = [[new THREE.Vector4(-15.01762925,0.1326870093,-27.41264585,1),
new THREE.Vector4(-15.22502813,-0.2480577339,-27.21448352,1),
new THREE.Vector4(-15.57535332,-0.921701035,-26.87976015,1),
new THREE.Vector4(-16.88026339,-1.855037282,-25.63296457,1),
new THREE.Vector4(-18.56136412,-2.195593124,-24.02673227,1),
new THREE.Vector4(-19.75395495,-2.474872243,-22.88725389,1),
new THREE.Vector4(-20.30981117,-2.602853192,-22.35615293,1),
],[new THREE.Vector4(-14.35223495,0.1326870093,-27.41264585,1),
new THREE.Vector4(-14.14483606,-0.2480577339,-27.21448352,1),
new THREE.Vector4(-13.79451087,-0.921701035,-26.87976015,1),
new THREE.Vector4(-12.4896008,-1.855037282,-25.63296457,1),
new THREE.Vector4(-10.80850007,-2.195593124,-24.02673227,1),
new THREE.Vector4(-9.61590924,-2.474872243,-22.88725389,1),
new THREE.Vector4(-9.060053022,-2.602853192,-22.35615293,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["44"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["44"].divisions = "|PeaksFrozen|_17_5_v45";
Curves["45"] = function(){
var Curve_v01 = [[new THREE.Vector4(-15.54204701,-0.6453333907,-37.98726043,1),
new THREE.Vector4(-15.74816374,-1.135474469,-37.79032316,1),
new THREE.Vector4(-16.09632319,-2.002670299,-37.45766907,1),
new THREE.Vector4(-17.39316621,-3.204174567,-36.21858128,1),
new THREE.Vector4(-19.06387424,-3.642579588,-34.62227884,1),
new THREE.Vector4(-20.24909238,-4.002101738,-33.4898448,1),
new THREE.Vector4(-20.80151226,-4.166854427,-32.96202714,1),
],[new THREE.Vector4(-14.88076623,-0.6453333907,-37.98726043,1),
new THREE.Vector4(-14.6746495,-1.135474469,-37.79032316,1),
new THREE.Vector4(-14.32649005,-2.002670299,-37.45766907,1),
new THREE.Vector4(-13.02964704,-3.204174567,-36.21858128,1),
new THREE.Vector4(-11.358939,-3.642579588,-34.62227884,1),
new THREE.Vector4(-10.17372086,-4.002101738,-33.4898448,1),
new THREE.Vector4(-9.62130099,-4.166854427,-32.96202714,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["45"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["45"].divisions = "|PeaksFrozen|_17_5_v46";
Curves["46"] = function(){
var Curve_v01 = [[new THREE.Vector4(-16.61432697,0.4208475236,-47.75692229,1),
new THREE.Vector4(-16.8204437,-0.07052445902,-47.55998501,1),
new THREE.Vector4(-17.16860315,-0.9398981019,-47.22733093,1),
new THREE.Vector4(-18.46544617,-2.144419741,-45.98824313,1),
new THREE.Vector4(-20.1361542,-2.583925741,-44.39194069,1),
new THREE.Vector4(-21.32137234,-2.944350769,-43.25950665,1),
new THREE.Vector4(-21.87379222,-3.109517206,-42.731689,1),
],[new THREE.Vector4(-15.95304619,0.4208475236,-47.75692229,1),
new THREE.Vector4(-15.74692946,-0.07052445902,-47.55998501,1),
new THREE.Vector4(-15.39877001,-0.9398981019,-47.22733093,1),
new THREE.Vector4(-14.101927,-2.144419741,-45.98824313,1),
new THREE.Vector4(-12.43121896,-2.583925741,-44.39194069,1),
new THREE.Vector4(-11.24600082,-2.944350769,-43.25950665,1),
new THREE.Vector4(-10.69358095,-3.109517206,-42.731689,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["46"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["46"].divisions = "|PeaksFrozen|_17_5_v47";
Curves["47"] = function(){
var Curve_v01 = [[new THREE.Vector4(-34.06866187,-0.7714105649,-43.22951801,1),
new THREE.Vector4(-34.2747786,-1.262374306,-43.03258074,1),
new THREE.Vector4(-34.62293805,-2.131025657,-42.69992665,1),
new THREE.Vector4(-35.91978107,-3.334546556,-41.46083886,1),
new THREE.Vector4(-37.5904891,-3.773687406,-39.86453642,1),
new THREE.Vector4(-38.77570724,-4.133812986,-38.73210238,1),
new THREE.Vector4(-39.32812712,-4.298842199,-38.20428472,1),
],[new THREE.Vector4(-33.40738109,-0.7714105649,-43.22951801,1),
new THREE.Vector4(-33.20126436,-1.262374306,-43.03258074,1),
new THREE.Vector4(-32.85310491,-2.131025657,-42.69992665,1),
new THREE.Vector4(-31.5562619,-3.334546556,-41.46083886,1),
new THREE.Vector4(-29.88555386,-3.773687406,-39.86453642,1),
new THREE.Vector4(-28.70033572,-4.133812986,-38.73210238,1),
new THREE.Vector4(-28.14791585,-4.298842199,-38.20428472,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["47"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["47"].divisions = "|PeaksFrozen|_17_5_v48";
Curves["48"] = function(){
var Curve_v01 = [[new THREE.Vector4(6.737547705,0.4908121903,-37.62983378,1),
new THREE.Vector4(6.531430976,-0.001790691175,-37.4328965,1),
new THREE.Vector4(6.183271527,-0.8733421364,-37.10024242,1),
new THREE.Vector4(4.886428512,-2.080881132,-35.86115463,1),
new THREE.Vector4(3.215720478,-2.521488105,-34.26485219,1),
new THREE.Vector4(2.030502334,-2.882816006,-33.13241815,1),
new THREE.Vector4(1.478082463,-3.048396189,-32.60460049,1),
],[new THREE.Vector4(7.398828486,0.4908121903,-37.62983378,1),
new THREE.Vector4(7.604945215,-0.001790691175,-37.4328965,1),
new THREE.Vector4(7.953104664,-0.8733421364,-37.10024242,1),
new THREE.Vector4(9.24994768,-2.080881132,-35.86115463,1),
new THREE.Vector4(10.92065571,-2.521488105,-34.26485219,1),
new THREE.Vector4(12.10587386,-2.882816006,-33.13241815,1),
new THREE.Vector4(12.65829373,-3.048396189,-32.60460049,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["48"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["48"].divisions = "|PeaksFrozen|_17_5_v49";
Curves["49"] = function(){
var Curve_v01 = [[new THREE.Vector4(13.76693855,-0.8457228882,-47.8164934,1),
new THREE.Vector4(13.56082182,-1.325190329,-47.61955612,1),
new THREE.Vector4(13.21266237,-2.173501529,-47.28690204,1),
new THREE.Vector4(11.91581936,-3.348841045,-46.04781424,1),
new THREE.Vector4(10.24511132,-3.777699068,-44.4515118,1),
new THREE.Vector4(9.059893181,-4.129392025,-43.31907776,1),
new THREE.Vector4(8.50747331,-4.29055695,-42.79126011,1),
],[new THREE.Vector4(14.42821933,-0.8457228882,-47.8164934,1),
new THREE.Vector4(14.63433606,-1.325190329,-47.61955612,1),
new THREE.Vector4(14.98249551,-2.173501529,-47.28690204,1),
new THREE.Vector4(16.27933853,-3.348841045,-46.04781424,1),
new THREE.Vector4(17.95004656,-3.777699068,-44.4515118,1),
new THREE.Vector4(19.1352647,-4.129392025,-43.31907776,1),
new THREE.Vector4(19.68768458,-4.29055695,-42.79126011,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["49"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["49"].divisions = "|PeaksFrozen|_17_5_v50";
Curves["50"] = function(){
var Curve_v01 = [[new THREE.Vector4(29.79156684,0.4896152361,-44.65922463,1),
new THREE.Vector4(29.58545011,-0.01177917503,-44.46228735,1),
new THREE.Vector4(29.23729066,-0.8988852802,-44.12963327,1),
new THREE.Vector4(27.94044765,-2.127975337,-42.89054547,1),
new THREE.Vector4(26.26973961,-2.576445864,-41.29424303,1),
new THREE.Vector4(25.08452147,-2.944222418,-40.16180899,1),
new THREE.Vector4(24.5321016,-3.112757726,-39.63399134,1),
],[new THREE.Vector4(30.45284762,0.4896152361,-44.65922463,1),
new THREE.Vector4(30.65896435,-0.01177917503,-44.46228735,1),
new THREE.Vector4(31.0071238,-0.8988852802,-44.12963327,1),
new THREE.Vector4(32.30396681,-2.127975337,-42.89054547,1),
new THREE.Vector4(33.97467485,-2.576445864,-41.29424303,1),
new THREE.Vector4(35.15989299,-2.944222418,-40.16180899,1),
new THREE.Vector4(35.71231286,-3.112757726,-39.63399134,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["50"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["50"].divisions = "|PeaksFrozen|_17_5_v51";
Curves["51"] = function(){
var Curve_v01 = [[new THREE.Vector4(18.98999637,-0.2099907192,-29.34521649,1),
new THREE.Vector4(18.77191077,-0.679492583,-29.13684338,1),
new THREE.Vector4(18.40353426,-1.510171906,-28.78487261,1),
new THREE.Vector4(17.03138563,-2.661082365,-27.47383296,1),
new THREE.Vector4(15.26366224,-3.081026712,-25.78483578,1),
new THREE.Vector4(14.00962037,-3.425409844,-24.58664309,1),
new THREE.Vector4(13.42512236,-3.583225007,-24.02817591,1),
],[new THREE.Vector4(19.68967668,-0.2099907192,-29.34521649,1),
new THREE.Vector4(19.90776227,-0.679492583,-29.13684338,1),
new THREE.Vector4(20.27613879,-1.510171906,-28.78487261,1),
new THREE.Vector4(21.64828741,-2.661082365,-27.47383296,1),
new THREE.Vector4(23.4160108,-3.081026712,-25.78483578,1),
new THREE.Vector4(24.67005268,-3.425409844,-24.58664309,1),
new THREE.Vector4(25.25455069,-3.583225007,-24.02817591,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["51"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["51"].divisions = "|PeaksFrozen|_17_5_v52";
Curves["52"] = function(){
var Curve_v01 = [[new THREE.Vector4(24.92396385,-0.1711336863,-20.13286038,1),
new THREE.Vector4(24.7657226,-0.5722895904,-19.98166644,1),
new THREE.Vector4(24.49843141,-1.28204591,-19.72627913,1),
new THREE.Vector4(23.50281083,-2.265416929,-18.77499876,1),
new THREE.Vector4(22.22016422,-2.624229464,-17.54947528,1),
new THREE.Vector4(21.310241,-2.918480322,-16.68007581,1),
new THREE.Vector4(20.8861337,-3.05332214,-16.27485628,1),
],[new THREE.Vector4(25.43164654,-0.1711336863,-20.13286038,1),
new THREE.Vector4(25.58988779,-0.5722895904,-19.98166644,1),
new THREE.Vector4(25.85717898,-1.28204591,-19.72627913,1),
new THREE.Vector4(26.85279955,-2.265416929,-18.77499876,1),
new THREE.Vector4(28.13544617,-2.624229464,-17.54947528,1),
new THREE.Vector4(29.04536939,-2.918480322,-16.68007581,1),
new THREE.Vector4(29.46947669,-3.05332214,-16.27485628,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["52"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["52"].divisions = "|PeaksFrozen|_17_5_v53";
Curves["53"] = function(){
var Curve_v01 = [[new THREE.Vector4(-11.63698811,0.3578072151,-18.57122837,1),
new THREE.Vector4(-11.78543664,-0.04149116131,-18.42939102,1),
new THREE.Vector4(-12.0361866,-0.7479609976,-18.18980828,1),
new THREE.Vector4(-12.97019349,-1.726778578,-17.29739761,1),
new THREE.Vector4(-14.1734639,-2.083929653,-16.14771528,1),
new THREE.Vector4(-15.0270768,-2.376818002,-15.33211834,1),
new THREE.Vector4(-15.42493835,-2.511035443,-14.95197569,1),
],[new THREE.Vector4(-11.1607232,0.3578072151,-18.57122837,1),
new THREE.Vector4(-11.01227467,-0.04149116131,-18.42939102,1),
new THREE.Vector4(-10.76152471,-0.7479609976,-18.18980828,1),
new THREE.Vector4(-9.827517817,-1.726778578,-17.29739761,1),
new THREE.Vector4(-8.624247406,-2.083929653,-16.14771528,1),
new THREE.Vector4(-7.770634511,-2.376818002,-15.33211834,1),
new THREE.Vector4(-7.372772963,-2.511035443,-14.95197569,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["53"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["53"].divisions = "|PeaksFrozen|_17_5_v54";
Curves["54"] = function(){
var Curve_v01 = [[new THREE.Vector4(-24.86177428,-0.284161727,-22.68163488,1),
new THREE.Vector4(-25.01022281,-0.6927127382,-22.53979754,1),
new THREE.Vector4(-25.26097277,-1.415553058,-22.30021479,1),
new THREE.Vector4(-26.19497966,-2.417052026,-21.40780412,1),
new THREE.Vector4(-27.39825007,-2.78247909,-20.2581218,1),
new THREE.Vector4(-28.25186297,-3.082154315,-19.44252485,1),
new THREE.Vector4(-28.64972452,-3.219481874,-19.06238221,1),
],[new THREE.Vector4(-24.38550937,-0.284161727,-22.68163488,1),
new THREE.Vector4(-24.23706084,-0.6927127382,-22.53979754,1),
new THREE.Vector4(-23.98631088,-1.415553058,-22.30021479,1),
new THREE.Vector4(-23.05230399,-2.417052026,-21.40780412,1),
new THREE.Vector4(-21.84903358,-2.78247909,-20.2581218,1),
new THREE.Vector4(-20.99542068,-3.082154315,-19.44252485,1),
new THREE.Vector4(-20.59755913,-3.219481874,-19.06238221,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["54"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["54"].divisions = "|PeaksFrozen|_17_5_v55";
Curves["55"] = function(){
var Curve_v01 = [[new THREE.Vector4(-16.46224792,0.2453492861,-13.68639744,1),
new THREE.Vector4(-16.61069646,-0.1638221373,-13.5445601,1),
new THREE.Vector4(-16.86144641,-0.8877601386,-13.30497735,1),
new THREE.Vector4(-17.79545331,-1.890779951,-12.41256668,1),
new THREE.Vector4(-18.99872372,-2.25676194,-11.26288436,1),
new THREE.Vector4(-19.85233662,-2.556892242,-10.44728741,1),
new THREE.Vector4(-20.25019817,-2.694428342,-10.06714477,1),
],[new THREE.Vector4(-15.98598302,0.2453492861,-13.68639744,1),
new THREE.Vector4(-15.83753449,-0.1638221373,-13.5445601,1),
new THREE.Vector4(-15.58678453,-0.8877601386,-13.30497735,1),
new THREE.Vector4(-14.65277764,-1.890779951,-12.41256668,1),
new THREE.Vector4(-13.44950723,-2.25676194,-11.26288436,1),
new THREE.Vector4(-12.59589433,-2.556892242,-10.44728741,1),
new THREE.Vector4(-12.19803278,-2.694428342,-10.06714477,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["55"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["55"].divisions = "|PeaksFrozen|_17_5_v56";
Curves["56"] = function(){
var Curve_v01 = [[new THREE.Vector4(-19.71073199,-0.3696307854,-7.090992781,1),
new THREE.Vector4(-19.84177126,-0.70923934,-6.965789374,1),
new THREE.Vector4(-20.06311457,-1.310101287,-6.754303637,1),
new THREE.Vector4(-20.88758604,-2.142598595,-5.96655021,1),
new THREE.Vector4(-21.9497432,-2.446360313,-4.951696603,1),
new THREE.Vector4(-22.70324885,-2.69546573,-4.23174859,1),
new THREE.Vector4(-23.05445128,-2.80961944,-3.896187083,1),
],[new THREE.Vector4(-19.29032094,-0.3696307854,-7.090992781,1),
new THREE.Vector4(-19.15928167,-0.70923934,-6.965789374,1),
new THREE.Vector4(-18.93793835,-1.310101287,-6.754303637,1),
new THREE.Vector4(-18.11346689,-2.142598595,-5.96655021,1),
new THREE.Vector4(-17.05130972,-2.446360313,-4.951696603,1),
new THREE.Vector4(-16.29780407,-2.69546573,-4.23174859,1),
new THREE.Vector4(-15.94660164,-2.80961944,-3.896187083,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["56"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["56"].divisions = "|PeaksFrozen|_17_5_v57";
Curves["57"] = function(){
var Curve_v01 = [[new THREE.Vector4(-11.39718463,-0.01844645949,-6.32929573,1),
new THREE.Vector4(-11.5075504,-0.3060662928,-6.223845127,1),
new THREE.Vector4(-11.69397333,-0.8149457389,-6.045724587,1),
new THREE.Vector4(-12.38837147,-1.52000082,-5.382251638,1),
new THREE.Vector4(-13.28295665,-1.777261403,-4.52750713,1),
new THREE.Vector4(-13.91758495,-1.988232704,-3.921142225,1),
new THREE.Vector4(-14.21337968,-2.084911278,-3.638520817,1),
],[new THREE.Vector4(-11.04310003,-0.01844645949,-6.32929573,1),
new THREE.Vector4(-10.93273426,-0.3060662928,-6.223845127,1),
new THREE.Vector4(-10.74631133,-0.8149457389,-6.045724587,1),
new THREE.Vector4(-10.05191319,-1.52000082,-5.382251638,1),
new THREE.Vector4(-9.157328003,-1.777261403,-4.52750713,1),
new THREE.Vector4(-8.522699706,-1.988232704,-3.921142225,1),
new THREE.Vector4(-8.226904974,-2.084911278,-3.638520817,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["57"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["57"].divisions = "|PeaksFrozen|_17_5_v58";
Curves["58"] = function(){
var Curve_v01 = [[new THREE.Vector4(-10.62276021,0.07552148764,1.057521771,1),
new THREE.Vector4(-10.73312598,-0.2229732033,1.162972374,1),
new THREE.Vector4(-10.91954891,-0.7510932958,1.341092913,1),
new THREE.Vector4(-11.61394705,-1.482806391,2.004565862,1),
new THREE.Vector4(-12.50853224,-1.749793953,2.859310371,1),
new THREE.Vector4(-13.14316054,-1.968742044,3.465675275,1),
new THREE.Vector4(-13.43895527,-2.069076019,3.748296683,1),
],[new THREE.Vector4(-10.26867561,0.07552148764,1.057521771,1),
new THREE.Vector4(-10.15830984,-0.2229732033,1.162972374,1),
new THREE.Vector4(-9.971886915,-0.7510932958,1.341092913,1),
new THREE.Vector4(-9.277488775,-1.482806391,2.004565862,1),
new THREE.Vector4(-8.382903588,-1.749793953,2.859310371,1),
new THREE.Vector4(-7.74827529,-1.968742044,3.465675275,1),
new THREE.Vector4(-7.452480559,-2.069076019,3.748296683,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["58"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["58"].divisions = "|PeaksFrozen|_17_5_v59";
Curves["59"] = function(){
var Curve_v01 = [[new THREE.Vector4(-2.878516061,0.3662105634,2.725512819,1),
new THREE.Vector4(-2.988881828,0.08302039127,2.830963422,1),
new THREE.Vector4(-3.175304757,-0.4180217526,3.009083962,1),
new THREE.Vector4(-3.869702897,-1.112218212,3.672556911,1),
new THREE.Vector4(-4.764288085,-1.365516699,4.527301419,1),
new THREE.Vector4(-5.398916382,-1.57323881,5.133666323,1),
new THREE.Vector4(-5.694711113,-1.668428429,5.416287732,1),
],[new THREE.Vector4(-2.524431458,0.3662105634,2.725512819,1),
new THREE.Vector4(-2.414065691,0.08302039127,2.830963422,1),
new THREE.Vector4(-2.227642762,-0.4180217526,3.009083962,1),
new THREE.Vector4(-1.533244622,-1.112218212,3.672556911,1),
new THREE.Vector4(-0.6386594341,-1.365516699,4.527301419,1),
new THREE.Vector4(-0.004031136881,-1.57323881,5.133666323,1),
new THREE.Vector4(0.2917635944,-1.668428429,5.416287732,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["59"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["59"].divisions = "|PeaksFrozen|_17_5_v60";
Curves["60"] = function(){
var Curve_v01 = [[new THREE.Vector4(5.223154746,0.3295816243,0.9979506617,1),
new THREE.Vector4(5.112788979,-0.005931690461,1.103401265,1),
new THREE.Vector4(4.92636605,-0.5995480199,1.281521804,1),
new THREE.Vector4(4.231967909,-1.422006488,1.944994753,1),
new THREE.Vector4(3.337382722,-1.722105232,2.799739262,1),
new THREE.Vector4(2.702754425,-1.96820676,3.406104166,1),
new THREE.Vector4(2.406959693,-2.080983924,3.688725574,1),
],[new THREE.Vector4(5.577239349,0.3295816243,0.9979506617,1),
new THREE.Vector4(5.687605115,-0.005931690461,1.103401265,1),
new THREE.Vector4(5.874028045,-0.5995480199,1.281521804,1),
new THREE.Vector4(6.568426185,-1.422006488,1.944994753,1),
new THREE.Vector4(7.463011373,-1.722105232,2.799739262,1),
new THREE.Vector4(8.09763967,-1.96820676,3.406104166,1),
new THREE.Vector4(8.393434401,-2.080983924,3.688725574,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["60"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["60"].divisions = "|PeaksFrozen|_17_5_v61";
Curves["61"] = function(){
var Curve_v01 = [[new THREE.Vector4(13.20568333,0.4750077063,-2.159318109,1),
new THREE.Vector4(13.09531757,0.07155437505,-2.053867506,1),
new THREE.Vector4(12.90889464,-0.6422667315,-1.875746966,1),
new THREE.Vector4(12.2144965,-1.631269534,-1.212274017,1),
new THREE.Vector4(11.31991131,-1.992136995,-0.3575295085,1),
new THREE.Vector4(10.68528301,-2.288073034,0.2488353958,1),
new THREE.Vector4(10.38948828,-2.423687093,0.531456804,1),
],[new THREE.Vector4(13.55976794,0.4750077063,-2.159318109,1),
new THREE.Vector4(13.6701337,0.07155437505,-2.053867506,1),
new THREE.Vector4(13.85655663,-0.6422667315,-1.875746966,1),
new THREE.Vector4(14.55095477,-1.631269534,-1.212274017,1),
new THREE.Vector4(15.44553996,-1.992136995,-0.3575295085,1),
new THREE.Vector4(16.08016826,-2.288073034,0.2488353958,1),
new THREE.Vector4(16.37596299,-2.423687093,0.531456804,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["61"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["61"].divisions = "|PeaksFrozen|_17_5_v62";
Curves["62"] = function(){
var Curve_v01 = [[new THREE.Vector4(9.28097188,-0.18117287,4.955182296,1),
new THREE.Vector4(9.17495843,-0.4791668414,5.056474414,1),
new THREE.Vector4(8.995887161,-1.006401022,5.227570701,1),
new THREE.Vector4(8.328872879,-1.736886682,5.864879339,1),
new THREE.Vector4(7.469566002,-2.003426377,6.685916669,1),
new THREE.Vector4(6.859964516,-2.222007186,7.26836934,1),
new THREE.Vector4(6.575834564,-2.322172853,7.539845464,1),
],[new THREE.Vector4(9.621093021,-0.18117287,4.955182296,1),
new THREE.Vector4(9.727106471,-0.4791668414,5.056474414,1),
new THREE.Vector4(9.90617774,-1.006401022,5.227570701,1),
new THREE.Vector4(10.57319202,-1.736886682,5.864879339,1),
new THREE.Vector4(11.4324989,-2.003426377,6.685916669,1),
new THREE.Vector4(12.04210039,-2.222007186,7.26836934,1),
new THREE.Vector4(12.32623034,-2.322172853,7.539845464,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["62"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["62"].divisions = "|PeaksFrozen|_17_5_v63";
Curves["63"] = function(){
var Curve_v01 = [[new THREE.Vector4(2.072867707,0.3101213235,6.265746691,1),
new THREE.Vector4(1.966854257,-0.001795792936,6.367038809,1),
new THREE.Vector4(1.787782987,-0.5536638876,6.538135097,1),
new THREE.Vector4(1.120768705,-1.318279962,7.175443735,1),
new THREE.Vector4(0.2614618286,-1.597273167,7.996481064,1),
new THREE.Vector4(-0.3481396574,-1.826066707,8.578933735,1),
new THREE.Vector4(-0.6322696096,-1.930912405,8.850409859,1),
],[new THREE.Vector4(2.412988847,0.3101213235,6.265746691,1),
new THREE.Vector4(2.519002297,-0.001795792936,6.367038809,1),
new THREE.Vector4(2.698073567,-0.5536638876,6.538135097,1),
new THREE.Vector4(3.365087849,-1.318279962,7.175443735,1),
new THREE.Vector4(4.224394725,-1.597273167,7.996481064,1),
new THREE.Vector4(4.833996211,-1.826066707,8.578933735,1),
new THREE.Vector4(5.118126164,-1.930912405,8.850409859,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["63"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["63"].divisions = "|PeaksFrozen|_17_5_v64";
Curves["64"] = function(){
var Curve_v01 = [[new THREE.Vector4(-5.552234229,0.6676512201,7.099742215,1),
new THREE.Vector4(-5.658247679,0.368038281,7.201034333,1),
new THREE.Vector4(-5.837318948,-0.1620603033,7.372130621,1),
new THREE.Vector4(-6.504333231,-0.8965146095,8.009439259,1),
new THREE.Vector4(-7.363640107,-1.164502385,8.830476589,1),
new THREE.Vector4(-7.973241593,-1.384270718,9.412929259,1),
new THREE.Vector4(-8.257371545,-1.484980574,9.684405384,1),
],[new THREE.Vector4(-5.212113089,0.6676512201,7.099742215,1),
new THREE.Vector4(-5.106099638,0.368038281,7.201034333,1),
new THREE.Vector4(-4.927028369,-0.1620603033,7.372130621,1),
new THREE.Vector4(-4.260014087,-0.8965146095,8.009439259,1),
new THREE.Vector4(-3.40070721,-1.164502385,8.830476589,1),
new THREE.Vector4(-2.791105724,-1.384270718,9.412929259,1),
new THREE.Vector4(-2.506975772,-1.484980574,9.684405384,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["64"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["64"].divisions = "|PeaksFrozen|_17_5_v65";
Curves["65"] = function(){
var Curve_v01 = [[new THREE.Vector4(-7.10108306,0.1358309671,10.91229318,1),
new THREE.Vector4(-7.20709651,-0.124607958,11.0135853,1),
new THREE.Vector4(-7.386167779,-0.5853968208,11.18468159,1),
new THREE.Vector4(-8.053182062,-1.223822153,11.82199023,1),
new THREE.Vector4(-8.912488938,-1.456770864,12.64302756,1),
new THREE.Vector4(-9.522090424,-1.647804765,13.22548023,1),
new THREE.Vector4(-9.806220376,-1.735346934,13.49695635,1),
],[new THREE.Vector4(-6.760961919,0.1358309671,10.91229318,1),
new THREE.Vector4(-6.654948469,-0.124607958,11.0135853,1),
new THREE.Vector4(-6.4758772,-0.5853968208,11.18468159,1),
new THREE.Vector4(-5.808862917,-1.223822153,11.82199023,1),
new THREE.Vector4(-4.949556041,-1.456770864,12.64302756,1),
new THREE.Vector4(-4.339954555,-1.647804765,13.22548023,1),
new THREE.Vector4(-4.055824603,-1.735346934,13.49695635,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["65"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["65"].divisions = "|PeaksFrozen|_17_5_v66";
Curves["66"] = function(){
var Curve_v01 = [[new THREE.Vector4(-1.153563823,0.1452713567,9.542157679,1),
new THREE.Vector4(-1.259577273,-0.05686469771,9.643449797,1),
new THREE.Vector4(-1.438648542,-0.4144995735,9.814546085,1),
new THREE.Vector4(-2.105662825,-0.9100045274,10.45185472,1),
new THREE.Vector4(-2.964969701,-1.090804434,11.27289205,1),
new THREE.Vector4(-3.574571187,-1.239072743,11.85534472,1),
new THREE.Vector4(-3.858701139,-1.307017382,12.12682085,1),
],[new THREE.Vector4(-0.8134426825,0.1452713567,9.542157679,1),
new THREE.Vector4(-0.7074292324,-0.05686469771,9.643449797,1),
new THREE.Vector4(-0.528357963,-0.4144995735,9.814546085,1),
new THREE.Vector4(0.1386563195,-0.9100045274,10.45185472,1),
new THREE.Vector4(0.9979631957,-1.090804434,11.27289205,1),
new THREE.Vector4(1.607564682,-1.239072743,11.85534472,1),
new THREE.Vector4(1.891694634,-1.307017382,12.12682085,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["66"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["66"].divisions = "|PeaksFrozen|_17_5_v67";
Curves["67"] = function(){
var Curve_v01 = [[new THREE.Vector4(4.835850088,0.1433768992,9.972769137,1),
new THREE.Vector4(4.729836638,-0.1081108046,10.07406125,1),
new THREE.Vector4(4.550765369,-0.5530624683,10.24515754,1),
new THREE.Vector4(3.883751086,-1.169545279,10.88246618,1),
new THREE.Vector4(3.02444421,-1.394487601,11.70350351,1),
new THREE.Vector4(2.414842724,-1.578955715,12.28595618,1),
new THREE.Vector4(2.130712772,-1.663489081,12.55743231,1),
],[new THREE.Vector4(5.175971229,0.1433768992,9.972769137,1),
new THREE.Vector4(5.281984679,-0.1081108046,10.07406125,1),
new THREE.Vector4(5.461055948,-0.5530624683,10.24515754,1),
new THREE.Vector4(6.12807023,-1.169545279,10.88246618,1),
new THREE.Vector4(6.987377107,-1.394487601,11.70350351,1),
new THREE.Vector4(7.596978593,-1.578955715,12.28595618,1),
new THREE.Vector4(7.881108545,-1.663489081,12.55743231,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["67"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["67"].divisions = "|PeaksFrozen|_17_5_v68";
Curves["68"] = function(){
var Curve_v01 = [[new THREE.Vector4(-6.016610056,0.9001993022,-0.8402115276,1),
new THREE.Vector4(-5.93993272,0.5432712233,-0.7074024647,1),
new THREE.Vector4(-5.796366942,-0.1016597276,-0.4587392066,1),
new THREE.Vector4(-5.325749785,-0.8432535546,0.3563936557,1),
new THREE.Vector4(-4.79596433,-1.075852919,1.274008808,1),
new THREE.Vector4(-4.427355323,-1.309567341,1.912458252,1),
new THREE.Vector4(-4.252946314,-1.411388504,2.214543473,1),
],[new THREE.Vector4(-5.905735958,0.9001993022,-1.032251119,1),
new THREE.Vector4(-5.752381279,0.5432712043,-1.032251119,1),
new THREE.Vector4(-5.465249694,-0.1016597972,-1.032251119,1),
new THREE.Vector4(-4.52401528,-0.8432536158,-1.032251119,1),
new THREE.Vector4(-3.464444447,-1.075852922,-1.032251119,1),
new THREE.Vector4(-2.727226474,-1.309567347,-1.032251119,1),
new THREE.Vector4(-2.378408474,-1.411388504,-1.032251119,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["68"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["68"].divisions = "|PeaksFrozen|_17_5_v69";
Curves["69"] = function(){
var Curve_v01 = [[new THREE.Vector4(1.313237663,1.006729106,-0.1527381551,1),
new THREE.Vector4(1.389914998,0.6668400849,-0.01992909224,1),
new THREE.Vector4(1.533480777,0.05269689383,0.2287341659,1),
new THREE.Vector4(2.004097934,-0.653494674,1.043867028,1),
new THREE.Vector4(2.533883388,-0.8749901934,1.96148218,1),
new THREE.Vector4(2.902492395,-1.09754754,2.599931625,1),
new THREE.Vector4(3.076901404,-1.194507956,2.902016845,1),
],[new THREE.Vector4(1.424111761,1.006729106,-0.3447777466,1),
new THREE.Vector4(1.57746644,0.6668400667,-0.3447777466,1),
new THREE.Vector4(1.864598025,0.0526968275,-0.3447777466,1),
new THREE.Vector4(2.805832439,-0.6534947324,-0.3447777466,1),
new THREE.Vector4(3.865403271,-0.8749901965,-0.3447777466,1),
new THREE.Vector4(4.602621244,-1.097547545,-0.3447777466,1),
new THREE.Vector4(4.951439244,-1.194507956,-0.3447777466,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["69"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["69"].divisions = "|PeaksFrozen|_17_5_v70";
Curves["70"] = function(){
var Curve_v01 = [[new THREE.Vector4(-1.044535575,0.7405583547,-4.273246716,1),
new THREE.Vector4(-0.9856332143,0.4486867957,-4.171224818,1),
new THREE.Vector4(-0.8753481715,-0.0786939658,-3.980205493,1),
new THREE.Vector4(-0.5138272445,-0.6851190671,-3.354032853,1),
new THREE.Vector4(-0.1068541335,-0.8753230414,-2.64913488,1),
new THREE.Vector4(0.176305687,-1.066438834,-2.158687748,1),
new THREE.Vector4(0.3102840296,-1.14970127,-1.926630486,1),
],[new THREE.Vector4(-0.9593637823,0.7405583547,-4.420768603,1),
new THREE.Vector4(-0.8415590554,0.4486867802,-4.420768603,1),
new THREE.Vector4(-0.6209889487,-0.07869402275,-4.420768603,1),
new THREE.Vector4(0.1020529821,-0.6851191172,-4.420768603,1),
new THREE.Vector4(0.9159991451,-0.8753230441,-4.420768603,1),
new THREE.Vector4(1.482318755,-1.066438839,-4.420768603,1),
new THREE.Vector4(1.750275426,-1.14970127,-4.420768603,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["70"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["70"].divisions = "|PeaksFrozen|_17_5_v71";
Curves["71"] = function(){
var Curve_v01 = [[new THREE.Vector4(8.151946064,0.96921945,-4.962971741,1),
new THREE.Vector4(8.242188512,0.5919676655,-4.806667211,1),
new THREE.Vector4(8.411152746,-0.08968605263,-4.51401253,1),
new THREE.Vector4(8.965027553,-0.8735066909,-3.554673182,1),
new THREE.Vector4(9.588538217,-1.119350407,-2.474721236,1),
new THREE.Vector4(10.02235844,-1.366372673,-1.723322658,1),
new THREE.Vector4(10.22762244,-1.473991595,-1.367795048,1),
],[new THREE.Vector4(8.28243508,0.96921945,-5.188985371,1),
new THREE.Vector4(8.462919985,0.5919676454,-5.188985371,1),
new THREE.Vector4(8.800848487,-0.08968612625,-5.188985371,1),
new THREE.Vector4(9.908598218,-0.8735067556,-5.188985371,1),
new THREE.Vector4(11.15561946,-1.119350411,-5.188985371,1),
new THREE.Vector4(12.02325986,-1.366372679,-5.188985371,1),
new THREE.Vector4(12.43378783,-1.473991595,-5.188985371,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["71"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["71"].divisions = "|PeaksFrozen|_17_5_v72";
Curves["72"] = function(){
var Curve_v01 = [[new THREE.Vector4(14.68847234,-0.261138222,-9.297670861,1),
new THREE.Vector4(14.79793255,-0.5507778619,-9.108080178,1),
new THREE.Vector4(15.00287891,-1.074125784,-8.75310262,1),
new THREE.Vector4(15.67470526,-1.6759136,-7.589465196,1),
new THREE.Vector4(16.43099692,-1.864663099,-6.279529869,1),
new THREE.Vector4(16.95720222,-2.054317444,-5.368115667,1),
new THREE.Vector4(17.20617863,-2.136943179,-4.936875945,1),
],[new THREE.Vector4(14.84674991,-0.261138222,-9.571815686,1),
new THREE.Vector4(15.06567035,-0.5507778774,-9.571815686,1),
new THREE.Vector4(15.4755631,-1.07412584,-9.571815686,1),
new THREE.Vector4(16.81921595,-1.675913649,-9.571815686,1),
new THREE.Vector4(18.33179915,-1.864663102,-9.571815686,1),
new THREE.Vector4(19.3842097,-2.054317449,-9.571815686,1),
new THREE.Vector4(19.88216249,-2.136943179,-9.571815686,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["72"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["72"].divisions = "|PeaksFrozen|_17_5_v73";
Curves["73"] = function(){
var Curve_v01 = [[new THREE.Vector4(3.575694619,0.01636635083,-9.797772532,1),
new THREE.Vector4(3.688357794,-0.2644898859,-9.602634157,1),
new THREE.Vector4(3.899301174,-0.7719671357,-9.237269452,1),
new THREE.Vector4(4.590786116,-1.355505568,-8.039582348,1),
new THREE.Vector4(5.369207937,-1.538531185,-6.691316458,1),
new THREE.Vector4(5.910810753,-1.72243421,-5.753232985,1),
new THREE.Vector4(6.167072562,-1.802554296,-5.309374579,1),
],[new THREE.Vector4(3.738603617,0.01636635083,-10.07993922,1),
new THREE.Vector4(3.963929978,-0.2644899009,-10.07993922,1),
new THREE.Vector4(4.385816779,-0.7719671905,-10.07993922,1),
new THREE.Vector4(5.768786811,-1.355505616,-10.07993922,1),
new THREE.Vector4(7.325630339,-1.538531188,-10.07993922,1),
new THREE.Vector4(8.408835912,-1.722434214,-10.07993922,1),
new THREE.Vector4(8.921359501,-1.802554296,-10.07993922,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["73"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["73"].divisions = "|PeaksFrozen|_17_5_v74";
Curves["74"] = function(){
var Curve_v01 = [[new THREE.Vector4(-4.853487661,0.3972366201,-11.21149383,1),
new THREE.Vector4(-4.754917515,0.0264409155,-11.0407653,1),
new THREE.Vector4(-4.570361026,-0.6435473553,-10.72110404,1),
new THREE.Vector4(-3.965373883,-1.413954118,-9.673235521,1),
new THREE.Vector4(-3.284324789,-1.655590599,-8.49362411,1),
new THREE.Vector4(-2.810471029,-1.898385462,-7.672885429,1),
new THREE.Vector4(-2.586264991,-2.004162653,-7.284549237,1),
],[new THREE.Vector4(-4.710956938,0.3972366201,-11.45836431,1),
new THREE.Vector4(-4.513816634,0.0264408957,-11.45836431,1),
new THREE.Vector4(-4.144703621,-0.6435474276,-11.45836431,1),
new THREE.Vector4(-2.934729207,-1.413954181,-11.45836431,1),
new THREE.Vector4(-1.572631119,-1.655590603,-11.45836431,1),
new THREE.Vector4(-0.6249236494,-1.898385468,-11.45836431,1),
new THREE.Vector4(-0.1765115974,-2.004162653,-11.45836431,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["74"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["74"].divisions = "|PeaksFrozen|_17_5_v75";
Curves["75"] = function(){
var Curve_v01 = [[new THREE.Vector4(0.698897717,-0.02760448381,-16.30979671,1),
new THREE.Vector4(0.8070767461,-0.2961804999,-16.1224251,1),
new THREE.Vector4(1.009624297,-0.7814687015,-15.7716024,1),
new THREE.Vector4(1.673587213,-1.339492369,-14.62158485,1),
new THREE.Vector4(2.421026802,-1.514515334,-13.32698175,1),
new THREE.Vector4(2.9410731,-1.690377342,-12.42623525,1),
new THREE.Vector4(3.187135345,-1.766994239,-12.000043,1),
],[new THREE.Vector4(0.8553227183,-0.02760448381,-16.58073278,1),
new THREE.Vector4(1.071680788,-0.2961805143,-16.58073278,1),
new THREE.Vector4(1.476775929,-0.7814687539,-16.58073278,1),
new THREE.Vector4(2.804701901,-1.339492415,-16.58073278,1),
new THREE.Vector4(4.299580971,-1.514515337,-16.58073278,1),
new THREE.Vector4(5.339673511,-1.690377346,-16.58073278,1),
new THREE.Vector4(5.831797975,-1.766994239,-16.58073278,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["75"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["75"].divisions = "|PeaksFrozen|_17_5_v76";
Curves["76"] = function(){
var Curve_v01 = [[new THREE.Vector4(8.420443703,0.4582326618,-17.19918944,1),
new THREE.Vector4(8.528622732,0.06067398607,-17.01181783,1),
new THREE.Vector4(8.731170284,-0.6576721176,-16.66099513,1),
new THREE.Vector4(9.395133199,-1.483684632,-15.51097758,1),
new THREE.Vector4(10.14257279,-1.742761742,-14.21637448,1),
new THREE.Vector4(10.66261909,-2.003080842,-13.31562798,1),
new THREE.Vector4(10.90868133,-2.116492727,-12.88943574,1),
],[new THREE.Vector4(8.576868705,0.4582326618,-17.47012552,1),
new THREE.Vector4(8.793226774,0.06067396484,-17.47012552,1),
new THREE.Vector4(9.198321916,-0.6576721952,-17.47012552,1),
new THREE.Vector4(10.52624789,-1.4836847,-17.47012552,1),
new THREE.Vector4(12.02112696,-1.742761746,-17.47012552,1),
new THREE.Vector4(13.0612195,-2.003080848,-17.47012552,1),
new THREE.Vector4(13.55334396,-2.116492727,-17.47012552,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["76"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["76"].divisions = "|PeaksFrozen|_17_5_v77";
Curves["77"] = function(){
var Curve_v01 = [[new THREE.Vector4(-3.118771748,0.589764401,-24.18089408,1),
new THREE.Vector4(-2.938846394,0.1420670861,-23.86925417,1),
new THREE.Vector4(-2.601965576,-0.6668741885,-23.28575939,1),
new THREE.Vector4(-1.497650228,-1.597060365,-21.37302902,1),
new THREE.Vector4(-0.2544949367,-1.888811329,-19.2198213,1),
new THREE.Vector4(0.6104556449,-2.181960917,-17.72168314,1),
new THREE.Vector4(1.019710903,-2.309675893,-17.01283235,1),
],[new THREE.Vector4(-2.858602805,0.589764401,-24.63151995,1),
new THREE.Vector4(-2.498752078,0.1420670622,-24.63151995,1),
new THREE.Vector4(-1.824990378,-0.6668742758,-24.63151995,1),
new THREE.Vector4(0.3836405544,-1.597060442,-24.63151995,1),
new THREE.Vector4(2.869950956,-1.888811333,-24.63151995,1),
new THREE.Vector4(4.599852024,-2.181960924,-24.63151995,1),
new THREE.Vector4(5.418362496,-2.309675893,-24.63151995,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["77"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["77"].divisions = "|PeaksFrozen|_17_5_v78";
Curves["78"] = function(){
var Curve_v01 = [[new THREE.Vector4(-14.42476315,0.1326870093,-26.46933635,1),
new THREE.Vector4(-14.2448378,-0.2456910834,-26.15769644,1),
new THREE.Vector4(-13.90795698,-0.9293799203,-25.57420167,1),
new THREE.Vector4(-12.80364163,-1.715540703,-23.66147129,1),
new THREE.Vector4(-11.56048634,-1.9621184,-21.50826357,1),
new THREE.Vector4(-10.69553576,-2.209878167,-20.01012541,1),
new THREE.Vector4(-10.2862805,-2.317818391,-19.30127462,1),
],[new THREE.Vector4(-14.16459421,0.1326870093,-26.91996222,1),
new THREE.Vector4(-13.80474348,-0.2456911036,-26.91996222,1),
new THREE.Vector4(-13.13098178,-0.9293799941,-26.91996222,1),
new THREE.Vector4(-10.92235085,-1.715540768,-26.91996222,1),
new THREE.Vector4(-8.436040449,-1.962118404,-26.91996222,1),
new THREE.Vector4(-6.70613938,-2.209878172,-26.91996222,1),
new THREE.Vector4(-5.887628909,-2.317818391,-26.91996222,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["78"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["78"].divisions = "|PeaksFrozen|_17_5_v79";
Curves["79"] = function(){
var Curve_v01 = [[new THREE.Vector4(-14.95284606,-0.6453333907,-37.04978254,1),
new THREE.Vector4(-14.77403302,-1.132427827,-36.74006922,1),
new THREE.Vector4(-14.43923483,-2.012555496,-36.16018166,1),
new THREE.Vector4(-13.34174644,-3.024597554,-34.25927593,1),
new THREE.Vector4(-12.10627644,-3.342022444,-32.11937951,1),
new THREE.Vector4(-11.24667305,-3.660969038,-30.63050296,1),
new THREE.Vector4(-10.83994784,-3.799922862,-29.92603433,1),
],[new THREE.Vector4(-14.69428551,-0.6453333907,-37.49762262,1),
new THREE.Vector4(-14.33665941,-1.132427853,-37.49762262,1),
new THREE.Vector4(-13.66706295,-2.012555591,-37.49762262,1),
new THREE.Vector4(-11.47208595,-3.024597637,-37.49762262,1),
new THREE.Vector4(-9.001146111,-3.342022449,-37.49762262,1),
new THREE.Vector4(-7.281939426,-3.660969045,-37.49762262,1),
new THREE.Vector4(-6.46848905,-3.799922862,-37.49762262,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["79"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["79"].divisions = "|PeaksFrozen|_17_5_v80";
Curves["80"] = function(){
var Curve_v01 = [[new THREE.Vector4(-16.02512602,0.4208475236,-46.8194444,1),
new THREE.Vector4(-15.84631298,-0.06747016663,-46.50973108,1),
new THREE.Vector4(-15.51151479,-0.9498081247,-45.92984351,1),
new THREE.Vector4(-14.4140264,-1.964391751,-44.02893778,1),
new THREE.Vector4(-13.1785564,-2.2826138,-41.88904136,1),
new THREE.Vector4(-12.31895301,-2.602361372,-40.40016481,1),
new THREE.Vector4(-11.9122278,-2.741664155,-39.69569619,1),
],[new THREE.Vector4(-15.76656547,0.4208475236,-47.26728447,1),
new THREE.Vector4(-15.40893936,-0.06747019271,-47.26728447,1),
new THREE.Vector4(-14.73934291,-0.94980822,-47.26728447,1),
new THREE.Vector4(-12.54436591,-1.964391835,-47.26728447,1),
new THREE.Vector4(-10.07342607,-2.282613804,-47.26728447,1),
new THREE.Vector4(-8.354219386,-2.60236138,-47.26728447,1),
new THREE.Vector4(-7.540769009,-2.741664155,-47.26728447,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["80"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["80"].divisions = "|PeaksFrozen|_17_5_v81";
Curves["81"] = function(){
var Curve_v01 = [[new THREE.Vector4(-33.47946092,-0.7714105649,-42.29204013,1),
new THREE.Vector4(-33.30064788,-1.259322551,-41.9823268,1),
new THREE.Vector4(-32.96584969,-2.140927446,-41.40243924,1),
new THREE.Vector4(-31.8683613,-3.154668137,-39.50153351,1),
new THREE.Vector4(-30.6328913,-3.472625801,-37.36163709,1),
new THREE.Vector4(-29.77328791,-3.792107721,-35.87276054,1),
new THREE.Vector4(-29.3665627,-3.931294769,-35.16829191,1),
],[new THREE.Vector4(-33.22090037,-0.7714105649,-42.7398802,1),
new THREE.Vector4(-32.86327426,-1.259322577,-42.7398802,1),
new THREE.Vector4(-32.19367781,-2.140927541,-42.7398802,1),
new THREE.Vector4(-29.99870081,-3.154668221,-42.7398802,1),
new THREE.Vector4(-27.52776097,-3.472625805,-42.7398802,1),
new THREE.Vector4(-25.80855429,-3.792107729,-42.7398802,1),
new THREE.Vector4(-24.99510391,-3.931294769,-42.7398802,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["81"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["81"].divisions = "|PeaksFrozen|_17_5_v82";
Curves["82"] = function(){
var Curve_v01 = [[new THREE.Vector4(7.326748654,0.4908121903,-36.69235589,1),
new THREE.Vector4(7.505561695,0.001271252292,-36.38264257,1),
new THREE.Vector4(7.840359889,-0.883276984,-35.802755,1),
new THREE.Vector4(8.937848275,-1.900402167,-33.90184928,1),
new THREE.Vector4(10.17331828,-2.21942137,-31.76195285,1),
new THREE.Vector4(11.03292167,-2.539969918,-30.2730763,1),
new THREE.Vector4(11.43964688,-2.679621658,-29.56860768,1),
],[new THREE.Vector4(7.585309213,0.4908121903,-37.14019596,1),
new THREE.Vector4(7.942935314,0.001271226151,-37.14019596,1),
new THREE.Vector4(8.612531766,-0.8832770795,-37.14019596,1),
new THREE.Vector4(10.80750877,-1.900402252,-37.14019596,1),
new THREE.Vector4(13.27844861,-2.219421375,-37.14019596,1),
new THREE.Vector4(14.99765529,-2.539969926,-37.14019596,1),
new THREE.Vector4(15.81110567,-2.679621658,-37.14019596,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["82"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["82"].divisions = "|PeaksFrozen|_17_5_v83";
Curves["83"] = function(){
var Curve_v01 = [[new THREE.Vector4(14.3561395,-0.8457228882,-46.87901551,1),
new THREE.Vector4(14.53495254,-1.322210034,-46.56930218,1),
new THREE.Vector4(14.86975074,-2.18317146,-45.98941462,1),
new THREE.Vector4(15.96723912,-3.173174619,-44.08850889,1),
new THREE.Vector4(17.20270913,-3.483687055,-41.94861247,1),
new THREE.Vector4(18.06231252,-3.795688056,-40.45973592,1),
new THREE.Vector4(18.46903773,-3.93161593,-39.75526729,1),
],[new THREE.Vector4(14.61470006,-0.8457228882,-47.32685558,1),
new THREE.Vector4(14.97232616,-1.322210059,-47.32685558,1),
new THREE.Vector4(15.64192261,-2.183171553,-47.32685558,1),
new THREE.Vector4(17.83689962,-3.173174701,-47.32685558,1),
new THREE.Vector4(20.30783945,-3.48368706,-47.32685558,1),
new THREE.Vector4(22.02704614,-3.795688064,-47.32685558,1),
new THREE.Vector4(22.84049652,-3.93161593,-47.32685558,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["83"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["83"].divisions = "|PeaksFrozen|_17_5_v84";
Curves["84"] = function(){
var Curve_v01 = [[new THREE.Vector4(30.38076779,0.4896152361,-43.72174674,1),
new THREE.Vector4(30.55958083,-0.008662584769,-43.41203341,1),
new THREE.Vector4(30.89437902,-0.908997436,-42.83214585,1),
new THREE.Vector4(31.99186741,-1.944275347,-40.93124012,1),
new THREE.Vector4(33.22733742,-2.268988115,-38.7913437,1),
new THREE.Vector4(34.08694081,-2.595257524,-37.30246715,1),
new THREE.Vector4(34.49366602,-2.737401641,-36.59799852,1),
],[new THREE.Vector4(30.63932835,0.4896152361,-44.16958681,1),
new THREE.Vector4(30.99695445,-0.008662611377,-44.16958681,1),
new THREE.Vector4(31.6665509,-0.9089975332,-44.16958681,1),
new THREE.Vector4(33.8615279,-1.944275433,-44.16958681,1),
new THREE.Vector4(36.33246774,-2.26898812,-44.16958681,1),
new THREE.Vector4(38.05167443,-2.595257531,-44.16958681,1),
new THREE.Vector4(38.8651248,-2.737401641,-44.16958681,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["84"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["84"].divisions = "|PeaksFrozen|_17_5_v85";
Curves["85"] = function(){
var Curve_v01 = [[new THREE.Vector4(19.61341128,-0.2099907192,-28.35330076,1),
new THREE.Vector4(19.80260771,-0.6765742319,-28.02560287,1),
new THREE.Vector4(20.1568471,-1.51964085,-27.41204216,1),
new THREE.Vector4(21.31806489,-2.489067111,-25.40075387,1),
new THREE.Vector4(22.62527668,-2.793125645,-23.13659706,1),
new THREE.Vector4(23.53479587,-3.098641805,-21.56126382,1),
new THREE.Vector4(23.96513896,-3.231744462,-20.81588783,1),
],[new THREE.Vector4(19.88698604,-0.2099907192,-28.82714619,1),
new THREE.Vector4(20.26537892,-0.6765742568,-28.82714619,1),
new THREE.Vector4(20.97385777,-1.519640941,-28.82714619,1),
new THREE.Vector4(23.2962936,-2.489067191,-28.82714619,1),
new THREE.Vector4(25.91071698,-2.793125649,-28.82714619,1),
new THREE.Vector4(27.72975526,-3.098641812,-28.82714619,1),
new THREE.Vector4(28.5904414,-3.231744462,-28.82714619,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["85"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["85"].divisions = "|PeaksFrozen|_17_5_v86";
Curves["86"] = function(){
var Curve_v01 = [[new THREE.Vector4(25.37630895,-0.1711336863,-19.41313389,1),
new THREE.Vector4(25.51358844,-0.5697960673,-19.1753588,1),
new THREE.Vector4(25.77062184,-1.290136449,-18.73016383,1),
new THREE.Vector4(26.61319261,-2.118442144,-17.27078838,1),
new THREE.Vector4(27.56169551,-2.378238507,-15.62793347,1),
new THREE.Vector4(28.2216357,-2.639280306,-14.48488368,1),
new THREE.Vector4(28.53388937,-2.753007047,-13.94404454,1),
],[new THREE.Vector4(25.57481271,-0.1711336863,-19.75695252,1),
new THREE.Vector4(25.8493717,-0.5697960886,-19.75695252,1),
new THREE.Vector4(26.36343855,-1.290136526,-19.75695252,1),
new THREE.Vector4(28.04858027,-2.118442213,-19.75695252,1),
new THREE.Vector4(29.94558594,-2.37823851,-19.75695252,1),
new THREE.Vector4(31.26546624,-2.639280312,-19.75695252,1),
new THREE.Vector4(31.88997355,-2.753007047,-19.75695252,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["86"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["86"].divisions = "|PeaksFrozen|_17_5_v87";
Curves["87"] = function(){
var Curve_v01 = [[new THREE.Vector4(-11.21263624,0.3578072151,-17.89604193,1),
new THREE.Vector4(-11.08385226,-0.03900918425,-17.67298149,1),
new THREE.Vector4(-10.84272529,-0.7560140738,-17.25533727,1),
new THREE.Vector4(-10.05229676,-1.580484351,-15.88627483,1),
new THREE.Vector4(-9.162491671,-1.839077742,-14.34508751,1),
new THREE.Vector4(-8.543391683,-2.098910804,-13.27277501,1),
new THREE.Vector4(-8.25046174,-2.21211094,-12.76540554,1),
],[new THREE.Vector4(-11.02641683,0.3578072151,-18.21858345,1),
new THREE.Vector4(-10.76884884,-0.03900920544,-18.21858345,1),
new THREE.Vector4(-10.28659486,-0.7560141512,-18.21858345,1),
new THREE.Vector4(-8.705737628,-1.580484419,-18.21858345,1),
new THREE.Vector4(-6.926127588,-1.839077746,-18.21858345,1),
new THREE.Vector4(-5.68792768,-2.09891081,-18.21858345,1),
new THREE.Vector4(-5.102067824,-2.21211094,-18.21858345,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["87"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["87"].divisions = "|PeaksFrozen|_17_5_v88";
Curves["88"] = function(){
var Curve_v01 = [[new THREE.Vector4(-24.43742241,-0.284161727,-22.00644845,1),
new THREE.Vector4(-24.30863843,-0.6901732482,-21.783388,1),
new THREE.Vector4(-24.06751146,-1.423792742,-21.36574378,1),
new THREE.Vector4(-23.27708293,-2.267367836,-19.99668135,1),
new THREE.Vector4(-22.38727784,-2.531953413,-18.45549402,1),
new THREE.Vector4(-21.76817785,-2.797807387,-17.38318153,1),
new THREE.Vector4(-21.47524791,-2.913630623,-16.87581206,1),
],[new THREE.Vector4(-24.251203,-0.284161727,-22.32898997,1),
new THREE.Vector4(-23.99363501,-0.6901732699,-22.32898997,1),
new THREE.Vector4(-23.51138103,-1.423792821,-22.32898997,1),
new THREE.Vector4(-21.9305238,-2.267367906,-22.32898997,1),
new THREE.Vector4(-20.15091376,-2.531953417,-22.32898997,1),
new THREE.Vector4(-18.91271385,-2.797807393,-22.32898997,1),
new THREE.Vector4(-18.32685399,-2.913630623,-22.32898997,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["88"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["88"].divisions = "|PeaksFrozen|_17_5_v89";
Curves["89"] = function(){
var Curve_v01 = [[new THREE.Vector4(-16.03789606,0.2453492861,-13.01121101,1),
new THREE.Vector4(-15.90911207,-0.1612787909,-12.78815056,1),
new THREE.Vector4(-15.66798511,-0.896012335,-12.37050634,1),
new THREE.Vector4(-14.87755657,-1.740868455,-11.00144391,1),
new THREE.Vector4(-13.98775149,-2.005855823,-9.460256581,1),
new THREE.Vector4(-13.3686515,-2.272113514,-8.387944087,1),
new THREE.Vector4(-13.07572156,-2.388112635,-7.880574617,1),
],[new THREE.Vector4(-15.85167665,0.2453492861,-13.33375253,1),
new THREE.Vector4(-15.59410866,-0.1612788126,-13.33375253,1),
new THREE.Vector4(-15.11185468,-0.8960124144,-13.33375253,1),
new THREE.Vector4(-13.53099745,-1.740868525,-13.33375253,1),
new THREE.Vector4(-11.75138741,-2.005855827,-13.33375253,1),
new THREE.Vector4(-10.5131875,-2.27211352,-13.33375253,1),
new THREE.Vector4(-9.927327643,-2.388112635,-13.33375253,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["89"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["89"].divisions = "|PeaksFrozen|_17_5_v90";
Curves["90"] = function(){
var Curve_v01 = [[new THREE.Vector4(-19.33614589,-0.3696307854,-6.49498867,1),
new THREE.Vector4(-19.22246501,-0.7071283857,-6.298087584,1),
new THREE.Vector4(-19.00961615,-1.316950535,-5.929422491,1),
new THREE.Vector4(-18.31188493,-2.018173419,-4.720916519,1),
new THREE.Vector4(-17.52643152,-2.238110521,-3.360471561,1),
new THREE.Vector4(-16.97993633,-2.45910198,-2.413914254,1),
new THREE.Vector4(-16.72135968,-2.555380194,-1.966046415,1),
],[new THREE.Vector4(-19.17176531,-0.3696307854,-6.779704211,1),
new THREE.Vector4(-18.94440354,-0.7071284037,-6.779704211,1),
new THREE.Vector4(-18.51870578,-1.316950601,-6.779704211,1),
new THREE.Vector4(-17.1232432,-2.018173477,-6.779704211,1),
new THREE.Vector4(-15.55233649,-2.238110525,-6.779704211,1),
new THREE.Vector4(-14.45934618,-2.459101985,-6.779704211,1),
new THREE.Vector4(-13.94219289,-2.555380194,-6.779704211,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["90"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["90"].divisions = "|PeaksFrozen|_17_5_v91";
Curves["91"] = function(){
var Curve_v01 = [[new THREE.Vector4(-11.08169537,-0.01844645949,-5.82732063,1),
new THREE.Vector4(-10.98594944,-0.3042784924,-5.661483783,1),
new THREE.Vector4(-10.80668083,-0.8207464747,-5.3509814,1),
new THREE.Vector4(-10.21902767,-1.414623179,-4.333136229,1),
new THREE.Vector4(-9.557491875,-1.600891375,-3.187322835,1),
new THREE.Vector4(-9.097214888,-1.788052521,-2.390099812,1),
new THREE.Vector4(-8.879432762,-1.869592057,-2.01289016,1),
],[new THREE.Vector4(-10.94324841,-0.01844645949,-6.067117821,1),
new THREE.Vector4(-10.75175654,-0.3042785076,-6.067117821,1),
new THREE.Vector4(-10.39321929,-0.8207465305,-6.067117821,1),
new THREE.Vector4(-9.217912843,-1.414623228,-6.067117821,1),
new THREE.Vector4(-7.894841348,-1.600891377,-6.067117821,1),
new THREE.Vector4(-6.974287425,-1.788052525,-6.067117821,1),
new THREE.Vector4(-6.538723196,-1.869592057,-6.067117821,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["91"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["91"].divisions = "|PeaksFrozen|_17_5_v92";
Curves["92"] = function(){
var Curve_v01 = [[new THREE.Vector4(-10.30727095,0.07552148764,1.55949687,1),
new THREE.Vector4(-10.21152502,-0.2211178064,1.725333717,1),
new THREE.Vector4(-10.03225641,-0.7571133565,2.0358361,1),
new THREE.Vector4(-9.444603255,-1.373444439,3.053681272,1),
new THREE.Vector4(-8.78306746,-1.566755404,4.199494666,1),
new THREE.Vector4(-8.322790473,-1.760993082,4.996717688,1),
new THREE.Vector4(-8.105008347,-1.845615614,5.37392734,1),
],[new THREE.Vector4(-10.168824,0.07552148764,1.319699679,1),
new THREE.Vector4(-9.977332122,-0.2211178223,1.319699679,1),
new THREE.Vector4(-9.61879487,-0.7571134144,1.319699679,1),
new THREE.Vector4(-8.443488428,-1.37344449,1.319699679,1),
new THREE.Vector4(-7.120416933,-1.566755407,1.319699679,1),
new THREE.Vector4(-6.19986301,-1.760993087,1.319699679,1),
new THREE.Vector4(-5.76429878,-1.845615614,1.319699679,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["92"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["92"].divisions = "|PeaksFrozen|_17_5_v93";
Curves["93"] = function(){
var Curve_v01 = [[new THREE.Vector4(-2.563026801,0.3662105634,3.227487919,1),
new THREE.Vector4(-2.467280869,0.08478065766,3.393324765,1),
new THREE.Vector4(-2.28801226,-0.4237331508,3.703827149,1),
new THREE.Vector4(-1.700359102,-1.008463502,4.72167232,1),
new THREE.Vector4(-1.038823306,-1.191862963,5.867485714,1),
new THREE.Vector4(-0.5785463194,-1.376141622,6.664708736,1),
new THREE.Vector4(-0.3607641931,-1.456425359,7.041918388,1),
],[new THREE.Vector4(-2.424579843,0.3662105634,2.987690728,1),
new THREE.Vector4(-2.233087969,0.08478064264,2.987690728,1),
new THREE.Vector4(-1.874550716,-0.4237332057,2.987690728,1),
new THREE.Vector4(-0.6992442744,-1.00846355,2.987690728,1),
new THREE.Vector4(0.6238272209,-1.191862965,2.987690728,1),
new THREE.Vector4(1.544381144,-1.376141626,2.987690728,1),
new THREE.Vector4(1.979945373,-1.456425359,2.987690728,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["93"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["93"].divisions = "|PeaksFrozen|_17_5_v94";
Curves["94"] = function(){
var Curve_v01 = [[new THREE.Vector4(5.538644006,0.3295816243,1.499925762,1),
new THREE.Vector4(5.634389938,-0.00384619149,1.665762608,1),
new THREE.Vector4(5.813658547,-0.6063146747,1.976264991,1),
new THREE.Vector4(6.401311705,-1.299081718,2.994110163,1),
new THREE.Vector4(7.062847501,-1.516366663,4.139923557,1),
new THREE.Vector4(7.523124487,-1.734693251,4.937146579,1),
new THREE.Vector4(7.740906614,-1.829810474,5.314356231,1),
],[new THREE.Vector4(5.677090964,0.3295816243,1.26012857,1),
new THREE.Vector4(5.868582838,-0.003846209295,1.26012857,1),
new THREE.Vector4(6.227120091,-0.6063147397,1.26012857,1),
new THREE.Vector4(7.402426532,-1.299081775,1.26012857,1),
new THREE.Vector4(8.725498028,-1.516366666,1.26012857,1),
new THREE.Vector4(9.646051951,-1.734693256,1.26012857,1),
new THREE.Vector4(10.08161618,-1.829810474,1.26012857,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["94"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["94"].divisions = "|PeaksFrozen|_17_5_v95";
Curves["95"] = function(){
var Curve_v01 = [[new THREE.Vector4(13.52117259,0.4750077063,-1.657343009,1),
new THREE.Vector4(13.61691853,0.07406217867,-1.491506162,1),
new THREE.Vector4(13.79618714,-0.650403605,-1.181003779,1),
new THREE.Vector4(14.38384029,-1.483453023,-0.1631586076,1),
new THREE.Vector4(15.04537609,-1.744737243,0.9826547865,1),
new THREE.Vector4(15.50565308,-2.007274034,1.779877809,1),
new THREE.Vector4(15.7234352,-2.12165209,2.157087461,1),
],[new THREE.Vector4(13.65961955,0.4750077063,-1.8971402,1),
new THREE.Vector4(13.85111143,0.07406215726,-1.8971402,1),
new THREE.Vector4(14.20964868,-0.6504036833,-1.8971402,1),
new THREE.Vector4(15.38495512,-1.483453092,-1.8971402,1),
new THREE.Vector4(16.70802662,-1.744737247,-1.8971402,1),
new THREE.Vector4(17.62858054,-2.00727404,-1.8971402,1),
new THREE.Vector4(18.06414477,-2.12165209,-1.8971402,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["95"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["95"].divisions = "|PeaksFrozen|_17_5_v96";
Curves["96"] = function(){
var Curve_v01 = [[new THREE.Vector4(9.5840197,-0.18117287,5.437361815,1),
new THREE.Vector4(9.675989854,-0.4773145569,5.596658821,1),
new THREE.Vector4(9.848188937,-1.012410984,5.894916424,1),
new THREE.Vector4(10.41266777,-1.627708182,6.872622479,1),
new THREE.Vector4(11.04811564,-1.820694871,7.973250281,1),
new THREE.Vector4(11.49024143,-2.014606719,8.739034506,1),
new THREE.Vector4(11.69943523,-2.099087298,9.10136875,1),
],[new THREE.Vector4(9.717006949,-0.18117287,5.207021118,1),
new THREE.Vector4(9.900947268,-0.4773145727,5.207021118,1),
new THREE.Vector4(10.24534547,-1.012411042,5.207021118,1),
new THREE.Vector4(11.37430325,-1.627708233,5.207021118,1),
new THREE.Vector4(12.64519891,-1.820694874,5.207021118,1),
new THREE.Vector4(13.52945043,-2.014606724,5.207021118,1),
new THREE.Vector4(13.94783802,-2.099087298,5.207021118,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["96"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["96"].divisions = "|PeaksFrozen|_17_5_v97";
Curves["97"] = function(){
var Curve_v01 = [[new THREE.Vector4(2.375915526,0.3101213235,6.74792621,1),
new THREE.Vector4(2.467885681,0.0001430357083,6.907223216,1),
new THREE.Vector4(2.640084763,-0.5599546527,7.205480819,1),
new THREE.Vector4(3.204563593,-1.204000326,8.183186874,1),
new THREE.Vector4(3.84001147,-1.406003914,9.283814676,1),
new THREE.Vector4(4.282137256,-1.608975887,10.0495989,1),
new THREE.Vector4(4.491331061,-1.697403645,10.41193315,1),
],[new THREE.Vector4(2.508902776,0.3101213235,6.517585513,1),
new THREE.Vector4(2.692843094,0.0001430191558,6.517585513,1),
new THREE.Vector4(3.037241292,-0.5599547132,6.517585513,1),
new THREE.Vector4(4.166199072,-1.204000379,6.517585513,1),
new THREE.Vector4(5.437094733,-1.406003917,6.517585513,1),
new THREE.Vector4(6.321346258,-1.608975892,6.517585513,1),
new THREE.Vector4(6.739733844,-1.697403645,6.517585513,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["97"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["97"].divisions = "|PeaksFrozen|_17_5_v98";
Curves["98"] = function(){
var Curve_v01 = [[new THREE.Vector4(-5.24918641,0.6676512201,7.581921734,1),
new THREE.Vector4(-5.157216255,0.3699006288,7.741218741,1),
new THREE.Vector4(-4.985017173,-0.1681029169,8.039476343,1),
new THREE.Vector4(-4.420538343,-0.7867429556,9.017182398,1),
new THREE.Vector4(-3.785090466,-0.9807781196,10.1178102,1),
new THREE.Vector4(-3.342964679,-1.175743469,10.88359443,1),
new THREE.Vector4(-3.133770875,-1.260683021,11.24592867,1),
],[new THREE.Vector4(-5.11619916,0.6676512201,7.351581037,1),
new THREE.Vector4(-4.932258842,0.3699006129,7.351581037,1),
new THREE.Vector4(-4.587860644,-0.168102975,7.351581037,1),
new THREE.Vector4(-3.458902864,-0.7867430067,7.351581037,1),
new THREE.Vector4(-2.188007203,-0.9807781224,7.351581037,1),
new THREE.Vector4(-1.303755678,-1.175743473,7.351581037,1),
new THREE.Vector4(-0.8853680916,-1.260683021,7.351581037,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["98"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["98"].divisions = "|PeaksFrozen|_17_5_v99";
Curves["99"] = function(){
var Curve_v01 = [[new THREE.Vector4(-6.79803524,0.1358309671,11.3944727,1),
new THREE.Vector4(-6.706065086,-0.1229891099,11.55376971,1),
new THREE.Vector4(-6.533866003,-0.5906493704,11.85202731,1),
new THREE.Vector4(-5.969387174,-1.128403004,12.82973337,1),
new THREE.Vector4(-5.333939297,-1.297068315,13.93036117,1),
new THREE.Vector4(-4.89181351,-1.46654219,14.69614539,1),
new THREE.Vector4(-4.682619706,-1.540376003,15.05847964,1),
],[new THREE.Vector4(-6.665047991,0.1358309671,11.16413201,1),
new THREE.Vector4(-6.481107673,-0.1229891237,11.16413201,1),
new THREE.Vector4(-6.136709475,-0.5906494209,11.16413201,1),
new THREE.Vector4(-5.007751695,-1.128403048,11.16413201,1),
new THREE.Vector4(-3.736856033,-1.297068317,11.16413201,1),
new THREE.Vector4(-2.852604509,-1.466542194,11.16413201,1),
new THREE.Vector4(-2.434216922,-1.540376003,11.16413201,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["99"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["99"].divisions = "|PeaksFrozen|_17_5_v100";
Curves["100"] = function(){
var Curve_v01 = [[new THREE.Vector4(-0.8505160034,0.1452713567,10.0243372,1),
new THREE.Vector4(-0.7585458492,-0.0556082512,10.1836342,1),
new THREE.Vector4(-0.5863467667,-0.4185762669,10.48189181,1),
new THREE.Vector4(-0.02186793679,-0.8359462806,11.45959786,1),
new THREE.Vector4(0.6135799401,-0.966853519,12.56022566,1),
new THREE.Vector4(1.055705727,-1.098388314,13.32600989,1),
new THREE.Vector4(1.264899531,-1.155693402,13.68834413,1),
],[new THREE.Vector4(-0.7175287542,0.1452713567,9.793996501,1),
new THREE.Vector4(-0.5335884358,-0.05560826193,9.793996501,1),
new THREE.Vector4(-0.1891902379,-0.4185763061,9.793996501,1),
new THREE.Vector4(0.9397675419,-0.8359463151,9.793996501,1),
new THREE.Vector4(2.210663204,-0.9668535209,9.793996501,1),
new THREE.Vector4(3.094914728,-1.098388317,9.793996501,1),
new THREE.Vector4(3.513302315,-1.155693402,9.793996501,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["100"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["100"].divisions = "|PeaksFrozen|_17_5_v101";
Curves["101"] = function(){
var Curve_v01 = [[new THREE.Vector4(5.138897908,0.1433768992,10.45494866,1),
new THREE.Vector4(5.230868062,-0.1065475958,10.61424566,1),
new THREE.Vector4(5.403067144,-0.558134489,10.91250326,1),
new THREE.Vector4(5.967545974,-1.077405663,11.89020932,1),
new THREE.Vector4(6.602993851,-1.240273989,12.99083712,1),
new THREE.Vector4(7.045119638,-1.40392309,13.75662135,1),
new THREE.Vector4(7.254313442,-1.475219253,14.11895559,1),
],[new THREE.Vector4(5.271885157,0.1433768992,10.22460796,1),
new THREE.Vector4(5.455825475,-0.1065476092,10.22460796,1),
new THREE.Vector4(5.800223673,-0.5581345377,10.22460796,1),
new THREE.Vector4(6.929181453,-1.077405706,10.22460796,1),
new THREE.Vector4(8.200077115,-1.240273992,10.22460796,1),
new THREE.Vector4(9.084328639,-1.403923094,10.22460796,1),
new THREE.Vector4(9.502716225,-1.475219253,10.22460796,1),
],];
var degree1_v01 =1;
var degree2_v01 =6;
var knots1_v01 = [0,0,1,1,];
var knots2_v01 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
};
Curves["101"].animation = [[0,-1],[3.75,-0.4298440457],[45,1]];
Curves["101"].divisions = "|PeaksFrozen|_17_5_v102";
Curves.numCurves = 102;
// var Curves = {};
// Curves["0"] = function(){
// var Curve_v01 = [[new THREE.Vector4(-3.798336746,3.333181645,-39.20703206,1),
// new THREE.Vector4(-4.543009799,3.731974958,-38.42061969,1),
// new THREE.Vector4(-5.680150509,4.743922047,-36.75393541,1),
// new THREE.Vector4(-6.425856978,6.540380952,-34.12751812,1),
// new THREE.Vector4(-6.01953931,8.264921498,-31.52396073,1),
// new THREE.Vector4(-4.645311251,9.5151833,-29.11456454,1),
// new THREE.Vector4(-2.630245618,10.00849983,-27.01989921,1),
// new THREE.Vector4(-0.3748152302,9.61486717,-25.29581694,1),
// new THREE.Vector4(1.719386424,8.360762878,-23.93183007,1),
// new THREE.Vector4(3.312239055,6.407991068,-22.86008021,1),
// new THREE.Vector4(4.169903574,4.015315679,-21.97160734,1),
// new THREE.Vector4(4.188684533,1.491730908,-21.13616525,1),
// new THREE.Vector4(3.398930394,-0.8508622415,-20.22228893,1),
// new THREE.Vector4(1.952411159,-2.740109292,-19.1152958,1),
// new THREE.Vector4(0.09722928157,-3.977720737,-17.73192159,1),
// new THREE.Vector4(-1.856316042,-4.464583282,-16.03096606,1),
// new THREE.Vector4(-3.576417265,-4.215422456,-14.01950715,1),
// new THREE.Vector4(-4.754772988,-3.361548871,-11.75406112,1),
// new THREE.Vector4(-5.152833456,-2.139697589,-9.335844357,1),
// new THREE.Vector4(-4.644366204,-0.8652590462,-6.899415463,1),
// new THREE.Vector4(-3.247481955,0.1101084787,-4.594693095,1),
// new THREE.Vector4(-1.13832105,0.4533847971,-2.563664989,1),
// new THREE.Vector4(1.360344227,-0.08933189057,-0.9147326767,1),
// new THREE.Vector4(3.81884261,-1.637109101,0.3009221389,1),
// new THREE.Vector4(5.766398007,-4.135207965,1.105869688,1),
// new THREE.Vector4(6.568225443,-6.215054814,1.461217762,1),
// new THREE.Vector4(6.779765905,-7.340997818,1.600936988,1),
// ],[new THREE.Vector4(-7.804676045,0.03629581,-40.6053548,1),
// new THREE.Vector4(-9.224422419,0.382331687,-39.87961333,1),
// new THREE.Vector4(-11.84475631,1.674115651,-38.16357011,1),
// new THREE.Vector4(-14.70298702,4.971182311,-34.98267648,1),
// new THREE.Vector4(-15.54391493,9.353944811,-31.31168421,1),
// new THREE.Vector4(-13.86652108,13.90327611,-27.54144898,1),
// new THREE.Vector4(-9.681662582,17.50896,-24.14428705,1),
// new THREE.Vector4(-3.595497297,19.11811869,-21.56865377,1),
// new THREE.Vector4(3.253571998,18.01258478,-20.12152024,1),
// new THREE.Vector4(9.414389732,14.0394819,-19.87058766,1),
// new THREE.Vector4(13.46101696,7.718113756,-20.59893041,1),
// new THREE.Vector4(14.36526085,0.1720039242,-21.83377855,1),
// new THREE.Vector4(11.79487199,-7.115665876,-22.95016886,1),
// new THREE.Vector4(6.238757711,-12.66637821,-23.32536805,1),
// new THREE.Vector4(-1.091635951,-15.3879021,-22.50061106,1),
// new THREE.Vector4(-8.564641255,-14.8580738,-20.3013314,1),
// new THREE.Vector4(-14.54643566,-11.42400765,-16.87910903,1),
// new THREE.Vector4(-17.80930222,-6.089976185,-12.66399571,1),
// new THREE.Vector4(-17.8117079,-0.2354721247,-8.244836819,1),
// new THREE.Vector4(-14.7792386,4.744777664,-4.216512987,1),
// new THREE.Vector4(-9.582250471,7.771779414,-1.03952367,1),
// new THREE.Vector4(-3.466327312,8.298271921,1.051647229,1),
// new THREE.Vector4(2.274368889,6.368438711,2.073845817,1),
// new THREE.Vector4(6.589543235,2.529505711,2.257734087,1),
// new THREE.Vector4(8.864736209,-2.358960885,1.966861369,1),
// new THREE.Vector4(9.164765761,-5.723860948,1.707844635,1),
// new THREE.Vector4(8.976191159,-7.340997818,1.600936988,1),
// ],];
// var degree1_v01 =1;
// var degree2_v01 =26;
// var knots1_v01 = [0,0,1,1,];
// var knots2_v01 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,];
// var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
// return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
// };
// Curves["0"].animation = [[0,-1],[3,-0.4298440457],[36,1]];
// Curves["0"].divisions = "|swirlies|_90_5_v01";
// Curves["1"] = function(){
// var Curve_v01 = [[new THREE.Vector4(4.743373387,4.749031298,-39.64449166,1),
// new THREE.Vector4(4.676314431,5.76196523,-39.09541386,1),
// new THREE.Vector4(4.875466427,7.606844588,-37.81022087,1),
// new THREE.Vector4(5.826142562,9.710050376,-35.49631706,1),
// new THREE.Vector4(7.21880907,10.78877747,-32.88586249,1),
// new THREE.Vector4(8.635673214,10.77563269,-30.19343412,1),
// new THREE.Vector4(9.696879139,9.79247901,-27.62463589,1),
// new THREE.Vector4(10.1185433,8.109314003,-25.34351171,1),
// new THREE.Vector4(9.747531345,6.084530461,-23.45102128,1),
// new THREE.Vector4(8.571059264,4.099512789,-21.97631342,1),
// new THREE.Vector4(6.704090153,2.498840731,-20.87989046,1),
// new THREE.Vector4(4.360567409,1.543750331,-20.06594956,1),
// new THREE.Vector4(1.815429616,1.38235143,-19.40048115,1),
// new THREE.Vector4(-0.6365079766,2.036710809,-18.73195895,1),
// new THREE.Vector4(-2.720463239,3.405041437,-17.9122591,1),
// new THREE.Vector4(-4.217659411,5.276892847,-16.81626635,1),
// new THREE.Vector4(-4.995396955,7.359789661,-15.35905618,1),
// new THREE.Vector4(-5.029021405,9.316232359,-13.50944287,1),
// new THREE.Vector4(-4.41276578,10.80952311,-11.29823127,1),
// new THREE.Vector4(-3.355895225,11.55516351,-8.819125925,1),
// new THREE.Vector4(-2.161148874,11.37195763,-6.220397512,1),
// new THREE.Vector4(-1.18467151,10.22441085,-3.686408195,1),
// new THREE.Vector4(-0.7803125113,8.246770756,-1.409945849,1),
// new THREE.Vector4(-1.235542442,5.740149267,0.4413400935,1),
// new THREE.Vector4(-2.710027491,3.137978693,1.758918425,1),
// new THREE.Vector4(-4.256829107,1.595302243,2.326823819,1),
// new THREE.Vector4(-5.184915329,0.9376431554,2.522167025,1),
// ],[new THREE.Vector4(-1.877356599,9.133873548,-40.6053548,1),
// new THREE.Vector4(-2.144850364,10.5704903,-39.87961333,1),
// new THREE.Vector4(-2.043026493,13.49016278,-38.16357011,1),
// new THREE.Vector4(-0.2104834427,17.45020285,-34.98267648,1),
// new THREE.Vector4(3.44038332,20.01670606,-31.31168421,1),
// new THREE.Vector4(8.277256614,20.35541258,-27.54144898,1),
// new THREE.Vector4(13.28338683,18.02032003,-24.14428705,1),
// new THREE.Vector4(17.24984958,13.13176474,-21.56865377,1),
// new THREE.Vector4(19.05434591,6.432828372,-20.12152024,1),
// new THREE.Vector4(17.96157767,-0.8161080508,-19.87058766,1),
// new THREE.Vector4(13.85949318,-7.101630293,-20.59893041,1),
// new THREE.Vector4(7.350297686,-11.02486935,-21.83377855,1),
// new THREE.Vector4(-0.3500846309,-11.67382405,-22.95016886,1),
// new THREE.Vector4(-7.692780692,-8.887136453,-23.32536805,1),
// new THREE.Vector4(-13.18442705,-3.320882428,-22.50061106,1),
// new THREE.Vector4(-15.77006431,3.71054746,-20.3013314,1),
// new THREE.Vector4(-15.09527329,10.5748997,-16.87910903,1),
// new THREE.Vector4(-11.57159354,15.74034943,-12.66399571,1),
// new THREE.Vector4(-6.234465227,18.14665052,-8.244836819,1),
// new THREE.Vector4(-0.4482305343,17.42675742,-4.216512987,1),
// new THREE.Vector4(4.445882685,13.93117721,-1.03952367,1),
// new THREE.Vector4(7.437394066,8.570900151,1.051647229,1),
// new THREE.Vector4(8.035152208,2.544082227,2.073845817,1),
// new THREE.Vector4(6.306820167,-2.966907211,2.257734087,1),
// new THREE.Vector4(2.783824242,-7.04883181,1.966861369,1),
// new THREE.Vector4(-0.1610749317,-8.704168338,1.707844635,1),
// new THREE.Vector4(-1.713011364,-9.196291646,1.600936988,1),
// ],];
// var degree1_v01 =1;
// var degree2_v01 =26;
// var knots1_v01 = [0,0,1,1,];
// var knots2_v01 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,];
// var nurbsSurface_v01 = new THREE.NURBSSurface(degree1_v01, degree2_v01, knots1_v01, knots2_v01,Curve_v01);
// return function(u, v) {return nurbsSurface_v01.getPoint(v,u);};
// };
// Curves["1"].animation = [[1,-1],[5,-0.439568519],[19,1.048622366]];
// Curves["1"].divisions = "|swirlies|_90_5_v02";
// Curves.numCurves = 2;