<script>
var formGiris=document.forms["girisFormu"];
var eposta=formGiris.eposta;
var sifre=formGiris["sifre"];
   
        formGiris.onsubmit=function(){
            if(sifre.value.length>6){
                alert("Şifreniz: "+sifre.value);
            }
            else{
                alert("Şifre 6 karakterden az olamazz...");
                return false;
            }
        }
        </script>
