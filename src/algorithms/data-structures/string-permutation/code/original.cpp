#include<iostream>
#include<stdio.h>
using namespace std;
void perm(char stringPermutationWorkingText[],int stringPermutationProbeIndex)
{
    static int stringPermutationFirstItems[10]={0};
    static char stringPermutationResultText[10];
    int stringPermutationScanIndex;
    if(stringPermutationWorkingText[stringPermutationProbeIndex]=='\0')
    {
        stringPermutationResultText[stringPermutationProbeIndex]='\0';
        cout<<stringPermutationResultText<<endl;
    }
    else
    {
        for(int stringPermutationScanIndex=0;stringPermutationWorkingText[stringPermutationScanIndex]!='\0';stringPermutationScanIndex++)
        {
            if(stringPermutationFirstItems[stringPermutationScanIndex]==0)
            {
                stringPermutationResultText[stringPermutationProbeIndex]=stringPermutationWorkingText[stringPermutationScanIndex];
                stringPermutationFirstItems[stringPermutationScanIndex]=1;
                perm(stringPermutationWorkingText,stringPermutationProbeIndex+1);
                stringPermutationFirstItems[stringPermutationScanIndex]=0;
            }
        }
    }
}
int main()
{
    char stringPermutationWorkingText[]="ABC";
    perm(stringPermutationWorkingText,0);
    return 0;}