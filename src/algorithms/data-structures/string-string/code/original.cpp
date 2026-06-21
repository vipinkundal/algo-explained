#include<iostream>
#include<stdio.h>
int main()
{
    char stringStringName1[]="Anurag Maurya";
    char stringStringName2[20];
    std::cout<<"Enter your name ";
    gets(stringStringName2);
    printf("ok %s\n",stringStringName2);
    std::cout<<stringStringName1<<" and "<<stringStringName2<<" are friends";


}