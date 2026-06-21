#include<iostream>
using namespace std;
void swap(char *stringPermutationState,char *stringPermutationState2)
{
    char stringPermutationSwapValue=*stringPermutationState;
    *stringPermutationState=*stringPermutationState2;
    *stringPermutationState2=stringPermutationSwapValue;
}
void perm(char stringPermutationWorkingText[],int stringPermutationLeftIndex,int stringPermutationState3)
{
    if(stringPermutationLeftIndex==stringPermutationState3)
    {
        cout<<stringPermutationWorkingText<<endl;
    }
    else
    {
        for(int stringPermutationScanIndex=stringPermutationLeftIndex;stringPermutationScanIndex<=stringPermutationState3;stringPermutationScanIndex++)
        {
            swap(&stringPermutationWorkingText[stringPermutationScanIndex],&stringPermutationWorkingText[stringPermutationLeftIndex]);
            perm(stringPermutationWorkingText,stringPermutationLeftIndex+1,stringPermutationState3);
            swap(&stringPermutationWorkingText[stringPermutationScanIndex],&stringPermutationWorkingText[stringPermutationLeftIndex]);
        }
    }
}
int main()
{
    char stringPermutationWorkingText[]="ABC";
    perm(stringPermutationWorkingText,0,2);
}