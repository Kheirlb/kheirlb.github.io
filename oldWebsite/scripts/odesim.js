/* ODE simulation using Runge-Kutta 4
   Initial Version 0.1 (Hans Nesse (hans.nesse@asu.edu))
   Contents of this file are reseased creative commons cc-by-sa 3.0 
   (http://creativecommons.org/licenses/by-sa/3.0/)
   No warranty is made of the accuracy, useability, or suitability for any purpose.  As
   I am not particularly proficient in Javascript, there may also be inefficient or
   otherwise undesirable code.  You have been warned.
   
   Instructions:
   0. This was set up to output results in a format usable by the flot.js module.  It would be 
      wise to include those if you plan on plotting the results.
   1. Call this file from the html document using the 
      <script type='text/javascript' scr="odesim.js"></script>
   2. In that same html file, specify a script which contains the function f of the first order
      homogeneous ode y'=f(y).  The function should take a vector y as the first argument, and 
      the parameters as the second argument. Ie 
      <script type='text/javascript'>
        function fname(vector_y, parameters){
          Your function here
        }
      </script>
   3. In another script in the html document, call the function rk4
      rk4 has five arguments:
      function name
      parameters passed to the function
      step size
      intial contitions in the form [0, y1, y2...].  The leading zero MUST be placed there (it is
         the initial time).
      iterations (the actual number of iterations to be run; the time to be run can be found by 
         multuplying iterations x stepsize)
*/

function addpair(x,y)  //Pairwise addition of vectors of equal length
{
var res = new Array(x.length);
  for(aa=0;aa<=x.length-1;aa++)
  {
    res[aa]=x[aa]+y[aa];
  }
  return(res);
}

function prod(x,y) //multiplies x by each value in y
{
  var res = new Array(y.length);
  for(aa=0; aa<=y.length-1; aa++)
  {
    res[aa] = y[aa]*x;
  }
  return(res);
}

function rk4(f,param,stp,initc,iters)
{
//Container for the results
var res=new Array();
res[0] = initc;
number_of_variables = res.length;
for (tt=1;tt<=iters;tt++)
{
  var resTmp = new Array();
  resTmp[0] = stp*tt;
  var prevVals = res[tt-1].slice(1,res[tt-1].length+1);
  //document.write(tt);
  var nextVals = f(prevVals,param);
  var k1 = prod(stp,nextVals);
  var k2 = prod(stp,f(addpair(prevVals, prod(.5,k1)),param ));
  var k3 = prod(stp,f(addpair(prevVals, prod(.5,k2)),param ));
  var k4 = prod(stp,f(addpair(prevVals, k3),param ));
  var adjFactor = addpair(prevVals, prod(1/6,k1));
  adjFactor = addpair(adjFactor,prod(1/3,k2));
  adjFactor = addpair(adjFactor,prod(1/3,k3));
  adjFactor = addpair(adjFactor,prod(1/6,k4));
  resTmp = resTmp.concat(adjFactor);
  res[tt] = resTmp;
}
var sepres = new Array();
for(tt=0;tt<=res[0].length;tt++)
{
  sepres[tt] = new Array();
}
for(tt=0;tt<=res.length-1;tt++)
{
  for(aa=0;aa<=res[tt].length;aa++)
  {
    sepres[aa].push([res[tt][0],res[tt][aa]]);
  }
}
return(sepres);
}

