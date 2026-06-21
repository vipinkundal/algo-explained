#include<iostream>
#include<stdio.h>
using namespace std;
int main()
{
    char stringDuplicatesA4[10]="Hesllsos";//method 1 using for loop
    for(int scanIndex=0;stringDuplicatesA4[scanIndex]!='\0';scanIndex++)
    {
    if(stringDuplicatesA4[scanIndex]!=-1)
    {
    int stringDuplicatesCount=1;
    for(int writeIndex=scanIndex+1;stringDuplicatesA4[writeIndex]!='\0';writeIndex++)
    {
        if(stringDuplicatesA4[scanIndex]==stringDuplicatesA4[writeIndex])
        {
            stringDuplicatesA4[writeIndex]=-1;
            stringDuplicatesCount++;
        }
    }
    if(stringDuplicatesCount>1)
    cout<<stringDuplicatesA4[scanIndex]<<" is duplicated "<<stringDuplicatesCount-1<<" times"<<endl;
    }
    }
    cout<<"\n\n\n\n";



    //method 2 using hash table i.e hashing
    char sourceText[]="helloehl";
    int primaryValue[26]={0},scanIndex;
    for(int scanIndex=0;sourceText[scanIndex]!='\0';scanIndex++)
        primaryValue[sourceText[scanIndex]-97]++;//writing program for lowercase word only

    for(int scanIndex=0;scanIndex<=25;scanIndex++)
    {
        if(primaryValue[scanIndex]>1)
        {
            char probeIndex=scanIndex+97;
            cout<<probeIndex<<" is repeated "<<primaryValue[scanIndex]-1<<" times"<<endl;
        }
    }





    return 0;}
