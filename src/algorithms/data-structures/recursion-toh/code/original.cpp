#include<iostream>
void TOH(int recursionTohItemCount,int recursionTohFirstItems,int recursionTohSecondItems,int recursionTohThirdItems)
{
    if(recursionTohItemCount>0)
    {
    TOH(recursionTohItemCount-1,recursionTohFirstItems,recursionTohThirdItems,recursionTohSecondItems);
    std::cout<<"Moving from "<<recursionTohFirstItems<<" to "<<recursionTohThirdItems<<std::endl<<std::endl;
    TOH(recursionTohItemCount-1,recursionTohSecondItems,recursionTohFirstItems,recursionTohThirdItems);
    }
}
void TOH1(int recursionTohItemCount,int recursionTohFirstItems,int recursionTohSecondItems,int recursionTohThirdItems,int recursionTohSpareItems)//for four towes
{
    if(recursionTohItemCount>0)
    {
    TOH1(recursionTohItemCount-1,recursionTohFirstItems,recursionTohSecondItems,recursionTohSpareItems,recursionTohThirdItems);
    std::cout<<"("<<recursionTohFirstItems<<","<<recursionTohSpareItems<<")"<<std::endl;
    TOH1(recursionTohItemCount-1,recursionTohThirdItems,recursionTohFirstItems,recursionTohSecondItems,recursionTohSpareItems); 
    }
}

int main()
{
    TOH(3,1,2,3);
    TOH1(5,1,2,3,4);
    return 0;
}