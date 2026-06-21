#include<iostream>
using namespace std;
void swap(char *stringPermutationC1,char *stringPermutationC2)
{
    char swapValue=*stringPermutationC1;
    *stringPermutationC1=*stringPermutationC2;
    *stringPermutationC2=swapValue;
}
void perm(char workingText[],int leftIndex,int stringPermutationH)
{
    if(leftIndex==stringPermutationH)
    {
        cout<<workingText<<endl;
    }
    else
    {
        for(int scanIndex=leftIndex;scanIndex<=stringPermutationH;scanIndex++)
        {
            swap(&workingText[scanIndex],&workingText[leftIndex]);
            perm(workingText,leftIndex+1,stringPermutationH);
            swap(&workingText[scanIndex],&workingText[leftIndex]);
        }
    }
}
int main()
{
    char workingText[]="ABC";
    perm(workingText,0,2);
}