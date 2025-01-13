# write a js function to replace multiples of 3 with "Fizz" , 5 with "Buzz" and  multiples of 3&5 with "FizzBuzz".

def fizzBuzz(n):
    for i in range(1,n+1):
        if i%3==0 and i%5==0:
            print("FizzBuzz")
        elif i%3 == 0 :
            print("Fizz")
        elif(i%5 == 0):
            print("Buzz")
        else:
            print(i)
    print("____________________________________")
    
fizzBuzz(10)
fizzBuzz(50)
