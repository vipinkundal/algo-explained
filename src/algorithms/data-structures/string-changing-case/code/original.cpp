#include<iostream>
int main()
{
    char stringChangingName[]="AnuRAG maURyA";
    for(int scanIndex=0;stringChangingName[scanIndex]!='\0';scanIndex++)
    {
        if(stringChangingName[scanIndex]>=65 &&stringChangingName[scanIndex]<=90)//if chararcter is uppercase
            stringChangingName[scanIndex]=stringChangingName[scanIndex]+32;
        else if(stringChangingName[scanIndex]>=97 && stringChangingName[scanIndex]<=122)//if chararcter is lowercase
            stringChangingName[scanIndex]=stringChangingName[scanIndex]-32;
    }
    std::cout<<stringChangingName;
    

    return 0;
}