    let idi = 5;
    let pass = localStorage.getItem("pass");
    $.post("/", { telegram : idi, password: pass }, function(response) {
        if (Object.values(response)==1) {
            location.href = '/game'
        }
        if (Object.values(response)==2) {
            location.href = '/register'
        }
    });
    async function Savepass() {
        $.post("/", { telegram : idi, password: document.getElementById('passwordinput').value }, function(response) {
            if (Object.values(response)==1) {
                localStorage.setItem('pass', document.getElementById('passwordinput').value);
                location.href = '/game';
            }
            if (Object.values(response)==0) {
                document.getElementById('warn').style.display = 'block';
                document.getElementById('svgwarn').style.display = 'block';
            }
            event.preventDefault();
            document.getElementById("passwordinput").value = "";
            document.getElementById("passwordinput").blur();
        });
    }
  
