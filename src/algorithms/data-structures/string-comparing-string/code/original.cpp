#include<iostream>
int main()
{
    //comparing two strings
    char firstItems[]="Painter";
    char secondItems[]="painter";
    int scanIndex,writeIndex;
    for(scanIndex=0,writeIndex=0;firstItems[scanIndex]!='\0',secondItems[writeIndex]!='\0';writeIndex++,scanIndex++)//checking condition if string ends
    {
        if(firstItems[scanIndex]>=65 && firstItems[scanIndex]<=90)//checking if its uppercase then converting to lower case 
            firstItems[scanIndex]=firstItems[scanIndex]+32;
        else if(secondItems[scanIndex]>=65 && secondItems[scanIndex]<=90)//checking if its uppercase then converting to lower case 
            secondItems[scanIndex]=secondItems[scanIndex]+32;
        if(firstItems[scanIndex]!=secondItems[writeIndex])//checking if they are not equal
            break;
    }
    if(firstItems[scanIndex]==secondItems[writeIndex])
        std::cout<<"both are equal"<<std::endl;
    else if(firstItems[scanIndex]>secondItems[writeIndex])
        std::cout<<"A is greater"<<std::endl;
    else
        std::cout<<"B is greater"<<std::endl;


    //checking if Palindrone

    char sourceText[]="madami";
    //method 1
    char reverseBuffer[10];//helper string/array
    for(scanIndex=0;sourceText[scanIndex]!='\0';scanIndex++)//incrementing i value till it reacher the last index
    {}
    scanIndex--;
    for(writeIndex=0;scanIndex>=0;writeIndex++,scanIndex--)//copying reverse of word in helper
    {
        reverseBuffer[writeIndex]=sourceText[scanIndex];
    }
    reverseBuffer[writeIndex]='\0';//assigining last value with null term
    for(scanIndex=0;reverseBuffer[scanIndex]!='\0';scanIndex++)
    {
        if(sourceText[scanIndex]!=reverseBuffer[scanIndex])//if not equal break out of loop
            break;
    }
    if(sourceText[scanIndex]=='\0')//checking if it reached last till last null term
        std::cout<<"String is pallindrone"<<std::endl;
    else
        std::cout<<"string is not palindrone"<<std::endl;

    //Method 2
    char inPlaceText[]="MADoM";
    for(writeIndex=0;inPlaceText[writeIndex]!='\0';writeIndex++)
    {}
    writeIndex--;
    scanIndex=0;
    while(scanIndex<writeIndex)
    {
        if(inPlaceText[scanIndex]!=inPlaceText[writeIndex])//if not equal break out of loop
            break;
        scanIndex++;
        writeIndex--;
    }
    if(inPlaceText[scanIndex]==inPlaceText[writeIndex])//checking if they are equal
        std::cout<<"String is pallindrone"<<std::endl;
    else
        std::cout<<"string is not palindrone"<<std::endl;
}