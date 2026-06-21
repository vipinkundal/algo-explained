#include<iostream>
using namespace std;
int main()
{
    //Anagram using method 1 i.e for loop
    char stringAnagramWord1[]="elbow";
    char inPlaceText[]="below";
    int scanIndex,writeIndex;
    for(scanIndex=0;stringAnagramWord1[scanIndex]!='\0';scanIndex++)
    {
        for(writeIndex=0;inPlaceText[writeIndex]!='\0';writeIndex++)
        {
            if(stringAnagramWord1[scanIndex]==inPlaceText[writeIndex])
                break;
        }
        if(inPlaceText[writeIndex]=='\0')
            break;
    }
    if(stringAnagramWord1[scanIndex]=='\0')
    cout<<"Its an anagram "<<endl;
    else
    cout<<"Its not an angram"<<endl;

    //Anagram using method 2 using hasing

    char stringAnagramWord3[]="cat";
    char stringAnagramWord4[]="tac";

    int stringAnagramH[25]={0};
    for(scanIndex=0;stringAnagramWord3[scanIndex]!='\0';scanIndex++)
        stringAnagramH[stringAnagramWord3[scanIndex]-97]++;

    for(scanIndex=0;stringAnagramWord4[scanIndex]!='\0';scanIndex++)
    {    if((stringAnagramH[stringAnagramWord4[scanIndex]-97]-1)<0)
        {
            cout<<"Its not a anagram"<<endl;
            break;
        }
    }
    if(stringAnagramWord4[scanIndex]=='\0')
    cout<<"Its an anagram"<<endl;

    //method 3 using betwise operator 

    char stringAnagramWord5[]="tac";
    char stringAnagramWord6[]="cat";
    int primaryValue=0;
    for(scanIndex=0;stringAnagramWord5[scanIndex]!='\0';scanIndex++)//assigning word6 character as per bit
    {
        int secondaryValue=1;//assigning 0 bit as 1 i.e turning is on
        secondaryValue=secondaryValue<<stringAnagramWord5[scanIndex]-97;//turning on the bit for that particular char
        if(primaryValue&secondaryValue)
            continue;
        else
            primaryValue=primaryValue|secondaryValue;
    }
    for(scanIndex=0;stringAnagramWord6[scanIndex]!='\0';scanIndex++)
    {
        int secondaryValue=1;//assigning 0 bit as 1 i.e turning is on
        secondaryValue=secondaryValue<<stringAnagramWord6[scanIndex]-97;//turning on the bit for that particular char
        if(primaryValue&secondaryValue)
            continue;
        else
        {
            cout<<"Its not a anagram"<<endl;
            break;
        }
    }
    if(stringAnagramWord6[scanIndex]=='\0')
    cout<<"Its an anagram";
    return 0;
}