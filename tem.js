
const TempCal = ( )=> {
const Tempnum = document.getElementById('temp').value;
const Temptype = document.getElementById('temp_diff');
const Tempvalue = temp_diff.options[Temptype.selectedIndex].value;

    const celTofah = (cel) => {
        let fahrenheit = Math.round(( cel * 9/5) + 32);
        return fahrenheit;
    }  
    const celTokel = (cel) => {
        var num = parseInt(cel) || 0;
        let kelvin = Math.round (num + 273);
        return kelvin; 
    } 
    const fahTocel = (fah) => {
        let celcius = Math.round (( fah - 32) * 5/9);
        return celcius;
    }  
    const fahTokel = (fah) => {
        let kelvin = Math.round (( fah - 32) * 5/9 + 273.15);
        return kelvin;
    }  
    const kelTocel = (kel) => {
        let celcius = Math.round ( kel - 273.15);
        return celcius;
    }  
    const kelTofah = (kel) => {
        let fahrenheit = Math.round (( kel - 273.15) * 9/5 + 32);
        return fahrenheit;
    }  

    let result;
    if(Tempvalue == 'cel'){
        result = celTofah(Tempnum) + '° Fahrenheit ' + " " + '&' + " " + celTokel(Tempnum) +'° Kelvin ' ;
        document.getElementById("resultcontainer").innerHTML= result ;
    }
    else{
        result = fahTocel(Tempnum) + '° Celcius ' + " " + '&' + " " + fahTokel(Tempnum) +'° Kelvin ' ;
        document.getElementById("resultcontainer").innerHTML= result ;
    } 
    if(Tempvalue == 'kel'){
        result = kelTocel(Tempnum) + '° Celcius ' + " " + '&' + " "+ kelTofah(Tempnum) +'° Fahrenheit ' ;
        document.getElementById("resultcontainer").innerHTML= result ;
    }
} 
    
