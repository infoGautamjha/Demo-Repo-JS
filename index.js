<html>
    <head>JavaScript</head>

    <body>
        <p id = "demo"> </p>
    </body>

    <script>
        //Array creation
        let Bike = ["Honda", "Hero"];
        document.getElementById("demo").innerHTML = Bike;

        let Arya = ["HOD", "Students", "Teachers", "GAUTAMJHA", "PradeepJha"];
        document.getElementById("demo").innerHTML = Arya;

        let test = ["Math", "EVS", "SST", "Science", "Hindi" ];
        document.getElementById("demo").innerHTML = test;

        //Access an array items
        let Auto = Bike[0];
        document.getElementById("demo").innerHTML = Auto;

        let MainCampus = Arya[2];
        document.getElementById("demo").innerHTML = MainCampus;

        let Jha = Arya[3];
        document.getElementById("demo").innerHTML = Jha;

        let ClassTest = test[3];
        document.getElementById("demo").innerHTML = ClassTest;

        //Array Length Property

       let len= test.length;
       document.getElementById("demo").innerHTML = len;

       let len1 = Arya.length;
       document.getElementById("demo").innerHTML = len1;

       let len2 = Bike.length;
       document.getElementById("demo").innerHTML = len2;


       //Access array last item

       let last = Bike[Bike.length-1];
       document.getElementById("demo").innerHTML = last;

       let last1 = Arya[Arya.length-1];
       document.getElementById("demo").innerHTML = last1;



       //Access array 2nd last item
       
       let last2 = test[test.length-2];
       document.getElementById("demo").innerHTML = last2;

       //loop over an array item

         //forloop

            Arya.forEach((item, index, array) => {console.log(item,index);});

            Bike.forEach((item,index,array) => {console.log(item,index);});

     //Array method
            //convert an array into string
            document.getElementById("demo").innerHTML = Arya.toString();

         //Pop():remove the last element from an array
            let last3 = Arya.pop();
            document.getElementById("demo").innerHTML = last3;
            let last4 = Arya[Arya.length-1];
            console.log(last4);

           //push(): add a new element at the end of an array
           Bike.push("Bullet");
           document.getElementById("demo").innerHTML = Bike;

           Arya.push("Arvind");
           document.getElementById("demo").innerHTML = Arya;

           test.push("Javatest");
           document.getElementById("demo").innerHTML = test;

           test.push("HtmlTest");
           document.getElementById("demo").innerHTML = test;

           //shift(): Remove the first element from the Array

           Bike.shift();
           document.getElementById("demo").innerHTML = Bike;

           Arya.shift();
           document.getElementById("demo").innerHTML = Arya;

           test.shift();
           document.getElementById("demo").innerHTML = test;

           //Unshift(): add an element at the beginning of the array
           
           test.unshift("SE");
           document.getElementById("demo").innerHTML = test;

           Arya.unshift("Guard");
           document.getElementById("demo").innerHTML = Arya;
           

           //concat(): CREATE A NEW ARRAY BY MERGING EXISTING ARRAYS

           let AryaoldCampus = ["BUS", "Temple", "Hospital", "Mtech Dept", "AIDS"];
           let arvind = Arya.concat(AryaoldCampus);
           document.getElementById("demo").innerHTML = arvind;

           let Karanpur = ["Temple", "Shop", "Home"];
           let chowck = Arya.concat(Karanpur);
           document.getElementById("demo").innerHTML = chowck;

           let Mahrail = ["Kamla river", "Railway Station", "Durge temple"];
           let M1 = Karanpur.concat(Mahrail);
           document.getElementById("demo").innerHTML = M1;

           //sort(): sort an array in ascending order

           Mahrail.sort();
           document.getElementById("demo").innerHTML = Mahrail ;

           Arya.sort();
           document.getElementById("demo").innerHTML = Arya;

           //Reverse() Array In descending order

           Arya.reverse();
           document.getElementById("demo").innerHTML = Arya;

           let a = [6,2,0,0,7,8,9,6,7,2];
           a.reverse();
           document.getElementById("demo").innerHTML = a;

           a.sort();
           document.getElementById("demo").innerHTML = a;

           let pen = ["Black", "Blue", "Red"];
           pen.sort();
           document.getElementById("demo").innerHTML = pen;

           pen.reverse();
           document.getElementById("demo").innerHTML = pen;

           let A1 = [1,2,3];
           A1.reverse();
           document.getElementById("demo").innerHTML = A1;

           A1.sort();
           document.getElementById("demo").innerHTML = A1;

           //Map: (Array.Map()- It create a new array and perform a function on each array element )

           let num1 = [2,4,6,8,10,12];
           let num2 = num1.map(multiply);
           function multiply(value)
           {
            return value -1;
           }
           document.getElementById("demo").innerHTML = num2;

           //Map: (Array.filter()- It take each element in an array and it applies a conditional ststement against it.)

           let num3 = num1.filter(comp);
           function comp (value)
           {
            return value >9;
           }
           document.getElementById("demo").innerHTML = num3;

           //Map: (Array.reduce()- it reduces an array of value down to just one value using a function)

           let num4 = num1.reduce(sum);
           function sum (total,value)
           {
                 return total+value;
           }
           document.getElementById("demo").innerHTML = num4;

           let num5 = [3,6,9,12,15];
           let num6 = num5.reduce(sum);
            function sum (total,value) {
                return total+value;
           }
           document.getElementById("demo").innerHTML = num6;

           let p = [7,8,9,6,5,4,3,2,1];
           p.reverse();
           console.log(p);

           p.sort();
           console.log(p);
           p.reverse();
           console.log(p);

           let bigNum = [62,0,0,7,89,67,2];
           bigNum.reverse();
           console.log(bigNum);
           bigNum.sort();
           console.log(bigNum);

           

 </script>




<script>

    //Destructing - In JavaScript allows you to unpack values from arrays or properties from object into distinct   variables.

    // (basic array destructing )
    const Numbers = [1,2,3,4];
    const[p1,q,r,s]= Numbers;
    console.log(p1);
    console.log(q);
    console.log(r);
    console.log(s);

  //Skipping Elements
    const number = [1,2,3,4,5,6];
    const[First, ,Third, ,fifth]=number;
    console.log(First);
    console.log(Third);
    console.log(fifth);


 //Using Rest parameter
    const Number = [5,6,7,8,9,10,11,12,13,14];
    const[First1,Secound, ...rest]= Number;
    console.log(First1);
    console.log(Secound);
    console.log(rest);

    const numb1 = [1,2,3,4];
    const doubled = numb1.map(num => map*2);
    console.log(num);

</script>

 

 
     
</html>