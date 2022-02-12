# a=0
# for i in range(10):
#     if i==2:
#         pass
#     else:
#         a=i
# print(a)
i=1
while i<=4:
    j=1
    while j<=5:
        if j==5:
            print(i+1,end=" ")
        else:
            print(i,end=" ")
        j=j+1
    print()
    i=i+1

i=1
while i<=4:
    j=1
    while j<=5:
        if i%2!=0:
            if j==5:
                print(i+1,end=" ")
        if i%2==0:
            if j==1:
                print(i+1,end=" ")
        else:
            print(i,end=" ")
        j=j+1
    print()
    i=i+1