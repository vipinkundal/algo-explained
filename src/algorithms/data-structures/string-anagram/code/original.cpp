#include<iostream>
using namespace std;
int main()
{
    //Anagram using method 1 i.e for loop
    char stringAnagramState[]="elbow";
    char stringAnagramInPlaceText[]="below";
    int stringAnagramScanIndex,stringAnagramWriteIndex;
    for(stringAnagramScanIndex=0;stringAnagramState[stringAnagramScanIndex]!='\0';stringAnagramScanIndex++)
    {
        for(stringAnagramWriteIndex=0;stringAnagramInPlaceText[stringAnagramWriteIndex]!='\0';stringAnagramWriteIndex++)
        {
            if(stringAnagramState[stringAnagramScanIndex]==stringAnagramInPlaceText[stringAnagramWriteIndex])
                break;
        }
        if(stringAnagramInPlaceText[stringAnagramWriteIndex]=='\0')
            break;
    }
    if(stringAnagramState[stringAnagramScanIndex]=='\0')
    cout<<"Its an anagram "<<endl;
    else
    cout<<"Its not an angram"<<endl;

    //Anagram using method 2 using hasing

    char stringAnagramState2[]="cat";
    char stringAnagramState3[]="tac";

    int stringAnagramState6[25]={0};
    for(stringAnagramScanIndex=0;stringAnagramState2[stringAnagramScanIndex]!='\0';stringAnagramScanIndex++)
        stringAnagramState6[stringAnagramState2[stringAnagramScanIndex]-97]++;

    for(stringAnagramScanIndex=0;stringAnagramState3[stringAnagramScanIndex]!='\0';stringAnagramScanIndex++)
    {    if((stringAnagramState6[stringAnagramState3[stringAnagramScanIndex]-97]-1)<0)
        {
            cout<<"Its not a anagram"<<endl;
            break;
        }
    }
    if(stringAnagramState3[stringAnagramScanIndex]=='\0')
    cout<<"Its an anagram"<<endl;

    //method 3 using betwise operator 

    char stringAnagramState4[]="tac";
    char stringAnagramState5[]="cat";
    int stringAnagramPrimaryValue=0;
    for(stringAnagramScanIndex=0;stringAnagramState4[stringAnagramScanIndex]!='\0';stringAnagramScanIndex++)//assigning word6 character as per bit
    {
        int stringAnagramSecondaryValue=1;//assigning 0 bit as 1 i.e turning is on
        stringAnagramSecondaryValue=stringAnagramSecondaryValue<<stringAnagramState4[stringAnagramScanIndex]-97;//turning on the bit for that particular char
        if(stringAnagramPrimaryValue&stringAnagramSecondaryValue)
            continue;
        else
            stringAnagramPrimaryValue=stringAnagramPrimaryValue|stringAnagramSecondaryValue;
    }
    for(stringAnagramScanIndex=0;stringAnagramState5[stringAnagramScanIndex]!='\0';stringAnagramScanIndex++)
    {
        int stringAnagramSecondaryValue=1;//assigning 0 bit as 1 i.e turning is on
        stringAnagramSecondaryValue=stringAnagramSecondaryValue<<stringAnagramState5[stringAnagramScanIndex]-97;//turning on the bit for that particular char
        if(stringAnagramPrimaryValue&stringAnagramSecondaryValue)
            continue;
        else
        {
            cout<<"Its not a anagram"<<endl;
            break;
        }
    }
    if(stringAnagramState5[stringAnagramScanIndex]=='\0')
    cout<<"Its an anagram";
    return 0;
}