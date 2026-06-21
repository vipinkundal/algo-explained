#include<iostream>
using namespace std;
void fun(int recursionTreeItemCount)
{
    if(recursionTreeItemCount>0)
    {
        cout<<recursionTreeItemCount<<" ";
        fun(recursionTreeItemCount-1);
        fun(recursionTreeItemCount-1); 
    }
      
}
int main()
{
    fun(3);
    return 0;
}