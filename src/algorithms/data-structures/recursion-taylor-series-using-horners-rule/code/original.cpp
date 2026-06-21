#include<iostream>

float e1(float recursionTaylorInputValue,int recursionTaylorItemCount)//using loop
{
    float recursionTaylorWorkingText=1;
    for(;recursionTaylorItemCount>0;recursionTaylorItemCount--)
    {
        recursionTaylorWorkingText=1+recursionTaylorInputValue/recursionTaylorItemCount*recursionTaylorWorkingText;
    }
    return recursionTaylorWorkingText;
}

float e(float recursionTaylorInputValue,int recursionTaylorItemCount)//using recursion
{
    static float recursionTaylorWorkingText=1;
    if(recursionTaylorItemCount==0)
        return recursionTaylorWorkingText;
    recursionTaylorWorkingText=1+recursionTaylorInputValue/recursionTaylorItemCount*recursionTaylorWorkingText;
    return e(recursionTaylorInputValue,recursionTaylorItemCount-1);
}
int main()
{
    std::cout<<e(1,10)<<std::endl;
    std::cout<<e(1,10);
    return  0;
}