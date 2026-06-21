#include<iostream>
#include<stdlib.h>
using namespace std;
struct EssentialCRECTANGLE
{
    int essentialCTextLength;
    int essentialCState;
};
void fun1(struct EssentialCRECTANGLE essentialCState3)
{
    (essentialCState3.essentialCTextLength)++;
    (essentialCState3.essentialCState)++;
}
void fun2(struct EssentialCRECTANGLE &essentialCState3)
{
    (essentialCState3.essentialCTextLength)++;
    (essentialCState3.essentialCState)++;
}
void fun3(struct EssentialCRECTANGLE *essentialCState3)
{
    essentialCState3->essentialCTextLength++;
    essentialCState3->essentialCState++;
}
struct EssentialCRECTANGLE * fun4()
{
    struct EssentialCRECTANGLE *essentialCState4;
    essentialCState4=new EssentialCRECTANGLE;// or r2=(struct RECTANGLE *)malloc(sizeof(struct RECTANGLE));
    essentialCState4->essentialCTextLength=1;
    essentialCState4->essentialCState=2;
    return essentialCState4;

}
int main()
{
    struct EssentialCRECTANGLE essentialCRightIndex={10,5};
    cout<<"Before any call "<<essentialCRightIndex.essentialCTextLength<<"  "<<essentialCRightIndex.essentialCState<<endl;
    fun1(essentialCRightIndex);
    cout<<"After call by value "<<essentialCRightIndex.essentialCTextLength<<"  "<<essentialCRightIndex.essentialCState<<endl;
    fun2(essentialCRightIndex);
    cout<<"After call by referece "<<essentialCRightIndex.essentialCTextLength<<"  "<<essentialCRightIndex.essentialCState<<endl;
    fun3(&essentialCRightIndex);
    cout<<"After call by address "<<essentialCRightIndex.essentialCTextLength<<"  "<<essentialCRightIndex.essentialCState<<endl;

    // creating structure in heap memory and accesing them using function
    struct EssentialCRECTANGLE *essentialCState2=fun4();
    cout<<"After creating structure in heap memory "<<essentialCState2->essentialCTextLength<<" "<< essentialCState2->essentialCState<<endl;// -> is to access struct elements using pointer
    return 0;
}
