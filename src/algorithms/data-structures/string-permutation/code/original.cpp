#include<iostream>
#include<stdio.h>
using namespace std;
void perm(char workingText[],int probeIndex)
{
    static int firstItems[10]={0};
    static char resultText[10];
    int scanIndex;
    if(workingText[probeIndex]=='\0')
    {
        resultText[probeIndex]='\0';
        cout<<resultText<<endl;
    }
    else
    {
        for(int scanIndex=0;workingText[scanIndex]!='\0';scanIndex++)
        {
            if(firstItems[scanIndex]==0)
            {
                resultText[probeIndex]=workingText[scanIndex];
                firstItems[scanIndex]=1;
                perm(workingText,probeIndex+1);
                firstItems[scanIndex]=0;
            }
        }
    }
}
int main()
{
    char workingText[]="ABC";
    perm(workingText,0);
    return 0;}