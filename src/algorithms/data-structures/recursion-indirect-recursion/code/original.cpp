#include<iostream>
using namespace std;
void fun2(int);
void fun1(int itemCount)
{
    if(itemCount>0)
    {
        cout<<itemCount<<" ";
        fun2(itemCount-1);
    }
    
}
void fun2(int itemCount)
{
    if(itemCount>0)
    {
        cout<<itemCount<<" ";
        fun1(itemCount/2);
    }
}
int main()
{
    fun1(10);
    return 0;
}