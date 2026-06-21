#include<iostream>
int main()
{
    char sourceText[]="Anurag";
    //method 1
    char reverseBuffer[10];
    int scanIndex,writeIndex;
    for(scanIndex=0;sourceText[scanIndex]!='\0';scanIndex++)
    {}
    scanIndex--;
    for(writeIndex=0;scanIndex>=0;writeIndex++,scanIndex--)
    {
        reverseBuffer[writeIndex]=sourceText[scanIndex];
    }
    reverseBuffer[writeIndex]='\0';
    for(scanIndex=0;reverseBuffer[scanIndex]!='\0';scanIndex++)
    {
        sourceText[scanIndex]=reverseBuffer[scanIndex];
    }
    std::cout<<sourceText<<std::endl;

    //Method 2
    char inPlaceText[]="Anurag";
    for(writeIndex=0;inPlaceText[writeIndex]!='\0';writeIndex++)
    {}
    writeIndex--;
    scanIndex=0;
    while(scanIndex<writeIndex)
    {
        char swapValue;
        swapValue=inPlaceText[scanIndex];
        inPlaceText[scanIndex]=inPlaceText[writeIndex];
        inPlaceText[writeIndex]=swapValue;
        scanIndex++;
        writeIndex--;
    }
    std::cout<<inPlaceText;

    return 0;
}