#include<iostream>
int main()
{
    //comparing two strings
    char stringComparingFirstItems[]="Painter";
    char stringComparingSecondItems[]="painter";
    int stringComparingScanIndex,stringComparingWriteIndex;
    for(stringComparingScanIndex=0,stringComparingWriteIndex=0;stringComparingFirstItems[stringComparingScanIndex]!='\0',stringComparingSecondItems[stringComparingWriteIndex]!='\0';stringComparingWriteIndex++,stringComparingScanIndex++)//checking condition if string ends
    {
        if(stringComparingFirstItems[stringComparingScanIndex]>=65 && stringComparingFirstItems[stringComparingScanIndex]<=90)//checking if its uppercase then converting to lower case 
            stringComparingFirstItems[stringComparingScanIndex]=stringComparingFirstItems[stringComparingScanIndex]+32;
        else if(stringComparingSecondItems[stringComparingScanIndex]>=65 && stringComparingSecondItems[stringComparingScanIndex]<=90)//checking if its uppercase then converting to lower case 
            stringComparingSecondItems[stringComparingScanIndex]=stringComparingSecondItems[stringComparingScanIndex]+32;
        if(stringComparingFirstItems[stringComparingScanIndex]!=stringComparingSecondItems[stringComparingWriteIndex])//checking if they are not equal
            break;
    }
    if(stringComparingFirstItems[stringComparingScanIndex]==stringComparingSecondItems[stringComparingWriteIndex])
        std::cout<<"both are equal"<<std::endl;
    else if(stringComparingFirstItems[stringComparingScanIndex]>stringComparingSecondItems[stringComparingWriteIndex])
        std::cout<<"A is greater"<<std::endl;
    else
        std::cout<<"B is greater"<<std::endl;


    //checking if Palindrone

    char stringComparingSourceText[]="madami";
    //method 1
    char stringComparingReverseBuffer[10];//helper string/array
    for(stringComparingScanIndex=0;stringComparingSourceText[stringComparingScanIndex]!='\0';stringComparingScanIndex++)//incrementing i value till it reacher the last index
    {}
    stringComparingScanIndex--;
    for(stringComparingWriteIndex=0;stringComparingScanIndex>=0;stringComparingWriteIndex++,stringComparingScanIndex--)//copying reverse of word in helper
    {
        stringComparingReverseBuffer[stringComparingWriteIndex]=stringComparingSourceText[stringComparingScanIndex];
    }
    stringComparingReverseBuffer[stringComparingWriteIndex]='\0';//assigining last value with null term
    for(stringComparingScanIndex=0;stringComparingReverseBuffer[stringComparingScanIndex]!='\0';stringComparingScanIndex++)
    {
        if(stringComparingSourceText[stringComparingScanIndex]!=stringComparingReverseBuffer[stringComparingScanIndex])//if not equal break out of loop
            break;
    }
    if(stringComparingSourceText[stringComparingScanIndex]=='\0')//checking if it reached last till last null term
        std::cout<<"String is pallindrone"<<std::endl;
    else
        std::cout<<"string is not palindrone"<<std::endl;

    //Method 2
    char stringComparingInPlaceText[]="MADoM";
    for(stringComparingWriteIndex=0;stringComparingInPlaceText[stringComparingWriteIndex]!='\0';stringComparingWriteIndex++)
    {}
    stringComparingWriteIndex--;
    stringComparingScanIndex=0;
    while(stringComparingScanIndex<stringComparingWriteIndex)
    {
        if(stringComparingInPlaceText[stringComparingScanIndex]!=stringComparingInPlaceText[stringComparingWriteIndex])//if not equal break out of loop
            break;
        stringComparingScanIndex++;
        stringComparingWriteIndex--;
    }
    if(stringComparingInPlaceText[stringComparingScanIndex]==stringComparingInPlaceText[stringComparingWriteIndex])//checking if they are equal
        std::cout<<"String is pallindrone"<<std::endl;
    else
        std::cout<<"string is not palindrone"<<std::endl;
}