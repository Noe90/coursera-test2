var names=new Array();
names[0]="darkpig";
names[1]="Johnwick";
names[2]="batman";
names[3]="anti";
names[4]="rodolfo";
names[5]="godzilla";
names[6]="lebron";
names[7]="jimy";
names[8]="luis";
names[9]="maria";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
