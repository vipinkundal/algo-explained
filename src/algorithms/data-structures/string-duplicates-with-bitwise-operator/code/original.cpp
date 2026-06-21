#include<iostream>
using namespace std;
int main()
{
    char stringDuplicatesSourceText[]="Hellohedppd";
    int stringDuplicatesPrimaryValue=0;//assigning all bits as zero
    for(int stringDuplicatesScanIndex=0;stringDuplicatesSourceText[stringDuplicatesScanIndex]!='\0';stringDuplicatesScanIndex++)
    {
        int stringDuplicatesSecondaryValue=1;//assigning 0 bit as 1 i.e turning is on
        stringDuplicatesSecondaryValue=stringDuplicatesSecondaryValue<<stringDuplicatesSourceText[stringDuplicatesScanIndex]-97;//turning on the bit for that particular char
        if(stringDuplicatesPrimaryValue&stringDuplicatesSecondaryValue)
            cout<<"Dublicated letter "<<stringDuplicatesSourceText[stringDuplicatesScanIndex]<<endl;
        else
            stringDuplicatesPrimaryValue=stringDuplicatesPrimaryValue|stringDuplicatesSecondaryValue;
    }
    return 0;
}