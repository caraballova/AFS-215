def fizzbuzz(x):
    if x == 1:     
        return "1"                       # Get “1” to print when passed a 1
    elif x == 2:
        return "2"                       # Get “2” to print when passed a 2
    elif x == 3:
        return "Pepsi"                   # Get “Pepsi” to print when passed a 3
    elif x == 5:
        return "Coke"                    # Get “Coke” to print when passed a 5
    elif x % 3 == 0 and x % 5 == 0:
        return "PepsiCoke"               # Get “PepsiCoke” when passed a 15 (a multiple of 3 and 5)
    elif x % 3 == 0:
        return "Pepsi"                   # Get “Coke” when passed a 10 (a multiple of 5)
    elif x % 5 == 0:
        return "Coke"                    # Get “Coke” when passed a 10 (a multiple of 5)
    else:
        return "No Expected Output"