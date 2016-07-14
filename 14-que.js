function exponent(base,number)  
{  
        let answer = 1;  
        for (var i =1; i <= number; i++)  
        {  
                answer = base * answer;          
        }  
        return answer;  
}  
console.log(exponent(2, 3)); 