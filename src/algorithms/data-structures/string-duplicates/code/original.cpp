#include<iostream>
#include<stdio.h>
using namespace std;
int main()
{
    char stringDuplicatesState2[10]="Hesllsos";//method 1 using for loop
    for(int stringDuplicatesScanIndex=0;stringDuplicatesState2[stringDuplicatesScanIndex]!='\0';stringDuplicatesScanIndex++)
    {
    if(stringDuplicatesState2[stringDuplicatesScanIndex]!=-1)
    {
    int stringDuplicatesState=1;
    for(int stringDuplicatesWriteIndex=stringDuplicatesScanIndex+1;stringDuplicatesState2[stringDuplicatesWriteIndex]!='\0';stringDuplicatesWriteIndex++)
    {
        if(stringDuplicatesState2[stringDuplicatesScanIndex]==stringDuplicatesState2[stringDuplicatesWriteIndex])
        {
            stringDuplicatesState2[stringDuplicatesWriteIndex]=-1;
            stringDuplicatesState++;
        }
    }
    if(stringDuplicatesState>1)
    cout<<stringDuplicatesState2[stringDuplicatesScanIndex]<<" is duplicated "<<stringDuplicatesState-1<<" times"<<endl;
    }
    }
    cout<<"\n\n\n\n";



    //method 2 using hash table i.e hashing
    char stringDuplicatesSourceText[]="helloehl";
    int stringDuplicatesPrimaryValue[26]={0},stringDuplicatesScanIndex;
    for(int stringDuplicatesScanIndex=0;stringDuplicatesSourceText[stringDuplicatesScanIndex]!='\0';stringDuplicatesScanIndex++)
        stringDuplicatesPrimaryValue[stringDuplicatesSourceText[stringDuplicatesScanIndex]-97]++;//writing program for lowercase word only

    for(int stringDuplicatesScanIndex=0;stringDuplicatesScanIndex<=25;stringDuplicatesScanIndex++)
    {
        if(stringDuplicatesPrimaryValue[stringDuplicatesScanIndex]>1)
        {
            char stringDuplicatesProbeIndex=stringDuplicatesScanIndex+97;
            cout<<stringDuplicatesProbeIndex<<" is repeated "<<stringDuplicatesPrimaryValue[stringDuplicatesScanIndex]-1<<" times"<<endl;
        }
    }





    return 0;}
