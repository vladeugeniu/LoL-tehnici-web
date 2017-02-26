	
	var nume
	
	function startGame(){

		var div1 = question(1,"Whirling Death",false,false,false,true,"q1","Mordekaiser","Quinn","Jinx","Draven");
		var div2 = question(2,"Lightslinger",true,false,false,false,"q2","Lucian","Annie","Jinx","Dr. Mundo");
		var div3 = question(3,"Nether Grasp",true,false,false,false,"q3","Malzahar","Vladimir","Blitzcrank","Akali");
		var div4 = question(4,"Titan's Wrath",false,false,true,false,"q4","Maokai","Hecarim","Nautilus","Yorick");
		var div5 = question(5,"Flame Breath",false,false,true,false,"q5","Kassadin","Lulu","Shyvana","Lissandra");
		

		var form = document.getElementsByClassName("quiz")[0];
		nume = (document.getElementsByName("name")[0]).value;

		document.getElementsByName("name")[0].style.display = "none";


		form.appendChild(div1);
		form.appendChild(div2);
		form.appendChild(div3);
		form.appendChild(div4);
		form.appendChild(div5);
  		
  	var btn = document.getElementById("start");
		btn.style.display = "none"; 

		btn = document.getElementById("result");
		btn.style.display = "inline"; 

 		setTimeout(function(){ alert("Hello " + nume + ", you spent 20 seconds on this quizz. But don't worry, take your time"); }, 20000);
		
		//var container = document.getElementsByClassName("container")[0];
		// /container.insertBefore(form, btn);
}


function getDiv(){

		var div = document.createElement("div");
		div.className = "question";
		return div;
}
function getH4(nr){
		
		var h4 = document.createElement("H4");
		h4.innerHTML = nr + ".Whose ability/passive is this:";
		return h4;
}
function getH3(name){
		
		var h3 = document.createElement("H3");
		h3.innerHTML = "&nbsp" + name
		return h3;

}
function getSpan(correct){

		var span = document.createElement("span");
		span.className = "answer";
		if(correct)
			span.className += " correctAnswer";
		return span;

}
function getRadio(name, text){

	var label = document.createElement("label");
  var element = document.createElement("input");
  element.setAttribute("type", "radio");
  element.setAttribute("name", name);
  label.appendChild(element);
  label.innerHTML += text;
  return label;
}

function question(number,spell,s1,s2,s3,s4,name,c1,c2,c3,c4){

    var div1 = getDiv();

		var h4 = getH4(number);
		var h3 = getH3(spell);

		var span1 = getSpan(s1);
		var span2 = getSpan(s2);
		var span3 = getSpan(s3);
		var span4 = getSpan(s4);

		var r1 = getRadio(name, c1);
		var r2 = getRadio(name, c2);
		var r3 = getRadio(name, c3);
		var r4 = getRadio(name, c4);
		
		var br = document.createElement("br");
		var br1 = document.createElement("br");
		var br2 = document.createElement("br");
		var br3 = document.createElement("br");

		span1.appendChild(r1);
		span2.appendChild(r2);
		span3.appendChild(r3);
		span4.appendChild(r4);

		div1.appendChild(h4);
		div1.appendChild(h3);
		div1.appendChild(span1);
		div1.appendChild(br);
		div1.appendChild(span2);
		div1.appendChild(br1);
		div1.appendChild(span3);
		div1.appendChild(br2);
		div1.appendChild(span4);
		div1.appendChild(br3);

		return div1;
	}

function getResult(event){

	var questions = document.getElementsByClassName("question");
	
	if(!validateForm(questions)){
		window.alert("Answer every question");
		return;
	}

	var score = 0;

	for(var i = 0; i < questions.length; i++){

		if(questions[i].getElementsByClassName("correctAnswer")[0].getElementsByTagName("input")[0].checked){
		
			questions[i].style.backgroundColor = "rgb(172, 248, 21)";
			score = score + 2;
		
		}
	
		else{
				var spans = questions[i].getElementsByTagName("span");

				for(var j = 0; j < spans.length; j++ ){
					if(hasClass(spans[j], "correctAnswer"))
						spans[j].style.backgroundColor = "rgb(172, 248, 21)";
					else 
						spans[j].style.backgroundColor = "rgb(255, 159, 159)";
				}
		}

	}
		var btn = document.getElementById("result");
		btn.style.display = "none";
		printScore(score);
		readTextFile("file:///home/vstefan/projects/fmi/tehnici%20web/league%20of%20legends/stats.txt");
}

//"~/projects/fmi/tehnici%web/league%of%ledends/stats.txt")
function validateForm(questions){

		for(var i = 0; i < questions.length; i++){

			var answers = questions[i].getElementsByTagName("input");

			var k = 0;
			for(var j = 0; j < answers.length; j++)
				if(answers[j].checked)
					k ++;
			if(k == 0)
				return false;
		}
		return true;

}



function printScore(score) {

    var para = document.createElement("H1");
    var t = document.createTextNode(nume + " your score is " + score);
    para.appendChild(t);
    //para.className += " last";
    para.appendChild(document.createElement("br"));
    para.style.marginLeft = "40%";
    para.style.marginTop = "5%";
    var container = document.getElementsByClassName("container");
    container[0].appendChild(para);
}

function hasClass( elem, klass ) {
     return (" " + elem.className + " " ).indexOf( " "+klass+" " ) > -1;
}

function color() {
    document.getElementById("in").style.backgroundColor = "rgb(161, 224, 227)";
}


function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function ()
    {	    

        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                var div = document.createElement("div");
                div.innerText = allText 
                div.style.marginLeft = "40%";
                div.className = "last scores";
                document.getElementsByClassName("container")[0].appendChild(div);
            }
        }
    }
    rawFile.send();
}

var images = new Array("images/add1.jpg","images/add2.jpg","images/add3.jpg","images/add4.jpg");

imageIndex = 0

function changeAdds() {

	var adds = document.getElementsByClassName("add");
 	for(var i = 0; i < adds.length; i++){
 		adds[i].getElementsByTagName("img")[0].src = images[imageIndex];
 	 	imageIndex = (imageIndex + 1) % images.length


 }

}


function startAddChange() {
 setInterval("changeAdds()",10000)
}

window.onload = startAddChange;