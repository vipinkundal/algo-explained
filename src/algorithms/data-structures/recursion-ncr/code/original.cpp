#include<iostream>
int fact(int itemCount)
{
    if(itemCount<=1)
        return 1;
    else 
        return fact(itemCount-1)*itemCount;
}
int ncr(int itemCount,int rightIndex)//ncr combination using factorial function
{
    int recursionNcrNum=fact(itemCount);
    int recursionNcrDen=fact(rightIndex)*fact(itemCount-rightIndex);
    return recursionNcrNum/recursionNcrDen;
}

int pncr(int itemCount,int rightIndex)//using pascal triangle
{
    if((itemCount==1) || (itemCount==rightIndex))
        return 1;
    return pncr(itemCount-1,rightIndex-1)+pncr(itemCount-1,rightIndex);
}
int main()
{
    std::cout<<ncr(3,2)<<std::endl;
    std::cout<<pncr(3,2);
    return 0;
}