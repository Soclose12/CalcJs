function sum() {
   var nu1, nu2, res;
   nu1 = document.getElementById('n1').value;
   nu1 = parseInt(nu1);

   nu2 = document.getElementById('n2').value;
   nu2 = parseInt(nu2);

   res = nu1 + nu2;
   document.getElementById('out').innerHTML = res;
}