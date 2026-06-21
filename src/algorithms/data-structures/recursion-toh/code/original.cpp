#include<iostream>
void TOH(int itemCount,int firstItems,int secondItems,int thirdItems)
{
    if(itemCount>0)
    {
    TOH(itemCount-1,firstItems,thirdItems,secondItems);
    std::cout<<"Moving from "<<firstItems<<" to "<<thirdItems<<std::endl<<std::endl;
    TOH(itemCount-1,secondItems,firstItems,thirdItems);
    }
}
void TOH1(int itemCount,int firstItems,int secondItems,int thirdItems,int spareItems)//for four towes
{
    if(itemCount>0)
    {
    TOH1(itemCount-1,firstItems,secondItems,spareItems,thirdItems);
    std::cout<<"("<<firstItems<<","<<spareItems<<")"<<std::endl;
    TOH1(itemCount-1,thirdItems,firstItems,secondItems,spareItems); 
    }
}

int main()
{
    TOH(3,1,2,3);
    TOH1(5,1,2,3,4);
    return 0;
}