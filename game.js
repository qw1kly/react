        let pass = localStorage.getItem("pass");
        let tg = window.Telegram.WebApp;
        let idi =  4;
        let nm = '';
        $.post("/rating", { telegramidi : idi, password: pass }, function(response) {
            if (Object.values(response)==0) {
                document.getElementById('messageText').setAttribute('disabled', 'disabled');
                document.getElementById('playdisplay').style.display = "none";
                document.getElementById("ver").style.display = "block";
            } else {
                document.getElementById('messageText').removeAttribute("disabled");
                document.getElementById('playdisplay').style.display = "block";
                document.getElementById("ver").style.display = "none";
            }
        });
        $.post("/rating", { actname : idi }, function(response) {
            nm = Object.values(response);
        });
        async function Sendtofindwinner() {
            event.preventDefault();
            document.getElementById("winner1").style.display="none";
            document.getElementById("winner2").style.display="none";
            document.getElementById("winner3").style.display="none";
            document.getElementById("winner4").style.display="none";
            document.getElementById("winner5").style.display="none";
            document.getElementById("hidemedal1").style.display="none";
            document.getElementById("hidemedal2").style.display="none";
            document.getElementById("hidemedal3").style.display="none";
            $.post("/rating", { selectwinner : document.getElementById("hidemytext").value }, function(response) {
                document.getElementById("hidemytext").value="";
                document.getElementById("hidemytext").blur();
                if (Object.values(response)=='0') {
                    document.getElementById("notfound").style.display = "block";
                    document.getElementById("notfoundsvg").style.display = "block";

                    document.getElementById("fakewinner").style.display = 'none';
                    document.getElementById("fakewinnertxt").style.display = 'none';
                    document.getElementById("fakewinnertxt2").style.display = 'none';
                    document.getElementById("fakewinnertext").style.display = 'none';
                } else {
                    document.getElementById("fakewinner").style.display = 'block';
                    document.getElementById("fakewinnertxt").style.display = 'block';
                    document.getElementById("fakewinnertxt2").style.display = 'block';
                    document.getElementById("fakewinnertext").style.display = 'block';
                    document.getElementById("notfound").style.display = "none";
                    document.getElementById("notfoundsvg").style.display = "none";
                    document.getElementById("fakewinnertxt").innerHTML = Object.values(response)[0];
                    document.getElementById("fakewinnertxt2").innerHTML = Object.values(response)[1];
                    document.getElementById("fakewinnertext").innerHTML = Object.values(response)[2]+'$';
                }
        });



        };
        $.post("/rating", { telegram : idi }, function(response) {
            let balan = Object.values(response)[0];
            let topers = Object.values(response)[1];
            document.getElementById("clicki").innerHTML = balan;

        });
         $.post("/rating", { winners : '1' }, function(response) {
            document.getElementById("winner1txt").innerHTML = Object.values(response)[5]+"$";
            document.getElementById("winner2txt").innerHTML = Object.values(response)[6]+"$";
            document.getElementById("winner3txt").innerHTML = Object.values(response)[7]+"$";
            document.getElementById("winner4txt").innerHTML = Object.values(response)[8]+"$";
            document.getElementById("winner5txt").innerHTML = Object.values(response)[9]+"$";
            document.getElementById("winner1txt2").innerHTML = Object.values(response)[0];
            document.getElementById("winner2txt2").innerHTML = Object.values(response)[1];
            document.getElementById("winner3txt2").innerHTML = Object.values(response)[2];
            document.getElementById("winner4txt2").innerHTML = Object.values(response)[3];
            document.getElementById("winner5txt2").innerHTML = Object.values(response)[4];
            document.getElementById("winner1txt2").style.color = "#FFFFFF";
            document.getElementById("winner1txt2").style.fontFamily =  'Inter';
            document.getElementById("winner1txt2").style.fontStyle= 'normal';
            document.getElementById("winner1txt2").style.fontWeight= '500';
            document.getElementById("winner1txt2").style.fontSize= '20px';
            document.getElementById("winner1txt2").style.lineHeight= '24px';
            document.getElementById("winner1txt2").style.position="absolute";
            document.getElementById("winner1txt2").style.top="6px";
            document.getElementById("winner1txt2").style.left="54px";
            document.getElementById("winner2txt2").style.color = "#FFFFFF";
            document.getElementById("winner2txt2").style.fontFamily =  'Inter';
            document.getElementById("winner2txt2").style.fontStyle= 'normal';
            document.getElementById("winner2txt2").style.fontWeight= '500';
            document.getElementById("winner2txt2").style.fontSize= '20px';
            document.getElementById("winner2txt2").style.lineHeight= '24px';
            document.getElementById("winner2txt2").style.position="absolute";
            document.getElementById("winner2txt2").style.top="6px";
            document.getElementById("winner2txt2").style.left="54px";
            document.getElementById("winner3txt2").style.color = "#FFFFFF";
            document.getElementById("winner3txt2").style.fontFamily =  'Inter';
            document.getElementById("winner3txt2").style.fontStyle= 'normal';
            document.getElementById("winner3txt2").style.fontWeight= '500';
            document.getElementById("winner3txt2").style.fontSize= '20px';
            document.getElementById("winner3txt2").style.lineHeight= '24px';
            document.getElementById("winner3txt2").style.position="absolute";
            document.getElementById("winner3txt2").style.top="6px";
            document.getElementById("winner3txt2").style.left="54px";
            document.getElementById("winner4txt2").style.color = "#FFFFFF";
            document.getElementById("winner4txt2").style.fontFamily =  'Inter';
            document.getElementById("winner4txt2").style.fontStyle= 'normal';
            document.getElementById("winner4txt2").style.fontWeight= '500';
            document.getElementById("winner4txt2").style.fontSize= '20px';
            document.getElementById("winner4txt2").style.lineHeight= '24px';
            document.getElementById("winner4txt2").style.position="absolute";
            document.getElementById("winner4txt2").style.top="6px";
            document.getElementById("winner4txt2").style.left="54px";
            document.getElementById("winner5txt2").style.color = "#FFFFFF";
            document.getElementById("winner5txt2").style.fontFamily =  'Inter';
            document.getElementById("winner5txt2").style.fontStyle= 'normal';
            document.getElementById("winner5txt2").style.fontWeight= '500';
            document.getElementById("winner5txt2").style.fontSize= '20px';
            document.getElementById("winner5txt2").style.lineHeight= '24px';
            document.getElementById("winner5txt2").style.position="absolute";
            document.getElementById("winner5txt2").style.top="6px";
            document.getElementById("winner5txt2").style.left="54px";
            document.getElementById("winner1txt").style.color = "#FFFFFF";
            document.getElementById("winner1txt").style.fontFamily =  'Inter';
            document.getElementById("winner1txt").style.fontStyle= 'normal';
            document.getElementById("winner1txt").style.fontWeight= '400';
            document.getElementById("winner1txt").style.fontSize= '16px';
            document.getElementById("winner1txt").style.lineHeight= '19px';
            document.getElementById("winner1txt").style.position="absolute";
            document.getElementById("winner1txt").style.top="8px";
            document.getElementById("winner1txt").style.left="264px";
            document.getElementById("winner2txt").style.color = "#FFFFFF";
            document.getElementById("winner2txt").style.fontFamily =  'Inter';
            document.getElementById("winner2txt").style.fontStyle= 'normal';
            document.getElementById("winner2txt").style.fontWeight= '400';
            document.getElementById("winner2txt").style.fontSize= '16px';
            document.getElementById("winner2txt").style.lineHeight= '19px';
            document.getElementById("winner2txt").style.position="absolute";
            document.getElementById("winner2txt").style.top="8px";
            document.getElementById("winner2txt").style.left="264px";
            document.getElementById("winner3txt").style.color = "#FFFFFF";
            document.getElementById("winner3txt").style.fontFamily =  'Inter';
            document.getElementById("winner3txt").style.fontStyle= 'normal';
            document.getElementById("winner3txt").style.fontWeight= '400';
            document.getElementById("winner3txt").style.fontSize= '16px';
            document.getElementById("winner3txt").style.lineHeight= '19px';
            document.getElementById("winner3txt").style.position="absolute";
            document.getElementById("winner3txt").style.top="8px";
            document.getElementById("winner3txt").style.left="264px";
            document.getElementById("winner4txt").style.color = "#FFFFFF";
            document.getElementById("winner4txt").style.fontFamily =  'Inter';
            document.getElementById("winner4txt").style.fontStyle= 'normal';
            document.getElementById("winner4txt").style.fontWeight= '400';
            document.getElementById("winner4txt").style.fontSize= '16px';
            document.getElementById("winner4txt").style.lineHeight= '19px';
            document.getElementById("winner4txt").style.position="absolute";
            document.getElementById("winner4txt").style.top="8px";
            document.getElementById("winner4txt").style.left="264px";
            document.getElementById("winner5txt").style.color = "#FFFFFF";
            document.getElementById("winner5txt").style.fontFamily =  'Inter';
            document.getElementById("winner5txt").style.fontStyle= 'normal';
            document.getElementById("winner5txt").style.fontWeight= '400';
            document.getElementById("winner5txt").style.fontSize= '16px';
            document.getElementById("winner5txt").style.lineHeight= '19px';
            document.getElementById("winner5txt").style.position="absolute";
            document.getElementById("winner5txt").style.top="8px";
            document.getElementById("winner5txt").style.left="264px";

        });
        var ws = new WebSocket("ws://127.0.0.1:8000/ws/rating");
        ws.onmessage = async function(event) {
            var chat = document.getElementById("topfive");
            var nickname = document.createElement('a');
            var mess = document.createElement('a');
            var krugl = document.createElement('div');
            var obshak = document.createElement('div');
            var prom = document.createElement('div');
            var ecel = document.createElement('div');
            var ecel2 = document.createElement('div');
            var emel = document.createElement("img");

            nickname.innerHTML = nm;
            nickname.style.position="relative";
            nickname.style.top="-1px";
            nickname.style.color="#0066FF";
            nickname.style.left= "5px";
            prom.style.background = "#000000";
            prom.style.height = "20px";
            krugl.style.maxWidth = "150px";
            krugl.style.minHeight = "40px";
            krugl.style.minWidth = "75px";
            krugl.style.maxHeight = "150px";
            krugl.style.borderRadius = "16px";
            krugl.style.background = "#121212";

            mess.style.color = "#FFFFFF";
            mess.style.fontStyle = "normal";
            mess.style.fontWeight = "700";
            mess.style.fontSize = "14px";
            mess.style.lineHeight = "19px";
            mess.style.fontFamily = "Inter";
            mess.style.overflowWrap = "break-word";
            let rojer_pre = event.data.indexOf("tgidi="); //+6
            let lent = event.data.slice(0, rojer_pre);
            let rojer = lent.length;
            let rojer2 = (lent.length-6)/5;
            krugl.style.width = rojer*12+"px";
            krugl.style.height = (parseInt(krugl.style.width.slice(0, -2)/130)+1)*28+"px";
            ecel.style.position = "absolute";

            if (50<parseInt(krugl.style.width.slice(0, -2)) & parseInt(krugl.style.width.slice(0, -2))<150) {
                ecel.style.width = parseInt(krugl.style.width.slice(0, -2))*0.8+"px";
                ecel.style.left = "4px";

            }
            if (50>parseInt(krugl.style.width.slice(0, -2))){
                ecel.style.width = krugl.style.width;
                ecel.style.left="4px";
            }
            else {

                ecel.style.width = "120px";
                ecel.style.left = "6px";

                }
            ecel.style.top = "2px";

            ecel.style.verticalAlign = "middle";
            let init_ID = event.data.indexOf("tgidi="); //+6
            let Real_ID = event.data.slice(init_ID+6);
            let Real_ID2 = event.data.slice(init_ID+6, -6);

            mess.innerHTML = event.data.slice(0, init_ID);
            obshak.style.width = "150px";
            emel.style.width = "20px";
            emel.style.height = "20px";
            emel.style.borderRadius = "100px";

            emel.style.position="relative";
            emel.style.left= "2px";
            emel.style.top="-25px";
            let pos = 0;
            mess.style.position='relative';
            mess.style.top = '15px';
            if (parseInt(Real_ID)==idi) {
                prom.style.height = "10px";
                mess.style.top = '0px';
                emel.style.top = '-12px';
                emel.style.display="none";
                nickname.style.display="none";
                krugl.style.minHeight = "20px";
                krugl.style.height = (parseInt(krugl.style.width.slice(0, -2)/130)+1)*22+"px";

                obshak.style.position = "relative";
                for (let i = 0; i < 300; i++) { // выведет 0, затем 1, затем 2
                  if (i + parseInt(krugl.style.width.slice(0, -2))>=280) {
                    pos = i-20;
                    break;

                  }
                };
                if (pos<130) {
                    pos = 110;
                }
                if (pos>230) {
                    pos = 210;
                }
                obshak.style.left = pos+"px";
            };
            krugl.style.position = "relative";
            krugl.style.top='5px';
            krugl.style.left= "5px";
            krugl.style.overflow = "hidden";
            obshak.style.width = "75px";
            ecel2.style.height = krugl.style.height;

            ecel.appendChild(mess);
            krugl.appendChild(ecel);
            obshak.appendChild(krugl);
            ecel2.appendChild(obshak);
            chat.appendChild(ecel2);
            chat.appendChild(prom);
            krugl.appendChild(nickname);



        };
        async function sendMessage(event) {
                var input = document.getElementById("messageText");
                if (input.value.length>0){
                ws.send(input.value+"tgidi="+idi);
                input.value = '';
                }
                input.blur();
                event.preventDefault();
        };
