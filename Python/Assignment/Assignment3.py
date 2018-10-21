# Terence Amunga

a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
b = []

x = input("Enter a number \n")

for i in range (0, len(a)):
    if a[i] < int(x):
        b.append(a[i])

for n in b:
    print (n)