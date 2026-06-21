#include<iostream>

float e1(float inputValue,int itemCount)//using loop
{
    float workingText=1;
    for(;itemCount>0;itemCount--)
    {
        workingText=1+inputValue/itemCount*workingText;
    }
    return workingText;
}

float e(float inputValue,int itemCount)//using recursion
{
    static float workingText=1;
    if(itemCount==0)
        return workingText;
    workingText=1+inputValue/itemCount*workingText;
    return e(inputValue,itemCount-1);
}
int main()
{
    std::cout<<e(1,10)<<std::endl;
    std::cout<<e(1,10);
    return  0;
}