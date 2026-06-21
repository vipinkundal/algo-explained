#include<iostream>
int main()
{
    char stringReverseSourceText[]="Anurag";
    //method 1
    char stringReverseReverseBuffer[10];
    int stringReverseScanIndex,stringReverseWriteIndex;
    for(stringReverseScanIndex=0;stringReverseSourceText[stringReverseScanIndex]!='\0';stringReverseScanIndex++)
    {}
    stringReverseScanIndex--;
    for(stringReverseWriteIndex=0;stringReverseScanIndex>=0;stringReverseWriteIndex++,stringReverseScanIndex--)
    {
        stringReverseReverseBuffer[stringReverseWriteIndex]=stringReverseSourceText[stringReverseScanIndex];
    }
    stringReverseReverseBuffer[stringReverseWriteIndex]='\0';
    for(stringReverseScanIndex=0;stringReverseReverseBuffer[stringReverseScanIndex]!='\0';stringReverseScanIndex++)
    {
        stringReverseSourceText[stringReverseScanIndex]=stringReverseReverseBuffer[stringReverseScanIndex];
    }
    std::cout<<stringReverseSourceText<<std::endl;

    //Method 2
    char stringReverseInPlaceText[]="Anurag";
    for(stringReverseWriteIndex=0;stringReverseInPlaceText[stringReverseWriteIndex]!='\0';stringReverseWriteIndex++)
    {}
    stringReverseWriteIndex--;
    stringReverseScanIndex=0;
    while(stringReverseScanIndex<stringReverseWriteIndex)
    {
        char stringReverseSwapValue;
        stringReverseSwapValue=stringReverseInPlaceText[stringReverseScanIndex];
        stringReverseInPlaceText[stringReverseScanIndex]=stringReverseInPlaceText[stringReverseWriteIndex];
        stringReverseInPlaceText[stringReverseWriteIndex]=stringReverseSwapValue;
        stringReverseScanIndex++;
        stringReverseWriteIndex--;
    }
    std::cout<<stringReverseInPlaceText;

    return 0;
}