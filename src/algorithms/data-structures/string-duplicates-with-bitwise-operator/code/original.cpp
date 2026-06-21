#include<iostream>
using namespace std;
int main()
{
    char sourceText[]="Hellohedppd";
    int primaryValue=0;//assigning all bits as zero
    for(int scanIndex=0;sourceText[scanIndex]!='\0';scanIndex++)
    {
        int secondaryValue=1;//assigning 0 bit as 1 i.e turning is on
        secondaryValue=secondaryValue<<sourceText[scanIndex]-97;//turning on the bit for that particular char
        if(primaryValue&secondaryValue)
            cout<<"Dublicated letter "<<sourceText[scanIndex]<<endl;
        else
            primaryValue=primaryValue|secondaryValue;
    }
    return 0;
}