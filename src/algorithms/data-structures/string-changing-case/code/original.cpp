#include<iostream>
int main()
{
    char stringChangingState[]="AnuRAG maURyA";
    for(int stringChangingScanIndex=0;stringChangingState[stringChangingScanIndex]!='\0';stringChangingScanIndex++)
    {
        if(stringChangingState[stringChangingScanIndex]>=65 &&stringChangingState[stringChangingScanIndex]<=90)//if chararcter is uppercase
            stringChangingState[stringChangingScanIndex]=stringChangingState[stringChangingScanIndex]+32;
        else if(stringChangingState[stringChangingScanIndex]>=97 && stringChangingState[stringChangingScanIndex]<=122)//if chararcter is lowercase
            stringChangingState[stringChangingScanIndex]=stringChangingState[stringChangingScanIndex]-32;
    }
    std::cout<<stringChangingState;
    

    return 0;
}