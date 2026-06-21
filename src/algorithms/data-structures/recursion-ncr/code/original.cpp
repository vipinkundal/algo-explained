#include<iostream>
int fact(int recursionNcrItemCount)
{
    if(recursionNcrItemCount<=1)
        return 1;
    else 
        return fact(recursionNcrItemCount-1)*recursionNcrItemCount;
}
int ncr(int recursionNcrItemCount,int recursionNcrRightIndex)//ncr combination using factorial function
{
    int recursionNcrState=fact(recursionNcrItemCount);
    int recursionNcrState2=fact(recursionNcrRightIndex)*fact(recursionNcrItemCount-recursionNcrRightIndex);
    return recursionNcrState/recursionNcrState2;
}

int pncr(int recursionNcrItemCount,int recursionNcrRightIndex)//using pascal triangle
{
    if((recursionNcrItemCount==1) || (recursionNcrItemCount==recursionNcrRightIndex))
        return 1;
    return pncr(recursionNcrItemCount-1,recursionNcrRightIndex-1)+pncr(recursionNcrItemCount-1,recursionNcrRightIndex);
}
int main()
{
    std::cout<<ncr(3,2)<<std::endl;
    std::cout<<pncr(3,2);
    return 0;
}