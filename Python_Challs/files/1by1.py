#!/usr/bin/python3
import random

#darkCTF{y0U_r3Ally_w4n7_tHe_flaGG_th4T_b4Dly?}
def main():
    print("You really want the flag?")
    flag = [100, 97, 114, 107, 67, 84, 70, 123, 121, 48, 85, 95, 114, 51, 65, 108, 108, 121, 95, 119, 52, 110, 55, 95, 116, 72, 101, 95, 102, 108, 97, 71, 71, 95, 116, 104, 52, 84, 95, 98, 52, 68, 108, 121, 63, 125]
    for i in flag:
        n = random.randint(0,i)
        inp = int(input(str(n) + ' + ' + str(i - n) + '\n> '))
        if inp != i:
            print('Ooops!')
            exit(0)
    print("Done!")

main()
