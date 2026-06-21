#include<iostream>
using namespace std;
void fun(int itemCount)
{
    if(itemCount>0)
    {
        cout<<itemCount<<" ";
        fun(itemCount-1);
        fun(itemCount-1); 
    }
      
}
int main()
{
    fun(3);
    return 0;
}