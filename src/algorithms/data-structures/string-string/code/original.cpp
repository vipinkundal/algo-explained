#include<iostream>
#include<stdio.h>
int main()
{
    char stringStringState[]="Anurag Maurya";
    char stringStringState2[20];
    std::cout<<"Enter your name ";
    gets(stringStringState2);
    printf("ok %s\n",stringStringState2);
    std::cout<<stringStringState<<" and "<<stringStringState2<<" are friends";


}