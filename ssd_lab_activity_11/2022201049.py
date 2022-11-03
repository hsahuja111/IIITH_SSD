import csv

from numpy import character 
tbl = []
i = 0

with open('lab_11_data.csv') as file:
 
    csvFile = csv.reader(file) 
    
    for lines in csvFile:
        tbl.append(lines[:-6])


# print(tbl)

tbl.pop(0)

filtered = []


result = list(filter(lambda x: float(x[-1]) >= -3 , tbl))


# print("Filtered Data after Step 2 is")
# print(result)

new_result = []
# Preprocessing for average
for r in result:
    local = []
    i = 0
    for e in r:
        if(i != 0):
            s = float(e.replace(",", ""))
            local.append(s)
        else:
            local.append(e)
        i = i + 1
    new_result.append(local)


# print("Data after preprocessing is")
# print(new_result)

# list(map(lambda x:   float(  x[1].replace(",", "")   ) , result))
open_price_col = list( map((lambda x:  x[1] ) , new_result))
high_price_col = list( map((lambda x:  x[2] ) , new_result))
low_price_col =  list( map((lambda x:  x[3] ) , new_result))

import statistics

open_avg = statistics.mean(open_price_col)
high_avg = statistics.mean(high_price_col)
low_avg = statistics.mean(low_price_col)

# print(open_avg)
# print(high_avg)
# print(low_avg)

f = open("avg_output.txt", "w")
f.write(str(open_avg)+"\n")
f.write(str(high_avg)+"\n")
f.write(str(low_avg)+"\n")
f.close()

ch = input("Enter the character for part 4 of the question: ")

finalResult = list(filter(lambda x: x[0][0] == ch[0], new_result))


with open ('stock_output.txt', 'w') as file:  
    for lines in finalResult: 
        wr = ""
        for l in lines:
            wr = wr + str(l) + " "
        
        file.write(wr.rstrip(wr[-1]))  
        file.write('\n')  















