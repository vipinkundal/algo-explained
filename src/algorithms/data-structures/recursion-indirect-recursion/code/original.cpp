#include<iostream>
using namespace std;
void fun2(int);
void fun1(int recursionIndirectItemCount)
{
    if(recursionIndirectItemCount>0)
    {
        cout<<recursionIndirectItemCount<<" ";
        fun2(recursionIndirectItemCount-1);
    }
    
}
void fun2(int recursionIndirectItemCount)
{
    if(recursionIndirectItemCount>0)
    {
        cout<<recursionIndirectItemCount<<" ";
        fun1(recursionIndirectItemCount/2);
    }
}
int main()
{
    fun1(10);
    return 0;
}